# <p class="hidden">Demo (python): </p>Algorithm Demo

## 1. Project introduction

This project, via the RealMan Python development package, completes the task independently via algorithms without connecting the robotic arm. It includes algorithm initialization, robotic arm model setting, frame setting, forward and inverse kinematics, and conversions between Euler angles and quaternions.

## 2. Code structure

```bash
RMDemo_AlgoInterface/
│
├── README.md        <- Core project document
├── requirements.txt    <- List of project dependencies
├── setup.py        <- Project installation script
│
├── src/          <- Project source code
│  ├── main.py       <- Main procedure entry
│  └── core/        <- Core function or business logic code
│    └── demo_algo_interface.py      <- Demo that completes the task independently via algorithms without connecting the robotic arm. It includes algorithm initialization, robotic arm model setting, frame setting, forward and inverse kinematics, and conversions between Euler angles and quaternions.
└── Robotic_Arm/      <- RealMan robotic arm secondary development package
```

## 3. Project download

Download `RM_API2` locally via the link: [development package download](https://github.com/RealManRobot/RM_API2.git). Then, navigate to the `RM_API2\Demo\RMDemo_Python` directory, where you will find RMDemo_AlgoInterface.

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

Follow these steps to quickly run the code:

1. **Parameter configuration**

   Open the `demo_algo_interface.py` file, and modify the following configurations in the main function:

   - Configure the robotic arm and end effector version (RM65 standard robotic arm by default): If you need to call algorithms for other models of robotic arms, you can configure the initialization parameters of the `AlgoController` class.
     - The `arm_model` parameter specifies the model of the robotic arm. For example, if you are using the RM75 robotic arm, you need to modify it to `rm_robot_arm_model_e.RM_MODEL_RM_65_E`.
     - The `force_type` parameter specifies the version of the end effector. For example, if you are using the 6-DoF version, you need to modify the parameter to `rm_force_type_e.RM_MODEL_RM_SF_E`.
   - Configure the base installation angle (upright installation by default): use the `set_angle` method to set the robotic arm's initial installation pose.
   - Configure the work frame (if not set, the default factory parameters will be used for calculation): modify the work frame via the `set_workframe` method.
   - Configure the tool frame (if not set, the default factory parameters will be used for calculation): modify the tool frame via the `set_toolframe` method.

2. **Running via command line**：

   Navigate to the RMDemo_AlgoInterface directory in the terminal, and enter the following command to run the C program:

    ```python
    python ./src/main.py
    ```

3. **Running result**：

    After running the script, the output result is as follows:

    ```python
    Algorithm initialized, handle ID:  0

    API Version:  0.3.0 

    installation pose set successfully

    Work frame set successfully

    Tool frame set successfully

    Forward Kinematics (flag=1): [-4.2137777711559465e-08, 0.0, 0.8505000472068787, 0.0, 8.742277657347586e-08, 3.1415927410125732]

    Forward Kinematics (flag=0): [-4.2137777711559465e-08, 0.0, 0.8505000472068787, 0.0, -4.371138828673793e-08, 0.0, 1.0]

    Inverse Kinematics: [0.04380200430750847, -21.288101196289062, -78.31494903564453, -0.09254305809736252, -80.39703369140625, 0.05924007669091225]

    Euler to Quaternion: [0.0002963105798698962, 0.9999999403953552, 0.0, 0.0]

    Quaternion to Euler: [0.0, -0.0, 3.1415927410125732]
    ```

### **5.2 Code description**

The following are the main functions of the `demo_algo_interface.py` file:

- **Dictionary of initialization parameters of different models of robotic arms**

    ```python
    arm_models_to_points = {  
        "RM_65": [  
            rm_robot_arm_model_e.RM_MODEL_RM_65_E,
            rm_force_type_e.RM_MODEL_RM_B_E,
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], # Forward kinematics joint angle
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], # Inverse kinematics previous joint angle
            [0.3, 0.0, 0.3, 3.14, 0.0, 0.0] # Inverse kinematics target pose
        ],  
        "RM_75": [  
            rm_robot_arm_model_e.RM_MODEL_RM_75_E,
            rm_force_type_e.RM_MODEL_RM_B_E,
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.3, 0.0, 0.3, 3.14, 0.0, 3.14]
        ], 
        "RML_63": [ 
            rm_robot_arm_model_e.RM_MODEL_RM_63_II_E,  
            rm_force_type_e.RM_MODEL_RM_B_E, 
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.3, 0.0, 0.3, 3.14, 0.0, 0.0]  
        ], 
        "ECO_65": [  
            rm_robot_arm_model_e.RM_MODEL_ECO_65_E,  
            rm_force_type_e.RM_MODEL_RM_B_E, 
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.3, 0.0, 0.3, 3.14, 0.0, 0.0]  
        ],
        "GEN_72": [  
            rm_robot_arm_model_e.RM_MODEL_GEN_72_E,
            rm_force_type_e.RM_MODEL_RM_B_E,
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.3, 0.0, 0.3, 3.14, 0.0, 0.0]
        ],
        "ECO_63": [  
            rm_robot_arm_model_e.RM_MODEL_ECO_63_E,  
            rm_force_type_e.RM_MODEL_RM_B_E, 
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            [0.3, 0.0, 0.3, 3.14, 0.0, 0.0]  
        ],
    }
    ```

- **Set the robotic arm model and initialize the algorithm**

    ```python
    # Set the robotic arm model
    arm_model = "RM_65"
    datas = arm_models_to_points.get(arm_model, [])

    arm_model = datas[0]  
    force_type = datas[1]  
    # Initialize the algorithm
    algo_controller = AlgoController(arm_model, force_type)
    ```

    Initialize the algorithm without connecting the robotic arm.

- **Get the API version**

    ```python
    print("\nAPI Version: ", rm_api_version(), "\n")
    ```

    Get and display the API version.

- **Set the base installation angle**

    ```python
    algo_controller.set_angle(0, 0, 0)
    ```

    Set the base installation angle.

- **Set the work frame**

    ```python
    algo_controller.set_workframe((0.0, 0.0, 0.0, 0.0, 0.0, 0.0))
    ```

    Set the work frame.

- **Set the tool frame**

    ```python
    algo_controller.set_toolframe((0.0, 0.0, 0.0, 0.0, 0.0, 0.0), 0, 0, 0, 0)
    ```

    Set the tool frame.

- **Forward kinematics**

    ```python
    algo_controller.forward_kinematics(joint, flag_eul)  # Euler angles
    algo_controller.forward_kinematics(joint, flag_qua)  # Quaternion
    ```

    Perform forward kinematics calculation via the given joint angle.

- **Inverse kinematics**

    ```python
    algo_controller.inverse_kinematics(q_in_joint, q_in_pose, flag_eul)
    ```

    Perform inverse kinematics calculation via the given end-effector pose.

- **Euler angle to quaternion**

    ```python
    algo_controller.euler2quaternion(eul)
    ```

    Convert Euler angles to quaternions.

- **Quaternion to Euler angle**

    ```python
    algo_controller.quaternion2euler(qua)
    ```

    Convert quaternions to Euler angles.

## 6. License information

- This project is subject to the MIT license.
