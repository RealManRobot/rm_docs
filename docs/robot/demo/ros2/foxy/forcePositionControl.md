# 力位混合控制规划`ARM_FORCE_POSITION_CONTROL_DEMO`

---

## **1.项目介绍**

本项目是一个基于机械臂机械臂本体和ROS功能包实现力位混合控制规划运动功能（该功能适用于类似于MoveL的笛卡尔运动，不适用与MoveJ等关节运动），程序在执行时会依次执行开启力位混合控制，进行笛卡尔运动，关闭力位混合控制的操作，目的是使ROS开发者迅速掌握并灵活运用机械臂。

## **2. 代码结构**

```
├── CMakeLists.txt                           <-CMake编译文件
├── launch                                   <-启动文件夹
│   └── force_position_control_demo.launch   <-启动文件
├── LICENSE                                  <-版本说明
├── package.xml                              <-依赖描述文件夹
├── README.md                                <-说明文档
└── src                                      <-C++源码文件夹
    └── api_force_position_control_demo.cpp  <-源码文件
```

## 3. 项目下载

通过项目链接下载本项目工程文件到本地：[wwwwwwwwwwwwwwwwwww]()

## 4. 环境配置

| 项目 | 内容 |
| :-- | :-- | 
| 系统 | Ubuntu18.04或20.04 |
| ROS版本 | foxy |
| 依赖 | 机械臂的ROS2-foxy功能包 |

**配置过程**

1. 首先需要准备好Ubuntu18.04或Ubuntu20.04操作系统的虚拟机或其他设备。
2. 安装ROS2环境[foxy](#https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html),也可参考ROS2-foxy功能包中的安装说明进行安装。
3. ROS2-Foxy功能包安装
    建工作空间和src文件夹
    ```
    mkdir -p ~/ros2_ws/src
    ```

    将ROS2文件复制到src文件夹中
    ```
    cp -r ros2_rm_robot ~/ros2_ws/src
    ```

    进入工作空间
    ```
    cd ~/ros2_ws
    ```

    编译rm_ros_interfaces功能包
    ```
    colcon build --packages-select rm_ros_interfaces
    ```

    声明环境变量
    ```
    source ./install/setup.bash
    ```

    编译所有功能包
    ```
    colcon build
    ```
    
    再次声明环境变量
    ```
    ource ./install/setup.bash
    ```

4. demo功能包安装
    新建工作空间和src文件，将ROS1文件放入src中
    ```
    mkdir -p ~/demo_ws/src
    ```

    进入工作空间
    ```
    cd ~/demo_ws/src
    ```

    编译force_position_control功能包
    ```
    colcon build force_position_control
    ```

    声明环境变量
    ```
    source ~/demo_ws/install/setup.bash
    ```
## **5. 使用指南**

* **命令行使用**：

    我们需要在一个终端中启动机械臂的rm_driver功能包。
    ```
    ros2 launch rm_driver rm_<arm_type>_driver.launch.py
    ```
    <arm_type>可以为65、63、eco65、75、gen72，可对照自己使用的设备进行实际选择
    我们需要在另一个终端中启动机械臂的force_position_control功能包。
    ```
    ros2 launch force_position_control force_position_control_demo.launch.py
    ```
* **返回信息**：

    在程序成功运行时将会出现以下提示信息。
    ```
    [rm_force_position_control-1] [INFO] [1722914114.076652595] [Force_Position_Control_sub_node]: *******Movej_p succeeded      //Movej_p运动成功提示
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914114.248853737] [Force_Position_Control_sub_node]: *******Set Force Postion succeeded  //力位混合控制设置成功提示
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.432832020] [Force_Position_Control_sub_node]: *******MoveL succeeded       //Movel运动成功提示
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.548136946] [Force_Position_Control_sub_node]: *******Stop Force Postion succeeded  //结束力位混合控制设置成功提示
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.647943527] [Force_Position_Control_pub_node]: *******All step run over      //指令运行完成提示
    ```

* **关键代码说明**：

下面是 `api_force_position_control_demo.cpp` 文件的主要功能：

- **初始化**
相关发布订阅信息初始化

    声明movej_p运动订阅器
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movej_p_subscription_;
    ```

    声明movel运动订阅器
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movel_subscription_;
    ```

    声明力位混合控制订阅器
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr set_force_postion_subscription_;
    ```

    明停止力位混合控制订阅器
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr stop_force_postion_subscription_;
    ```

    声明Movej_p运动发布器
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movejp>::SharedPtr movej_p_publisher_;
    ```

    声明Movel运动发布器
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movel>::SharedPtr movel_publisher_;
    ```

    声明力位混合控制发布器
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Setforceposition>::SharedPtr set_force_postion_publisher_;
    ```

    声明停止力位混合控制发布器
    ```
    rclcpp::Publisher<std_msgs::msg::Bool>::SharedPtr stop_force_postion_publisher_;
    ```

- **回调函数**
接收到订阅的机械臂执行状态消息后，会进入消息回调函数

    Movej_p运动结果回调函数
    ```
    void MoveJPDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    力位混合控制结果回调函数
    ```
    void SetForcePostionDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    Movel运动结果回调函数
    ```
    void MoveLDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    停止力位混合控制结果回调函数
    ```
    void StopForcePostionDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

- **发布MoveJ_P指令**
发布MoveJ_P指令使机械臂运动到目标位姿。

    ```ROS
    this->movej_p_publisher_->publish(moveJ_P_TargetPose);
    ```

- **发布开启力位混合指令**
设置机械臂开启力位混合指令。

    ```ROS
    this->set_force_postion_publisher_->publish(forceposition_data);
    ```

- **发布MoveL指令**
发布MoveL指令使机械臂运动到目标位姿。

    ```ROS
    this->movel_publisher_->publish(moveL_TargetPose);
    ```

- **发布关闭力位混合指令**
发布MoveL指令使机械臂运动到目标位姿。

    ```ROS
    this->stop_force_postion_publisher_->publish(stop_force_postion_data);
    ```

## **6. 许可证信息**

* 具体许可证内容请参见`LICENSE`文件。
