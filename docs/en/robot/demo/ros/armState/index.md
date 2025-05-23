# <p class="hidden">Demo (ROS): </p>Demo of Getting the Robotic Arm State `Get_Arm_State_Demo`

## 1. Project introduction

This project is designed to get the current controller version, joint state, pose state, and 6-DoF force state of the robotic arm based on the robotic arm and ROS package. The program will execute the commands to get the controller version, robotic arm state, and 6-DoF force state successively, and the corresponding data will be printed in the terminal. Its purpose is to enable ROS developers to quickly master and flexibly use the robotic arm.

## 2. Code structure

```
├── CMakeLists.txt                    <-CMake build file
├── launch                            <-Launch folder
│   └── get_arm_state_demo.launch     <-Launch file
├── LICENSE                           <-Version description
├── package.xml                       <-Dependency folder
├── README.md                         <-Readme
└── src                               <-C++ source code folder
    └── api_Get_Arm_State_demo.cpp    <-Source code file
```

## 3. Project download

Download the project file locally via the following project link: [GET_ARM_STATE_DEMO](https://github.com/RealManRobot/rm_robot/tree/main/rm_arm_examples/get_arm_state)

## 4. Environment configuration

| Item | Description |
| :-- | :-- |
| Operating system | Ubuntu18.04 or Ubuntu20.04 |
| ROS version | melodic or noetic |
| Dependency | ROS1 package |

**Configuration procedures**

1. Prepare the virtual machine or other devices equipped with the Ubuntu18.04 or Ubuntu20.04 operating system.
2. Install the ROS environment [melodic](https://wiki.ros.org/melodic/Installation/Ubuntu) or [noetic](https://wiki.ros.org/noetic/Installation/Ubuntu).
3. ROS1 package installation
    Create a new workspace and src file, and copy the ROS1 file to the src file

    ```
    mkdir -p ~/workspace_ws/src
    ```

    Enter the workspace

    ```
    cd ~/workspace_ws
    ```

    Build the rm_msgs package

    ```
    catkin build rm_msgs
    ```

    Declare environment variables

    ```
    source ~/workspace_ws/devel/setup.bash
    ```

    Build all packages

    ```
    catkin build
    ```

    Declare environment variables again

    ```
    source ~/workspace_ws/devel/setup.bash
    ```

## 5. User guide

* **Usage of command lines**:
    Launch the following rm_driver package of the robotic arm in one terminal:

    ```
    roslaunch rm_driver rm_<arm_type>_driver.launch.
    ```

    The <arm_type> is optional for 65, 63, eco65, 75, gen72, and others according to the actual device used.
    Launch the following get_arm_state package of the robotic arm in another terminal:

    ```
    roslaunch get_arm_state get_arm_state_demo.launch
    ```

* **Return information**:

    The following prompts will appear when the program runs successfully.

    ```
    [ INFO] [1722825911.690500489]: *******Get Arm Software Version Pub show on the rm_driver node.*******       //Running prompt for getting the controller version
    [ INFO] [1722825911.699439368]: Product_version is GEN72-BI                                                  //Robotic arm model
    [ INFO] [1722825911.699802395]: Plan_version is 7b0156                                                       //Controller version, 7: DoF, b: non-6-DoF force, 156: controller version 1.5.6
    [ INFO] [1722825912.693324232]: *******Get Arm State Pub*******                                              //Running prompt for getting the robotic arm state
    [ INFO] [1722825912.704657425]: joint angle state is: [14.971000, -12.197000, 18.629000, -83.942001, -5.688000, -6.010000, 24.881001]  //Current angle of the robotic arm

    [ INFO] [1722825912.704842087]: pose Euler angle is: [0.242000, 0.174000, 0.536000, 3.078000, -0.254000, 0.139000]                     //Current pose (Euler angle) of the robotic arm

    [ INFO] [1722825912.705156723]: joint angle state is: [0.261244, -0.212838, 0.325076, -1.464788, -0.099256, -0.104875, 0.434173]       //Current radian of the robotic arm

    [ INFO] [1722825912.705307193]: pose Quaternion is: [0.242178, 0.174678, 0.536134, 0.989331, 0.064833, 0.128479, 0.022668]             //Current pose (quaternion) of the robotic arm

    [ INFO] [1722825913.693883637]: *******Get Arm Six Force Pub*******                                          //Running prompt for getting the 6-DoF force state of the robotic arm (if the 6-DoF force sensor is installed, the data will be printed below, otherwise no data will be printed)
    [ INFO] [1722825914.694311968]: *******All command is over please click ctrl+c end*******                    //Prompt for all commands completed
    ```

## 6. Key code description

The following are the main functions of the `api_Get_Arm_State_demo.cpp`:

- **Initialization**

    Initialize the relevant publication and subscription information

    Publisher for getting the current version of the robotic arm

    ```
    ros::Publisher test_Get_Arm_Software_Version_pub = nh.advertise<std_msgs::Empty>("/rm_driver/Get_Arm_Software_Version", 10);
    ```

    Publisher for getting the current state of the robotic arm

    ```
    ros::Publisher test_Get_Arm_Base_State_pub = nh.advertise<rm_msgs::GetArmState_Command>("/rm_driver/GetArmState_Cmd", 10);
    ```

    Publisher for getting the 6-DoF force state of the robotic arm

    ```
    ros::Publisher test_Get_Arm_Six_Force_pub = nh.advertise<std_msgs::Empty>("/rm_driver/GetSixForce_Cmd", 10);
    ```

    Version subscriber of the robotic arm

    ```
    ros::Subscriber Arm_Software_Version_sub = nh.subscribe("/rm_driver/Get_Arm_Software_Version_Result", 10, Get_Arm_Software_Version_Callback);
    ```

    Current state (angle + Euler angle) subscriber of the robotic arm

    ```
    ros::Subscriber Arm_Base_State_sub = nh.subscribe("/rm_driver/ArmCurrentState", 10, Get_Arm_State_Callback);
    ```

    Current state (radian + quaternion) subscriber of the robotic arm

    ```
    ros::Subscriber Arm_New_State_sub = nh.subscribe("/rm_driver/Arm_Current_State", 10, GetArmState_Callback);
    ```

    Subscriber for the original 6-DoF force state of the robotic arm

    ```
    ros::Subscriber GetSixForceState_sub = nh.subscribe("/rm_driver/GetSixForce", 10, Get_Six_Force_Callback);
    ```

    Subscriber for the 6-DoF force state in the sensor frame of the robotic arm

    ```
    ros::Subscriber SixZeroForceState_sub = nh.subscribe("/rm_driver/SixZeroForce", 10, Get_Six_Zero_Force_Callback);
    ```

    Subscriber for the sensor data in the work frame of the robotic arm

    ```
    ros::Subscriber WorkZeroForceState_sub = nh.subscribe("/rm_driver/WorkZeroForce", 10, Get_Work_Zero_Force_Callback);
    ```

    Subscriber for the sensor data in the tool frame of the robotic arm

    ```
    ros::Subscriber ToolZeroForceState_sub = nh.subscribe("/rm_driver/ToolZeroForce", 10, Get_Tool_Zero_Force_Callback);
    ```

- **Callback function**

    After receiving the version of the robotic arm, execute the message callback function

    ```
    void Get_Arm_Software_Version_Callback(const rm_msgs::Arm_Software_Version msg)
    ```

    After receiving the state of the robotic arm, execute the message callback function (angle + Euler angle)

    ```
    void GetArmState_Callback(const rm_msgs::Arm_Current_State msg)
    ```

    After receiving the state of the robotic arm, execute the message callback function (radian + quaternion)

    ```
    void Get_Arm_State_Callback(const rm_msgs::ArmState msg)
    ```

    After receiving the 6-DoF force state of the robotic arm, execute the message callback function (original data)

    ```
    void Get_Six_Force_Callback(const rm_msgs::Six_Force msg)
    ```

    After receiving the 6-DoF force state of the robotic arm, execute the message callback function (force data of the system)

    ```
    void Get_Six_Zero_Force_Callback(const rm_msgs::Six_Force msg)
    ```

    After receiving the 6-DoF force state of the robotic arm, execute the message callback function (force data of the work frame)

    ```
    void Get_Work_Zero_Force_Callback(const rm_msgs::Six_Force msg)
    ```

    After receiving the 6-DoF force state of the robotic arm, execute the message callback function (force data of the tool frame)

    ```
    void Get_Tool_Zero_Force_Callback(const rm_msgs::Six_Force msg)
    ```

- **Publish a command to get the controller version**

    Publish a command to get the controller version

    ```
    test_Get_Arm_Software_Version_pub.publish(empty_value);
    ```

- **Publish a command to get the robotic arm state**

    Publish a command to get the robotic arm state

    ```
    test_Get_Arm_Base_State_pub.publish(command);
    ```

- **Publish a command to get the 6-DoF force state**

    Publish a command to get the 6-DoF force state

    ```
    test_Get_Arm_Six_Force_pub.publish(empty_value);
    ```
