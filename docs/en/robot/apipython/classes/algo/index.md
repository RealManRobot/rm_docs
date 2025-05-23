# <p class="hidden">Python: </p>Algorithm Interface Configuration `algo`

For the RealMan robotic arm, there are tool interfaces such as forward and inverse kinematics and various pose parameter transformations. <br>

## Initialize algorithm dependency data `__init__()`

- **Method prototype:**

```python
__init__(self, arm_model: rm_robot_arm_model_e, force_type: rm_force_type_e):
```

*Jump to [Type description](../../type/index.md) for details of `rm_robot_arm_model_e` and `rm_force_type_e`.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `arm_model`  |    `rm_robot_arm_model_e`    |    Robotic arm model.   |
|   `force_type`  |    `rm_force_type_e`    |    Sensor type.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

```

## Get the algorithm library version `rm_algo_version()`

- **Method prototype:**

```python
rm_algo_version(self) -> str:
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   -  |    `str`    |    Algorithm library version number.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the robotic arm mounting angle used by the current algorithm
print(algo_handle.rm_algo_version())
```

## Set the mounting angle `rm_algo_set_angle()`

- **Method prototype:**

```python
rm_algo_set_angle(self, x: float, y: float, z: float) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |   `float`    |    X-axis mounting angle, in °.   |
|   `y`  |    `float`    |    Y-axis mounting angle, in °.   |
|   `z`  |    `float`    |    Z-axis mounting angle, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the robotic arm mounting angle used by the current algorithm
algo_handle.rm_algo_set_angle(0,90,0)
```

## Get the mounting angle `rm_algo_get_angle()`

- **Method prototype:**

```python
rm_algo_get_angle(self) -> tuple[float, float, float]:
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |   `float`    |    X-axis mounting angle, in °.   |
|   `y`  |    `float`    |    Y-axis mounting angle, in °.   |
|   `z`  |    `float`    |    Z-axis mounting angle, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the robotic arm mounting angle used by the current algorithm
print(algo_handle.rm_algo_get_angle())
```

## Set the work frame `rm_algo_set_workframe()`

- **Method prototype:**

```Python
rm_algo_set_workframe(self, frame: rm_frame_t) -> None:
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `frame`  |    `rm_frame_t`    |    Frame data.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the pose of the current work frame
frame = rm_frame_t("", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569])
algo_handle.rm_algo_set_workframe(frame)
```

## Get the current work frame `rm_algo_get_curr_workframe()`

- **Method prototype:**

```python
rm_algo_get_curr_workframe(self) -> dict[str, any]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `dict[str, any]`  |    `rm_frame_t`    |    Return the dictionary of the current work frame, <br> key: field name of rm_frame_t.   |

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the pose of the current work frame
frame = rm_frame_t("", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569])
algo_handle.rm_algo_set_workframe(frame)

# Get the pose of the current work frame
print(algo_handle.rm_algo_get_curr_workframe())
```

## Set the tool frame `rm_algo_set_toolframe()`

- **Method prototype:**

```python
rm_algo_set_toolframe(self, frame: rm_frame_t) -> None:
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `frame`  |    `rm_frame_t`    |    Frame data.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the current tool frame
frame = rm_frame_t("", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569], 5, 1, 1, 1)
algo_handle.rm_algo_set_toolframe(frame)
```

## Get the current tool frame `rm_algo_get_curr_toolframe()`

- **Method prototype:**

```python
rm_algo_get_curr_toolframe(self) -> dict[str, any]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `dict[str, any]`  |    `rm_frame_t`    |    Return the dictionary of the current tool frame, <br> key: field name of rm_frame_t.   |

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the current tool frame
frame = rm_frame_t("", [0.186350, 0.062099, 0.2, 3.141, 0, 1.569], 5, 1, 1, 1)
algo_handle.rm_algo_set_toolframe(frame)

# Get the current tool frame
print(algo_handle.rm_algo_get_curr_toolframe())
```

## Set maximum joint limit `rm_algo_set_joint_max_limit()`

- **Method prototype:**

```python
rm_algo_set_joint_max_limit(self, joint_limit: list[float]) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    `list[float]`    |    Maximum joint limit array, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the maximum joint limit used by the algorithm
joint_max_limit = [178.0, 130.0, 135.0, 178.0, 128.0, 180.0]
algo_handle.rm_algo_set_joint_max_limit(joint_max_limit)
```

## Get maximum joint limit `rm_algo_get_joint_max_limit()`

- **Method prototype:**

```python
rm_algo_get_joint_max_limit(self) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   \  |    `list[float]`    |    Return the maximum joint limit array, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the maximum joint limit used by the algorithm
print(algo_handle.rm_algo_get_joint_max_limit())

