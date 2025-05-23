# <p class="hidden">Demo (python): </p>Multi-Robot Arm Control Operations Demo

## 1. Project introduction

This project, via the RealMan Python development package, completes multi-robotic arm connection, robotic arm version acquisition, API version acquisition, movej motion, moveL motion, moveC motion, and disconnection.

## 2. Code structure

```
RMDemo_DoubleRoboticArm/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_double_robotic_arm.py      <- Demo that completes multi-robotic arm connection, robotic arm version acquisition, API version acquisition, movej motion, moveL motion, moveC motion, and disconnection.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_DoubleRoboticArm.

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
2. For multi-robotic arm connection, only the initialization of the first robotic arm requires specifying the thread mode. For subsequent robotic arms, there's no need to provide the thread parameter. For example:

    ```python
    arm = RoboticArm(rm_thread_mode_e.RM_TRIPLE_MODE_E)
    arm1 = RoboticArm()
    handle = arm.rm_create_robot_arm("192.168.1.18", 8080, level=3)
    handle1 = arm1.rm_create_robot_arm("192.168.1.19", 8080, level=3)
    print(handle.id)
    print(handle1.id)
    print(arm.rm_get_current_arm_state())
    print(arm1.rm_get_current_arm_state())
    ```

## 6. User guide

### 6.1 Quick run

Follow these steps to quickly run the code:

1. **Configuration of the IP address of the robotic arm**: open the `demo_double_robotic_arm.py` file and modify the `ip` parameter in the `connect_robot` function in the `main` function to the current IP address of the robotic arm. The default IP addresses are "192.168.1.18" and "192.168.1.19".

    ```python
    # Connect robotic arm 1
    robot1 = connect_robot("192.168.1.18", 8080, 3, 2)

    # Connect robotic arm 2
    robot2 = connect_robot("192.168.1.19", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_DoubleRoboticArm` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Running result**: The running results will be displayed in the terminal.

After running the script, the output result is as follows:

```
Successfully connected to the robot arm: 1
Successfully connected to the robot arm: 2

movej motion succeeded
movej motion succeeded

movej_p motion succeeded
movel motion succeeded
movec motion succeeded

Successfully disconnected from the robot arm
Successfully disconnected from the robot arm
Both robot motions completed
```

### **6.2 Code description**

The following are the main functions of the `demo_double_robotic_arm.py` file:

- **Connect the robotic arm**

    ```python
    robot1 = connect_robot("192.168.1.18", 8080, 3, 2)
    robot2 = connect_robot("192.168.1.19", 8080, 3)
    ```

    Connect two robotic arms to the specified IP addresses and ports separately.

- **Execute motion commands**

    ```python
    demo_movej(robot1)
    demo_movej(robot1, [0, 20, 70, 0, 90, 0])
    demo_movej_p(robot1, [0.3, 0, 0.3, 3.141, 0, 0])
    demo_movel(robot1, [0.2, 0, 0.3, 3.141, 0, 0])
    demo_movec(robot1, [0.25, 0.05, 0.3, 3.141, 0, 0], [0.25, -0.05, 0.3, 3.141, 0, 0], loop=2)
    ```

    ```python
    demo_movej(robot2)
    demo_movej(robot2, [0, 20, 70, 0, 90, 0])
    demo_movej_p(robot2, [0.3, 0, 0.3, 3.141, 0, 0])
    demo_movel(robot2, [0.2, 0, 0.3, 3.141, 0, 0])
    demo_movec(robot2, [0.25, 0.05, 0.3, 3.141, 0, 0], [0.25, -0.05, 0.3, 3.141, 0, 0], loop=2)
    ```

    Execute different motion commands for the two robotic arms separately, including `movej`, `movej_p`, `movel` and `movec`

- **Disconnect from the robotic arm**

    ```python
    disconnect_robot(robot1)
    disconnect_robot(robot2)
    ```

    Disconnect from the two robotic arms separately.

## 7. License information

- This project is subject to the MIT license.
