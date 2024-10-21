# <p class="hidden">SDK开发指南: </p>手眼标定

## 概述

手眼标定通常用于机器人和计算机视觉领域，特别是在需要精确控制机械臂与环境交互的场景中去，手眼标定是将[机械手](https://zhida.zhihu.com/search?content_id=628891097&content_type=Answer&match_order=1&q=机械手&zhida_source=entity)和摄像机的坐标系统一起来，解决相机与机械手之间的坐标转换关系，让机械手能精确抓取到相机定位的目标。

手眼系统，是手（机械臂）和眼（相机）的关系，当眼（相机）看到一个物体的时候，需要告诉手（机械臂）物体的位置在哪里，物体在眼（相机）的位置确定了，如果此时有了眼（相机）和手（机械臂）的关系，我们就能得到物体在手（机械臂）的位置了。

当需要进行机器人抓取物体、动态环境交互、精密测量与检测、视觉伺服控制等多个场景时，都需要进行手眼标定。

手眼标定之后，除非相机和机械臂的相对位置发生变动，则不需要重新标定。下面的标定方法适用于正装、侧装和倒装。

手眼标定有两种情况：

- 一种是相机固定在机械臂上

​		Eye-in-Hand系统:相机安装在机械臂末端，在机械臂移动过程中随着机械臂一起运动。

![image](picture/f6c716fb-c8d2-4adc-b3da-a86c6b1e78d0.png)

- 第二种是相机固定在机械臂之外某处

​		Eye-to-hand系统：相机固定在机械臂之外

![44776e79-47f7-4de2-9ef2-172b654169d5](picture/44776e79-47f7-4de2-9ef2-172b654169d5-17291349013411.png)

## 原理

### 1.眼在手上（eye-in-hand)

​		**对于eye-in-hand情况，机器人手眼标定即标定得到相机和机械臂末端之间的坐标变换关系:**

![image](picture/f6c716fb-c8d2-4adc-b3da-a86c6b1e78d0.png)

对目标点的空间三维坐标进行变换的过程中，首先遇到的问题就是机械臂末端坐标系与相机坐标系之间的位置变换关系，也就是机械臂的手眼位置关系，也是手眼标定最后计算的结果，该关系用符号X表示，可以用方程AX=XB求解。其中A表示相邻两次运动时**机械臂末端的变换关系**；B表示相邻两次运动时**相机坐标的相对运动**。

如图1所示，为眼在手上，也即eye-in-hand。（此处仅是为了演示效果图，而非真实的实验场景）。相机固定在机械臂末端，会随着机械臂的运动而运动。



![图1 眼在手上](picture/1b3bb9f5348fe9f1dd4ae02afed614e9.png)

- A：机械臂末端在机械臂坐标系下的位姿，通过机械臂API获取。（已知）。

  
  $$
  ^{base}_{end}M
  $$

- B：相机在机器人末端坐标系下的位姿，这个变换是固定的，只要知道这个变换，我们就可以随时计算相机的实际位置，所以这就是我们想求的东西。（未知，待求）

  

  
  $$
  ^{end}_{camera}M
  $$
  
- C：相机在标定板坐标系下的位姿，这个其实就是求解相机的外参（由相机标定求出）。

  
  $$
  ^{board}_{camera}M
  $$
  
- D：标定板在机器人基坐标系下的位姿。在标定过程中，只有机械臂末端在动，标定板和机械臂末端不动，这个位姿关系是固定不变的。
  $$
  ^{base}_{board}M
  $$





所以我们只要计算得到B变换，那么标定板在机械臂坐标系下的位姿D也就自然得到了
$$
^{base}_{board}M =^{base}_{end}M * ^{end}_{camera}M * ^{camera}_{board}M
$$
如图2所示，我们让机械臂运动两个位置，保证这两个位置下都可以看到标定板，然后构建空间变换回路：

![图2 机械臂运动到两个位置，构建变换回路](picture/29fb4d433468f12530eca3e2a563da72.png)


$$
A_{1} \cdot B \cdot C_{1}^{-1}=A_{2} \cdot B \cdot C_{2}^{-1} \\
||\\ \left(A_{2}^{-1} \cdot A_{1}\right) \cdot B=B \cdot\left(C_{2}^{-1} \cdot C_{1}\right)
$$
等同于下面的公式：
$$
^{base}_{end}M_1 * ^{end}_{camera}M_1* ^{camera}_{board}M_1 = ^{base}_{end}M_2 * ^{end}_{camera}M_2 * ^{camera}_{board}M_2\\ || \\ ^{base}_{end}M_2^{-1} * ^{base}_{end}M_1 * ^{end}_{camera}M =^{end}_{camera}M * ^{camera}_{board}M_2*^{camera}_{board}M_1^{-1} \\
$$
这是一个典型的**AX=XB**问题，而且根据定义，其中X是一个4X4齐次变换矩阵：
$$
X=\left[\matrix{R &t \\0&1}\right]
$$

手眼标定的目的就是为了计算出X



### 2.眼在手外（eye-to-hand)

![44776e79-47f7-4de2-9ef2-172b654169d5](picture/44776e79-47f7-4de2-9ef2-172b654169d5-17291482180503.png)

**眼在手外**标定时**固定机械臂基座和相机**，将**标定板固定在机械臂末端**，所以标定过程中**标定板与机械臂末端的关系固定不变，以及相机与机器人基座标的关系固定不变**

标定的目标：相机到机械臂基座坐标系的变换矩阵$$^{base}_{camera}M$$

实现方法：1.把标定板固定在机械臂末端

​					2.移动机械臂末端，使用相机拍摄不同机械臂姿态下的标定板图片n张 (10~20)

每次采集图片和机械臂位姿，都存在下面等式：$$^{end}_{board}M = ^{end}_{base}M* ^{base}_{camera}M*^{camera}_{board}M$$



其中：

| 符号               | 描述                         |
| ------------------ | ---------------------------- |
| $$^{end}_{board}M$$  | 标定板到机械臂末端的变换矩阵（因为标定过程中标定板固定在机械臂末端，标定板到机械臂末端的变化矩阵不变） |
| $$^{end}_{base}M $$    | 可以通过机械臂末端位姿算出   |
| $$^{base}_{camera}M$$  | 手眼标定需要求的             |
| $$^{camera}_{board}M$$ | 通过相机标定方法得到         |



则可以得到如下等式：

$$^{end}_{base}M_1* ^{base}_{camera}M_1*^{camera}_{board}M_1 = ^{end}_{base}M_2* ^{base}_{camera}M_2*^{camera}_{board}M_2 \\ || \\^{end}_{base}M_2^{-1}*^{end}_{base}M_1* ^{base}_{camera}M_1 =^{base}_{camera}M_2*^{camera}_{board}M_2*^{camera}_{board}M_1^{-1}\\
......\\
^{end}_{base}M_n^{-1}*^{end}_{base}M_{n-1}* ^{base}_{camera}M_{n-1}=^{base}_{camera}M_n*^{camera}_{board}M_n*^{camera}_{board}M_{n-1}^{-1} \\$$



这也是是一个典型的**AX=XB**问题，而且根据定义，其中X是一个4X4齐次变换矩阵，其中R是相机到机械臂基坐标系的旋转矩阵，t是相机到机械臂基坐标系的平移向量：
$$
X=\left[\matrix{R &t \\0&1}\right]
$$

手眼标定的目的就是为了计算出X。



## 关键代码解释

### 代码结构

```
---eye_hand_data  眼在手上标定时采集的数据

---libs

​         ---auxiliary.py 程序用到的一些辅助的包

​         ---log_settings.py 日志包

---robotic_arm_package 机械臂python包

---collect_data.py 手眼标定时采集数据程序

---compute_in_hand.py 眼在手上标定计算程序

---compute_to_hand.py 眼在手外标定计算程序

---requirements.txt 环境依赖文件

---save_poses.py 计算依赖文件

---save_poses2.py 计算依赖文件
```



### compute_in_hand.py | compute_to_hand.py关键代码解释

#### 1.主函数`func()`

**compute_in_hand.py | compute_to_hand.py**

```python
def func():
    path = os.path.dirname(__file__)

    # 标定板参数
    XX = 11  # 标定板横向角点数
    YY = 8   # 标定板纵向角点数
    L = 0.03 # 标定板单个方格的尺寸（单位：米）

    # 亚像素角点查找准则
    criteria = (cv2.TERM_CRITERIA_MAX_ITER | cv2.TERM_CRITERIA_EPS, 30, 0.001)

    # 准备标定板的3D点坐标
    objp = np.zeros((XX * YY, 3), np.float32)
    objp[:, :2] = np.mgrid[0:XX, 0:YY].T.reshape(-1, 2)
    objp = L * objp

    obj_points = []     # 存储3D点
    img_points = []     # 存储2D点

    images_num = [f for f in os.listdir(images_path) if f.endswith('.jpg')]

    for i in range(1, len(images_num) + 1):
        image_file = os.path.join(images_path, f"{i}.jpg")

        if os.path.exists(image_file):
            logger_.info(f'读 {image_file}')

            img = cv2.imread(image_file)
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

            size = gray.shape[::-1]
            ret, corners = cv2.findChessboardCorners(gray, (XX, YY), None)

            if ret:
                obj_points.append(objp)
                corners2 = cv2.cornerSubPix(gray, corners, (5, 5), (-1, -1), criteria)
                if [corners2]:
                    img_points.append(corners2)
                else:
                    img_points.append(corners)

```



上面代码遍历采集的标定板图像，逐一获取棋盘格角点并放到数组中去

#### 2.相机标定

**compute_in_hand.py | compute_to_hand.py**

```python


# 标定，得到图案在相机坐标系下的位姿
ret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(obj_points, img_points, size, None, None)

```



- 使用OpenCV的 `calibrateCamera` 函数进行相机标定，计算相机的内参数和畸变系数。

- `rvecs` 和 `tvecs` 分别是每张图像的旋转向量和平移向量，表示**标定板在相机坐标系下的位姿**。

  

#### 3.处理机械臂位姿数据

**compute_in_hand.py**

```python
poses_main(file_path)
```

将机械臂末端位姿数据转化为**机械臂末端坐标系**相对于**基坐标系**的旋转矩阵和平移向量

**compute_to_hand.py**

```python
poses2_main(file_path)
```

将机械臂末端位姿数据转化为**基坐标系**相对于**机械臂末端坐标系**的旋转矩阵和平移向量



####  4.手眼标定计算

```python
R, t = cv2.calibrateHandEye(R_tool, t_tool, rvecs, tvecs, cv2.CALIB_HAND_EYE_TSAI)

return R,t

```

- 使用OpenCV的 `calibrateHandEye` 函数进行手眼标定

  - 在compute_in_hand.py中计算**相机**相对于**机械臂末端**的旋转矩阵 **R_cam2end**和平移向量 **T_cam2end**。

    ```
    void
    cv::calibrateHandEye(InputArrayOfArrays 	R_end2base,
                         InputArrayOfArrays 	T_end2base, 
                         InputArrayOfArrays 	R_board2cam,
                         InputArrayOfArrays 	T_board2cam,
                         OutputArray 	        R_cam2end,
                         OutputArray 	        T_cam2end, 
                         HandEyeCalibrationMethod method = CALIB_HAND_EYE_TSAI)	
    
    ```

    

  - 在compute_to_hand.py中计算**相机**相对于**机械臂基座**的旋转矩阵 **R_cam2base** 和平移向量**T_cam2base**。

    ```
    void
    cv::calibrateHandEye(InputArrayOfArrays 	R_base2end
                         InputArrayOfArrays 	T_base2end
                         InputArrayOfArrays 	R_board2cam
                         InputArrayOfArrays 	T_board2cam
                         OutputArray 	        R_cam2base
                         OutputArray 	        T_cam2base
                         HandEyeCalibrationMethod method = CALIB_HAND_EYE_TSAI)	
    
    ```

    

- 采用了 `CALIB_HAND_EYE_TSAI` 方法，这是常用的手眼标定算法



### `save_poses.py` 关键代码解释

#### 1. **定义欧拉角转换为旋转矩阵的函数**

```python
def euler_angles_to_rotation_matrix(rx, ry, rz):
    # 计算旋转矩阵
    Rx = np.array([[1, 0, 0],
                   [0, np.cos(rx), -np.sin(rx)],
                   [0, np.sin(rx), np.cos(rx)]])

    Ry = np.array([[np.cos(ry), 0, np.sin(ry)],
                   [0, 1, 0],
                   [-np.sin(ry), 0, np.cos(ry)]])

    Rz = np.array([[np.cos(rz), -np.sin(rz), 0],
                   [np.sin(rz), np.cos(rz), 0],
                   [0, 0, 1]])

    R = Rz @ Ry @ Rx

    return R

```

- 定义了将欧拉角（绕X、Y、Z轴的旋转）转换为旋转矩阵的函数。
- 按照Z-Y-X的顺序进行旋转，并将各轴的旋转矩阵相乘得到最终的旋转矩阵 `R`。

#### 2. **将位姿转换为齐次变换矩阵**

```python
def pose_to_homogeneous_matrix(pose):
    x, y, z, rx, ry, rz = pose
    R = euler_angles_to_rotation_matrix(rx, ry, rz)
    t = np.array([x, y, z]).reshape(3, 1)

    H = np.eye(4)
    H[:3, :3] = R
    H[:3, 3] = t[:, 0]

    return H

```

- 将位姿（位置和姿态）转换为4x4的齐次变换矩阵，以便进行矩阵运算。
- 位置 `(x, y, z)` 作为平移向量，姿态 `(rx, ry, rz)` 作为旋转欧拉角。
- 生成的齐次变换矩阵 `H` 将用于描述**机械臂末端相对于基座的旋转变换**。

#### 3. **保存多个矩阵到CSV文件**

```python
Copy codedef save_matrices_to_csv(matrices, file_name):
    rows, cols = matrices[0].shape
    num_matrices = len(matrices)
    combined_matrix = np.zeros((rows, cols * num_matrices))

    for i, matrix in enumerate(matrices):
        combined_matrix[:, i * cols: (i + 1) * cols] = matrix

    with open(file_name, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        for row in combined_matrix:
            csv_writer.writerow(row)
```

- 将多个矩阵横向拼接成一个大矩阵，然后保存到CSV文件中。

- 每个矩阵占用固定的列数，这样在读取时可以按照固定的间隔切分出单个矩阵。

  

## 标定过程

### 1.环境要求

#### 基础环境准备

| 项目     | 版本           |
| :------- | :------------- |
| 操作系统 | ubantu/windows |
| Python   | 3.9及以上      |
|          |                |

#### Python环境准备

| 包            | 版本        |
| :------------ | :---------- |
| numpy         | 2.0.2       |
| opencv-python | 4.10.0.84   |
| pyrealsense2  | 2.55.1.6486 |
| scipy         | 1.13.1      |



#### 设备准备

- 机械臂：RM75 RM65  RM63 GEN72 
- 相机: Intel RealSense Depth Camera D435
- 摄像头专用数据线
- 网线

- 标定板

  1. 打印纸质标定板

     ![标定板图片_00(1)](picture/标定板图片_00(1).png)

  2. 淘宝上搜索“标定板棋盘格”购买







### 2.标定过程

#### 采集数据

##### 眼在手上

(1).相机连接线连接**程序运行设备**和D435相机，网线连接**程序运行设备**和机械臂

(2).程序运行设备的ip和机械臂设置为同一网段

如果机械臂IP为192.168.1.18 ，则将程序运行设备 ip地址设为1网段

![image-20241018143659263](picture/image-20241018143659263.png)

如果机械臂的IP为192.168.10.18，则将程序运行设备的IP设置为10网段

![image-20241018143810060](picture/image-20241018143810060.png)

(3).标定板放置在平面上，相机固定在机械臂末端，相机对准标定板，并在**程序中**设置标定板尺寸

​		xx:标定板的横向角点数（长边格子数减1），下图长边12个格子，角点数为11

​		YY:标定板纵向角点数（短边格子数减1），下图短边9个格子，角点数为8

​		L :  标定板单个方格的实际尺寸（单位：米）

​        ![](picture/image-20241016181226851.png)

(4).运行脚本`collect_data.py`，出现一个弹窗

(5).拖动机械臂末端，使呈现相机视野下的标定板清晰、完整、大，将光标放在弹窗上

(6).点击键盘“s”采集数据

(7)移动15~20次机械臂，重复步骤(5)(6)，采集不同机械臂姿态下的标定板图片15~20张左右





![image-20241015215924806](picture/image-20241015215924806.png)

##### 眼在手外

(1).相机连接线连接**程序运行设备**和D435相机，网线连接**程序运行设备**和机械臂

(2).程序运行设备的ip和机械臂设置为同一网段

​	如果机械臂IP为192.168.1.18 ，则将程序运行设备 ip地址设为1网段

![image-20241018143659263](picture/image-20241018143659263.png)

如果机械臂的IP为192.168.10.18，则将程序运行设备的IP设置为10网段

![image-20241018143810060](picture/image-20241018143810060.png)

(3).标定板固定在机械臂末端，在程序中设置标定板尺寸

​		xx:标定板的横向角点数（长边格子数减1），下图长边12个格子，角点数为11

​		YY:标定板纵向角点数（短边格子数减1），下图短边9个格子，角点数为8

​		L :  标定板单个方格的实际尺寸（单位：米）

​        ![](picture/image-20241016181226851.png)

(4).运行脚本`collect_data.py`，出现一个弹窗

(5).拖动机械臂末端，使显示当前相机视野下的标定板清晰、完整、大，将光标放在弹窗上

(6).点击键盘“s”采集数据

(7)移动15~20次机械臂，重复步骤(5)(6)，采集不同机械臂姿态下的标定板图片15~20张左右

#### 计算标定结果

##### 眼在手上

运行脚本`compute_in_hand.py`，获取标定结果

![image-20241015220058689](picture/image-20241015220058689.png)



得出**相机坐标系**相对于**机械臂末端**坐标系的**旋转矩阵**和**平移向量**







##### 眼在手外

运行脚本`compute_to_hand.py`，获取标定结果

得出**相机坐标系**相对于**机械臂基坐标系**的**旋转矩阵**和**平移向量**
