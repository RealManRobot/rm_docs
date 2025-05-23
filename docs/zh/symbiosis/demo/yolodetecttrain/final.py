# -*- coding: utf-8 -*-

import os
import numpy as np
import json
from glob import glob
import cv2
import shutil
import yaml
from sklearn.model_selection import train_test_split
from tqdm import tqdm
from PIL import Image


'''
统一图像格式
'''
def change_image_format(label_path, suffix='.png'):
    """
    统一当前文件夹下所有图像的格式，如'.jpg'
    :param suffix: 图像文件后缀
    :param label_path:当前文件路径
    :return:
    """
    externs = ['png', 'jpg', 'JPEG', 'BMP', 'bmp']
    files = list()
    # 获取尾缀在ecterns中的所有图像
    for extern in externs:
        files.extend(glob(label_path + "\\*." + extern))
    # 遍历所有图像，转换图像格式
    for index,file in enumerate(tqdm(files)):
        name = ''.join(file.split('.')[:-1])
        file_suffix = file.split('.')[-1]
        if file_suffix != suffix.split('.')[-1]:
            # 重命名为jpg
            new_name = name + suffix
            # 读取图像
            image = Image.open(file)
            image = cv2.cvtColor(np.asarray(image), cv2.COLOR_RGB2BGR)
            # 重新存图为jpg格式
            cv2.imwrite(new_name, image)
            # 删除旧图像
            os.remove(file)



'''
读取所有json文件，获取所有的类别
'''
def get_all_class(file_list, label_path):
    """
    从json文件中获取当前数据的所有类别
    :param file_list:当前路径下的所有文件名
    :param label_path:当前文件路径
    :return:
    """
    # 初始化类别列表
    classes = list()
    # 遍历所有json,读取shape中的label值内容，添加到classes
    for filename in tqdm(file_list):
        json_path = os.path.join(label_path, filename + '.json')
        json_file = json.load(open(json_path, "r", encoding="utf-8"))
        for item in json_file["shapes"]:
            label_class = item['label']
            if label_class not in classes:
                classes.append(label_class)
    print('read file done')
    return classes



'''
划分训练集、验证机、测试集
'''
def split_dataset(label_path, test_size=0.3, isUseTest=False, useNumpyShuffle=False):
    """
    将文件分为训练集，测试集和验证集
    :param useNumpyShuffle: 使用numpy方法分割数据集
    :param test_size: 分割测试集或验证集的比例
    :param isUseTest: 是否使用测试集，默认为False
    :param label_path:当前文件路径
    :return:
    """
    # 获取所有json
    files = glob(label_path + "\\*.json")
    #获取所有json文件的名字
    files = [i.replace("\\", "/").split("/")[-1].split(".json")[0] for i in files]

    if useNumpyShuffle:
        file_length = len(files)
        index = np.arange(file_length)
        np.random.seed(32)
        np.random.shuffle(index) # 随机划分

        test_files = None
        # 是否有测试集
        if isUseTest:
            trainval_files, test_files = np.array(files)[index[:int(file_length * (1 - test_size))]], np.array(files)[
                index[int(file_length * (1 - test_size)):]]
        else:
            trainval_files = files
        # 划分训练集和测试集
        train_files, val_files = np.array(trainval_files)[index[:int(len(trainval_files) * (1 - test_size))]], \
                                 np.array(trainval_files)[index[int(len(trainval_files) * (1 - test_size)):]]
    else:
        test_files = None
        if isUseTest:
            trainval_files, test_files = train_test_split(files, test_size=test_size, random_state=55)
        else:
            trainval_files = files

        #将json文件名（不带后缀名）按照1-test_size/test_size 随机分配
        train_files, val_files = train_test_split(trainval_files, test_size=test_size, random_state=55)

    return train_files, val_files, test_files, files


