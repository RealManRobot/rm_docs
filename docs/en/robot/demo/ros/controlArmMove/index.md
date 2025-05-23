# <p class="hidden">Demo (ROS): </p>Demo of the Robotic Arm Motion Control `API_Control_Arm_Move_Demo`

## 1. Project introduction

This project is designed to execute the MoveJ, MoveJ_P, MoveL, and MoveC functions based on RM65 and RM75 robotic arms and ROS packages. The program will execute the MoveJ (joint motion), MoveJ_P (pose motion), MoveL (linear motion), and MoveC (circular motion) commands successively, and relevant prompts will appear on the terminal at the start and end of the motion. Its purpose is to enable ROS developers to quickly master and flexibly use the robotic arm.

## 2. Code structure

```
├── CMakeLists.txt                    <-CMake build file
├── launch                            <-Launch folder
│   └── rm_65_move_demo.launch      <-Launch file (RM65)
    └── rm_75_move_demo.launch      <-Launch file (RM75)
├── LICENSE                           <-Version description
├── package.xml                       <-Dependency folder
├── README.md                         <-Readme
└── src                               <-C++ source code folder
    └── api_move_demo.cpp             <-Source code file
```

## 3. Project download

Download the project file locally via the following project link: [API_CONTROL_ARM_MOVE_DEMO](https://github.com/RealManRobot/rm_robot/tree/main/rm_arm_examples/control_arm_move)

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

## 5. Quick start

* **Launch file modification**:

    ```launch
    <arg name="Arm_Dof"                  default="7"/>     <!--DoF setting of the robotic arm-->
    ```

    This parameter represents the number of joints and degrees of freedom of the robotic arm. If the robotic arm has 6 joints such as RM65, RML63, and ECO65, the default should be changed to 6; and if the robotic arm has 7 joints such as RM75, the default should be changed to 7.

* **Usage of command lines**:
    Launch the following rm_driver package of the robotic arm in one terminal:

    ```
    roslaunch rm_driver rm_<arm_type>_driver.launch
    ```

    Robotic arms of different configurations reach different points and poses, and RM65 and RM75 are respectively adapted for points here. The <arm_type> is optional for RM65, RM75, and others according to the actual device used.
    Then, launch the control_arm_move package of the robotic arm in another terminal.
    Execute the following command for the RM65 robotic arm:

    ```
    roslaunch control_arm_move rm_65_move_demo.launch
    ```

    Execute the following command for the RM75 robotic arm:

    ```
    roslaunch control_arm_move rm_75_move_demo.launch
    ```

    ::: tip
    If it is not RM65 or RM75, the robotic arm may not reach the point, which is a normal phenomenon.
    :::

* **Return information**:

    The following prompts will appear when the program runs successfully.

    ```
    [ INFO] [1722565910.866307974]: *******arm_dof = 7           //The current DoF of the robotic arm will be printed here
    [ INFO] [1722565912.871168796]: *******Plan MoveJ Start      //Prompt for the start of MoveJ
    [ INFO] [1722565915.832463777]: *******Plan MoveJ State OK   //Prompt for the end of MoveJ
    [ INFO] [1722565916.832557775]: *******Plan MoveJ_P Start    //Prompt for the start of MoveJ_P
    [ INFO] [1722565920.192072186]: *******Plan MoveJ_P State OK //Prompt for the end of MoveJ_P
    [ INFO] [1722565921.192211738]: *******Plan MoveL Start      //Prompt for the start of MoveL
    [ INFO] [1722565922.018137911]: *******Plan MoveL State OK   //Prompt for the end of MoveL
    [ INFO] [1722565922.192413396]: *******Plan MoveC Start      //Prompt for the start of MoveC
    [ INFO] [1722565945.932390913]: *******Plan MoveC State OK   //Prompt for the end of MoveC
    ```

## 6. Key code description

The following are the main functions of the `api_Get_Arm_State_demo.cpp`:

- **Initialization**

    Initialize the relevant publication and subscription information

    Create the publisher for the MoveJ space planning command

    ```
    ros::Publisher moveJ_pub = nh.advertise<rm_msgs::MoveJ>("/rm_driver/MoveJ_Cmd", 10);
    ```

    Create the publisher for the MoveJ_P space planning command
    ```
    ros::Publisher moveJ_P_pub = nh.advertise<rm_msgs::MoveJ_P>("/rm_driver/MoveJ_P_Cmd", 10);
    ```

    Create the publisher for the MoveL space planning command
    ```
    ros::Publisher moveL_pub = nh.advertise<rm_msgs::MoveL>("/rm_driver/MoveL_Cmd", 10);
    ```

    Create the publisher for the MoveC space planning command
    ```
    ros::Publisher moveC_pub = nh.advertise<rm_msgs::MoveC>("/rm_driver/MoveC_Cmd", 10);
    ```

    Execution state subscriber of the robotic arm 
    ```
    ros::Subscriber planState_sub = nh.subscribe("/rm_driver/Plan_State", 10, planStateCallback);
    ```

- **Callback function**

    After receiving the subscribed execution state of the robotic arm, execute the message callback function

    ```ROS
    void planStateCallback(const rm_msgs::Plan_State::ConstPtr& msg)
    ```

- **Publish the MoveJ command**

    Publish the MoveJ command to move the robotic arm to a target pose.

    ```ROS
    moveJ_pub.publish(moveJ_BeginPose);
    ```

- **Publish the MoveJ_P command**

    Publish the MoveJ_P command to move the robotic arm to a target pose.

    ```ROS
    moveJ_P_pub.publish(moveJ_P_TargetPose);
    ```

- **Publish the MoveL command**

    Publish the MoveL command to move the robotic arm to a target pose.

    ```ROS
    moveL_pub.publish(moveL_TargetPose);
    ```

- **Publish the MoveC command**

    Publish the MoveC command to move the robotic arm to a target pose.

    ```ROS
    moveC_pub.publish(moveC_TargetPose);
    ```
