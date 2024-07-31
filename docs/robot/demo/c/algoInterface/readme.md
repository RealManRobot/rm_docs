# 算法示例

## 1. 项目介绍
本项目是基于睿尔曼C开发包完成的。实现不连接机械臂、独立使用算法、进行算法初始化、机械臂型号设置、坐标系设置、运动学正解、运动学逆解,欧拉角转四元数、四元数转欧拉角等功能。

## 2. 代码结构

```
RMDemo_AlgoInterface
├── build              # CMake构建生成的输出目录（如Makefile、构建文件等）
├── cmake              # CMake模块和脚本的存放目录
│   ├── ...
├── data
│   └── robot_log.txt    # 日志、轨迹文件等数据文件目录（在执行过程中生成）
├── include              # 自定义头文件存放目录
├── Robotic_Arm          睿尔曼机械臂二次开发包
│   ├── include
│   │   ├── rm_define.h  # 机械臂的定义
│   │   └── rm_interface.h # 机械臂 API 的接口头文件
│   ├── lib
│   │   ├── api_c.dll    # Windows 的 API 库
│   │   ├── api_c.lib    # Windows 的 API 库
│   │   └── libapi_c.so  # Linux 的 API 库
├── src
│   ├── main.c           # 主函数
├── CMakeLists.txt       # 项目的顶层CMake配置文件
├── readme.md            # 为示例工程提供详细的文档
├── run.bat              # 快速运行脚本， Windows为bat脚本
└── run.sh               # 快速运行脚本， linux为shell脚本

```

## **3. 系统要求**

- 操作系统：Ubuntu 18.04或更高版本
- 编译器：GCC 7.5或更高版本 (或任何其他兼容的C编译器)
- 依赖库：
  - CMake 3.10或更高版本
  - RMAPI库(包含在 `Robotic_Arm/lib`目录中)

## 4. 环境配置

### Linux环境配置

**1. 编译器（GCC）**

在大多数Linux发行版中，GCC是默认安装的，但可能版本不是最新的。如果需要安装特定版本的GCC（如7.5或更高版本），可以使用包管理器进行安装。以Ubuntu为例，可以使用以下命令安装或更新GCC：

```bash
# 检查GCC版本
gcc --version

sudo apt update
sudo apt install gcc-7 g++-7  
```

注意：如果系统默认安装的GCC版本已满足或高于要求，则无需进行额外安装。

**2. CMake**

CMake在大多数Linux发行版中也可以通过包管理器安装。以Ubuntu为例：

```bash
sudo apt update
sudo apt install cmake

# 检查CMake版本
cmake --version
```

### Windows环境配置

**1. 编译器（MSVC2015或更高版本）**
MSVC（Microsoft Visual C++）编译器通常随Visual Studio一起安装。可以按照以下步骤安装：

