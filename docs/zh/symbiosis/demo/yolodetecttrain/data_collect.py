"""
采集图片数据用来训练yolov8
"""

import pyrealsense2 as rs
import cv2
import os
import time
import numpy as np

# 创建保存图像的文件夹
color_output_folder = 'images'
os.makedirs(color_output_folder, exist_ok=True)

# 相机配置
pipeline = rs.pipeline()
config = rs.config()
config.enable_stream(rs.stream.depth, 640, 480, rs.format.z16, 30)
config.enable_stream(rs.stream.color, 640, 480, rs.format.bgr8, 30)
profile = pipeline.start(config)

# 创建对齐对象
align_to = rs.stream.color
align = rs.align(align_to)

print('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   Start Detectionqq >>>>>>>>>>>>>>>>>>>>>>>>>>>>')

start_time = time.time()
frame_count = 0

while True:

    frames = pipeline.wait_for_frames()
    aligned_frames = align.process(frames)
    aligned_depth_frame = aligned_frames.get_depth_frame()
    color_frame = aligned_frames.get_color_frame()
    depth_image = np.asanyarray(aligned_depth_frame.get_data())
    color_image = np.asanyarray(color_frame.get_data())

    # 生成文件名
    frame_number = frame_count + 1
    filename = f'{frame_number:04d}.png'
    color_file_path = os.path.join(color_output_folder, filename)

    cv2.imshow('Color Image', color_image)
    c = cv2.waitKey(1)


    # 保存颜色图像和深度图像
    if c == ord('s'):

        cv2.imwrite(color_file_path, color_image)
        frame_count += 1
        print(f'frame_count:{frame_count}')


    # 按下 'q' 键退出循环
    if cv2.waitKey(1) == ord('q'):
        break

# 关闭窗口并停止相机
cv2.destroyAllWindows()
pipeline.stop()

print(f'Total frames captured: {frame_count}')
