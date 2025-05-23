# <p class="hidden">Demo (ROS2)：</p>Demo of Force-position Hybrid Control Planning `Arm_Force_Position_Control_Demo`

## 1. Project introduction

This project is designed to realize the force-position hybrid control planning (available for the Cartesian motion similar to MoveL, but not for joint motion such as MoveJ) based on RM65 and RM75 robotic arms and ROS packages. The program will start the force-position hybrid control, execute the Cartesian motion, and stop the force-position hybrid control successively. Its purpose is to enable ROS developers to quickly master and flexibly use the robotic arm.

## 2. Code structure

```
├── CMakeLists.txt                    <-CMake build file
├── launch                            <-Launch folder
│   └── force_position_control_demo.launch   <-Launch file
├── LICENSE                           <-Version description
├── package.xml                       <-Dependency folder
├── README.md                         <-Readme
└── src                               <-C++ source code folder
    └── api_force_position_control_demo.cpp  <-Source code file
```

## 3. Project download

Download the project file locally via the following project link: [ros2_rm_robot](https://github.com/RealManRobot/ros2_rm_robot/tree/humble)

## 4. Environment configuration

| Item | Description |
| :-- | :-- |
| Operating system | Ubuntu22.04 |
| ROS version | humble |
| Dependency | ROS2-humble package of the robotic arm  |

**Configuration procedures**

1. Prepare the virtual machine or other devices equipped with the Ubuntu22.04 operating system.
2. Install the ROS2 environment [humble](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html), or refer to the installation instructions in the ROS2-humble package for details.
3. ROS2-humble package installation

    Create a new workspace and src folder
    ```
    mkdir -p ~/ros2_ws/src
    ```

    Copy the ROS2 file to the src folder
    ```
    cp -r ros2_rm_robot ~/ros2_ws/src
    ```

    Enter the workspace
    ```
    cd ~/ros2_ws
    ```

    Build the rm_ros_interfaces package
    ```
    colcon build --packages-select rm_ros_interfaces
    ```

    Declare environment variables
    ```
    source ./install/setup.bash
    ```

    Build all packages
    ```
    colcon build
    ```

    Declare environment variables again
    ```
    ource ./install/setup.bash
    ```

## 5. User guide

* **Usage of command lines**:

    Launch the following rm_driver package of the robotic arm in one terminal:

    ```
    ros2 launch rm_driver rm_<arm_type>_driver.launch.py
    ```

    The <arm_type> is optional for 65, 63, eco65, 75, gen72, and others according to the actual device used.
    Launch the following force_position_control package of the robotic arm in another terminal:

    ```
    ros2 launch force_position_control force_position_control_demo.launch.py
    ```

    ::: tip
    If it is not RM65 or RM75, the robotic arm may not reach the point, which is a normal phenomenon.
    :::

* **Return information**:

    The following prompts will appear when the program runs successfully.
    ```
    [rm_force_position_control-1] [INFO] [1722914114.076652595] [Force_Position_Control_sub_node]: *******Movej_p succeeded      //Prompt for the MoveJ_P succeeded
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914114.248853737] [Force_Position_Control_sub_node]: *******Set Force Postion succeeded  //Prompt for successful setting of starting the force-position hybrid control
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.432832020] [Force_Position_Control_sub_node]: *******MoveL succeeded       //Prompt for the MoveL succeeded
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.548136946] [Force_Position_Control_sub_node]: *******Stop Force Postion succeeded  //Prompt for successful setting of stopping the force-position hybrid control
    [rm_force_position_control-1] 
    [rm_force_position_control-1] [INFO] [1722914116.647943527] [Force_Position_Control_pub_node]: *******All step run over      //Prompt for all commands completed
    ```

## 6. Key code description

The following are the main functions of the `api_force_position_control_demo.cpp`:

- **Initialization**

    Initialize the relevant publication and subscription information

    Subscriber for MoveJ_P command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movej_p_subscription_;
    ```

    Subscriber for MoveL command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movel_subscription_;
    ```

    Subscriber for starting the force-position hybrid control command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr set_force_postion_subscription_;
    ```

    Subscriber for stopping the force-position hybrid control command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr stop_force_postion_subscription_;
    ```

    Publisher for MoveJ_P command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movejp>::SharedPtr movej_p_publisher_;
    ```

    Publisher for MoveL command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movel>::SharedPtr movel_publisher_;
    ```

    Publisher for starting the force-position hybrid control command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Setforceposition>::SharedPtr set_force_postion_publisher_;
    ```

    Publisher for stopping the force-position hybrid control command
    ```
    rclcpp::Publisher<std_msgs::msg::Bool>::SharedPtr stop_force_postion_publisher_;
    ```

- **Callback function**

    After receiving the subscribed execution state of the robotic arm, execute the message callback function

    MoveJ_P result callback function
    ```
    void MoveJPDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    Result callback function of starting the force-position hybrid control
    ```
    void SetForcePostionDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    MoveL result callback function
    ```
    void MoveLDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    Result callback function of stopping the force-position hybrid control
    ```
    void StopForcePostionDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

- **Publish the MoveJ_P command**

    Publish the MoveJ_P command to move the robotic arm to a target pose.

    ```ROS
    this->movej_p_publisher_->publish(moveJ_P_TargetPose);
    ```

- **Publish the starting force-position hybrid control command**

    Publish the command to enable the force-position hybrid control of the robotic arm.

    ```ROS
    this->set_force_postion_publisher_->publish(forceposition_data);
    ```

- **Publish the MoveL command**

    Publish the MoveL command to move the robotic arm to a target pose.

    ```ROS
    this->movel_publisher_->publish(moveL_TargetPose);
    ```

- **Publish the stopping force-position hybrid control command**

    Publish the stopping force-position hybrid control command.

    ```ROS
    this->stop_force_postion_publisher_->publish(stop_force_postion_data);
    ```
