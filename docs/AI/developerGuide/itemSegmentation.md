# <p class="hidden">SDK开发指南: </p>任意物品分割

对画面内的任意物品分割，提取其轮廓信息。

**功能价值和特性**

- 可提示的分割任务： 模型在设计时考虑到了可提示的分割任务，使其能够根据任何给定的提示（如识别物体的空间或文本线索）生成有效的分割掩码。我们一般通过给定图像内像素点坐标信息做到该位置物体分割。

- 先进的架构：Segment Anything Model 采用功能强大的图像编码器、提示编码器和轻量级掩码解码器。这种独特的架构可在分割任务中实现灵活的提示、实时掩码计算和模糊感知。
- 本代码对SAM进行了封装与特异性适配，使用此功能，可不用训练，生成分割Mask，搭配姿态生成算法，可实现快速抓取任意物体。
- 原始开源项目：https://segment-anything.com/
- ![Alt text](image.png)

**使用场景**
常见使用场景包括自动标注、物体分割、提取mask等等。

**目标用户**

包括计算机视觉领域的研究人员、数据科学家和开发人员。这些用户通常需要高效、准确的实时目标检测解决方案。机器人开发工程师也会使用他来分割目标点位的物体，做到不需要识别训练该物体即可分割，高效快速低成本。

## 1. 快速入门

### 基础环境准备

| 项目     | 版本              |
| :------- | :---------------- |
| 操作系统 | ubuntu20.04       |
| 架构     | x86               |
| 显卡驱动 | nvidia-driver-535 |
| Python   | 3.8               |
| pip      | 24.2              |

### Python环境准备

| 包            | 版本     |
| ------------- | -------- |
| cuda          | 11.3     |
| cudnn         | 8.0      |
| torch         | 1.12.0   |
| torchvision   | 0.13.0   |
| opencv-python | 4.9.0.80 |
| pyyaml        | 5.4.1    |
| matplotlib    | 3.7.2    |
| pandas        | 1.5.3    |
| Pillow        | 9.5.0    |

1. 确保已经安装了基本环境

安装Nvidia驱动，详细参考《[Nvidia显卡驱动安装](D:/文档总结/第二版/安装nvidia驱动/安装Nvidia显卡环境.md)》


安装conda包管理工具和python对应环境，详细参考《[安装conda和python环境]()》

2. 构建python环境

```
conda create --name [conda_env_name] python=3.8 -y		# 创建conda虚拟环境
```

```
conda activate [conda_env_name]		# 激活虚拟环境
```

```
python -V		# 查看python版本
```

```
pip -V		# 查看pip版本
```

```
pip install -U pip		# 更新pip到最新版本
```

安装python环境三方包依赖

安装pytorch的gpu版本和cuda等深度学习加速环境

```
conda install pytorch==1.12.0 torchvision==0.13.0 torchaudio==0.12.0 cudatoolkit=11.3 -c pytorch -y
```

安装opencv

```
pip install opencv-python==4.10.0.84
```

安装pyyaml

```
pip install pyyaml==5.4.1
```

安装matplotlib

```
pip install matplotlib==3.7.5
```

安装pandas

```
pip install pandas==1.5.3
```

安装pillow

```
pip install Pillow==10.4.0
```

安装scipy

```
pip install scipy==1.10.1
```

安装ultralytics

```
pip install ultralytics==8.2.66
```

### 资源准备

