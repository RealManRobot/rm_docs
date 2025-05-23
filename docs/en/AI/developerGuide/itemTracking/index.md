# <p class="hidden">SDK developer guide: </p>Item Tracking

XMem refers to the tracking using the long-term video object segmentation based on the Atkinson-Shifflin memory model, with automatic labeling and efficient segmentation functions, which is widely used in intelligent video processing in many fields. It is commonly used to track an item in continuous video frames or real-time images.

**Functional values and characteristics**

XMem adopts the Atkinson-Shiffrin memory model, applying it to video object segmentation tasks. The Atkinson-Shiffrin memory model is a classic psychological framework used to describe the structure and function of human memory, including the interaction between short-term and long-term memory.
Its key technical characteristics include:

- Short-term memory module: captures periodic information in videos and processes rapid changes between video frames.
- Long-term memory module: stores and manages temporal video information to ensure consistency and stability in object segmentation.
- Memory interaction mechanism: integrates short-term and long-term memory modules to provide a comprehensive object segmentation strategy.

This SDK has been specifically adapted and improved for XMem, enabling its application in non-training scenarios. It allows for more precise tracking of moving objects to achieve segmentation goals, assisting robotic arms in performing operations with greater accuracy and enhancing task robustness.

For more details, please visit: [XMem](https://github.com/hkchengrex/XMem)

**Application scenarios**

- Automatic annotation: It refers to the process of automatically labeling and classifying objects in images or videos using algorithms and technical methods. XMem leverages the Atkinson-Shiffrin memory model for long-term video object segmentation, demonstrating exceptional capabilities in automatic annotation, and is widely applied across various fields.
- Object tracking: During robot development, interactions between the robot and the target object often involve changes in relative distances, rendering previous localization results invalid as either the robot or the target object moves. In such cases, a real-time and accurate localization solution is crucial, making object tracking especially significant.

## 1. Quick start

### Basic environment preparation

| Item     | Version              |
| :--------- | :------------------ |
| Operating system | ubuntu20.04       |
| Architecture     | x86               |
| GPU driver | nvidia-driver-535 |
| Python   | 3.8               |
| pip      | 24.2              |

### Python environment preparation

| Package            | Version     |
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

1. Make sure the basic environment is installed

Install the Nvidia driver. For details, please refer to [Install Nvidia GPU driver](../../getStarted/nivdia/index.md)

Install the conda package management tool and the python environment. For details, please refer to [Install Conda and Python environment](../../getStarted/environment/index.md)

2. Build a python environment

Create the conda virtual environment

```bash
conda create --name [conda_env_name] python=3.8 -y
```

Activate virtual environment

```bash
conda activate [conda_env_name]
```

View the python version

```bash
python -V
```

View the pip version

```bash
pip -V
```

Update pip to the latest version

```bash
pip install -U pip
```

3. Install third-party package dependencies for the python environment

Install the GPU version of pytorch and a deep learning acceleration environment such as cuda

```bash
conda install pytorch==1.12.0 torchvision==0.13.0 torchaudio==0.12.0 cudatoolkit=11.3 -c pytorch -y
```

If the conda installation fails or takes too long, use the following code instead

```bash
pip install torch==1.12.0+cu113 torchvision==0.13.0+cu113 torchaudio==0.12.0 --extra-index-url https://download.pytorch.org/whl/cu113 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

Install opencv

```bash
pip install opencv-python==4.10.0.84
```

Install pyyaml

```bash
pip install pyyaml==5.4.1
```

Install matplotlib

```bash
pip install matplotlib==3.7.5
```

Install pandas

```bash
pip install pandas==1.5.3
```

Install pillow

```bash
pip install Pillow==10.4.0
```

### Resources preparation

Download the pre-trained [Xmem.pth] weights: [download Xmem weights](https://pan.baidu.com/s/1YoJvlMIUzxgLUVHkQXE6Lg?pwd=1234)

### Code access

Get the latest code in [GitHub: Item Tracking](https://github.com/RealManRobot/rm-track).

### Quick start example

```python
# Import various information
...

# Import the main dependency for tracking
from rmx.interface import TrackRmx

# Instantiate the tracking model
processor = TrackRmx.gen_model(os.path.join("XMem.pth"))

# Read the initial color image
original_image = cv2.imread("color.png")

# Read the initial mask image and change the maximum mask value to 1
original_mask = cv2.imread("mask.png", cv2.IMREAD_GRAYSCALE)
original_mask[original_mask == 255] = 1

# Main logic code
while True:
    # Capture video frames and convert them to RGB format
    color_image, depth_image, _, _, _aligned_depth_frame = camera.read_align_frame(False, False)
    color_image = cv2.cvtColor(color_image, cv2.COLOR_BGR2RGB)
  
    # Use non-gradient computation mode to accelerate inference
    with torch.no_grad():
        original_image = cv2.cvtColor(original_image, cv2.COLOR_RGB2BGR)
        predict_mask = TrackRmx.detect(processor, original_image, original_mask, color_image, 1)
       
        # Determine if an object is being tracked
        if not np.max(predict_mask) == 0:
            predict_mask = extract_largest_mask(predict_mask)
  
    # For visualization, change the maximum value of the tracked mask to 255
    predict_mask[predict_mask == 1] = 255
  
    # Visualize the content
    cv2.imshow("mask", predict_mask)
    cv2.imshow("color", color_image)
    cv2.waitKey(1)
```

## 2. API reference

### Target tracking  TrackRmx.detect

```python
predict_mask = TrackRmx.detect(processor, original_image, original_mask, color_image, 1)
```

Input an existing image and mask information within the image, specify the target image to be tracked, and locate the exact position of the object in the target image.

- Function input:
  1. processor: loaded tracking model.
  2. original_image: existing image.
  3. original_mask: mask of the object to be tracked in the existing image.
  4. color_image: RGB image to be recognized.
- Function output:
  1. predict_mask: recognized mask of the tracked target within the target image. The image is a 640x480x1 one, with mask values set to 255 and non-mask values set to 0.

### Clear tracking model cache TrackRmx.delete_model

```python
TrackRmx.delete_model(processor)
```

When the tracking results are unsatisfactory, or you need to restart tracking a different object, use this function to clear the current tracking model.

- Function input:<br>
   - processor: loaded tracking model.

## 3. Function introduction

This is used to **continuously** track an object in a video frame.

<video width="300px" autoplay loop muted height="300px" >
  <source src="../doc/tracking_object.mp4" type="video/mp4">
</video>

- Object detection

The output of the object detector includes a set of bounding boxes around objects in the image, as well as the class labels and confidence scores for each box. When you need to identify objects of interest in a scene without requiring exact locations or precise shapes, object detection is a great choice.

- Object segmentation

Instance segmentation goes a step beyond object detection by identifying and segmenting each unique object in the image.

The output of the instance segmentation model is a set of masks, used to draw the borders of each object in the image. Additionally, it includes the class label and confidence score for each object. When you not only need to know the position of objects in the image but also their precise shapes, instance segmentation is extremely helpful.

### Function parameters

- Recognition speed: 20 HZ (Based on the 3090TI GPU)
- Tracking error rate: 1%
- Model parameter: 320M
- Segmentation accuracy: 1 pixel

## 4. Developer guide

### Image input specification

Generally, an image of a 640×480×3 channel is used as input for the entire project, and RGB is used as the main channel sequence. It is recommended to use opencv mode to read the image and load it to the model.

### Model memory issues

Since the model uses a memory-based approach, all previously processed content influences subsequent inference results. Therefore, after each batch of tracking, the model must be reloaded, or the key cached contents of the model must be deleted. 

### Equipment deployment

It is recommended to use the cuda platform, because the inference speed of the CPU only is slow, which basically cannot meet the requirements of realistic scenes.

## 5. Frequently asked question (FAQ)

**1. If I don't want to use the recommended environment configuration, what is the order for selecting versions when manually installing the environment?**

Operating system -> GPU driver version -> cudnn version -> cuda version -> torch version -> torchvision version -> python version

Perform installation and adaptation in the order listed above.

**2. What factors mainly affect the speed of image tracking?**

The main factor is the hardware computing power, the higher the computing power, the shorter the tracking time, without affecting tracking results.

**3. What measures can be taken in case of poor tracking performance?**

You can adjust the parameters of the Xmem model and increase the number of recorded key points. At the same time, you should also ensure a smoother video stream with minimal jitter or shaky frames.

**4. How should I use this model in robot development?**

The final output of the segmentation is a mask. Based on the mask, you can extract point information about the object, such as the center point of the smallest bounding rectangle, the center point of the largest bounding rectangle, and the object's orientation in the image frame. By incorporating camera depth and camera intrinsic parameters, you can calculate the object's coordinates in the camera frame. If the calculation results in the robotic arm frame are required, additional transformations based on hand-eye calibration results are needed.

## 6. Update log

| Update date   |  Update content | Version |
| :----------- | :--------- | :----- |
| 2024.08.16 | New content | V1.0 |

## 7. Copyright and license agreement

- This project is subject to the MIT license.
