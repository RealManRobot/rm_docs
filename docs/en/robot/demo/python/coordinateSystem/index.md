# <p class="hidden">Demo (python): </p>Frame Operation Demo

## 1. Project introduction

This project demonstrates the use of interfaces for creating, deleting, modifying, and querying the robot arm's work frame, enabling the setting of a new work frame for the robotic arm. It is built with Python and utilizes the Python language development package for the robotic arm provided by RealMan.

## 2. Code structure

```
RMDemo_CoordinateSystem/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_coordinate_system.py      <- Demo that demonstrates creating, deleting, modifying, and querying the frame.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_CoordinateSystem.

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

## 5. User guide

### 5.1 Quick run

1. **Configuration of the IP address of the robotic arm**: open the `demo_coordinate_system.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_CoordinateSystem` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Demo and description of running results**

    ```
    current api version:  0.2.9
    Successfully connected to the robot arm: 1
    API Version:  0.2.9 
    Manually set work frame succeeded
    Update work frame succeeded
    Get work frame succeeded:  [0.30000001192092896, 0.0, 0.30000001192092896, 3.1419999599456787, 0.0, 0.0] 
    Delete work frame succeeded
    Successfully disconnected from the robot arm
    ```

    **Description of running results:**

### 5.2 Description of key codes

The following are the main functions of the `demo_coordinate_system.py` file:

- **Connect the robotic arm**
Connect the robotic arm to the specified IP address and port.

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

- **Get the API version**
Get and display the API version.

    ```python
    print("\nAPI Version: ", rm_api_version(), "\n")
    ```

- **Manually set the work frame**
Manually set the work frame named `"test"` with a pose of `[0, 0, 0, 0, 0, 0]`.

    ```python
    robot_controller.set_manual_work_frame("test", [0, 0, 0, 0, 0, 0])
    ```

- **Update the work frame**
Update the work frame named `"test"` with a pose of `[0.3, 0, 0.3, 3.142, 0, 0]`.

    ```python
    robot_controller.update_work_frame("test", [0.3, 0, 0.3, 3.142, 0, 0])
    ```

- **Query the specified work frame**
Query the work frame named `"test"` and display the result.

    ```python
    robot_controller.get_given_work_frame("test")
    ```

- **Delete the work frame**
Delete the work frame named `"test"`.

    ```python
    robot_controller.delete_work_frame("test")
    ```

- **Disconnect from the robotic arm**
Disconnect from the robotic arm.

    ```python
    robot_controller.disconnect()
    ```

## 6. License information

- This project is subject to the MIT license.
