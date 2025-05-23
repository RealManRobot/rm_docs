# <p class="hidden">Demo (python): </p>Basic demo

## 1. Project introduction

This project, via the RealMan Python development package, completes the robotic arm connection, robotic arm version acquisition, API version acquisition, movej motion, moveL motion, moveC motion, and disconnection.

## 2. Code structure

```
RMDemo_SimpleProcess/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_simple_process.py      <- Demo that completes robotic arm connection, robotic arm version acquisition, API version acquisition, movej motion, moveL motion, moveC motion, and disconnection.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_SimpleProcess.

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

### 1. Quick run

Follow these steps to quickly run the code:

1. **Configuration of the IP address of the robotic arm**: open the `demo_simple_process.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_SimpleProcess` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Running result**: The running state of the robotic arm will be displayed in the terminal.

After running the script, the output result is as follows:

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9 

================== Arm Software Information ==================
Arm Model:  RM65-6FI
Algorithm Library Version:  V1.3.9
Control Layer Software Version:  V1.5.3
Dynamics Version:  2
Planning Layer Software Version:  V1.5.3
==============================================================

movej motion succeeded

movej_p motion succeeded

movel motion succeeded

movej_p motion succeeded

movec motion succeeded

Successfully disconnected from the robot arm
```

### 2. Code description

The following are the main functions of the `demo_simple_process.py` file:

- **Define a parameter dictionary of different models of robotic arms**

    ```python
    arm_models_to_points = {  
        "RM_65": [  
            [0, 20, 70, 0, 90, 0],
            [0.3, 0, 0.3, 3.14, 0, 0],
            [0.2, 0, 0.3, 3.14, 0, 0],
            [0.3, 0, 0.3, 3.14, 0, 0],
            [0.2, 0.05, 0.3, 3.14, 0, 0],
            [0.2, -0.05, 0.3, 3.14, 0, 0] ,
        ],  
        "RM_75": [  
            [0, 20, 0, 70, 0, 90, 0],
            [0.297557, 0, 0.337061, 3.142, 0, 3.142],
            [0.097557, 0, 0.337061, 3.142, 0, 3.142],
            [0.297557, 0, 0.337061, 3.142, 0, 3.142],
            [0.257557, -0.08, 0.337061, 3.142, 0, 3.142],
            [0.257557, 0.08, 0.337061, 3.142, 0, 3.142],
        ], 
        "RML_63": [  
            [0, 20, 70, 0, 90, 0],
            [0.448968, 0, 0.345083, 3.142, 0, 3.142],
            [0.248968, 0, 0.345083, 3.142, 0, 3.142],
            [0.448968, 0, 0.345083, 3.142, 0, 3.142],
            [0.408968, -0.1, 0.345083, 3.142, 0, 3.142],
            [0.408968, 0.1, 0.345083, 3.142, 0, 3.142]  ,
        ], 
        "ECO_65": [  
            [0, 20, 70, 0, -90, 0],
            [0.352925, -0.058880, 0.327320, 3.141, 0, -1.57],
            [0.152925, -0.058880, 0.327320, 3.141, 0, -1.57],
            [0.352925, -0.058880, 0.327320, 3.141, 0, -1.57],
            [0.302925, -0.158880, 0.327320, 3.141, 0, -1.57],
            [0.302925, 0.058880, 0.327320, 3.141, 0, -1.57],
        ],
        "GEN_72": [  
            [0, 0, 0, -90, 0, 0, 0],
            [0.1, 0, 0.4, 3.14, 0, 0],
            [0.3, 0, 0.4, 3.14, 0, 0],
            [0.3595, 0, 0.4265, 3.142, 0, 0],
            [0.3595, 0.03, 0.4265, 3.142, 0, 0],
            [0.3595, 0.03, 0.4665, 3.142, 0, 0],
        ],
        "ECO_63": [  
            [0, 20, 70, 0, -90, 0],
            [0.544228, -0.058900, 0.468274, 3.142, 0, -1.571],
            [0.344228, -0.058900, 0.468274, 3.142, 0, -1.571],
            [0.544228, -0.058900, 0.468274, 3.142, 0, -1.571],
            [0.504228, -0.108900, 0.468274, 3.142, 0, -1.571],
            [0.504228, -0.008900, 0.468274, 3.142, 0, -1.571],
        ],
    } 
    ```

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

- **Get the software information of the robotic arm**

    ```python
    robot_controller.get_arm_software_info()
    ```

    Get and display the basic information of the robotic arm, including product version, algorithm library version, control layer software version, dynamics version, and planning layer software version.

- **Execute the movej motion**

    ```python
    robot_controller.movej(joint_6dof)
    ```

- **Execute the movej_p motion**

    ```python
    robot_controller.movej_p(points[1])
    ```

- **Execute the movel motion**

    ```python
    robot_controller.movel(points[2])
    ```

- **Execute the movec motion**

    ```python
    robot_controller.movec(points[4], points[5], loop=2)
    ```

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

## 7. License information

- This project is subject to the MIT license.
