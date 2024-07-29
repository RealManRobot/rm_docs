# 坐标系操作示例CoordinateSystem

---

## 1. 项目介绍

本项目是一个使用睿尔曼Python开发包演示坐标系的新建、删除、修改、查询。

## 2. 代码结构

```
RMDemo_CoordinateSystem/
│
├── README.md        <- 项目的核心文档
├── requirements.txt    <- 项目的依赖列表
├── setup.py        <- 项目的安装脚本
│
├── src/          <- 项目的源代码
│  ├── main.py       <- 程序的主入口
│  └── core/        <- 核心功能或业务逻辑代码
│    └── demo_coordinate_system.py      <- 演示坐标系的新建、删除、修改、查询。
└── Robotic_Arm/      <- 睿尔曼机械臂二次开发包
```

## 3.环境与依赖

* Python 3.9+

##  4. 安装说明

1. 安装Python 3.9

2. 进入项目目录：`cd RMDemo_CoordinateSystem`

3. 安装依赖：`pip install -r requirements.txt`

## 5. 注意事项

该Demo以RM65-B型号机械臂为例，请根据实际情况修改代码中的数据。

## 6. 使用指南

### 1. 快速运行

按照以下步骤快速运行代码：

1. **配置机械臂IP地址**：打开 `demo_coordinate_system.py` 文件，在 `main` 函数中修改 `RobotArmController` 类的初始化参数为当前机械臂的IP地址，默认IP地址为 `"192.168.1.18"`。

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **命令行运行**：在终端进入 `RMDemo_CoordinateSystem` 目录，输入以下命令运行Python脚本：

    ```bash
    python ./src/main.py
    ```

### **2. 代码说明**

下面是 `demo_coordinate_system.py` 文件的主要功能：

- **连接机械臂**

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

    连接到指定IP和端口的机械臂。

- **获取API版本**

    ```python
    print("\nAPI Version: ", rm_api_version(), "\n")
    ```

    获取并显示API版本。

- **手动设置工作坐标系**

    ```python
    robot_controller.set_manual_work_frame("test", [0, 0, 0, 0, 0, 0])
    ```

    手动设置名为 `"test"` 的工作坐标系，位姿为 `[0, 0, 0, 0, 0, 0]`。

- **更新工作坐标系**

    ```python
    robot_controller.update_work_frame("test", [0.3, 0, 0.3, 3.142, 0, 0])
    ```

    更新名为 `"test"` 的工作坐标系，位姿为 `[0.3, 0, 0.3, 3.142, 0, 0]`。

- **查询指定工作坐标系**

    ```python
    robot_controller.get_given_work_frame("test")
    ```

    查询名为 `"test"` 的工作坐标系并显示结果。

- **删除工作坐标系**

    ```python
    robot_controller.delete_work_frame("test")
    ```

    删除名为 `"test"` 的工作坐标系。

- **断开机械臂连接**

    ```python
    robot_controller.disconnect()
    ```

    断开与机械臂的连接。

### 3. 运行结果示例

运行脚本后，输出结果如下所示：

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9 

Manually set work frame succeeded

Update work frame succeeded

Get work frame succeeded:  [0.30000001192092896, 0.0, 0.30000001192092896, 3.1419999599456787, 0.0, 0.0] 

Delete work frame succeeded

Successfully disconnected from the robot arm
```

* **支持渠道**：

	+ 开发者论坛/社区：[链接地址](https://bbs.realman-robotics.cn)

## 7. 许可证信息**

* 本项目遵循MIT许可证。

## 8. 常见问题解答（FAQ）**

- **Q1：机械臂连接失败**

  答案：修改过机械臂IP
