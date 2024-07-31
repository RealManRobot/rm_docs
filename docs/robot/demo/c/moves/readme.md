# 样条曲线运动示例

## **1. 项目介绍**
本项目是一个使用睿尔曼C开发包, 演示了样条曲线运动的使用。该项目使用 CMake 构建，支持使用三个或更多点来演示样条曲线运动


## **2. 代码结构**
```
RMDemo_Moves
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

## **5. 注意事项**

1. 该Demo以RM65-B型号机械臂为例，请根据实际情况修改代码中的数据。
2. moves样条曲线运动，其中的轨迹连接标志最后一个为0，前面的均为1，如果都为0则为movel直线运动。

## **6. 使用指南**

### **6.1. 快速运行**

按照以下步骤快速运行代码：

1. **配置机械臂IP地址**：打开 `main.c` 文件，在 `main` 函数中修改 `robot_ip_address` 类的初始化参数为当前机械臂的IP地址，默认IP地址为 `"192.168.1.18"`。

    ```C
    const char *robot_ip_address = "192.168.1.18";
    int robot_port = 8080;
    rm_robot_handle *robot_handle = rm_create_robot_arm(robot_ip_address, robot_port);
    ```

2. **命令行运行**：在终端进入 `RMDemo_Moves` 目录，输入以下命令运行C程序：
   2.1 Linux下
* ```bash
    chmod +x run.sh
   ./run.sh
    ```

2.2  Windows下: 双击运行 run.bat


### **6.2. 代码说明**

下面是 `main.c` 文件的主要功能：

- **连接机械臂**

    ```C
    rm_robot_handle *robot_handle = rm_create_robot_arm(robot_ip_address, robot_port);
    ```
  连接到指定IP和端口的机械臂。

- **获取API版本**

    ```C
    char *api_version = rm_api_version();
    printf("API Version: %s.\n", api_version);
    ```
  获取并显示API版本。


- **执行movej运动**

    ```C
    float joint_angles_start[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    movej(robot_handle, joint_angles_start, 20, 0, 1, 0);
    ```

- **执行movej_p运动**

    ```C
    rm_pose_t pose;
    pose.position.x = -0.3f;
    pose.position.y = 0.0f;
    pose.position.z = 0.3f;
    pose.euler.rx = 3.14f;
    pose.euler.ry = 0.0f;
    pose.euler.rz = 0.0f;
    movej_p(robot_handle, pose, 20, 0, 1, 0);
    ```

- **执行moves运动**

    ```C
    rm_pose_t move_positions[] = {
            {{-0.3f, 0.0f, 0.3f}, {0, 0, 0, 0}, {3.14f, 0.0f, 0.0f}},
            {{-0.27f, -0.22f, 0.3f}, {0, 0, 0, 0}, {3.14f, 0.0f, 0.0f}},
            {{-0.314f, -0.25f, 0.2f}, {0, 0, 0, 0}, {3.14f, 0.0f, 0.0f}},
            {{-0.239f, 0.166f, 0.276f}, {0, 0, 0, 0}, {3.14f, 0.0f, 0.0f}},
            {{-0.239f, 0.264f, 0.126f}, {0, 0, 0, 0}, {3.14f, 0.0f, 0.0f}}
    };
    int num_positions = sizeof(move_positions) / sizeof(move_positions[0]);

    execute_moves(robot_handle, move_positions, num_positions, 20, 1);
  
    ```
  
- 执行moves运动，沿多点轨迹进行样条曲线移动。 轨迹如下图所示
- ![Moves_trajectoryConnect](Moves_trajectoryConnect.png)

- 当 trajectory_connect 为 0时候 会如下：
-   ![Moves_trajectory](Moves_trajectory.png)
- 
- **断开机械臂连接**

    ```C
    disconnect_robot_arm(robot_handle);
    ```

### **6.3. 运行结果示例**

运行脚本后，输出结果如下所示：
```
API Version: 0.3.0.
Robot handle created successfully: 1
movej motion succeeded
INFO: movej: Operation successful
movej_p motion succeeded
INFO: movej_p: Operation successful
INFO: moves: Operation successful
moves motion succeeded
INFO: moves: Operation successful
moves motion succeeded
INFO: moves: Operation successful
moves motion succeeded
INFO: moves: Operation successful
moves motion succeeded
INFO: moves: Operation successful
moves motion succeeded
moves operation succeeded
INFO: get_robot_pose: Operation successful
Current robot pose: Position [-0.238786, 0.166277, 0.275834], Orientation [3.140000, -0.002000, 0.000000]
INFO: disconnect_robot_arm: Operation successful
```



* **支持渠道**：

  + 开发者论坛/社区：[链接地址](https://bbs.realman-robotics.cn)
  +

- API文档：详见`rm_interface.h`文件。


## **7. 许可证信息**

* 本项目遵循MIT许可证。

## **8. 常见问题解答（FAQ）**


- **Q:** 如何解决编译错误？
  **A:** 请确保您的编译器版本和依赖库满足系统要求，并按照安装说明重新配置环境。

- **Q:** 如何连接机器人？
  **A:** 请参考示例代码中的连接步骤，确保机器人IP地址和端口正确配置。

- **Q:** 样条曲线运动3个点以上？
  **A:** 对于样条曲线运动，最后一段轨迹的连接标志应为 0，而之前的应为 1。如果全部为 0，将进行线性运动。样条曲线运动需至少连续下发三个点位（trajectory_connect设置为1），否则运动轨迹为直线

- **Q:** libapi_c.so 未找到？
  **A:** 请参考示例代码 路径问题：确保所有路径（包括头文件目录和库文件目录）都是正确的。
  库文件问题：确保 libapi_c.so（在 Unix 系统上）或 api_c.dll（在 Windows 系统上）位于 ./Robotic_Arm/lib 目录下。
  权限问题：确保你有权限读取所有相关文件和目录。
