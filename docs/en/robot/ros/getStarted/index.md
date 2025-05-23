# <p class="hidden">ROS: </p>Quick Start

The ROS support for the robotic arm is based on the rm_robot package. The following are the usage environment details:

* The currently supported robotic arms include the RM65 series, RM75 series, ECO65 series, RML63 series, and GEN72 series. For details, please refer to the website [RealMan robots](http://www.realman-robotics.cn/).
* Version 2.1.0.
* Supported robotic arm controller versions are 1.4.3 and above.
* Supported Ubuntu versions are 18.04 or 20.04.
* Supported ROS versions are melodic and noetic.

Package download link: [rm_robot](https://github.com/RealManRobot/rm_robot/)

---

## 1. Environment setup

### 1.1 Install ROS

You can install ROS by referring to the following links:

* [MELODIC](https://wiki.ros.org/melodic/Installation/Ubuntu)
* [NOETIC](https://wiki.ros.org/noetic/Installation/Ubuntu)

### 1.2 Install moveit

You can install moveit by referring to the following links:

* [Moveit_install](http://docs.ros.org/en/melodic/api/moveit_tutorials/html/doc/getting_started/getting_started.html)。

### 1.3 Build the package

After successfully completing the above steps, you can execute the following commands to build the package. First, create a workspace and import the package files into the src folder of the workspace. Then, use the catkin build command to build.

```ros
mkdir -p ~/ros_ws/src
cp -r rm_robot ~/ros_ws/src
cd ~/ros_ws
catkin build rm_msgs
source ~/ros_ws/devel/setup.bash
catkin build
source ~/ros_ws/devel/setup.bash
```

After the building, the package can be executed.

## 2. Function execution

### 2.1 Package overview

1. Hardware driver([rm_driver](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_driver))<br>

* This package serves as the underlying ROS driver for the robotic arm, designed to subscribe to and publish topics related to its core operations.

2. Launch([rm_bringup](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_bringup))<br>

* This package is responsible for launching nodes for the robotic arm. Its role is to quickly start the multi-node functions of the robotic arm.

3. Model description([rm_description](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_description))<br>

* This package provides the robotic arm's model description, including model files and model loading nodes. It also provides coordinate transformation relationships between the joints of the robotic arm for other packages.

4. ROS message interface([rm_msgs](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_msgs))<br>

* This package provides message files for the robotic arm, offering all control and state messages required for ROS adaptation.

5. moveit configuration([rm_moveit_config](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_moveit_config))<br>

* This package adapts and implements moveIt planning and control functions for various robotic arm series, including both virtual and real robotic arm control.

6. moveIt and hardware driver communication([rm_config](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_control))<br>

* This package acts as the communication bridge between the underlying driver package (rm_driver) and the moveIt package (rm_moveit_config). Its main function is to subdivide the planned points from moveIt and transmit them to the underlying driver package in a pass-through manner to control the robotic arm's movements.

7. Gazebo simulation for robotic arm control([rm_gazebo](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_gazebo))<br>

* This package is for robotic arm simulation in the gazebo. It displays the robotic arm model in a gazebo environment and allows for planning and control of the simulated robotic arm using moveIt.

8. Usage case([rm_demo](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_demo))<br>

* This package provides usage cases for the robotic arm, primarily demonstrating basic control and motion functions.

9. Technical document([rm_doc](https://github.com/RealManRobot/rm_robot/tree/V2.1.0/rm_doc))<br>

* This package is an introductory document package. It primarily includes documents that provide an overall introduction to the content and usage of the entire package, as well as documents that give detailed explanations of the content and usage of each individual package.

The above are the current nine packages, each with its unique function. For more details, please refer to the documents in the doc folder under the rm_doc package.

### 2.2 Control the real robotic arm

The following commands can be used to start the robotic arm hardware driver and simultaneously launch moveIt for robotic arm planning and control:

```ros
source ~/ros_ws/install/setup.bash
```

```ros
roslaunch rm_control rm_<arm_type>_control.launch
```

Replace <arm_type> with one of the following characters: 65, 75, eco65, 63, or gen72. For example, to use the RM65 robotic arm, the command would be:

```ros
source ~/ros_ws/install/setup.bash
```

```ros
roslaunch rm_bringup rm_<arm_type>_robot.launch
```

Once successfully launched, you can use moveIt to control the real robotic arm.

## 3. Safety precautions

To ensure user safety when operating the robotic arm, please follow the guidelines below:

* Before each use, check the installation of the robotic arm, including whether the fixing screws are loose and if there is any vibration or wobbling of the arm.
* During operation, do not stand within the robotic arm's falling or working range, and do not place any objects within the arm's safety range of motion.
* When not in use, place the robotic arm in a safe position to prevent it from falling due to vibrations, which may cause damage or injury to other objects.
* When not in use, disconnect the robotic arm power supply promptly.
