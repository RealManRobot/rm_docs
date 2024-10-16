# <p class="hidden">SDK开发指南: </p>任意物品追踪

XMem 是一种采用阿特金森-希夫林记忆模型的长期视频对象分割技术，具有自动标注和高效分割功能，广泛应用于多领域的智能化视频处理。通常用于在连续视频帧或实时图像中追踪一个物体。

**功能价值和特性**  

XMem 采用了阿特金森-希夫林记忆模型，将其应用于视频对象分割任务。<br>阿特金森-希夫林记忆模型是一种经典的心理学模型，用于描述人类记忆的结构和功能，包括短期记忆和长期记忆的交互。
其主要关键技术在于：

- 短期记忆模块：捕获视频中的短期信息，处理视频帧之间的快速变化。
- 长期记忆模块：存储和管理长时间的视频信息，确保对象分割的一致性和稳定性。
- 记忆交互机制：结合短期和长期记忆模块，提供一个综合的对象分割策略。

本SDK针对XMem做了特异性适配与改进，在非训练场景下应用，可以更精确的跟踪移动对象实现分割目标，帮助机械臂更准确的进行操作，提升任务鲁棒性。

如果想要了解更多信息，请访问：[XMem](https://github.com/hkchengrex/XMem)

**使用场景**  

- 自动标注：通过算法和技术手段，自动对图像或视频中的对象进行标记和分类的过程。XMem 采用阿特金森-希夫林记忆模型进行长期视频对象分割，在自动标注方面展现出强大的能力，广泛应用于多个领域。
- 物体追踪：在机器人开发过程中，机器人与目标物体的交互往往不是相对距离固定的，会随着机器人本体或者目标物的移动而使得原先的定位结果不可用，我们需要一种实时的准确的定位，物品追踪在这里显的尤为重要。

## 1. 快速入门

### 基础环境准备

| 项目     | 版本              |
| :--------- | :------------------ |
| 操作系统 | ubuntu20.04       |
| 架构     | x86               |
| 显卡驱动 | nvidia-driver-535 |
| Python   | 3.8               |
| pip      | 24.2              |

### Python环境准备

| 包            | 版本     |
| --------------- | ---------- |
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

安装Nvidia驱动，详细参考[安装Nvidia显卡环境](../getStarted/nivdia.md)

安装conda包管理工具和python对应环境，详细参考[安装conda和python环境](../getStarted/environment.md)

2. 构建python环境

创建conda虚拟环境

```bash
conda create --name [conda_env_name] python=3.8 -y
```

激活虚拟环境

```bash
conda activate [conda_env_name]
```

查看python版本

```bash
python -V
```

查看pip版本

```bash
pip -V
```

更新pip到最新版本

```bash
pip install -U pip
```

3. 安装python环境三方包依赖

安装pytorch的gpu版本和cuda等深度学习加速环境

```bash
conda install pytorch==1.12.0 torchvision==0.13.0 torchaudio==0.12.0 cudatoolkit=11.3 -c pytorch -y
```

如果conda安装失败或时间过长 换成下面代码

```bash
pip install torch==1.12.0+cu113 torchvision==0.13.0+cu113 torchaudio==0.12.0 --extra-index-url https://download.pytorch.org/whl/cu113 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

安装opencv

```bash
pip install opencv-python==4.10.0.84
```

安装pyyaml

```bash
pip install pyyaml==5.4.1
```

安装matplotlib

```bash
pip install matplotlib==3.7.5
```

安装pandas

```bash
pip install pandas==1.5.3
```

安装pillow

```bash
pip install Pillow==10.4.0
```

### 资源准备

下载训练好的【Xmem.pth】权重：[下载Xmem权重](https://pan.baidu.com/s/1YoJvlMIUzxgLUVHkQXE6Lg?pwd=1234)

### 代码获取

代码可以在[GitHub: 任意物品追踪](https://github.com/RealManRobot/rm-track)获取最新代码。

### 快速开始示例

```python
# 导入各种信息
...

# 导入追踪的主要依赖
from rmx.interface import TrackRmx

# 实例化追踪模型
processor = TrackRmx.gen_model(os.path.join("XMem.pth"))

# 读取初始彩色图像
original_image = cv2.imread("color.png")

# 读取初始的mask图像，并将mask最大值改为1
original_mask = cv2.imread("mask.png", cv2.IMREAD_GRAYSCALE)
original_mask[original_mask == 255] = 1

# 主要的逻辑代码
while True:
    # 获取视频帧以及将视频帧转化为RGB模式
    color_image, depth_image, _, _, _aligned_depth_frame = camera.read_align_frame(False, False)
    color_image = cv2.cvtColor(color_image, cv2.COLOR_BGR2RGB)
  
    # 使用不计算梯度模式，加快推理速度
    with torch.no_grad():
        original_image = cv2.cvtColor(original_image, cv2.COLOR_RGB2BGR)
        predict_mask = TrackRmx.detect(processor, original_image, original_mask, color_image, 1)
       
        # 判断是否追踪到物体
        if not np.max(predict_mask) == 0:
            predict_mask = extract_largest_mask(predict_mask)
  
    # 为可视化服务，将追踪到的mask的最大值修改为255
    predict_mask[predict_mask == 1] = 255
  
    # 可视化
    cv2.imshow("mask", predict_mask)
    cv2.imshow("color", color_image)
    cv2.waitKey(1)
```

## 2.API参考

### 目标追踪  TrackRmx.detect

```python
predict_mask = TrackRmx.detect(processor, original_image, original_mask, color_image, 1)
```

输入已有图片和图片内的mask信息，给定需要追踪的目标图片，追踪出目标图片内物体的具体位置。

- 函数输入：
  1. processor：加载的追踪模型。
  2. original_image：已有图片。
  3. original_mask：已有图片内的需要追踪的物体mask。
  4. color_image：待识别的RGB图片。
- 函数输出：
  1. predict_mask：目标图片内识别到的目标轮廓。图片为640x480x1图像，轮廓点值为255，非轮廓点值为0。

### 清空追踪模型缓存 TrackRmx.delete_model

```python
TrackRmx.delete_model(processor)
```

在追踪效果不佳，或者需要重新开始追踪其他物体的时候，用以清空当前追踪模型。

- 函数输入：
  （1）processor：加载的追踪模型。

## 3.功能介绍

用于在**连续**的视频帧中追踪一个物体。

<video width="300px" autoplay loop muted height="300px" >
  <source src="../developerGuide/doc/tracking_object.mp4" type="video/mp4">
</video>

- 目标检测

目标检测器的输出是一组包围图像中物体的边界框，以及每个框的类别标签和置信度分数。当你需要识别场景中的感兴趣物体，但不需要知道物体的确切位置或其确切形状时，目标检测是一个很好的选择。

- 目标分割

实例分割比目标检测更进一步，涉及在图像中识别并分割出各个单独的物体。

实例分割模型的输出是一组掩膜或轮廓，用于描绘图像中每个物体的边界，同时还包括每个物体的类别标签和置信度分数。当你不仅需要知道图像中物体的位置，还需要了解它们的确切形状时，实例分割非常有用。

### 功能参数

- 识别速度：20HZ（基于3090TI显卡）
- 追踪错误率：1%
- 模型参数：320M
- 分割精度：1像素

## 4.开发指南

### 图像输入规范

一般采用640x480x3通道的图片作为整个项目的输入，并使用RGB作为主要的通道顺序。一般推荐使用opencv方式读取的图片并传到模型中。

### 模型记忆问题

由于模型是采用记忆的形式来做的，即前面所有已经推理过的内容都会对后续推理的结果产生影响。所以每一次批量的追踪之后都需要重新加载模型。或者删除模型缓存的关键点内容。

### 部署设备

推荐使用cuda平台，纯CPU形式的推理速度会比较慢，基本无法满足现实场景需求。

## 5.见问题解答（FAQ）

**1. 如果我不想用推荐环境配置，自行安装环境版本的选择顺序是什么？**

操作系统 -> 显卡驱动版本 -> cudnn版本 -> cuda版本 -> torch版本 -> torchvision版本 -> python版本

按照以上顺序安装并适配。

**2. 图像追踪的速度主要受哪些因素影响**

主要受到硬件算力的影响，算力越高，追踪时间越短。但是对追踪结果无影响。

**3. 如果追踪效果不好，我们可以采取什么措施加强？**

调整Xmem模型的参数，调大对于关键点记录的数量。同时保证视频流较为平滑，少出现抖动画面。

**4. 在机器人开发过程中我应该怎么使用该模型？**

分割最终输出的结果是mask（掩膜或轮廓），根据mask可以得到物体的点位信息，比如最小外接矩形中心点，最大外接矩形中心点，物体偏转方向等图片坐标系点，再加上相机深度和相机内参信息，可以得到相机坐标系下物体的坐标点。若需要在机械臂坐标系下得到计算结果，还需要进一步根据手眼标定结果转换坐标。

## 6. 更新日志

| 更新日期   | 更新内容 | 版本 |
| :----------- | :--------- | :----- |
| 2024.08.16 | 新增内容 | V1.0 |

## 7. 版权和许可协议

- 本项目遵循MIT许可证。
