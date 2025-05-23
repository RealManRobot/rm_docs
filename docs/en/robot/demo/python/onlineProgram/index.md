# <p class="hidden">Demo (python): </p>Online Programming Demo

## 1. Project introduction

This project, via the RealMan Python development package, implements drag teaching. It saves the trajectory to a folder, concatenates it into an online programming file, and then sends the trajectory for motion via the online programming file. It also gets the motion state from the online programming and supports pausing and resuming the online programming.

## 2. Code structure

```
RMDemo_OnlineProgram/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_online_program.py      <- Demo that implements drag teaching. It saves the trajectory to a folder, concatenates it into an online programming file, and then sends the trajectory for motion via the online programming file. It also gets the motion state from the online programming and supports pausing and resuming the online programming.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_OnlineProgram.

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

1. **Configuration of the IP address of the robotic arm**: open the `demo_online_program.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Configuration of id (100 by default) for saving the file to the online programming list**: modify the id used when saving the file to the online programming list by modifying the `save_id` parameter in the `demo_send_project`. Please check the online programming list and, if necessary, modify the id to ensure that the id is available in your online programming list.

3. **Running via command line**: navigate to the `RMDemo_OnlineProgram` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

4. **Running result**: If the following output is displayed in the terminal, it indicates that the program has run successfully.

After running the script, the output result is as follows:

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9

Drag teaching started

Drag teaching has started, complete the drag operation and press Enter to continue...

Drag teaching stopped

Trajectory saved successfully, total number of points: 100

Project sent and run successfully

Program running state: 1

Program running state: 1

Program running state: 0
Program has ended

Robot arm paused successfully

Program running state: 0
Program has ended

Robot arm continued successfully

Program running state: 1

Program running state: 0
Program has ended

Successfully disconnected from the robot arm
```

### 6.2 Code description

The following are the main functions of the `demo_online_program.py` file:

- **Connect the robotic arm**

    ```python
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

    Connect the robotic arm to the specified IP address and port.

- **Get the API version**

    ```python
    print("\nAPI Version:", rm_api_version(), "\n")
    ```

    Get and display the API version.

- **Drag for teaching**

    ```python
    robot_controller.demo_drag_teach(1)
    ```

    Initiate the drag teaching mode, with parameter `1` indicating that the trajectory starts to be recorded.

- **Save the trajectory**

    ```python
    lines = robot_controller.demo_save_trajectory(file_path_test)
    ```

    Save the recorded trajectory to a specified file.

- **Concatenate online programming files**

    ```python
    robot_controller.add_lines_to_file(file_path_test, lines)
    ```

    Add specific lines to the trajectory file to form an online programming file.

- **Send online programming files**

    ```python
    robot_controller.demo_send_project(file_path_test)
    ```

    Send the online programming file to the robotic arm.

- **Query the online programming running state**

    ```python
    robot_controller.demo_get_program_run_state(1, max_retries=5)
    ```

    Query the running state of the online programming, with an interval of `1` second and a maximum of 5 query attempts.

- **Pause the robotic arm**

    ```python
    robot_controller.demo_set_arm_pause()
    ```

    Pause the robotic arm's running.

- **Resume the robot arm's running**

    ```python
    robot_controller.demo_set_arm_continue()
    ```

    Resume the robot arm's running.

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

    Disconnect from the robotic arm.

## 7. License information

- This project is subject to the MIT license.
