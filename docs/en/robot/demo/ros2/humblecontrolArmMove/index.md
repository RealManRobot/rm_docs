# <p class="hidden">Demo (ROS2): </p>Demo of the Robotic Arm Motion Control `Arm_Move_Demo`

## 1. Project introduction

This project is designed to execute the MoveJ, MoveJ_P, MoveL, and MoveC functions based on RM65 and RM75 robotic arms and ROS packages. The program will execute the MoveJ (joint motion), MoveJ_P (pose motion), MoveL (linear motion), and MoveC (circular motion) commands successively, and relevant prompts will appear on the terminal when the execution succeeds or fails. Its purpose is to enable ROS developers to quickly master and flexibly use the robotic arm.

## 2. Code structure

```
├── CMakeLists.txt                    <-CMake build file
├── launch                            <-Launch folder
│   ├── rm_65_move.launch.py               <-Launch file (RM65)
│   └── rm_75_move.launch.py               <-Launch file (RM75)
├── LICENSE                           <-Version description
├── package.xml                       <-Dependency folder
├── README.md                         <-Readme
└── src                               <-C++ source code folder
    └── api_Move_demo.cpp                    <-Source code file
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

    Create a new workspace and src file
    ```
    mkdir -p ~/ros2_ws/src
    ```

    Copy the ROS2 file into the src file
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
    source ./install/setup.bash
    ```

## 5. User guide

* **Usage of command lines**:

    Launch the following rm_driver package of the robotic arm in one terminal:

    ```
    ros2 launch rm_driver rm_<arm_type>_driver.launch.py
    ```

    The <arm_type> is optional for 65, 63, eco65, 75, gen72, and others according to the actual device used.
    Execute the following launch commands for the RM65 robotic arm:

    ```
    ros2 launch control_arm_move rm_65_move.launch.py
    ```

    Execute the following launch commands for the RM75 robotic arm:

    ```
    ros2 launch control_arm_move rm_75_move.launch.py
    ```

    ::: tip
    If it is not RM65 or RM75, the robotic arm may not reach the point, which is a normal phenomenon.
    :::

* **Return information**:

    The following prompts will appear when the program runs successfully.
    ```
    [move_demo-1] [INFO] [1722921182.157890965] [Move_demo_pub_node]: arm_dof is 7             //Prompt for the DoF of the current robotic arm
    [move_demo-1]
    [move_demo-1] [INFO] [1722921188.120872813] [Move_demo_sub_node]: *******Movej succeeded   //Prompt for the MoveJ succeeded
    [move_demo-1]
    [move_demo-1] [INFO] [1722921191.708291782] [Move_demo_sub_node]: *******Movej_p succeeded //Prompt for the MoveJ_P succeeded
    [move_demo-1]
    [move_demo-1] [INFO] [1722921193.977513811] [Move_demo_sub_node]: *******MoveL succeeded   //Prompt for the MoveL succeeded
    [move_demo-1]
    [move_demo-1] [INFO] [1722921194.075138936] [Move_demo_sub_node]: *******MoveC succeeded   //Prompt for the MoveC succeeded
    ```

## 6. Key code description

The following are the main functions of the `api_Move_demo.cpp`:

- **Initialization**

    Initialize the relevant publication and subscription information

    Publisher for MoveJ_P command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movejp>::SharedPtr movej_p_publisher_;
    ```

    Publisher for MoveL command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movel>::SharedPtr movel_publisher_;
    ```

    Publisher for MoveJ command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movej>::SharedPtr movej_publisher_;
    ```

    Publisher for MoveC command
    ```
    rclcpp::Publisher<rm_ros_interfaces::msg::Movec>::SharedPtr movec_publisher_;
    ```

    Subscriber for MoveJ_P command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movej_p_subscription_;
    ```

    Subscriber for MoveL command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movel_subscription_;
    ```

    Subscriber for MoveJ command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movej_subscription_;
    ```

    Subscriber for MoveC command
    ```
    rclcpp::Subscription<std_msgs::msg::Bool>::SharedPtr movec_subscription_;
    ```

- **Callback function**

    After receiving the version of the robotic arm, execute the message callback function

    Constructor function
    ```
    MoveDemoSub();
    ```

    MoveJ_P result callback function
    ```
    void MoveJPDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    MoveL result callback function
    ```
    void MoveJDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    MoveJ result callback function
    ```
    void MoveLDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

    MoveC result callback function
    ```
    void MoveCDemo_Callback(const std_msgs::msg::Bool::SharedPtr msg);
    ```

- **Publish the MoveJ command**

    Publish the MoveJ command to move the robotic arm to a target pose.

    ```ROS
    this->movej_publisher_->publish(movej_way);
    ```

- **Publish the MoveJ_P command**

    Publish the MoveJ_P command to move the robotic arm to a target pose.

    ```ROS
    this->movej_p_publisher_->publish(moveJ_P_TargetPose);
    ```

- **Publish the MoveL command**

    Publish the MoveL command to move the robotic arm to a target pose.

    ```ROS
    this->movel_publisher_->publish(moveL_TargetPose);
    ```

- **Publish the MoveC command**

    Publish the MoveC command to move the robotic arm to a target pose.

    ```ROS
    this->movec_publisher_->publish(moveC_TargetPose);
    ```
