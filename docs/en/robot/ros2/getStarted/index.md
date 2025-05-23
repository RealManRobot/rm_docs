# <p class="hidden">ROS2: </p>Getting Started

The ROS2 support for the robotic arm is based on the `ros2_rm_robot` package. The following are the usage environment details:

* The currently supported robotic arms include the RM65, RM75, ECO65, RML63, and GEN72. For details, please refer to the website [RealMan robots](http://www.realman-robotics.cn/).
* The version is 1.0.1.
* Supported robotic arm controller versions are 1.4.3 and above.
* The supported Ubuntu version is 22.04.
* The Ubuntu version 22.04 is required for ROS2-humble.
* The Ubuntu version 20.04 is required for ROS2-foxy.

Download link of the humble package: [humble](https://github.com/RealManRobot/ros2_rm_robot/tree/humble)
Download link of the foxy package: [foxy](https://github.com/RealManRobot/ros2_rm_robot/tree/foxy)

---

## 1. Environment setup

### 1.1 Install ROS2

The RealMan provides the installation script of ROS2, namely ros2_install.sh, which is located in the script folder of the rm_install package. In actual use, you need to find the path to execute the following command.

```ros
sudo bash ros2_install.sh
```

You can also install ROS2 by referring to the following links, instead of using the installation script: [ROS2_INSTALL](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html).

### 1.2 Install moveit2

The RealMan provides the installation script of moveit2, namely moveit2_install.sh, which is located in the script folder of the rm_install package. In actual use, you need to find the path to execute the following command.

```ros
sudo bash moveit2_install.sh
```

You can also install moveit2 by referring to the following links, instead of using the installation script: [Moveit2_INSTALL](https://moveit.ros.org/install-moveit2/binary/).

### 1.3 Configure the package environment

The script is located in the lib folder of the rm_driver package, and in actual use, you need to find the path to execute the following command.

```ros
sudo bash lib_install.sh
```

### 1.4 Build the package

After completing the above steps, you can execute the following commands to build the package. First, create a workspace and import the package files into the src folder of the workspace. Then, use the colcon build command to build.

```ros
mkdir -p ~/ros2_ws/src
cp -r ros2_rm_robot ~/ros2_ws/src
cd ~/ros2_ws
colcon build --packages-select rm_ros_interfaces
source ./install/setup.bash
colcon build
```

After the building, the package can be executed.

## 2. Function execution

### 2.1 Package overview

1. Installation and environment configuration ([rm_install](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_install))

* This package provides auxiliary functions for the robotic arm, including the introduction to the environment installation and construction method, dependency installation method, and package build method.

2. Hardware driver ([rm_driver](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_driver))

* This package serves as the underlying ROS2 driver for the robotic arm, designed to subscribe to and publish topics related to its core operations.

3. Launch ([rm_bringup](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_bringup))

* This package is responsible for launching nodes for the robotic arm. Its role is to quickly start the multi-node functions of the robotic arm.

4. Model description ([rm_description](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_description))

* This package provides the robotic arm's model description, including model files and model loading nodes. It also provides coordinate transformation relationships between the joints of the robotic arm for other packages.

5. ROS message interface ([rm_ros_interfaces](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_ros_interfaces))

* This package provides message files for the robotic arm, including all control and state messages required for ROS2 adaptation.

6. Moveit2 configuration ([rm_moveit2_config](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_moveit2_config))

* This package adapts and implements moveit2 planning and control functions for various robotic arms, including both virtual and real robotic arm control.

7. Communication between moveit2 and hardware driver ([rm_config](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_control))

* This package acts as the communication bridge between the underlying driver package (rm_driver) and the moveit2 package (rm_moveit2_config). It is intended to subdivide the planned points from moveit2 and transmit them to the underlying driver package in a pass-through manner to control the robotic arm's movements.

8. Gazebo simulation for robotic arm control ([rm_gazebo](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_gazebo))

* This package is for robotic arm simulation in the gazebo. It displays the robotic arm model in a gazebo environment and allows for planning and control of the virtual robotic arm using moveit2.

9. Usage examples ([rm_examples](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_example))

* This package provides usage cases for the robotic arm, primarily demonstrating basic control and motion functions.

10. Technical document ([rm_docs](https://github.com/RealManRobot/ros2_rm_robot/tree/main/rm_doc))

* This package is an introductory document package. It primarily includes documents that provide an overall introduction to the content and usage of the entire package, as well as documents that give detailed explanations of the content and usage of each individual package.

The above are the current ten packages, each with its unique function. For more details, please refer to the documents in the doc folder under the rm_doc package.

### 2.2 Control the real robotic arm

The following commands can be used to start the robotic arm hardware driver and simultaneously launch moveit2 for robotic arm planning and control:

```ros
source ~/ros2_ws/install/setup.bash
```

```ros
ros2 launch rm_bringup rm_<arm_type>_bringup.launch.py
```

Replace <arm_type> with one of the following characters: 65, 75, eco65, 63, or gen72. For example, to use the RM65 robotic arm, the command would be:

```ros
ros2 launch rm_bringup rm_65_bringup.launch.py
```

Once successfully launched, you can use moveit2 to control the real robotic arm.

## 3. Safety precautions

To ensure user safety when operating the robotic arm, please follow the guidelines below:

* Before each use, check the installation of the robotic arm, including whether the fixing screws are loose and if there is any vibration or wobbling of the arm.
* During operation, do not stand within the robotic arm's falling or working range, and do not place any objects within the arm's safety range of motion.
* When not in use, place the robotic arm in a safe position to prevent it from falling due to vibrations, which may cause damage or injury to other objects.
* When not in use, disconnect the robotic arm power supply promptly.
