"""
将labelme生成的json转成yolo需要的txt标记文件
"""

import json
import os
import shutil

name2id = {'bottle': 0}  # 具体自己数据集类别


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


def decode_json(json_floder_path, json_name):

    # 转换好txt的标签路径
    txt_name = f'{json_floder_path}\\' + json_name[0:-5] + '.txt'
    print(txt_name)


    txt_file = open(txt_name, 'w')

    json_path = os.path.join(json_floder_path, json_name)
    data = json.load(open(json_path, 'r', encoding='gb2312'))

    img_w = data['imageWidth']
    img_h = data['imageHeight']

    for i in data['shapes']:

        label_name = i['label']

        if (i['shape_type'] == 'rectangle'):

            x1 = int(i['points'][0][0])
            y1 = int(i['points'][0][1])
            x2 = int(i['points'][1][0])
            y2 = int(i['points'][1][1])

            bb = (x1, y1, x2, y2)
            bbox = convert((img_w, img_h), bb)
            txt_file.write(str(name2id[label_name]) + " " + " ".join([str(a) for a in bbox]) + '\n')


def copy_txt_files(src_dir, dst_dir,dst_dir2):
    """

    Args:
        src_dir:
        dst_dir:
        dst_dir2:

    Returns:

    """
    # 确保目标目录存在，如果不存在则创建
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)

        # 遍历源目录下的所有文件和文件夹
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            # 检查文件是否是.txt文件
            if file.endswith('.txt'):
                # 构建源文件的完整路径
                src_file = os.path.join(root, file)
                scr_image_file = os.path.join(root, file[0:-4] + '.png')
                # 构建目标文件的完整路径
                dst_file = os.path.join(dst_dir, file)
                dst_file2 = os.path.join(dst_dir2, file[0:-4] + '.png')

                # 复制文件
                shutil.copy2(src_file, dst_file)  # 使用copy2可以保留文件的元数据
                shutil.copy2(scr_image_file, dst_file2)  # 使用copy2可以保留文件的元数据

                print(f'Copied {src_file} to {dst_file}')

if __name__ == "__main__":

    # # 原始json标签路径
    json_floder_path = r'D:\HuaweiMoveData\Users\z9574\Desktop\data\labels'

    json_names = os.listdir(json_floder_path)
    for json_name in json_names:
        if json_name.endswith('json'):
            print(json_name)
            decode_json(json_floder_path, json_name)






