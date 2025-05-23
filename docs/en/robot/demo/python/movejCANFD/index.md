# <p class="hidden">Demo (python): </p>Angle Pass-through Demo

## 1. Project introduction

This project, via the RealMan Python development package, completes the task of reading the joint angle trajectory file from the demo folder. The data is passed-through with a 10 ms cycle, allowing the robotic arm to run stably. It supports the pass-through of trajectory files for different robotic arm models and registers a callback function to track the real-time state of the robotic arm. During the pass-through process, the current angles of the robotic arm can be obtained in real time.

## 2. Code structure

```
RMDemo_MovejCANFD/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_movej_canfd.py      <- Demo that reads the joint angle trajectory file from the demo folder. The data is passed-through with a 10 ms cycle, allowing the robotic arm to run stably. It supports the pass-through of trajectory files for different robotic arm models and registers a callback function to track the real-time state of the robotic arm. During the pass-through process, the current angles of the robotic arm can be obtained in real time.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_MovejCANFD.

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

1. This demo uses the RM65-B robotic arm as an example. Please modify the data in the code according to your actual situation. The project’s data folder contains trajectory files for different robotic arms. Please modify the data in the code according to your actual situation to use the correct data files.
2. The data only supports low-follow mode and does not support high-follow mode. For high-follow mode, you need to independently plan an appropriate trajectory.
3. If the UDP data push interface is not receiving data, check the thread mode, whether data push is enabled, the IP address, and the firewall.

## 6. User guide

### 6.1 Quick run

Follow these steps to quickly run the code:

1. **Configuration of the IP address of the robotic arm**: open the `demo_movej_canfd.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Select the trajectory file corresponding to the model**：

   - In`demo_movej_canfd`:

       ```python
       try:
           # Read file contents, the points in the file are obtained by drag teaching
           with open('../data/RM65&RM63_canfd_data.txt', 'r') as f:
               lines = f.readlines()
       ```

     - ECO65：ECO65_canfd_data.txt
     - RM65&RML63-Ⅱ：RM65&RM63_canfd_data.txt
     - RM75：RM75_canfd_data.txt

3. **Running via command line**: navigate to the `RMDemo_MovejCANFD` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

4. **Running result**：

After running the script, the output result is as follows:

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9

Total points: 100

Moving to point 0: [0, 0, 0, 0, 0, 0]

...

Pass-through completed

movej_cmd joint movement 1: 0

Successfully disconnected from the robot arm
```

### 6.2 Code description

The following are the main functions of the `demo_movej_canfd.py` file:

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

- **Configure real-time push**

    ```python
    config = rm_realtime_push_config_t(1, True, 8098, 0, '192.168.1.88')
    robot_controller.robot.rm_set_realtime_push(config)
    ```

- **Read the joint angle trajectory file and perform pass-through**

    ```python
    robot_controller.demo_movej_canfd()
    ```

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

## 7. License information

- This project is subject to the MIT license.
