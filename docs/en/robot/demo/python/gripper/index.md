# <p class="hidden">Demo (python): </p>Robotic Arm Grasping Demo

## 1. Project introduction

This project, via the RealMan Python development package, simulates object grasping. It allows for object grasping at a fixed position, movement to a specified location, and control of the gripper's continuous force to securely hold the object. After the object is grasped, the robotic arm moves to the designated placement area and releases the object. Finally, the robotic arm returns to its initial pose.

## 2. Code structure

```
RMDemo_Gripper/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_gripper.py      <- Demo that simulates object grasping. It allows for object grasping at a fixed position, movement to a specified location, and control of the gripper's continuous force to securely hold the object. After the object is grasped, the robotic arm moves to the designated placement area and releases the object. Finally, the robotic arm returns to its initial pose.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_Gripper.

## 4. Environment configuration

Required environment and dependencies for running in Windows and Linux environments:

| Item         | Linux     | Windows   |
| :--          | :--       | :--       |
| System architecture     | x86 architecture   | -         |
| python       | 3.9 or higher   | 3.9 or higher   |
| Specific dependency     | -         | -         |

### Linux configuration

   1. Refer to the [python official website - linux](https://www.python.org/downloads/source/) to download and install python3.9.

   2. After entering the project directory, open the terminal and run the following command to install dependencies:

```bash
pip install -r requirements.txt
```

### Windows configuration

   1. Refer to the [python official website - Windows](https://www.python.org/downloads/windows/) to download and install python3.9.

   2. After entering the project directory, open the terminal and run the following command to install dependencies:

```bash
pip install -r requirements.txt
```

## 5. Notes

This demo uses the RM65-B robotic arm as an example. Please modify the data in the code according to your actual situation.

## 6. User guide

### 6.1 Quick run

Follow these steps to quickly run the code:

1. **Configuration of the IP address of the robotic arm**: open the `demo_gripper.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_Gripper` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Running result**：

After running the script, the output result is as follows:

```
Successfully connected to the robot arm: 1

API Version: V0.3.0

movej motion succeeded
Gripper continuous force control gripping succeeded
movej motion succeeded
Gripper release succeeded
movej motion succeeded

Successfully disconnected from the robot arm
```

### 6.2 Code description

The following are the main functions of the `demo_gripper.py` file:

- **Connect the robotic arm**

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

    Connect the robotic arm to the specified IP address and port.

- **Get the API version**

    ```python
    print("\nAPI Version: ", rm_api_version(), "\n")
    ```

    Get and display the API version.

- **Execute the movej motion**

    ```python
    robot_controller.movej([90, 90, 30, 0, 60, 0])
    ```

- **Apply continuous force with the gripper to securely hold the object**

    ```python
    robot_controller.set_gripper_pick_on(500, 200)
    ```

- **Execute the movej motion**

    ```python
    robot_controller.movej([0, 90, 30, 0, 60, 0])
    ```

- **Release the gripper**

    ```python
    robot_controller.set_gripper_release(500)
    ```

- **Execute the movej motion**

    ```python
    robot_controller.movej([90, 90, 30, 0, 60, 0])
    ```

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

## 7. License information

- This project is subject to the MIT license.