```

## Set minimum joint limit `rm_algo_set_joint_min_limit()`

- **Method prototype:**

```python
rm_algo_set_joint_min_limit(self, joint_limit: list[float]) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    list[float]    |    Minimum joint limit array, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the minimum joint limit used by the algorithm
joint_min_limit = [-178.0, -130.0, -135.0, -178.0, -128.0, -180.0]
algo_handle.rm_algo_set_joint_min_limit(joint_min_limit)
```

## Get minimum joint limit `rm_algo_get_joint_min_limit()`

- **Method prototype:**

```python
rm_algo_get_joint_min_limit(self) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   \  |    list[float]    |    Minimum joint limit array, in °.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the minimum joint limit used by the algorithm
print(algo_handle.rm_algo_get_joint_min_limit())
```

## Set maximum joint speed `rm_algo_set_joint_max_speed()`

- **Method prototype:**

```python
rm_algo_set_joint_max_speed(self, joint_limit: list[float]) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    `list[float]`    |    Maximum speed, in RPM.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the maximum joint speed used by the algorithm
joint_max_speed = [30.0, 30.0, 37.5, 37.5, 37.5, 37.5]
algo_handle.rm_algo_set_joint_max_speed(joint_max_speed)
```

## Get maximum joint speed `rm_algo_get_joint_max_speed()`

- **Method prototype:**

```python
rm_algo_get_joint_max_speed(self) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `list[float]`  |    `float`    |    Save the returned maximum speed, in RPM.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the minimum joint limit used by the algorithm
print(algo_handle.rm_algo_get_joint_max_speed())
```

## Set maximum joint acceleration `rm_algo_set_joint_max_acc()`

- **Method prototype:**

```python
rm_algo_set_joint_max_acc(self, joint_limit: list[float]) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    `float`    |    Maximum acceleration, in RPM/s.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the maximum joint acceleration used by the algorithm
joint_max_acc = [166.6666717529297, 166.6666717529297, 166.6666717529297, 166.6666717529297, 166.6666717529297, 166.6666717529297]
algo_handle.rm_algo_set_joint_max_acc(joint_max_acc)
```

## Get maximum joint acceleration `rm_algo_get_joint_max_acc()`

- **Method prototype:**

```python
rm_algo_get_joint_max_acc(self) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `list[]`  |    `float`    |    Save the returned maximum acceleration, in RPM/s.   |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the minimum joint limit used by the algorithm
print(algo_handle.rm_algo_get_joint_max_acc())
```

## Set the inverse kinematics solution mode `rm_algo_set_redundant_parameter_traversal_mode()`

- **Method prototype:**

```python
rm_algo_set_redundant_parameter_traversal_mode(self, mode: bool) -> None:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `mode`  |    `bool`    |     - true: traversal mode, redundant parameter traversal solution strategy. It is applicable to scenes where the current pose differs greatly from the required pose, such as MOVJ_P and pose editing, and it takes a long time. <br> -false: single step mode, automatically adjusting the solution strategy of redundant parameters. It is applicable to scenes where the difference between the current pose and the required pose is very small and continuous cycle control is required, such as the pose solution of Cartesian space planning, and it takes a short time.|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the inverse kinematics solution to traversal mode
algo_handle.rm_algo_set_redundant_parameter_traversal_mode(true)
```

## <div id = '6242'>Inverse kinematics function `rm_algo_inverse_kinematics()`</div>

- **Method prototype:**

```python
rm_algo_inverse_kinematics(self, params: rm_inverse_kinematics_params_t) -> tuple[int, list[float]]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `params`  |    `rm_inverse_kinematics_params_t`    |    Inverse kinematics input parameter structure.   |

*Jump to [rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md) for details of the structure.*

- **Return value:**
tuple[int,list[float]]: a tuple containing two elements.
  - int Inverse kinematics result:

    |   Parameter    |  Type    |   Description    |Handling Suggestions|
    | :--- | :--- | :--- |:---|
    |   0  |    `int`    |    Inverse kinematics succeeds.   |-|
    |   1  |    `int`    |    Inverse kinematics fails.   |If you believe the target pose is solvable but the inverse kinematics failed, here are some possible steps and considerations:<br>1. Check input parameters: Ensure that the joint angles from the previous moment and the target pose are correctly input, such as position units requiring meters, and not mistakenly using millimeters.<br>2. Set inverse kinematics solving mode: Call rm_algo_set_redundant_parameter_traversal_mode to set an appropriate solving mode.<br>3. Check if the handle is valid: If used with a robot arm, ensure the handle is valid. The API will synchronize the robot arm's current configuration to the algorithm based on the handle.<br>4. Check if installation angles, coordinate systems, and limits are set: When not connected to a robot arm, if you are not using the default configurations, you need to call the corresponding algorithm interfaces to set them.<br>5. Contact technical support: If none of the above suggestions solve the problem and you are certain the target pose is solvable, contact the technical support of RealMan Company. We will assist you with verification.|
    |  -1  |    `int`    |    The previous joint angle input is NULL.   |Check if the joint angles from the previous moment are input correctly.|
    |  -2  |    `int`    |    The target pose quaternion is invalid.   |Check if the target pose quaternion in params is valid.|

  - `list[float]` : output joint angle, in °, length: degree of freedom of the robotic arm.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Perform the inverse kinematics from joint angles [0, 0, -90, 0, -90, 0] to target poses [0.186350, 0.062099, 0.200000, 3.141, 0, 1.569]. The target orientation is represented by the Euler angle.