'''
生成yolov8的训练、验证、测试集的文件夹
'''
def create_save_file(ROOT_DIR,isUseTest = False):
    print('step6:生成yolov8的训练、验证、测试集的文件夹')

    # 生成训练集
    train_image = os.path.join(ROOT_DIR, 'images','train')
    if not os.path.exists(train_image):
        os.makedirs(train_image)
    train_label = os.path.join(ROOT_DIR, 'labels','train')
    if not os.path.exists(train_label):
        os.makedirs(train_label)
    # 生成验证集
    val_image = os.path.join(ROOT_DIR, 'images', 'val')
    if not os.path.exists(val_image):
        os.makedirs(val_image)
    val_label = os.path.join(ROOT_DIR, 'labels', 'val')
    if not os.path.exists(val_label):
        os.makedirs(val_label)
    # 生成测试集
    if isUseTest:
        test_image = os.path.join(ROOT_DIR, 'images', 'test')
        if not os.path.exists(test_image):
            os.makedirs(test_image)
        test_label = os.path.join(ROOT_DIR, 'labels', 'test')
        if not os.path.exists(test_label):
            os.makedirs(test_label)
    else:
        test_image, test_label = None,None

    return train_image, train_label, val_image, val_label, test_image, test_label


'''
转换，根据图像大小，返回box框的中点和高宽信息
'''

def convert(img_size, box):

    dw = 1. / (img_size[0])
    dh = 1. / (img_size[1])
    x = (box[0] + box[2]) / 2.0 - 1
    y = (box[1] + box[3]) / 2.0 - 1
    w = box[2] - box[0]
    h = box[3] - box[1]
    x = x * dw
    w = w * dw
    y = y * dh
    h = h * dh

    return (x, y, w, h)



'''
移动图像和标注文件到指定的训练集、验证集和测试集中
'''
def push_into_file(file, images, labels, ROOT_DIR, suffix='.jpg'):
    """
    最终生成在当前文件夹下的所有文件按image和label分别存在到训练集/验证集/测试集路径的文件夹下
    :param file: 文件名列表
    :param images: 存放images的路径
    :param labels: 存放labels的路径
    :param label_path: 当前文件路径
    :param suffix: 图像文件后缀
    :return:
    """
    # 遍历所有文件
    for filename in tqdm(file):
        # 图像文件
        image_file = os.path.join(ROOT_DIR, filename + suffix)
        # 标注文件
        label_file = os.path.join(ROOT_DIR, filename + '.txt')
        # yolov8存放图像文件夹
        if not os.path.exists(os.path.join(images, filename + suffix)):
            try:
                shutil.copy(image_file, images)
            except OSError:
                pass
        # yolov8存放标注文件夹
        if not os.path.exists(os.path.join(labels, filename + suffix)):
            try:
                shutil.move(label_file, labels)
            except OSError:
                pass


def json2txt(classes, ROOT_DIR=""):
    """
    将json文件转化为txt文件
    :param classes: 类别名
    :param label_path:当前文件路径
    :return:
    """

    #file里面是所有json文件名
    _, _, _, files = split_dataset(ROOT_DIR)

    for json_file_ in tqdm(files):
        # json路径
        json_filename = os.path.join(ROOT_DIR, json_file_ + ".json")
        # 转换后txt标签文件夹路径
        out_file = open('%s/%s.txt' % (ROOT_DIR, json_file_), 'w')
        # 加载标签json文件
        json_file = json.load(open(json_filename, "r", encoding="utf-8"))

        img_w = json_file['imageWidth']
        img_h = json_file['imageHeight']

        '''
        核心：标签转换（json转txt）
        '''
        for multi in json_file["shapes"]:

            if (multi['shape_type'] == 'rectangle'):
                x1 = int(multi['points'][0][0])
                y1 = int(multi['points'][0][1])
                x2 = int(multi['points'][1][0])
                y2 = int(multi['points'][1][1])

                label = multi["label"]

                cls_id = classes.index(label)
                bb = (x1, y1, x2, y2)

                bb = convert((img_w, img_h), bb)
                out_file.write(str(cls_id) + " " + " ".join([str(a) for a in bb]) + '\n')