下载训练好的【sam.pt】权重：[下载sam模型权重](链接：https://pan.baidu.com/s/1qebYRV1qjDLZL2McMZbLPw?pwd=1234)

### 代码获取

代码可以在[github链接](wwwwwwww)获取最新代码。

### 快速开始示例

```python
from sam.interface import DetectBase

# 实例化分割对象
sam_seg = DetectBase()

# 加载对应模型
predictor = sam_seg.gen_model()

# 以opencv方式读取图片，此时图片是RGB模式
color_image = cv2.imread("xxx.png")

# 预处理图片
color_frame = sam_seg.forward_handle_input(color_image)

# 执行推理
results = sam_seg.detect(color_frame, predictor=predictor, point=TARGET_POINT, bboxes=None)

# 后处理推理数据
center, mask = sam_seg.backward_handle_output(results)

# 可视化
cv2.imshow("mask", mask)
cv2.waitKey(1)
```

## 2. API参考

### 输入数据转化 sam_seg.forward_handle_input

```python
# 预处理图片
color_frame = sam_seg.forward_handle_input(color_image)
```

将图片转化为SAM可以处理的格式，有助于加速SAM的分割。

- 函数输入：RGB图像
- 函数输出：预处理的图像，可以直接放进推理接口执行，ndarray对象。

### 推理 sam_seg.detect

```python
# 执行推理
results = sam_seg.detect(color_frame, predictor=predictor, point=TARGET_POINT, bboxes=None)
```

执行推理，识别图片指定点位的mask并输出处理结果

- 函数输入：
  1. color_frame：预处理之后的彩色图像信息
  2. predictor：推理模型，可通过加载不同大小权重的模型来实现不同的推理速度和效果
  3. point：给定的辅助点位。
  4. bboxes：给定的辅助图像坐标点位框，与point二选一给定。
- 函数输出：推理结果。ndarray对象。

### 输出数据转化 sam_seg.backward_handle_output

```python
# 后处理推理数据
center, mask = sam_seg.backward_handle_output(results)
```

执行后续数据处理，将推理得到的数据转化为对应物体的轮廓和对应的中心点信息，中心点为最大外接矩形的中心点。

- 函数输入：推理结果。ndarray对象。
- 函数输出：
  1. mask：指定位置的mask信息。或称其为掩膜或轮廓。
  2. center：mask信息的最大外接矩形的中心点信息，一般认为这个点位是比较合适的抓取点。

## 3. 功能介绍

### 功能详解

给定彩色图片和指定点位坐标信息，可以得到指定点位的物体的分割信息，如图，蓝色为指定点位，下图为分割内容。

![物体分割](任意物品分割.jpg)

- 目标分割
在图像指定点位（x\y坐标系点位）给定一个辅助点，推理并给出这个辅助点所在物体的mask（掩膜或轮廓）信息，用于定位、追踪、判断形状等等功能。

SAM分割模型的输出是一组掩膜或轮廓，用于描绘图像中每个物体的边界。

### 功能参数

- 分割准确率：95%
- 分割速度：10HZ（基于3090TI测得）
- 模型参数：632M+4M
- 分割精度：1像素

## 4. 开发指南

### 图像输入规范

一般采用640x480x3通道的图片作为整个项目的输入，并使用RGB作为主要的通道顺序。一般推荐使用opencv方式读取的图片并传到模型中。

### 模型预热

当我们第一次加载模型之后，需要给模型一个数据，可以是随机数据来运行一次模型以达到预热模型的效果，此举主要的目的是将一些可能用到的内存空间分配到位。

### 部署设备

推荐使用cuda平台，纯CPU形式的推理速度会比较慢，基本无法满足现实场景需求。
指标参考：在3090TI GPU上运行约为100ms每帧，占用约4GB显存。

## 5. 见问题解答（FAQ）

**1. 如果我不想用推荐环境配置，自行安装环境版本的选择顺序是什么？**

操作系统 -> 显卡驱动版本 -> cudnn版本 -> cuda版本 -> torch版本 -> torchvision版本 -> python版本

按照以上顺序安装并适配。

**2. 图像分割的速度主要受那些因素影响**  

主要受到硬件算力的影响，算力越高，推理时间越短。

**3. 图像分割的结果不完整怎么办？**

可以通过多次指定位置分割，将所有的mask拼凑到一起去，以达到一个完整物体的mask。

**4. 如何在机械臂开发的过程中使用该模型？**

通过指定点位得到目标物体的mask信息，通过mask可以计算出物体的最小外接矩形、最大外接矩形，并进一步得到物体的中心点、重心点、偏转角度等等。根据这些信息 + 深度图像 + 相机内参这些可以计算出物体基于相机坐标系的点，并进一步根据手眼标定结果计算出相对于机器人坐标系的点位。

**5. 模型太大**  

本SDK主要采用Sam_b模型，推荐使用3060以上显卡运行。若您的硬件达不到要求，也可以使用Fastsam或其他资源要求较低的分割模型。但是为保证整体解决方案的准确性，建议升级硬件设备以满足更高精度要求。

## 6. 更新日志

| 更新日期   | 更新内容 |版本 |
| :--------- | :------- |:------- |
| 2024.08.16 | 新增内容 |V1.0 |

## 7. 版权和许可协议

- 本项目遵循MIT许可证。
