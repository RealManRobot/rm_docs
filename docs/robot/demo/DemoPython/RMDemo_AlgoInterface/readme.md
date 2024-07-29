# 算法示例AlgoInterface

---

## 1. 项目介绍

本项目是一个使用睿尔曼Python开发包完成工程完成不连接机械臂，独立使用算法，进行算法初始化、机械臂型号设置、坐标系设置，运动学正解、运动学逆解，欧拉角转四元数、四元数转欧拉角。

## 2. 代码结构

```
RMDemo_AlgoInterface/
│
├── README.md        <- 项目的核心文档
├── requirements.txt    <- 项目的依赖列表
├── setup.py        <- 项目的安装脚本
│
├── src/          <- 项目的源代码
│  ├── main.py       <- 程序的主入口
│  └── core/        <- 核心功能或业务逻辑代码
│    └── demo_algo_interface.py      <- 完成不连接机械臂，独立使用算法，进行算法初始化、机械臂型号设置、坐标系设置，运动学正解、运动学逆解，欧拉角转四元数、四元数转欧拉角。
└── Robotic_Arm/      <- 睿尔曼机械臂二次开发包
```

## 3.环境与依赖

* Python 3.9+

## 4. 安装说明

1. 安装Python 3.9

2. 进入项目目录：`cd RMDemo_AlgoInterface`

3. 安装依赖：`pip install -r requirements.txt`

## 5. 注意事项

该Demo以RM65-B型号机械臂为例，请根据实际情况修改代码中的数据。

## 6. 使用指南

1. **参数配置**

   打开`demo_algo_interface.py` 文件，在main函数中可修改以下配置：

   - 配置机械臂及末端版本（默认为RM65标准版机械臂）：如果需要调用其它型号机械臂的算法，可配置`AlgoController`类的初始化参数。
     - `arm_model`参数指定了机械臂的型号，例如RM75机械臂则修改为：`rm_robot_arm_model_e.RM_MODEL_RM_65_E`。
     - `force_type`参数指定了机械臂末端版本，例如六维力版本则修改该参数为`rm_force_type_e.RM_MODEL_RM_SF_E`。
   - 配置基座安装角度（默认为正装）：通过`set_angle`方法设置机械臂的初始安装姿态
   - 配置工作坐标系（不设置则按照出厂默认的参数进行计算）：通过`set_workframe`方法修改工作坐标系。
   - 配置工具坐标系（不设置则按照出厂默认的参数进行计算）：通过`set_toolframe`方法修改工具坐标系。

2. **命令行运行**：

   在终端进入RMDemo_AlgoInterface目录，输入以下命令运行Python脚本：

   ```
   python ./src/main.py
   ```

3. **运行结果如下所示**：

   ```
   Algorithm initialized, handle ID:  0
   
   API Version:  0.3.0 
   
   installation pose set successfully
   
   Work frame set successfully
   
   Tool frame set successfully
   
   Forward Kinematics (flag=1): [-4.2137777711559465e-08, 0.0, 0.8505000472068787, 0.0, 8.742277657347586e-08, 3.1415927410125732]
   
   Forward Kinematics (flag=0): [-4.2137777711559465e-08, 0.0, 0.8505000472068787, 0.0, -4.371138828673793e-08, 0.0, 1.0]
   
   Inverse Kinematics: [0.04380200430750847, -21.288101196289062, -78.31494903564453, -0.09254305809736252, -80.39703369140625, 0.05924007669091225]
   
   Euler to Quaternion: [0.0002963105798698962, 0.9999999403953552, 0.0, 0.0]
   
   Quaternion to Euler: [0.0, -0.0, 3.1415927410125732]
   ```

* **支持渠道**：
  + 开发者论坛/社区：[链接地址](https://bbs.realman-robotics.cn)

## 7. 许可证信息


* 本项目遵循MIT许可证。

## 8. 常见问题解答（FAQ）

- **Q1：机械臂连接失败**

  答案：修改过机械臂IP。