params = rm_inverse_kinematics_params_t([0, 0, -90, 0, -90, 0], [0.186350, 0.062099, 0.200000, 3.141, 0, 1.569], 1)
q_out = algo_handle.rm_algo_inverse_kinematics(params)
print(q_out)
```

## Calculate Inverse Kinematics Full Solution (Currently supports only six degrees of freedom robots) `rm_algo_inverse_kinematics_all()`

- **Method prototype**:

```python
rm_algo_inverse_kinematics_all(self, params: rm_inverse_kinematics_params_t) -> rm_inverse_kinematics_all_solve_t:
```

*Jump to [rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md) and [rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllSolve/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `params`  |    `rm_inverse_kinematics_params_t`    |    The input parameter structure for inverse kinematics.    |

- **Return value:**

   `rm_inverse_kinematics_all_solve_t` The full solution structure for inverse kinematics.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm
algo_handle = Algo(arm_model, force_type) 

params = rm_inverse_kinematics_params_t([1.943, 21.305, -2.819, 78.314, 1.013, 80.404], [0.3, 0, 0.3, 3.14, 0, 3.14], 1)
result = algo_handle.rm_algo_inverse_kinematics_all(params)
print(f"Inverse kinematics calculation: {result.result} num: {result.num}")
for solve in result.q_solve:
    print(list(solve))
```

## <div id = '6274'>Select the Optimal Solution from Multiple Solutions (Currently supports only six degrees of freedom robots) `rm_algo_ikine_select_ik_solve()`</div>

- **Method prototype**:

```python
rm_algo_ikine_select_ik_solve(self, weight: list[float], params: rm_inverse_kinematics_all_solve_t) -> int:
```

