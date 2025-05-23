# <p class="hidden">Demo (python): </p>Lift Control Demo

## 1. Project introduction

This project, via the RealMan Python development package, controls the lift movement to a specified height in a non-blocking manner. Simultaneously, the robotic arm moves to a preparatory grasping position. The robotic arm then uses movel to move forward a certain distance while controlling the gripper to apply a continuous gripping force. After the object is grasped, the robotic arm moves backward a certain distance, returning to the preparatory position. The lift then moves to another height in a blocking mode. Once the lift reaches the target height, the robotic arm moves forward again, and the gripper releases the object. After releasing the object, the robotic arm moves backward to the preparatory position.

## 2. Code structure

```
RMDemo_Lift/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_lift.py      <- Demo that controls the lift movement to a specified height in a non-blocking manner. Simultaneously, the robotic arm moves to a preparatory grasping position. The robotic arm then uses movel to move forward a certain distance while controlling the gripper to apply a continuous gripping force. After the object is grasped, the robotic arm moves backward a certain distance, returning to the preparatory position. The lift then moves to another height in a blocking mode. Once the lift reaches the target height, the robotic arm moves forward again, and the gripper releases the object. After releasing the object, the robotic arm moves backward to the preparatory position.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_Lift.

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

1. This demo uses the RM65-B robotic arm as an example. Please modify the data in the code according to your actual situation.
2. The installation angle must be side-mounted and paired with the lift.

## **6. User guide**

### 6.1 Quick run

Follow these steps to quickly run the code:

1. **Configuration of the IP address of the robotic arm**: open the `demo_lift.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_Lift` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Running result**：

After running the script, the output result is as follows:

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9

Change work frame:  0

Lift motion succeeded

movej_p motion succeeded

movel motion succeeded

Gripper continuous force control gripping succeeded

movel motion succeeded

Lift motion succeeded

movel motion succeeded

Gripper release succeeded

movel motion succeeded

Successfully disconnected from the robot arm
```

### 6.2 Code description

The following are the main functions of the `demo_lift.py` file:

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

- **Switch the work frame**

    ```python
    ret = robot_controller.robot.rm_change_work_frame("Base")
    print("\nChange work frame: ", ret, "\n")
    ```

- **Control the lift movement**

    ```python
    robot_controller.set_lift_height(20, 500, False)
    ```

- **Execute the movej_p motion**

    ```python
    robot_controller.movej_p([0.1, 0, 0.7, 0, 0, 3.141])
    ```

- **Execute the movel motion**

    ```python
    robot_controller.movel([0.1, 0, 0.8, 0, 0, 3.141])
    ```

- **Control the gripper for continuous force gripping**

    ```python
    robot_controller.set_gripper_pick_on(500, 200)
    ```

- **Execute the movel motion again**

    ```python
    robot_controller.movel([0.1, 0, 0.7, 0, 0, 3.141])
    ```

- **Control the lift movement again**

    ```python
    robot_controller.set_lift_height(20, 200)
    ```

- **Release the gripper**

    ```python
    robot_controller.set_gripper_release(500)
    ```

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

## 7. License information

- This project is subject to the MIT license.