1. 访问[Visual Studio官网](https://visualstudio.microsoft.com/)下载并安装Visual Studio。
2. 在安装过程中，选择“使用C++的桌面开发”工作负载，这将包括MSVC编译器。
3. 根据需要选择其他组件，如CMake（如果尚未安装）。
4. 完成安装后，打开Visual Studio命令提示符（可在开始菜单中找到），输入`cl`命令检查MSVC编译器是否安装成功。

**2. CMake**
如果Visual Studio安装过程中未包含CMake，可以单独下载并安装CMake。

1. 访问[CMake官网](https://cmake.org/download/)下载适用于Windows的安装程序。
2. 运行安装程序，按照提示进行安装。
3. 安装完成后，将CMake的bin目录添加到系统的PATH环境变量中（通常在安装过程中会询问是否添加）。
4. 打开命令提示符或PowerShell，输入`cmake --version`检查CMake是否安装成功。
4.2. 克隆项目到本地：

## 5. 注意事项

该Demo以RM65-B型号机械臂为例，请根据实际情况修改代码中的数据。

## 6. 使用指南
### 1.参数配置

   打开`main.c` 文件，在main函数中可修改以下配置：

  - 配置机械臂及末端版本（默认为RM65标准版机械臂）：如果需要调用其它型号机械臂的算法，可配置`test_rm_algorithm_init`类的初始化参数。
    - `rm_robot_arm_model_e`参数指定了机械臂的型号，例如RM65机械臂则修改为：`RM_MODEL_RM_65_E`。
    - `rm_force_type_e`参数指定了机械臂末端版本，例如六维力版本则修改该参数为`rm_force_type_e Type = RM_MODEL_RM_B_E;`。
  - 配置基座安装角度（默认为正装）：通过`rm_algo_set_angle`方法设置机械臂的初始安装姿态
  - 配置工作坐标系（不设置则按照出厂默认的参数进行计算）：通过`rm_algo_set_workframe`方法修改工作坐标系。
  - 配置工具坐标系（不设置则按照出厂默认的参数进行计算）：通过`rm_algo_set_toolframe`方法修改工具坐标系。

### 2.快速运行

**1.配置机械臂IP地址**

- 打开 `main.c` 文件，在 `main` 函数中修改 `robot_ip_address` 类的初始化参数为当前机械臂的IP地址，默认IP地址为 `"192.168.1.18"`。

  ```C
  const char *robot_ip_address = "192.168.1.18";
  int robot_port = 8080;
  rm_robot_handle *robot_handle = rm_create_robot_arm(robot_ip_address, robot_port);
  ```

**2.运行**

- Linux下
在终端进入 `RMDemo_SimpleProcess` 目录，输入以下命令运行C程序：

  ```bash
  chmod +x run.sh
  ./run.sh
  ```

- Windows下
  进入 `RMDemo_SimpleProcess` 目录，双击运行run.bat文件。

### 3.代码说明

下面是 `main.c` 文件的主要功能：

- **手动设置工作坐标系**
  实现手动设置名为 `"WorkTest"` 的工作坐标系，位姿为 `[0, 0, 0, 0, 0, 0]`。
    ```C
    rm_frame_t coord_work;
    coord_work.pose.position.x = 0.0f;
    coord_work.pose.position.y = 0.0f;
    coord_work.pose.position.z = 0.0f;
    coord_work.pose.quaternion.w = 0.0f;
    coord_work.pose.quaternion.x = 0.0f;
    coord_work.pose.quaternion.y = 0.0f;
    coord_work.pose.quaternion.z = 0.0f;
    coord_work.pose.euler.rx = 0.0f;
    coord_work.pose.euler.ry = 0.0f;
    coord_work.pose.euler.rz = 0.0f;
    coord_work.payload = 0.0f;
    rm_algo_set_workframe(&coord_work);
    ```

- **逆解函数**
  实现xxxxxxxxxx。
    ```C
    rm_inverse_kinematics_params_t inverse_params;
    float q_in_joint[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    float q_in_pose[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    memcpy(inverse_params.q_in, q_in_joint, sizeof(q_in_joint));
    inverse_params.q_pose.position.x = 0.3f;
    inverse_params.q_pose.position.y = 0.0f;
    inverse_params.q_pose.position.z = 0.3f;
    inverse_params.q_pose.quaternion.w = 0.0f;
    inverse_params.q_pose.quaternion.x = 0.0f;
    inverse_params.q_pose.quaternion.y = 0.0f;
    inverse_params.q_pose.quaternion.z = 0.0f;
    inverse_params.q_pose.euler.rx = 3.14f;
    inverse_params.q_pose.euler.ry = 0.0f;
    inverse_params.q_pose.euler.rz = 0.0f;
    inverse_params.flag = 1;
    result = rm_algo_inverse_kinematics(&handle, inverse_params, q_in_pose);
    ```

### 6.3. 运行结果示例

运行脚本后，输出结果如下所示：

```C
  API Version: 0.3.0.
  Test initialization of algorithm dependency data...
  Set robot arm model to 0, sensor model to 0: Success
  Installation pose set successfully
  Work frame set successfully
  Set work frame pose: [0.00, 0.00, 0.00]
  Tool frame set successfully
  Set tool frame pose: [0.00, 0.00, 0.00]
  Forward kinematics calculation: Success
  Joint angles: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
  End effector pose: Position(-0.00, 0.00, 0.85), Quaternion(0.00, -0.00, 0.00, 1.00), Euler angles(0.00, 0.00, 3.14)
  Inverse Kinematics: [0.043802, -21.288101, -78.314949, -0.092543, -80.397034, 0.059240]
  Euler to Quaternion:: [w: 0.000296, x: 1.000000, y: 0.000000, z: 0.000000]
  Quaternion to Euler: [rx: 0.000000, ry: -0.000000, rz: 3.141593]
```

**支持渠道**：

- 开发者论坛/社区：[链接地址](https://bbs.realman-robotics.cn)

- API文档：详见`rm_interface.h`文件。

## 6. 许可证信息

- 本项目遵循MIT许可证。

## 7. 常见问题解答（FAQ）

- **Q:** 如何解决编译错误？
  **A:** 请确保您的编译器版本和依赖库满足系统要求，并按照安装说明重新配置环境。

- **Q:** 如何连接机器人？
  **A:** 请参考示例代码中的连接步骤，确保机器人IP地址和端口正确配置。

- **Q:** 需要连接真实机械臂吗 有啥前置条件？
  **A:** 算法接口有两种用法，一种连机械臂用、一种不连。基于这两个用法去测，连接机械臂后可以直接调用正逆解计算接口，会自动获取机械臂当前坐标系、安装角度进行计算。不连接机械臂时，需要调用algo_init_sys_data以及其他其他设置坐标系等接口之后，再去计算。