*Jump to [rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllSolve/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
|  :--- | :--- | :--- |
|   `weight`  |    `list[float]`    |    Weights, with the recommended default values being `[1,1,1,1,1,1]`    |
|   `params`  |    `rm_inverse_kinematics_all_solve_t`    |   The full solution structure to be selected   |

- **Return value:**

   `int` Index of the optimal solution, with the selected solution being ik_solve.q_solve[i]. -1: The current robot is not a six degrees of freedom robot, and currently only six degrees of freedom robots are supported.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm
algo_handle = Algo(arm_model, force_type)
result = algo_handle.rm_algo_inverse_kinematics_all(params)
print(f"Inverse kinematics calculation: {result.result} num: {result.num}")

ret = algo_handle.rm_algo_ikine_select_ik_solve([1.0, 1.0, 1.0, 1.0, 1.0, 1.0], result)
print(f"rm_algo_ikine_select_ik_solve ret: {ret}")
if ret != -1:
  print("best solution :",list(result.q_solve[ret]))
```

## <div id = '6292'>Check if the Inverse Kinematics Solution Exceeds Joint Position Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_position_limit()`</div>

- **Method prototype**:

```python
rm_algo_ikine_check_joint_position_limit(self, q_solve_i:list[float]) -> int:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
|  :--- | :--- | :--- |
|   `q_solve_i`  |    `list[float]`    |   A set of solutions, i.e., a set of joint angles, unit: °  |

- **Return value:**

   `int` 0: Indicates no limit exceeded. i: Indicates joint i has exceeded the limit, with priority given to reporting the joint with the smaller index. -1: The current robot is not a six degrees of freedom robot, and currently only six degrees of freedom robots are supported.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm
algo_handle = Algo(arm_model, force_type) 
params = rm_inverse_kinematics_params_t([1.943, 21.305, -2.819, 78.314, 1.013, 80.404], [0.3, 0, 0.3, 3.14, 0, 3.14], 1)
result = algo_handle.rm_algo_inverse_kinematics_all(params)
print(f"Inverse kinematics calculation: {result.result} num: {result.num}")
for solve in result.q_solve:
  ret = algo_handle.rm_algo_ikine_check_joint_position_limit(list(solve))
  print(f"rm_algo_ikine_check_joint_position_limit ret: {ret}")
```

## <div id = '6294'>Check if the Inverse Kinematics Solution Exceeds Joint Velocity Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_velocity_limit()`</div>

- **Method prototype**:

```python
rm_algo_ikine_check_joint_velocity_limit(self, dt:float, q_ref:list[float], q_solve_i:list[float]) -> int:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
|  :--- | :--- | :--- |
|   `dt`  |    `float`    |    The time interval between two frames of data, i.e., the control cycle, unit: sec   |
|   `q_ref`  |    `list[float]`    |    The reference joint angles or the angles of the first frame of data, unit: °    |
|   `q_solve_i`  |    `list[float]`    |    A set of solutions, i.e., a set of joint angles, unit: °    |

- **Return value:**

   `int` 0: Indicates no limit exceeded. i: Indicates joint i has exceeded the limit, with priority given to reporting the joint with the smaller index. -1: The current robot is not a six degrees of freedom robot, and currently only six degrees of freedom robots are supported.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm  
algo_handle = Algo(arm_model, force_type)
params = rm_inverse_kinematics_params_t([1.943, 21.305, -2.819, 78.314, 1.013, 80.404], [0.3, 0, 0.3, 3.14, 0, 3.14], 1)
result = algo_handle.rm_algo_inverse_kinematics_all(params)
print(f"Inverse kinematics calculation: {result.result} num: {result.num}")
for solve in result.q_solve:
  ret = algo_handle.rm_algo_ikine_check_joint_velocity_limit(0.01, params.q_ref, list(solve))
  print(f"rm_algo_ikine_check_joint_velocity_limit ret: {ret}")
```

## <div id = '6296'>Calculate Arm Angle from Reference Configuration (Only supports RM75) `rm_algo_calculate_arm_angle_from_config_rm75()`</div>

- **Method prototype**:

```python
rm_algo_calculate_arm_angle_from_config_rm75(self,q_ref:list[float]) -> tuple[int, float]:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
|  :--- | :--- | :--- |
|   `q_ref`  |    `list[float]`    |    The joint angles of the current reference configuration, unit: °    |

- **Return value:**

  `tuple[int, float]` A tuple containing two elements.

  - `int` Calculation result:

    |   Parameter    |   Type  |  Description |
    | :--- | :--- | :--- |
    |   0  |    `int`    |   Calculation successful.  |
    |   -1  |    `int`    |   Calculation failed.    |

  - `float` The calculated arm angle corresponding to the current reference configuration, unit: °.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_75_E  # RM_75 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm
algo_handle = Algo(arm_model, force_type)
q_ref = [0.000,57.780,17.734,28.890,11.156,74.482]
ret,phi = algo_handle.rm_algo_calculate_arm_angle_from_config_rm75(q_ref)
print(f"rm_algo_calculate_arm_angle_from_config_rm75 ret: {ret} arm_angle: {phi}")
```

## <div id = '6298'>Solve Inverse Kinematics for RM75 Using Arm Angle Method `rm_algo_inverse_kinematics_rm75_for_arm_angle()`</div>

- **Method prototype**:

```python
rm_algo_inverse_kinematics_rm75_for_arm_angle(self,params:rm_inverse_kinematics_params_t,arm_angle:float) -> tuple[int,list[float]]:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
|  :--- | :--- | :--- |
|   `params`  |    `rm_inverse_kinematics_params_t`    |    The inverse kinematics parameter structure    |
|   `arm_angle`  |    `float`    |   The specified arm angle size, unit: °  |

- **Return value:**

   `tuple[int,list[float]]` A tuple containing two elements.
  - `int` Calculation result:

      |   Parameter    |   Type    |   Description    |
      | :--- | :--- | :--- |
      |   0  |    `int`    |    Calculation successful.    |
      |   -1  |    `int`    |     Calculation failed.    |
      |   -2  |    `int`    |    The calculation result exceeds the limit.  |
      |   -3  |    `int`    |    The robot model is not RM75.   |

  - `list[float]` The solution result, unit: °

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_75_E  # RM_75 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard edition
# Initialize the robotic arm and end-effector model for the algorithm
algo_handle = Algo(arm_model, force_type)
q_ref = [0.0, 110.0, 20.0, 40.0, 30.0, 180.0, 20.0]
ret,phi = algo_handle.rm_algo_calculate_arm_angle_from_config_rm75(q_ref)
params = rm_inverse_kinematics_params_t([0.0, 110.0, 20.0, 40.0, 30.0, 180.0, 20.0], [0.3,0.0,0.3,3.14,0.0,3.14], 1)
ret,q_out = algo_handle.rm_algo_inverse_kinematics_rm75_for_arm_angle(params,phi)
print(f"rm_algo_inverse_kinematics_rm75_for_arm_angle ret: {ret} q_out: {q_out}")
```

## Forward kinematics algorithm `rm_algo_forward_kinematics()`

- **Method prototype:**

```python
rm_algo_forward_kinematics(self, joint: list[float], flag: int = 1) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint`  |    `list[float]`    |    Joint angle, in °.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

- **Return value:**

`list[float]`: obtained target pose list.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Perform the forward kinematics of joint angles [0, 0, -90, 0, -90, 0], and return the pose, with the orientation represented by the Euler angle
pose = algo_handle.rm_algo_forward_kinematics([0, 0, -90, 0, -90, 0])
print(pose)
```

## Euler angle to quaternion `rm_algo_euler2quaternion()`

- **Method prototype:**

```python
rm_algo_euler2quaternion(self, eul: list[float]) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `eul`  |    `list[float]`    |    Euler angle list [rx, ry, rz], in rad.   |

- **Return value:**

`list[float]`: quaternion list [w, x, y, z]

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the Euler angle [-0.259256, -0.170727, 0.35621] into the quaternion
print(algo_handle.rm_algo_euler2quaternion([-0.259256, -0.170727, 0.35621]))
```

## Quaternion to Euler angle `rm_algo_quaternion2euler()`

- **Method prototype:**

```python
rm_algo_quaternion2euler(self, quat: list[float]) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `quat`  |    `list[float]`    |    Quaternion list [w, x, y, z].   |

- **Return value:**

`list[float]`: Euler angle list [rx, ry, rz], in rad.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the quaternion (0, 0, 0, 1) into the Euler angle
print(algo_handle.rm_algo_quaternion2euler([0,0,0,1]))
```

## Euler angle to rotation matrix `rm_algo_euler2matrix()`

- **Method prototype:**

```python
rm_algo_euler2matrix(self, eu: list[float]) -> rm_matrix_t:
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `eu`  |    `list[float]`    |    Euler angle list [rx, ry, rz], in rad.   |

- **Return value:**

`rm_matrix_t`: rotation matrix.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the Euler angle (3.14, 0, 0) into the rotation matrix
mat = algo_handle.rm_algo_euler2matrix([3.14, 0, 0])
```

## Pose to rotation matrix `rm_algo_pos2matrix()`

- **Method prototype:**

```python
rm_algo_pos2matrix(self, pose: list[float]) -> rm_matrix_t:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `pose`  |    `list[float]`    |    Position and orientation list [x, y, z, rx, ry, rz].   |

- **Return value:**

`rm_matrix_t`: rotation matrix.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the pose into the rotation matrix
mat = algo_handle.rm_algo_pos2matrix([-0.177347, 0.438112, -0.215102, 2.09078, 0.942362, 2.39144])
```

## Rotation matrix to pose `rm_algo_matrix2pos()`

- **Method prototype:**

```python
rm_algo_matrix2pos(self, matrix: rm_matrix_t, flag: int = 1) -> list[float]:
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    `rm_matrix_t`    |    Rotation matrix.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

- **Return value:**

`list[float]`: obtained target pose.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the rotation matrix into the pose
data = [1.0, 0.0, 0.0, 10.0],[0.0, 1.0, 0.0, 20.0],[0.0, 0.0, 1.0, 30.0],[0.0, 0.0, 0.0, 1.0]
mat = rm_matrix_t(4,4,data)

print(algo_handle.rm_algo_matrix2pos(mat))
```

## Base frame to work frame `rm_algo_base2workframe()`

- **Method prototype:**

```python
rm_algo_base2workframe(self, matrix: rm_matrix_t, pose_in_base: rm_pose_t, flag: int = 1) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    `rm_matrix_t`    |    Matrix of the work frame in the base frame.   |
|   `pose_in_base`  |    `rm_pose_t`    |    Pose of the end frame in the base frame.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Return value:**

`list[float]`: pose of the base frame in the work frame.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the base frame into the work frame, where work_matrix is the matrix of the work frame in the base frame, and end_pose is the pose of the end frame in the base frame
work_matrix = algo_handle.rm_algo_pos2matrix([-0.177347, 0.438112, -0.215102, 2.09078, 0.942362, 2.39144])
end_pose =  rm_pose_t()
end_pose.position = rm_position_t(0.186350, 0.062099, 0.2)
end_pose.euler = rm_euler_t(3.141, 0, 1.569)
print(algo_handle.rm_algo_base2workframe(work_matrix, end_pose))
```

## Work frame to base frame`rm_algo_workframe2base()`

- **Method prototype:**

```python
rm_algo_workframe2base(self, matrix: rm_matrix_t, pose_in_work: rm_pose_t, flag: int = 1) -> list[float]:
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    `rm_matrix_t`    |    Matrix of the end frame in the work frame.   |
|   `pose_in_work`  |    `rm_pose_t`    |    Pose of the end frame in the work frame.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

- **Return value:**

`list[float]`: pose of the work frame in the base frame.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the work frame into the base frame, where work_matrix is the matrix of the end frame in the work frame, and end_pose is the pose of the end frame in the work frame
work_matrix = algo_handle.rm_algo_pos2matrix([-0.177347, 0.438112, -0.215102, 2.09078, 0.942362, 2.39144])
end_pose =  rm_pose_t()
end_pose.position = rm_position_t(0.186350, 0.062099, 0.2)
end_pose.euler = rm_euler_t(3.141, 0, 1.569)
print(algo_handle.rm_algo_workframe2base(work_matrix, end_pose))
```

## End pose to tool pose `rm_algo_end2tool()`

- **Method prototype:**

```python
rm_algo_end2tool(self, eu_end: rm_pose_t, flag: int = 1) -> list[float]:
```

   *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `eu_end`  |    `rm_pose_t`    |    End pose based on world frame and default tool frame.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

`list[float]`: end pose based on work frame and tool frame.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the end pose into the tool pose
eu_end = rm_pose_t()
eu_end.position = rm_position_t(-0.259256, -0.170727, 0.35621)
eu_end.euler = rm_euler_t(3.14, 0, 0)
print(algo_handle.rm_algo_end2tool(eu_end))
```

## Tool pose to end pose `rm_algo_tool2end()`

- **Method prototype:**

```python
rm_algo_tool2end(self, eu_tool: rm_pose_t, flag: int = 1) -> list[float]:
```

   *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `eu_tool`  |   `rm_pose_t`  |  End pose based on work frame and tool frame.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle.   |

`list[float]`: end pose based on world frame and default tool frame.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Convert the end pose into the tool pose
eu_tool = rm_pose_t()
eu_tool.position = rm_position_t(-0.259256, -0.170727, 0.35621)
eu_tool.euler = rm_euler_t(3.14, 0, 0)
print(algo_handle.rm_algo_tool2end(eu_tool))
```

## Compute the pose in rotational movement `rm_algo_RotateMove()`

- **Method prototype:**

```python
rm_algo_RotateMove(self, curr_joint: list[float], rotate_axis: int, rotate_angle: float, choose_axis: rm_pose_t, flag: int = 1) -> list[float]:
```

*Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `curr_joint`  |    `list[float]`    |    Current joint angle, in °.   |
|   `rotate_axis`  |    `int`    |    Rotation axis, 1: X-axis, 2: Y-axis, 3: Z-axis.   |
|   `rotate_angle`  |    `float`    |    Rotation angle, in °.   |
|   `choose_axis`  |    `rm_pose_t`    |    Specify the frame for computation.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle. |

- **Return value:**

`list[float]`: target pose.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Compute the rotation of 5° around the X-axis of the pose frame based on the current angle. The returned pose is represented by the Euler angle
current_joint = [0, 0, -60, 0, 60, 0]
pose = rm_pose_t()
pose.position = rm_position_t(-0.259256, -0.170727, 0.35621)
pose.euler = rm_euler_t(3.14, 0, 0)
print(algo_handle.rm_algo_RotateMove(current_joint, 1, 5, pose))
```

## Compute the pose in movement along the tool frame `rm_algo_cartesian_tool()`

- **Method prototype:**

```python
rm_algo_cartesian_tool(self, curr_joint: list[float], move_lengthx: float, move_lengthy: float, move_lengthz: float, flag: int = 1) -> list[float]:
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `curr_joint`  |    `list[float]`    |    Current joint angle, in °.   |
|   `move_lengthx`  |    `float`    |    Movement length along the X-axis, in m.   |
|   `move_lengthy`  |     `float`    |    Movement length along the Y-axis, in m.   |
|   `move_lengthz`  |     `float`    |    Movement length along the Z-axis, in m.   |
|   `flag`  |    `int`    |    Orientation representation, default: Euler angle. - 0: return the pose list [x, y, z, w, x, y, z] with the orientation represented by the quaternion, - 1: return the pose list [x, y, z, rx, ry, rz] with the orientation represented by the Euler angle. |

- **Return value:**

`list[float]`: target pose.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Compute the motion pose along the tool frame based on the current angle
current_joint = [0, 0, -60, 0, 60, 0]
algo_handle.rm_algo_cartesian_tool(current_joint, 0.01, 0, 0.01)
```

## Compute the pose after Pos and Rot have a displacement and rotation angle along a frame rm_algo_PoseMove()`

- **Method prototype:**

```python
rm_algo_PoseMove(self, poseCurrent: list[float], deltaPosAndRot: list[float], frameMode: int) -> list[float]
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `poseCurrent`  |    `list[float]`    |    Current pose (represented by the Euler angle)     |
|   `deltaPosAndRot`  |    `list[float]`    |    Position and rotation array, where position in m and rotation in °   |
|   `frameMode`  |    `int`    |    Frame mode selection, 0: work (any frame is available), 1: tool     |

- **Return value:**

`list[float]`: pose after translation and rotation 

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 Robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and sensor type in the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the current tool frame
frame = rm_frame_t("", [0.01, 0.01, 0.01, 0.5, 0.5, 0.5], 1, 0, 0, 0)
algo_handle.rm_algo_set_toolframe(frame)

# Current pose
current_joint = [0,-30,90,30,90,0]
poseCurrent = algo_handle.rm_algo_forward_kinematics(current_joint)
print("current pose:", poseCurrent)

# Compute the pose after a change
deltaPosAndRot = [0.01,0.01,0.01,20,20,20]
afterPosAndRot = algo_handle.rm_algo_PoseMove(poseCurrent, deltaPosAndRot,1)
print("pose after translation and rotation:", afterPosAndRot)
```

## Set Algorithm DH Parameters `rm_algo_set_dh()`

- **Method prototype**:

```Python
rm_algo_set_dh(self, dh_data: rm_dh_t) -> None:
```

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `dh_data`  |    `rm_dh_t`    |    DH parameters. |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

# Set the current DH parameters for the robotic arm (example values; modify according to actual DH parameters)
dh_data = rm_dh_t(a=[0, 0, 0, 0, 0, 0], d=[0, 0, 0, 0, 0, 0], alpha=[0, 0, 0, 0, 0, 0], offset=[0, 0, 0, 0, 0, 0])
arm.rm_algo_set_dh(dh_data)
```

## Get Algorithm DH Parameters `rm_algo_get_dh()`

- **Method prototype**:

```python
rm_algo_get_dh(self) -> rm_dh_t:
```

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `dh`  |    `rm_dh_t`    |    Returns the current DH parameters.  |

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

# Get the algorithm's DH parameters
print(arm.rm_algo_get_dh().to_dict())
```

## <div id = '6300'>Numerical Method to Determine if the Robot is in a Singular Configuration `rm_algo_universal_singularity_analyse()`</div>

- **Method prototype**:

```python
rm_algo_universal_singularity_analyse(self, q:list[float], singluar_value_limit:float) -> int:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `q`  |    `list[float]`    |    The joint angles to be judged (described in mechanical zero position), unit: deg.    |
|   `singluar_value_limit`  |    `float`    |   The minimum singular value threshold.   |

- **Return value:**

  `int` 0: Indicates normal under the current threshold condition; -1: Indicates that the robot is in a singular area under the current threshold condition; -2: Indicates that the calculation failed.

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

# Joint angles in the shoulder singularity area
q_s = [0, 43.4, -105.7, 0, -30, 0]
singularity_limit = 0.01
ret_qs = algo_handle.rm_algo_universal_singularity_analyse(q_s, singularity_limit)
```

## Set Custom Thresholds (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_set_singularity_thresholds()`

- **Method prototype**:

```python
rm_algo_kin_set_singularity_thresholds(self,limit_qe:float,limit_qw:float, limit_d:float)-> None:
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `limit_qe`  |    `float`    |    The range setting for elbow singularity area (i.e., the range where J3 is close to 0, or for RML63, the range where J3 is close to -9.68), unit: °, default: 10°.    |
|   `limit_qw`  |    `float`    |  The range setting for wrist singularity area (i.e., the range where J5 is close to 0), unit: °, default: 10°. |
|   `limit_d`  |    `float`    |  The range setting for shoulder singularity area (i.e., the distance from the wrist center to the singular plane), unit: m, default: 0.05.    |

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

limit_qe = 12; # Elbow singularity threshold, unit: deg
limit_qw = 12; # Wrist singularity threshold, unit: deg
limit_d  = 0.05;  # Shoulder singularity threshold, unit: m
algo_handle.rm_algo_kin_set_singularity_thresholds(limit_qe, limit_qw, limit_d)
```

## Restore Initial Thresholds (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_singularity_thresholds_init()`

Thresholds are initialized to: limit_qe=10deg, limit_qw=10deg, limit_d = 0.05m

- **Method prototype:**

```python
rm_algo_kin_singularity_thresholds_init(self)-> None:
```

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

algo_handle.rm_algo_kin_singularity_thresholds_init() #Restore thresholds to default values
```

## Get Custom Thresholds (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_get_singularity_thresholds()`

- **Method prototype**:

```python
rm_algo_kin_get_singularity_thresholds(self)-> tuple[float,float,float]:
```

- **Return value:**

  - tuple[float,float,float] Custom thresholds:

    |   Parameter    |   Type    |   Description    |Suggestion|
    | :--- | :--- | :--- |:---|
    |   `limit_qe`  |    `float`    |   The range setting for elbow singularity area (i.e., the range where J3 is close to 0, or for RML63, the range where J3 is close to -9.68), unit: °, default: 10°.  |-|
    |   `limit_qw`  |    `float`    |   The range setting for wrist singularity area (i.e., the range where J5 is close to 0), unit: °, default: 10°.  |-|
    |   `limit_d`  |    `float`    |   The range setting for shoulder singularity area (i.e., the distance from the wrist center to the singular plane), unit: m, default: 0.05.  |-|

- **Usage demo**
  
```python
from Robotic_Arm.rm_robot_interface import *

arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)

print(algo_handle.rm_algo_kin_get_singularity_thresholds())
```

## <div id = '6302'>Analytical Method to Determine if the Robot is in a Singular Configuration (Only supports six degrees of freedom) `rm_algo_kin_robot_singularity_analyse()`</div>

- **Method prototype**:

```python
rm_algo_kin_robot_singularity_analyse(self,q:list[float]) -> tuple[int,float]:
```

- **Parameter description:**

  |   Parameter    |   Type    |   Description    |
  | :--- | :--- | :--- |
  |   `q`  |    `list[float]`    |   The joint angles to be judged, unit: °.    |

- **Return value:**

  - `int`: Singularity judgment result.

    |   Parameter    |   Type    |   Description    |Suggestion|
    | :--- | :--- | :--- |:---|
    |   0  |    `int`    |    Normal under the current threshold condition    |-|
    |   -1  |    `int`    |    Shoulder singularity    |-|
    |   -2  |    `int`    |    Elbow singularity    |-|
    |   -3  |    `int`    |    Wrist singularity    |-|

  - `float`: Returns the distance from the wrist center to the shoulder singular plane. The closer this value is to 0, the closer it is to the shoulder singularity, unit: m.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type) 

