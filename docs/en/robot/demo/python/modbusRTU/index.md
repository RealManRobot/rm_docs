# <p class="hidden">Demo (python): </p>ModbusRTU Demo

## 1. Project introduction

This project, via the RealMan Python development package, configures the ModbusRTU mode of the communication port, writes single coil data, reads single coil data, writes a single register, reads holding registers, and closes the communication port in ModbusRTU mode.

## 2. Code structure

```
RMDemo_ModbusRTU/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│└── demo_modbus_rtu.py<- Demo that configures the ModbusRTU mode of the communication port, writes single coil data, reads single coil data, writes a single register, reads holding registers, and closes the communication port in ModbusRTU mode.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_ModbusRTU.

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

1. **Configuration of the IP address of the robotic arm**: open the `demo_modbus_rtu.py` file and modify the initialization parameters of the `RobotArmController` class in the `main` function to the current IP address of the robotic arm. The default IP address is `"192.168.1.18"`.

    ```python
    # Create a robot arm controller instance and connect to the robot arm
    robot_controller = RobotArmController("192.168.1.18", 8080, 3)
    ```

2. **Running via command line**: navigate to the `RMDemo_ModbusRTU` directory in the terminal and enter the following command to run the Python script:

    ```bash
    python ./src/main.py
    ```

3. **Running result**: Upon successful execution, the running state of the robotic arm will be displayed in the terminal.

After running the script, the output result is as follows:

```
current api version:  0.2.9

Successfully connected to the robot arm: 1

API Version:  0.2.9

Successfully set the Modbus mode

Successfully wrote the single coil

Successfully read the coils, data: [1]

Successfully wrote the single register

Successfully read the holding registers, data: [180]

Successfully closed the Modbus mode

Successfully disconnected from the robot arm
```

### 6.2 Code description

The following are the main functions of the `demo_modbus_rtu.py` file:

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

- **Configure ModbusRTU mode.**

    ```python
    robot_controller.set_modbus_mode()
    ```

- **Write single coil data**

    ```python
    robot_controller.write_single_coil(1)
    ```

- **Read single coil data**

    ```python
    robot_controller.read_coils()
    ```

- **Write a single register**

    ```python
    robot_controller.write_single_register(180)
    ```

- **Read holding registers**

    ```python
    robot_controller.read_holding_registers()
    ```

- **Close ModbusRTU mode**

    ```python
    robot_controller.close_modbus_mode()
    ```

- **Disconnect from the robotic arm**

    ```python
    robot_controller.disconnect()
    ```

## 7. License information

- This project is subject to the MIT license.

## 8. Controller and end effector interface diagram

### Controller IO Interface Diagram

The voltage of digital I/O is determined based on the reference voltage connected, and the 16-core extension interface cable of robotic arm provides only 12 V and 24 V power supply voltages. If other output voltages are required for the digital I/O, then reference voltages need to be led in from the pins OUT_P_OUT+, OUT_P_IN+, and OUT_P_GND. For detailed interface definitions, please refer to [16-Pin Aviation Connector Cable](../../../quickUseManual/interfaceDescriptionArm/index.md#33111).

### End Effector IO Interface Diagram

The multiplexing functions in the table above are switched by program commands. Pin 3 and pin 4 are digital input channels (DI1 and DI2) by default before delivery, and the power output of pin 6 is 0 V (programmed). For detailed interface definitions, please refer to [6-Pin Aviation Connector Cable](../../../quickUseManual/interfaceDescriptionArm/index.md#33112).
