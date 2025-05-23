import os
import cv2
import json
import glob
import numpy as np




def convert_txt_to_labelme_json(txt_path, image_path, output_dir, image_fmt='.png'):
    # txt 转labelme json
    # 将yolo的txt转labelme json
    txts = glob.glob(os.path.join(txt_path, "*.txt"))
    for txt in txts:
        labelme_json = {
            'version': '5.5.0',
            'flags': {},
            'shapes': [],
            'imagePath': None,
            'imageData': None,
            'imageHeight': None,
            'imageWidth': None,
        }
        txt_name = os.path.basename(txt)
        image_name = txt_name.split(".")[0] + image_fmt
        labelme_json['imagePath'] = image_name
        image_name = os.path.join(image_path, image_name)
        if not os.path.exists(image_name):
            raise Exception('txt 文件={},找不到对应的图像={}'.format(txt, image_name))
        image = cv2.imdecode(np.fromfile(image_name, dtype=np.uint8), cv2.IMREAD_COLOR)
        h, w = image.shape[:2]
        labelme_json['imageHeight'] = h
        labelme_json['imageWidth'] = w
        with open(txt, 'r') as t:
            lines = t.readlines()
            for line in lines:
                content = line.split(' ')
                label = content[0]
                object_width = float(content[3])
                object_height = float(content[4])
                top_left_x = (float(content[1]) - object_width / 2) * w
                top_left_y = (float(content[2]) - object_height / 2) * h
                bottom_right_x = (float(content[1]) + object_width / 2) * w
                bottom_right_y = (float(content[2]) + object_height / 2) * h
                try:
                    shape = {
                        'label': dict_.get(int(label)),
                        'score':float(content[5]),
                        'group_id': None,
                        'shape_type': 'rectangle',
                        'flags': {},
                        'points': [
                            [float(top_left_x), float(top_left_y)],
                            [float(bottom_right_x), float(bottom_right_y)]
                        ]
                    }
                except Exception as e:
                    # print(e)
                    shape = {
                        'label': dict_.get(int(label)),
                        'score':float(0.99),
                        'group_id': None,
                        'shape_type': 'rectangle',
                        'flags': {},
                        'points': [
                            [float(top_left_x), float(top_left_y)],
                            [float(bottom_right_x), float(bottom_right_y)]
                        ]
                    }
                labelme_json['shapes'].append(shape)
            json_name = txt_name.split('.')[0] + '.json'
            json_name_path = os.path.join(output_dir, json_name)
            fd = open(json_name_path, 'w')
            json.dump(labelme_json, fd, indent=4)
            fd.close()
            print("save json={}".format(json_name_path))


if __name__=="__main__":
    dict_ = {0: "bottle"}
    in_imgs_dir = r'images'
    in_label_txt_dir = r'runs\detect\predict2\labels'
    out_labelme_json_dir = in_imgs_dir

    if not os.path.exists(out_labelme_json_dir):
        os.mkdir(out_labelme_json_dir)
    convert_txt_to_labelme_json(in_label_txt_dir, in_imgs_dir, out_labelme_json_dir, image_fmt='.png')