limit_qe = 12; # Elbow singularity threshold, unit: deg
limit_qw = 12; # Wrist singularity threshold, unit: deg
limit_d  = 0.05;  # Shoulder singularity threshold, unit: m
algo_handle.rm_algo_kin_set_singularity_thresholds(limit_qe, limit_qw, limit_d)

# Joint angles in the shoulder singularity area
q_s = [0, 43.4, -105.7, 0, -30, 0]
ret_qs,distance = algo_handle.rm_algo_kin_robot_singularity_analyse(q_s)
print(f"q_s singularity: {ret_qs} distance : {distance}")
```

## Set Tool Envelope Sphere Parameters `rm_algo_set_tool_envelope()`

- **Method prototype**:

```python
rm_algo_set_tool_envelope(self, toolSphere_i:int, data:rm_tool_sphere_t) -> None:
```

*Jump to [rm_tool_sphere_t](../../struct/toolToolEnvelope/index.md) for details of the structure.*

- **Parameter description:**

  |   Parameter    |   Type    |   Description    |
  | :--- | :--- | :--- |
  |   `toolSphere_i`  |    `int`    |    The tool envelope sphere number (0~4).    |
  |   `data`  |    `rm_tool_sphere_t`    |  The tool envelope sphere parameters, note that its parameters are described in the end-effector flange coordinate system.    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type) 
# Set tool envelope sphere parameters
toolSphere_i = 0
data = rm_tool_sphere_t()
data.radius = 0.01
data.center = rm_position_t(0.01, 0.01, 0.01)
algo_handle.rm_algo_set_tool_envelope(toolSphere_i, data)
```