'''
创建yaml文件
'''
def create_yaml(classes, ROOT_DIR, isUseTest=False,dataYamlName=""):
    print('step5:创建yolov8训练所需的yaml文件')
    ROOT_DIR = os.path.abspath(ROOT_DIR)
    classes_dict = {}

    for index, item in enumerate(classes):
        classes_dict[index] = item

    if not isUseTest:
        desired_caps = {
            'path': ROOT_DIR,
            'train': 'images/train',
            'val': 'images/val',
            'names': classes_dict
        }
    else:
        desired_caps = {
            'path': ROOT_DIR,
            'train': 'images/train',
            'val': 'images/val',
            'test': 'images/test',
            'names': classes_dict
        }
    yamlpath = os.path.join(ROOT_DIR, dataYamlName + ".yaml")

    # 写入到yaml文件
    with open(yamlpath, "w+", encoding="gbk") as f:
        for key, val in desired_caps.items():
            yaml.dump({key: val}, f, default_flow_style=False)


# 首先确保当前文件夹下的所有图片统一后缀，如.jpg，如果为其他后缀，将suffix改为对应的后缀，如.png
def ChangeToYoloDet(ROOT_DIR="", suffix='.bmp',classes="", test_size=0.1, isUseTest=False,useNumpyShuffle=False,auto_genClasses = False,dataYamlName=""):
    """
    生成最终标准格式的文件
    :param test_size: 分割测试集或验证集的比例
    :param label_path:当前文件路径
    :param suffix: 文件后缀名
    :param isUseTest: 是否使用测试集
    :return:
    """
    # step1:统一图像格式
    change_image_format(ROOT_DIR,suffix)
    # step2:根据json文件划分训练集、验证集、测试集
    train_files, val_files, test_file, files = split_dataset(ROOT_DIR, test_size=test_size, isUseTest=isUseTest)
    # step3:根据json文件，获取所有类别
    classes = classes
    # 是否自动从数据集中获取类别数
    if auto_genClasses:
        classes = get_all_class(files, ROOT_DIR)
    '''
    step4:（***核心***）将json文件转化为txt文件，并将json文件存放到指定文件夹
    '''
    json2txt(classes, ROOT_DIR=ROOT_DIR)
    # step5:创建yolov8训练所需的yaml文件
    create_yaml(classes, ROOT_DIR, isUseTest=isUseTest,dataYamlName=dataYamlName)
    # step6:生成yolov8的训练、验证、测试集的文件夹
    train_image_dir, train_label_dir, val_image_dir, val_label_dir, test_image_dir, test_label_dir = create_save_file(ROOT_DIR,isUseTest)
    # step7:将所有图像和标注文件，移动到对应的训练集、验证集、测试集
    # 将文件移动到训练集文件中
    push_into_file(train_files, train_image_dir, train_label_dir,ROOT_DIR=ROOT_DIR, suffix=suffix)
    # 将文件移动到验证集文件夹中
    push_into_file(val_files, val_image_dir, val_label_dir,ROOT_DIR=ROOT_DIR,  suffix=suffix)
    # 如果测试集存在，则将文件移动到测试集文件中
    if test_file is not None:
        push_into_file(test_file, test_image_dir, test_label_dir, ROOT_DIR=ROOT_DIR, suffix=suffix)

    print('create dataset done')


if __name__ == "__main__":
    '''
    1.ROOT_DIR:图像和json标签的路径
    2.suffix：统一图像尾缀
    3.classes=['dog', 'cat'],  # 输入你标注的列表里的名称（注意区分大小写）,用于自定义类别名称和id对应
    4.test_size：测试集和验证集所占比例
    5.isUseTest：是否启用测试集
    6.useNumpyShuffle：是否随机打乱
    7.auto_genClasses：是否自动根据json标签生成类别列表
    8.dataYamlName：数据集yaml文件名称
    '''

    ChangeToYoloDet(
        ROOT_DIR = r'images2', # 注意数据集路径不要含中文
        suffix='.png',  # 确定图像尾缀，用于统一图像尾缀
        classes=[],  # 输入你标注的列表里的名称（注意区分大小写）
        test_size=0.3,  # 测试集大小占比
        isUseTest=False,  # 是否启用测试集
        useNumpyShuffle=False,   # 是否乱序
        auto_genClasses = True,  # 是否根据数据集自动生成类别id
        dataYamlName= "bottle_data" # 数据集yaml文件名称
    )

