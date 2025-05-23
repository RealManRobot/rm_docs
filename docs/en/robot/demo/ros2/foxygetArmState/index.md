# <p class="hidden">Demo (ROS2): </p>Demo of Getting the Robotic Arm State `Get_Arm_State_Demo`

## 1. Project introduction

This project is designed to get the current controller version, joint state, pose state, and 6-DoF force state of the robotic arm based on the robotic arm and ROS package. The program will execute the commands to get the controller version, robotic arm state, and 6-DoF force state successively, and the corresponding data will be printed in the terminal. Its purpose is to enable ROS developers to quickly master and flexibly use the robotic arm.

## 2. Code structure

```
├── CMakeLists.txt                    <-CMake build file
├── launch                            <-Launch folder
│   └── get_arm_state_demo.launch.py         <-Launch file
├── LICENSE                           <-Version description
├── package.xml                       <-Dependency folder
├── README.md                         <-Readme
└── src                               <-C++ source code folder
    └── api_Get_Arm_State_demo.cpp           <-Source code file
```

## 3. Project download

Download the project file locally via the following project link: [ros2_rm_robot](https://github.com/RealManRobot/ros2_rm_robot/tree/foxy)

## 4. Environment configuration

| Item | Description |
| :-- | :-- |
| Operating system | Ubuntu20.04 |
| ROS version | foxy |
| Dependency | ROS2-foxy package of the robotic arm  |

**Configuration procedures**

1. Prepare the virtual machine or other devices equipped with the Ubuntu20.04 operating system.
2. Install the ROS2 environment [foxy](https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html), or refer to the installation instructions in the ROS2-foxy package for details.
3. ROS2-foxy package installation

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
    source ./install/setup.bash
    ```

## 5. User guide

* **Usage of command lines**:

    Launch the following rm_driver package of the robotic arm in one terminal:
    ```
    ros2 launch rm_driver rm_<arm_type>_driver.launch.py
    ```

    The <arm_type> is optional for 65, 63, eco65, 75, gen72, and others according to the actual device used.
    Launch the following get_arm_state package of the robotic arm in another terminal:
    ```
    ros2 launch get_arm_state get_arm_state_demo.launch.py
    ```

* **Return information**:

    The following prompts will appear when the program runs successfully.
    ```
    [rm_get_arm_state_demo-1] [INFO] [1722912567.024745517] [get_state]: joint state is: [0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000]       //Angle of the robotic arm
    [rm_get_arm_state_demo-1] 
    [rm_get_arm_state_demo-1] [INFO] [1722912567.024994866] [get_state]: pose state is: [0.000000, 0.000000, 0.534000, 3.141000, 0.000000, 0.000000]                //Pose (Euler angle) of the robotic arm
    [rm_get_arm_state_demo-1] 
    [rm_get_arm_state_demo-1] [INFO] [1722912567.025200125] [get_state]: joint state is: [0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000, 0.000000]      //Radian of the robotic arm
    [rm_get_arm_state_demo-1] 
    [rm_get_arm_state_demo-1] [INFO] [1722912567.025321800] [get_state]: pose state is:   //Pose (quaternion) of the robotic arm
    [rm_get_arm_state_demo-1] [position.x = 0.000000,
    [rm_get_arm_state_demo-1]  position.y = 0.000000,
    [rm_get_arm_state_demo-1]  position.z = 0.534000,
    [rm_get_arm_state_demo-1]  orientation.x = 1.000000,
    [rm_get_arm_state_demo-1]  orientation.y = 0.000000,
    [rm_get_arm_state_demo-1]  orientation.z = 0.000000,
    [rm_get_arm_state_demo-1]  orientation.w = 0.000296]
    [rm_get_arm_state_demo-1] 
    [rm_get_arm_state_demo-1] [INFO] [1722912567.025408782] [get_state]: Planversion is 7B0156       //Controller version (7: DoF, b: non-6-DoF force, 156: controller version 1.5.6)
    [rm_get_arm_state_demo-1]  
    [rm_get_arm_state_demo-1] [INFO] [1722912567.025463071] [get_state]: Productversion is GEN72-BI  //Model of the robotic arm
    ```

## 6. Key code description

The following are the main functions of the `api_Get_Arm_State_demo.cpp`:

- **Initialization**

    Joint state publisher of the robotic arm
    ```
    rclcpp::Publisher<std_msgs::msg::Empty>::SharedPtr arm_state_publisher_;
    ```

    Software version publisher of the robotic arm
    ```
    rclcpp::Publisher<std_msgs::msg::Empty>::SharedPtr arm_software_version_publisher_;
    ```

    6-DoF force state publisher of the robotic arm
    ```
    rclcpp::Publisher<std_msgs::msg::Empty>::SharedPtr get_force_data_publisher_;
    ```

    Initial joint state subscriber
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Armoriginalstate>::SharedPtr subscription_original_state;
    ```

    Joint state subscriber
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Armstate>::SharedPtr subscription_arm_state;
    ```

    Controller version subscriber
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Armsoftversion>::SharedPtr subscription_software_version;
    ```

    State subscriber of the 6-DoF force sensor
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Sixforce>::SharedPtr subscription_force_data;
    ```

    Force state subscriber of the 6-DoF force system
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Sixforce>::SharedPtr subscription_zero_force_data;
    ```

    Force state subscriber of the 6-DoF force work frame
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Sixforce>::SharedPtr subscription_work_force_data;
    ```

    Force state subscriber of the 6-DoF force tool frame
    ```
    rclcpp::Subscription<rm_ros_interfaces::msg::Sixforce>::SharedPtr subscription_tool_force_data;
    ```

- **Callback function**
    After receiving the version of the robotic arm, execute the message callback function

    Work frame change function
    ```
    void get_arm_state();
    ```

    Result callback function of the original robotic arm state
    ```
    void GetArmOriginalState_Callback(const rm_ros_interfaces::msg::Armoriginalstate::SharedPtr msg);
    ```

    Result callback function of the robotic arm state
    ```
    void GetArmState_Callback(const rm_ros_interfaces::msg::Armstate::SharedPtr msg);
    ```

    Result callback function of the controller version
    ```
    void GetArmSoftwareVersion_Callback(const rm_ros_interfaces::msg::Armsoftversion::SharedPtr msg);
    ```

    Result callback function of the 6-DoF force sensor
    ```
    void ForceData_Callback(const rm_ros_interfaces::msg::Sixforce::SharedPtr msg);
    ```

    Result callback function of the 6-DoF force system
    ```
    void ZeroForceData_Callback(const rm_ros_interfaces::msg::Sixforce::SharedPtr msg);
    ```

    Result callback function of the 6-DoF force work frame
    ```
    void WorkForceData_Callback(const rm_ros_interfaces::msg::Sixforce::SharedPtr msg);
    ```

    Result callback function of the 6-DoF force tool frame
    ```
    void ToolForceData_Callback(const rm_ros_interfaces::msg::Sixforce::SharedPtr msg);
    ```