## Get Tool Envelope Sphere Parameters `rm_algo_get_tool_envelope()`

- **Method prototype**:

```python
rm_algo_get_tool_envelope(self, toolSphere_i:int) -> rm_tool_sphere_t:
```

*Jump to [rm_tool_sphere_t](../../struct/toolToolEnvelope/index.md) for details of the structure.*

- **Parameter description:**

   |   Parameter    |   Type    |   Description    |
   | :--- | :--- | :--- |
   |   `toolSphere_i`  |    `int`    |   The tool envelope sphere number (0~4).   |

- **Return value:**

  `rm_tool_sphere_t` Tool envelope sphere parameters, note that its parameters are described in the end-effector flange coordinate system.

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type) 
# Get tool envelope sphere parameters
toolSphere_i = 0  
print(algo_handle.rm_algo_get_tool_envelope(toolSphere_i))
```

## <div id = '6290'>Self-Collision Detection Algorithm `rm_algo_safety_robot_self_collision_detection()`</div>

- **Method prototype**:

```python
rm_algo_safety_robot_self_collision_detection(self,joint_deg:list[float]) -> int:
```

- **Parameter description:**

  |   Parameter    |   Type    |   Description    |
  | :--- | :--- | :--- |
  |   `joint_deg`  |    `list[float]`    |   The joint angles to be judged, unit: °  |

- **Return value:**

  - `int`: Self-collision detection result.

  |   Parameter    |   Type    |   Description    |
  | :--- | :--- | :--- |
  |   0  |    `int`    |   No collision.    |
  |   1  |    `int`    |   Collision occurred, exceeding joint limits will be considered as a collision.    |

- **Usage demo**

```python
from Robotic_Arm.rm_robot_interface import *
arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # RM_65 robotic arm
force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Standard version
# Initialize the robotic arm model and end-effector type for the algorithm
algo_handle = Algo(arm_model, force_type)
# Detect self-collision
envelope = rm_tool_sphere_t(0.01, (0.0, 0.0, 0.05))
algo_handle.rm_algo_set_tool_envelope(0, envelope)
get_envelope = algo_handle.rm_algo_get_tool_envelope(0)

joint_deg = [0, -30, 130, 0, 90.0, 0]
ret = algo_handle.rm_algo_safety_robot_self_collision_detection(joint_deg)
if (ret != 0):
    print("First Collision!\n")
joint_deg[4] = 0 #Set joint 5 to 0, no collision will occur
ret = algo_handle.rm_algo_safety_robot_self_collision_detection(joint_deg)
if (ret!= 0):
    print("Second Collision!\n")
```
