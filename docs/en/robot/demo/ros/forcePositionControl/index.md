# <p class="hidden">Demo (ROS)：</p>Demo of Force-position Hybrid Control Planning `Arm_Force_Position_Control_Demo`

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

Download the project file locally via the following project link: [ARM_FORCE_POSITION_CONTROL_DEMO](https://github.com/RealManRobot/rm_robot/tree/main/rm_arm_examples/force_position_control)

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

- **Usage of command lines**:

    Launch the following rm_driver package of the robotic arm in one terminal:

    ```
    roslaunch rm_driver rm_<arm_type>_driver.launch.
    ```

    The <arm_type> is optional for 65, 63, eco65, 75, gen72, and others according to the actual device used.
    Launch the following force_position_control package of the robotic arm in another terminal:

    ```
    roslaunch force_position_control force_position_control_demo.launch
    ```

- **Return information**:

    The following prompts will appear when the program runs successfully.

    ```
    [ INFO] [1722825453.472184452]: MoveJ_P start.                                  //Prompt for the start of MoveJ_P
    [ INFO] [1722825454.296426967]: The first trajectory MoveJ_P has been executed  //Prompt for execution completed
    [ INFO] [1722825454.296717308]: Set Force Position start.                       //Prompt for the start setting of force-position hybrid control
    [ INFO] [1722825454.303498227]: ForcePosition set success                       //Prompt for execution completed
    [ INFO] [1722825455.297280029]: MoveL start                                     //Prompt for the start of MoveL
    [ INFO] [1722825456.116331900]: MoveL has been executed                         //Prompt for execution completed
    [ INFO] [1722825456.116422581]: Stop Force Position start.                      //Prompt for the stop setting of force-position hybrid control
    [ INFO] [1722825456.121557936]: StopForcePosition set success                   //Prompt for execution completed
    [ INFO] [1722825456.121631421]: *******All command is over please click ctrl+c end******* //Prompt for all commands completed
    ```

## 6. Key code description

The following are the main functions of the `api_force_position_control_demo.cpp`:

- **Initialization**
Initialize the relevant publication and subscription information

    Publisher for the space planning command
    ```
    ros::Publisher MoveJ_P_pub = nh.advertise<rm_msgs::MoveJ_P>("/rm_driver/MoveJ_P_Cmd", 10);
    ```

    Publisher for start setting command of force-position hybrid control
    ```
    ros::Publisher SetForcePosition_pub = nh.advertise<rm_msgs::Set_Force_Position>("/rm_driver/SetForcePosition_Cmd", 10);
    ```

    Publisher for stop setting command of force-position hybrid control
    ```
    ros::Publisher StopForcePosition_pub = nh.advertise<std_msgs::Empty>("/rm_driver/StopForcePosition_Cmd", 10);
    ```

    Publisher for linear motion planning command
    ```
    moveL_pub = nh.advertise<rm_msgs::MoveL>("/rm_driver/MoveL_Cmd", 10);
    ```

    Execution state subscriber of the robotic arm 
    ```
    ros::Subscriber PlanState_sub = nh.subscribe("/rm_driver/Plan_State", 10, PlanState_Callback);
    ```

    Setting result subscriber for starting the force-position hybrid control of the robotic arm
    ```
    ros::Subscriber SetForcePosition_sub = nh.subscribe("/rm_driver/SetForcePosition_Result", 10, SetForcePosition_Callback);
    ```

    Setting result subscriber for stopping the force-position hybrid control of the robotic arm
    ```
    ros::Subscriber StopForcePosition_sub = nh.subscribe("/rm_driver/StopForcePosition_Result", 10, StopForcePosition_Callback);
    ```

- **Callback function**

    After receiving the subscribed execution state of the robotic arm, execute the message callback function
    ```
    void planStateCallback(const rm_msgs::Plan_State::ConstPtr& msg)
    ```

    After receiving the subscribed execution state of starting the force-position hybrid control of the robotic arm, execute the message callback function
    ```
    void planStateCallback(const rm_msgs::Plan_State::ConstPtr& msg)
    ```

    After receiving the subscribed execution state of stopping the force-position hybrid control of the robotic arm, execute the message callback function
    ```
    void SetForcePosition_Callback(const std_msgs::Bool& msg)
    ```

- **Publish the MoveJ_P command**

    Publish the MoveJ_P command to move the robotic arm to a target pose.

    ```
    MoveJ_P_pub.publish(moveJ_P_TargetPose);
    ```

- **Publish the starting force-position hybrid control command**

    Publish the command to enable the force-position hybrid control of the robotic arm.

    ```
    SetForcePosition_pub.publish(setForce_value);
    ```

- **Publish the MoveL command**

    Publish the MoveL command to move the robotic arm to a target pose.

    ```
    moveL_pub.publish(moveL_TargetPose);
    ```

- **Publish the stopping force-position hybrid control command**

    Publish the MoveL command to move the robotic arm to a target pose.

    ```
    StopForcePosition_pub.publish(empty_value);
    ```
