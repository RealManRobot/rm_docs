# <p class="hidden">C, C++: </p>Algorithm Interface Configuration `algo`

For the RealMan robotic arm, there are tool interfaces such as forward and inverse kinematics and various pose parameter transformations.

## Initialize algorithm dependency data `rm_algo_init_sys_data()`

- **Method prototype:**

```C
void rm_algo_init_sys_data(rm_robot_arm_model_e Mode,rm_force_type_e Type)
```

*Jump to [rm_robot_arm_model_e](../../type/index.md#rm_robot_arm_model_e-robotic-arm-model) and [rm_force_type_e](../../type/index.md#rm_force_type_e-end-force-sensor-type) for details of types*

::: tip
Call it when no robotic arm is connected
:::

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `Model`  |    Input    |    Robotic arm model.   |
|   `Type`  |    Input    |    Sensor type.   |

- **Usage demo**

```C
rm_robot_arm_model_e Mode = RM_MODEL_RM_75_E;
rm_force_type_e Type = RM_MODEL_RM_SF_E;
rm_algo_init_sys_data(Mode, Type);
```

## Get the algorithm library version number `rm_algo_version()`

- **Method prototype:**

```C
char* rm_algo_version(void);
```

- **Return value:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   -  |    `str`    |    Algorithm library version number.   |

- **Usage demo**

```C
char *version = rm_algo_version();
printf("current algo version: %s\n", version);
```

## Set the mounting angle `rm_algo_set_angle()`

- **Method prototype:**

```C
void rm_algo_set_angle(float x,float y,float z)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |    Input    |    X-axis mounting angle, in °.   |
|   `y`  |    Input    |    Y-axis mounting angle, in °.   |
|   `z`  |    Input    |    Z-axis mounting angle, in °.   |

- **Usage demo**
  
```C
rm_algo_set_angle(0, 90, 0)
```

## Get the mounting angle `rm_algo_get_angle()`

- **Method prototype:**

```C
void rm_algo_get_angle(float x,float y,float z)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `x`  |    Output    |    X-axis mounting angle, in °.   |
|   `y`  |    Output    |    Y-axis mounting angle, in °.   |
|   `z`  |    Output    |    Z-axis mounting angle, in °.   |

- **Usage demo**
  
```C
float x,y,z;
rm_algo_get_angle(&x,&y,&z);
```

## Set the work frame `rm_algo_set_workframe()`

- **Method prototype:**

```C
void rm_algo_set_workframe(const rm_frame_t *const coord_work)
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `coord_work`  |    Input    |    Frame data (no name setting is required).   |

- **Usage demo**
  
```C
rm_frame_t coord_work;
coord_work.pose.position.x = (float)0.1;
coord_work.pose.position.y = (float)0.2;
coord_work.pose.position.z = (float)0.3;
coord_work.pose.euler.rx = (float)0.1;
coord_work.pose.euler.ry = (float)0.2;
coord_work.pose.euler.rz = (float)0.3;

rm_algo_set_workframe(&coord_work);
```

## Get the current work frame `rm_algo_get_curr_workframe()`

- **Method prototype:**

```C
void rm_algo_get_curr_workframe(rm_frame_t * coord_work)
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `coord_work`  |    Output    |    Current work frame (obtained frame parameters, excluding frame name).   |

- **Usage demo**
  
```C
rm_frame_t coord_work;
rm_algo_get_curr_workframe(&coord_work);
```

## Set the tool frame `rm_algo_set_toolframe()`

- **Method prototype:**

```C
void rm_algo_set_toolframe(const rm_frame_t *const coord_tool)
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `coord_tool`  |    Input    |    Frame data.   |

- **Usage demo**
  
```C
rm_frame_t coord_tool;
coord_tool.pose.position.x = (float)0.1;  
coord_tool.pose.position.y = (float)0.2;
coord_tool.pose.position.z = (float)0.3;
coord_tool.pose.euler.rx = (float)0.1;
coord_tool.pose.euler.ry = (float)0.2;
coord_tool.pose.euler.rz = (float)0.3;
coord_tool.payload = (float)1.5;
coord_tool.x = (float)0.1;
coord_tool.y = (float)0.2;
coord_tool.z = (float)0.3;
rm_algo_set_toolframe(&coord_tool);

```

## Get the current tool frame `rm_algo_get_curr_toolframe()`

- **Method prototype:**

```C
void rm_algo_get_curr_toolframe(rm_frame_t * coord_tool)
```

*Jump to [rm_frame_t](../../struct/frame/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `coord_tool`  |    Output    |    Current tool frame.   |

- **Usage demo**
  
```C
rm_frame_t coord_tool;
rm_algo_get_curr_toolframe(&coord_tool);
```

## Set maximum joint limit `rm_algo_set_joint_max_limit()`

- **Method prototype:**

```C
void rm_algo_set_joint_max_limit(const float *const joint_limit)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    Input    |    Maximum angle limit, in °.   |

- **Usage demo**
  
```C
float joint_limit[6] = {150,100,90,120,120,300};
rm_algo_set_joint_max_limit(joint_limit);
```

## Get maximum joint limit `rm_algo_get_joint_max_limit()`

- **Method prototype:**

```C
void rm_algo_get_joint_max_limit(float * joint_limit)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    Output    |    Return the maximum joint limit.   |

- **Usage demo**
  
```C
float after_joint_limit[7];
rm_algo_get_joint_max_limit(after_joint_limit);
```

## Set minimum joint limit `rm_algo_set_joint_min_limit()`

- **Method prototype:**

```C
void rm_algo_set_joint_min_limit(const float *const joint_limit)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    Input    |    Minimum angle limit, in °.   |

- **Usage demo**
  
```C
float joint_limit[6] = {150,100,90,120,120,300};
rm_algo_set_joint_min_limit(joint_limit);
```

## Get minimum joint limit `rm_algo_get_joint_min_limit()`

- **Method prototype:**

```C
void rm_algo_get_joint_min_limit(const float *const joint_limit)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_limit`  |    Output    |    Save the returned minimum joint limit.   |

- **Usage demo**
  
```C
float after_joint_limit[7];
rm_algo_get_joint_min_limit(after_joint_limit);
```

## Set maximum joint speed `rm_algo_set_joint_max_speed()`

- **Method prototype:**

```C
void rm_algo_set_joint_max_speed(const float *const joint_slim_max)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_slim_max`  |    Input    |    Maximum speed, in RPM.   |

- **Usage demo**
  
```C
float joint_slim_max[6] = {20,20,20,20,20,20};
rm_algo_set_joint_max_speed(joint_slim_max);
```

## Get maximum joint speed `rm_algo_get_joint_max_speed()`

- **Method prototype:**

```C
void rm_algo_get_joint_max_speed(float * joint_slim_max)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_slim_max`  |    Output    |    Save the returned maximum speed, in RPM.   |

- **Usage demo**
  
```C
float after_joint_slimit_max[6];
rm_algo_get_joint_max_speed(after_joint_slimit_max);
```

## Set maximum joint acceleration `rm_algo_set_joint_max_acc()`

- **Method prototype:**

```C
void rm_algo_set_joint_max_acc(const float *const joint_alim_max)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_alim_max`  |    Input    |    Maximum acceleration, in RPM/s.   |

- **Usage demo**
  
```C
float joint_alimit[6] = {20,20,20,20,20,20};
rm_algo_set_joint_max_acc(joint_alimit);
```

## Get maximum joint acceleration `rm_algo_get_joint_max_acc()`

- **Method prototype:**

```C
void rm_algo_get_joint_max_acc(float * joint_alim_max)
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `joint_alim_max`  |    Output    |    Save the returned maximum acceleration, in RPM/s.   |

- **Usage demo**
  
```C
float after_joint_alimit[6];
rm_algo_get_joint_max_acc(after_joint_alimit);
```

## Set the inverse kinematics solution mode `rm_algo_set_redundant_parameter_traversal_mode()`

- **Method prototype:**

```C
void rm_algo_set_redundant_parameter_traversal_mode(bool mode);
```

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `mode`  |    Input    |     - true: traversal mode, redundant parameter traversal solution strategy. It is applicable to scenes where the current pose differs greatly from the required pose, such as MOVJ_P and pose editing, and it takes a long time. <br> -false: single step mode, automatically adjusting the solution strategy of redundant parameters. It is applicable to scenes where the difference between the current pose and the required pose is very small and continuous cycle control is required, such as the pose solution of Cartesian space planning, and it takes a short time.   |

- **Usage demo**
  
```C
// Set the inverse solution solving mode to the traversal mode
rm_algo_set_redundant_parameter_traversal_mode(true);
```

## <div id = '6241'>Inverse kinematics function `rm_algo_inverse_kinematics()`</div>

- **Method prototype:**

```C
int rm_algo_inverse_kinematics(rm_robot_handle * handle,rm_inverse_kinematics_params_t params,float * q_out)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `params`  |    Input    |    Inverse kinematics input parameter structure.   |
|   `q_out`  |    Output    |    Output joint angle, in °.   |

- **Return value:**

    |   Parameter    |  Type    |   Description    |Handling Suggestions|
    | :--- | :--- | :--- |:---|
    |   0  |    `int`    |    Inverse kinematics succeeds.   |-|
    |   1  |    `int`    |    Inverse kinematics fails.   |If you believe the target pose is solvable but the inverse kinematics failed, here are some possible steps and considerations:<br>1. Check input parameters: Ensure that the joint angles from the previous moment and the target pose are correctly input, such as position units requiring meters, and not mistakenly using millimeters.<br>2. Set inverse kinematics solving mode: Call rm_algo_set_redundant_parameter_traversal_mode to set an appropriate solving mode.<br>3. Check if the handle is valid: If used with a robot arm, ensure the handle is valid. The API will synchronize the robot arm's current configuration to the algorithm based on the handle.<br>4. Check if installation angles, coordinate systems, and limits are set: When not connected to a robot arm, if you are not using the default configurations, you need to call the corresponding algorithm interfaces to set them.<br>5. Contact technical support: If none of the above suggestions solve the problem and you are certain the target pose is solvable, contact the technical support of RealMan Company. We will assist you with verification.|
    |  -1  |    `int`    |    The previous joint angle input is NULL.   |Check if the joint angles from the previous moment are input correctly.|
    |  -2  |    `int`    |    The target pose quaternion is invalid.   |Check if the target pose quaternion in params is valid.|

::: warning

1. When the robotic arm is connected, the interface can be directly called for computation, and the parameters used for computation are the current parameters of the robotic arm.
2. When the robotic arm is not connected, it is required to call the initialize algorithm dependence data interface first, set the frame, installation mode, joint speed, position, and other limits according to the actual requirements (if no settings are made, the computation is based on the factory defaults), and then set the control handle of the robotic arm to NULL.
:::

- **Usage demo**
  
```C
rm_inverse_kinematics_params_t params;
float joint_angles[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
float q_in[6] = {0.5f, 1.0f, 1.5f, 2.0f, 2.5f, 3.0f};
params.q_in = q_in;
params.q_pose.position.x = (float)0.3;
params.q_pose.position.y = (float)0.0;
params.q_pose.position.z = (float)0.3;
params.q_pose.quaternion.w = (float)0.0;
params.q_pose.quaternion.x = (float)0.0;
params.q_pose.quaternion.y = (float)0.0;
params.q_pose.quaternion.z = (float)0.0;
params.q_pose.euler.rx = (float)3.14;
params.q_pose.euler.ry = (float)0.0;
params.q_pose.euler.rz = (float)0.0;
params.flag = 1;
int result = wrapper.rm_algo_inverse_kinematics(handle, params, joint_angles);
printf("Inverse kinematics calculation: %d\n", result);
if (result == 0) {
    printf("Joint angles: [%.2f, %.2f, %.2f, %.2f, %.2f, %.2f]\n", joint_angles[0], joint_angles[1], joint_angles[2], joint_angles[3], joint_angles[4], joint_angles[5]);
}
```

## Calculate Inverse Kinematics Full Solution (Currently supports only six degrees of freedom robots) `rm_inverse_kinematics_all_solve_t()`

- **Method prototype**:

```C
rm_inverse_kinematics_all_solve_t rm_algo_inverse_kinematics_all(rm_robot_handle *handle, rm_inverse_kinematics_params_t params);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md), [rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md) and [rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md) for details of the structure.*

- **Parameter description**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `handle`  |    Input     |    The control handle of the robot arm.    |
    |   `params`  |    Input     |    The input parameter structure for inverse kinematics.    |

- **Return value**:
    Returns eight sets of solutions in the [rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md) structure.

::: warning

1. When the robot arm is connected, you can directly call this interface for calculation. The parameters used for calculation will be the current parameters of the robot arm.
2. When the robot arm is not connected, you need to first call the interface to initialize the algorithm's dependent data and set the coordinate system, installation method, and joint velocity and position limits as needed (if not set, the default factory parameters will be used for calculation). In this case, the robot arm control handle can be set to NULL.

:::

- **Usage demo**
  
```C
int ret;
rm_inverse_kinematics_params_t params;
float q_in_values[] = {1.943, 21.305, -2.819, 78.314, 1.013, 80.404, -0.879};
params.q_in[0] = q_in_values[0];
params.q_in[1] = q_in_values[1];
params.q_in[2] = q_in_values[2];
params.q_in[3] = q_in_values[3];
params.q_in[4] = q_in_values[4];
params.q_in[5] = q_in_values[5];
params.q_pose.position.x = (float)0.3;
params.q_pose.position.y = (float)0.0;
params.q_pose.position.z = (float)0.3;
params.q_pose.quaternion.w = (float)0.0;
params.q_pose.quaternion.x = (float)0.0;
params.q_pose.quaternion.y = (float)0.0;
params.q_pose.quaternion.z = (float)0.0;
params.q_pose.euler.rx = (float)3.14;
params.q_pose.euler.ry = (float)0.0;
params.q_pose.euler.rz = (float)3.14;
params.flag = 1;
rm_pose_t pose = rm_algo_forward_kinematics(handle, params.q_in);
params.q_pose = pose;
rm_inverse_kinematics_all_solve_t result = rm_algo_inverse_kinematics_all(handle, params);
for(int i=0;i<8;i++)
{
    for(int j=0;j<8;j++)
    {
        printf(" %f",i,j,result.q_solve[i][j]);
    }
    printf("\n");
}
```

## <div id = '6273'>Select the Optimal Solution from Multiple Solutions (Currently supports only six degrees of freedom robots) `rm_algo_ikine_select_ik_solve()`</div>

- **Method prototype**:

```C
int rm_algo_ikine_select_ik_solve(float *weight, rm_inverse_kinematics_all_solve_t params);
```

*Jump to [rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md) for details of the structure.*

- **Parameter description**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `weight`  |    Input     |   Joint weights, recommended default values are `[1,1,1,1,1,1]`    |
    |   `params`  |    Input     |    The inverse kinematics full solution structure obtained by `rm_algo_inverse_kinematics_all`    |

- **Return value**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |  i   |    `int`    | The optimal solution is `params.q_solve[i]` |
    |  -1  |    `int`    | No suitable solution, for example, 8 solutions are obtained, but all 8 exceed the joint angle limits|

- **Usage demo**
  
```C
float joint_pos[6] = {28.65, 57.3, 17.12, 28.65, 68.75, 34.38};
rm_inverse_kinematics_params_t params = {
    {28.65, 57.3,17.12, 28.65, 68.75, 34.38},
    wrapper.rm_algo_forward_kinematics(handle,joint_pos),
    1
};
rm_inverse_kinematics_all_solve_t result;
result = wrapper.rm_algo_inverse_kinematics_all(handle,params);
float weights[6] = {1.0, 1.0, 1.0, 1.0, 1.0, 1.0};
int ret = wrapper.rm_algo_ikine_select_ik_solve(weights, result);
```

## <div id = '6291'>Check if the Inverse Kinematics Solution Exceeds Joint Position Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_position_limit()`</div>

- **Method prototype**:

```C
int rm_algo_ikine_check_joint_position_limit( const float* const q_solve)
```

- **Parameter description**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `q_solve`  |    Input     |    Joint angles, unit: °.   |

- **Return value**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |   No limit exceeded |
    |  -1  |    `int`    | The current robot is not a six degrees of freedom robot|
    |  i   |    `int`    | The i-th joint exceeds the limit |

- **Usage demo**
  
```C
float q_solve[7] = {1.943, 21.305, -2.819, 78.314, 1.013, 80.404};
int ret = rm_algo_ikine_check_joint_position_limit(q_solve);
```

## <div id = '6293'>Check if the Inverse Kinematics Solution Exceeds Joint Velocity Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_velocity_limit()`</div>

- **Method prototype**:

```C
int rm_algo_ikine_check_joint_velocity_limit(float dt, const float* const q_ref, const float* const q_solve)
```

- **Parameter description**:

    |   参Parameter数    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `dt`  |    Input     |    The time interval between two frames of data, i.e., the control cycle, unit: sec.   |
    |   `q_ref`  |    Input     |    The reference joint angles or the angles of the first frame of data, unit: °.   |
    |   `q_solve`  |    Input     |   A set of solutions, i.e., a set of joint angles, unit: °.   |

- **Return value**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |  No velocity limit exceeded    |
    |  -1  |    `int`    | The current robot is not a six degrees of freedom robot|
    |  i   |    `int`    | The i-th joint exceeds the limit |

- **Usage demo**
  
```C
float dt = 0.01;
float q_ref[6] = {1.943, 21.305, -2.819, 78.314, 1.013, 80.404};
float q_solve[6] = {1.943, 23.305, -2.819, 80, 1.013, 80.404};
int ret = wrapper.rm_algo_ikine_check_joint_velocity_limit(dt, q_ref, q_solve);
```

## <div id = '6295'>Calculate Arm Angle from Reference Configuration (Only supports RM75) `rm_algo_calculate_arm_angle_from_config_rm75()`</div>

- **Method prototype**:

```C
int rm_algo_calculate_arm_angle_from_config_rm75(float *q_ref, float *arm_angle)
```

- **Parameter description**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `q_ref`  |   Input   |    The joint angles of the current reference configuration, unit: °.    |
    |   `arm_angle`  |    Output     |   The calculated arm angle corresponding to the current reference configuration, unit: °.   |

- **Return value**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |   Solution successful    |
    |  -1  |    `int`    | Solution failed, or the robot model is not RM75|

- **Usage demo**
  
```C
float q[7] = {0.0, 20.0, 70.0, 0.0, 30.0, 10.0, 10.0};
float arm_angle = 0;
int ret = rm_algo_calculate_arm_angle_from_config_rm75(q, &arm_angle);
printf("arm_angle = %f\n", phi);
printf("ret = %d\n", ret);
```

## <div id = '6297'>Solve Inverse Kinematics for RM75 Using Arm Angle Method `rm_algo_inverse_kinematics_rm75_for_arm_angle()`</div>

- **Method prototype**:

```C
int rm_algo_inverse_kinematics_rm75_for_arm_angle(rm_inverse_kinematics_params_t params, float arm_angle, float *q_solve)
```

*Jump to [rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md) for details of the structure.*

- **Parameter description**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `params`  |    Input     |   The inverse kinematics parameter structure. |
    |   `arm_angle`  |    Input     |  The specified arm angle size, unit: °.    |
    |   `q_solve`  |    Output     |   The solution result, unit: °.    |

- **Return value**:

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |   Solution successful   |
    |  -1  |    `int`    | Solution failed|
    |  -2   |    `int`    | The solution result exceeds the limit |
    |  -3   |    `int`    | The robot model is not RM75 |

- **Usage demo**
  
```C
rm_algo_init_sys_data(RM_MODEL_RM_75_E,RM_MODEL_RM_B_E);
float q[7] = {0.0, 1.0*(M_PI/180), 0.3*(M_PI/180), 0.5*(M_PI/180), 0.2*(M_PI/180), 1.3*(M_PI/180), 0.1*(M_PI/180)};
rm_pose_t pose = rm_algo_forward_kinematics(NULL,q);
float phi = 0;
int ret = rm_algo_calculate_arm_angle_from_config_rm75(q, &phi);
printf("phi = %f\n", phi);
printf("ret = %d\n", ret);
float q_ref[7] = {0.0, 1.1, 0.2, 0.4, 0.3, 1.0, 0.2};
float q_solve[7] = {0.0, 0.0, 0.0, 0.0, 0.0, 0, 0};
rm_inverse_kinematics_params_t params;
params.flag = 1;
params.q_pose = pose;
for(int i=0;i<7;i++)
{
    params.q_in[i] = q_ref[i];
}
ret = rm_algo_inverse_kinematics_rm75_for_arm_angle(params, phi, q_solve);
```

## Forward kinematics algorithm `rm_algo_forward_kinematics()`

- **Method prototype:**

```C
rm_pose_t rm_algo_forward_kinematics(rm_robot_handle * handle,const float *const joint)
```

*Jump to [rm_pose_t](../../struct/pose/index.md) and [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle, which is required when the robotic arm is connected, and NULL when the robotic arm is not connected.   |
|   `joint`  |    Input    |    Joint angle, in °.   |

- **Return value:**

[rm_pose_t](../../struct/pose/index.md) Target pose, including information about the robotic arms x, y, z, rx, ry, rz.

::: warning

1. When the robotic arm is connected, the interface can be directly called for computation, and the parameters used for computation are the current parameters of the robotic arm.
2. When the robotic arm is not connected, it is required to call the initialize algorithm dependence data interface first, set the frame, installation mode, joint speed, position, and other limits according to the actual requirements (if no settings are made, the computation is based on the factory defaults), and then set the control handle of the robotic arm to NULL.
:::

- **Usage demo**
  
```C
float joint_angles[6] = {0.5f, 1.0f, 1.5f, 2.0f, 2.5f, 3.0f};
rm_pose_t pose = rm_algo_forward_kinematics(handle, joint_angles);
printf("Joint angles: [%.2f, %.2f, %.2f, %.2f, %.2f, %.2f]\n", joint_angles[0], joint_angles[1], 
        joint_angles[2], joint_angles[3], joint_angles[4], joint_angles[5]);
printf("End effector pose: Position(%.2f, %.2f, %.2f), Quaternion(%.2f, %.2f, %.2f, %.2f), Euler angles(%.2f, %.2f, %.2f)\n",
        pose.position.x, pose.position.y, pose.position.z,
        pose.quaternion.w, pose.quaternion.x, pose.quaternion.y, pose.quaternion.z,
        pose.euler.rx, pose.euler.ry, pose.euler.rz);
```

## Euler angle to quaternion `rm_algo_euler2quaternion()`

- **Method prototype:**

```C
rm_quat_t rm_algo_euler2quaternion(rm_euler_t eu)
```

*Jump to [rm_quat_t](../../struct/quat/index.md) and [rm_euler_t](../../struct/euler/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   eu  |    Input    |    Euler angle, in rad.   |

- **Return value:**

Return the quaternion in the structure [rm_quat_t](../../struct/quat/index.md).

- **Usage demo**
  
```C
rm_euler_t euler = {(float)0.1, (float)0.2, (float)0.3};
rm_quat_t quat = rm_algo_euler2quaternion(euler);
printf("Euler angles: (rx: %.2f, ry: %.2f, rz: %.2f)\n", euler.rx, euler.ry, euler.rz);
printf("Quaternion: (w: %.2f, x: %.2f, y: %.2f, z: %.2f)\n", quat.w, quat.x, quat.y, quat.z);
```

## Quaternion to Euler angle `rm_algo_quaternion2euler()`

- **Method prototype:**

```C
rm_euler_t rm_algo_quaternion2euler(rm_quat_t qua)
```

*Jump to [rm_quat_t](../../struct/quat/index.md) and [rm_euler_t](../../struct/euler/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `qua`  |    Input    |    Quaternion.   |

- **Return value:**

Return the Euler angle in the structure [rm_euler_t](../../struct/euler/index.md).

- **Usage demo**
  
```C
rm_quat_t quat = {(float)1.0, (float)0.0, (float)0.0, (float)0.0};
rm_euler_t euler = rm_algo_quaternion2euler(quat);
printf("Quaternion: (w: %.2f, x: %.2f, y: %.2f, z: %.2f)\n", quat.w, quat.x, quat.y, quat.z);
printf("Euler angles: (rx: %.2f, ry: %.2f, rz: %.2f)\n", euler.rx, euler.ry, euler.rz);
```

## Euler angle to rotation matrix `rm_algo_euler2matrix()`

- **Method prototype:**

```C
rm_matrix_t rm_algo_euler2matrix(rm_euler_t state)
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_euler_t](../../struct/euler/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `state`  |    Input    |    Euler angle, in rad.   |

- **Return value:**

Return the rotation matrix in the structure [rm_euler_t](../../struct/euler/index.md).

- **Usage demo**
  
```C
//Euler angle to rotation matrix
rm_euler_t eu;
rm_matrix_t matrix;
eu.rx = -2.85993f;
eu.ry = -0.447394f;
eu.rz = -1.81038f;
matrix = rm_algo_euler2matrix(eu);
```

## Pose to rotation matrix `rm_algo_pos2matrix()`

- **Method prototype:**

```C
rm_matrix_t rm_algo_pos2matrix(rm_pose_t state)
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `state`  |    Input    |    Pose.   |

- **Return value:**

Return the rotation matrix in the structure [rm_matrix_t](../../struct/matrix/index.md).

- **Usage demo**
  
```C
rm_pose_t pose;
rm_matrix_t matrix;
pose.position.x = -0.177347f;
pose.position.y = 0.438112f;
pose.position.z = -0.215102f;
pose.euler.rx = 2.09078f;
pose.euler.ry = 0.942362f;
pose.euler.rz = 2.39144f;
matrix = rm_algo_pos2matrix(pose);
```

## Rotation matrix to pose `rm_algo_matrix2pos()`

- **Method prototype:**

```C
rm_pose_t rm_algo_matrix2pos(rm_matrix_t matrix)
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    Input    |    Rotation matrix.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md).

- **Usage demo**
  
```C
rm_matrix_t matrix;
matrix.irow = 4;
matrix.iline = 4;
float point[4][4] = {{1.0, 0.0, 0.0, 10.0},{0.0, 1.0, 0.0, 20.0},{0.0, 0.0, 1.0, 30.0},{0.0, 0.0, 0.0, 1.0}};
for(int i = 0; i < 4; i++){
    for(int j = 0; j < 4; j++){
        matrix.data[i][j] = point[i][j];
    }
 };
rm_pose_t pose = rm_algo_matrix2pos(matrix);
```

## Base frame to work frame `rm_algo_base2workframe()`

- **Method prototype:**

```C
rm_pose_t rm_algo_base2workframe(rm_matrix_t matrix,rm_pose_t state)
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    Input    |    Matrix of the work frame in the base frame.   |
|   `state`  |    Input    |    Pose of the end frame in the base frame.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the pose of the base frame in the work frame.

- **Usage demo**
  
```C
rm_matrix_t matrix = {
    4, 4,
    {
        {1.0, 0.0, 0.0, 0.1},
        {0.0, 1.0, 0.0, 0.2},
        {0.0, 0.0, 1.0, 0.3},
        {0.0, 0.0, 0.0, 1.0}
    }
};
rm_pose_t state = {
    {0.5, 0.5, 0.5},  // Position
    .euler = {0.1, 0.2, 0.3}  // Euler angle
};
rm_matrix_t matrix = Algo_Pos2Matrix(pose1);
pose = rm_algo_base2workframe(matrix,pose1);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Work frame to base frame`rm_algo_workframe2base()`

- **Method prototype:**

```C
rm_pose_t rm_algo_workframe2base(rm_matrix_t matrix,rm_pose_t state)
```

*Jump to [rm_matrix_t](../../struct/matrix/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `matrix`  |    Input    |    Matrix of the work frame in the base frame.   |
|   `state`  |    Input    |    Pose of the end frame in the base frame.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the pose of the work frame in the base frame.

- **Usage demo**
  
```C
rm_matrix_t matrix = {
    4, 4,
    {
        {1.0, 0.0, 0.0, 0.1},
        {0.0, 1.0, 0.0, 0.2},
        {0.0, 0.0, 1.0, 0.3},
        {0.0, 0.0, 0.0, 1.0}
    }
};
rm_pose_t state = {
    {0.5, 0.5, 0.5},  // Position
    .euler = {0.1, 0.2, 0.3}  // Euler angle
};

pose = rm_algo_workframe2base(matrix,state);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Compute the pose in rotational movement `rm_algo_RotateMove()`

- **Method prototype:**

```C
rm_pose_t rm_algo_RotateMove(rm_robot_handle * handle,const float *const curr_joint,int rotate_axis,float rotate_angle,rm_pose_t choose_axis)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `curr_joint`  |    Input    |    Current joint angle, in °.   |
|   `rotate_axis`  |    Input    |    Rotation axis, 1: X-axis, 2: Y-axis, 3: Z-axis.   |
|   `rotate_angle`  |    Input    |    Rotation angle, in °.   |
|   `choose_axis`  |    Input    |    Specify the frame for computation.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md).

- **Usage demo**
  
```C
// Compute the pose after rotating 10° around the X-axis in the frame
float joint[6] = {0,0,90,0,90,0};
rm_pose_t frame;
frame.position.x=0;
frame.position.y=0;
frame.position.z=0;
frame.euler.rx = 0;
frame.euler.ry = 0;
frame.euler.rz = 0;
rm_pose_t pose;
float rotateAngle = 10;
pose = Algo_RotateMove(joint,1,rotateAngle ,frame);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Compute the pose in movement along the tool frame `rm_algo_cartesian_tool()`

- **Method prototype:**

```C
rm_pose_t rm_algo_cartesian_tool(rm_robot_handle * handle,const float *const curr_joint,float move_lengthx,float move_lengthy,float move_lengthz)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `curr_joint`  |    Input    |    Current joint angle, in °.   |
|   `move_lengthx`  |    Input    |    Movement length along the X-axis, in m.   |
|   `move_lengthy`  |    Input    |    Movement length along the Y-axis, in m.   |
|   `move_lengthz`  |    Input    |    Movement length along the Z-axis, in m.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the pose in the work frame.

- **Usage demo**
  
```C
float joint[6] = {20,20,70,30,90,120};
rm_pose_t pose = rm_algo_cartesian_tool(joint,0.01f,0.01f,0.01f);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Compute the pose after Pos and Rot have a displacement and rotation angle along a frame `rm_algo_cartesian_tool()`

- **Method prototype:**

```C
rm_pose_t rm_algo_PoseMove(rm_robot_handle *handle,rm_pose_t poseCurrent, const float *deltaPosAndRot, int frameMode);
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `poseCurrent`  |    Input    |    Current pose (represented by the Euler angle).   |
|   `deltaPosAndRot`  |    Input    |    Position and rotation array, where position in m and rotation in °.   |
|   `frameMode`  |    Input    |    Frame mode selection, 0: work (any frame is available), 1: tool.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the pose after translation and rotation.

- **Usage demo**
  
```C
// Use the current angle to get the current pose through forward kinematics
float joint[6] = {0,-30,90,30,90,0, 0};
rm_pose_t target = rm_algo_forward_kinematics(handle, joint);
// Compute the pose after the movement
rm_pose_t afterPosAndRot;
float deltaPosAndRot[6] = {0.01,0.01,0.01,20,20,20};
afterPosAndRot = rm_algo_PoseMove(target, deltaPosAndRot,1);
printf("POSE: %f, %f, %f, %f, %f, %f\n",afterPosAndRot.position.x,afterPosAndRot.position.y,afterPosAndRot.position.z,afterPosAndRot.euler.rx ,afterPosAndRot.euler.ry ,afterPosAndRot.euler.rz );
```

## End pose to tool pose `rm_algo_end2tool()`

- **Method prototype:**

```C
rm_pose_t rm_algo_end2tool(rm_robot_handle * handle,rm_pose_t eu_end)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `eu_end`  |    Input    |    End pose based on world frame and default tool frame.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the end pose based on the work frame and tool frame.

- **Usage demo**
  
```C
rm_pose_t pose;
rm_pose_t eu_end;
eu_end.position.x = -0.259256f;
eu_end.position.y = -0.170727f;
eu_end.position.z = 0.35621f;
eu_end.euler.rx = -2.85993f;
eu_end.euler.ry = -0.447394f;
eu_end.euler.rz = -1.81038f;
pose = rm_algo_end2tool(eu_end);
printf("Pose:  %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Tool pose to end pose `rm_algo_tool2end()`

- **Method prototype:**

```C
rm_pose_t rm_algo_tool2end(rm_robot_handle * handle,rm_pose_t eu_tool)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) and [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm control handle.   |
|   `eu_tool`  |    Input    |    End pose based on work frame and tool frame.   |

- **Return value:**

Return the pose in the structure [rm_pose_t](../../struct/pose/index.md), indicating the end pose based on the world frame and default tool frame.

- **Usage demo**
  
```C
rm_pose_t pose;
rm_pose_t eu_tool;
eu_tool.position.x = -0.17391f;
eu_tool.position.y = 0.437109f;
eu_tool.position.z = -0.21619f;
eu_tool.euler.rx = 2.741f;
eu_tool.euler.ry = -0.244002f;
eu_tool.euler.rz = 2.938f;
pose = rm_algo_end2tool(eu_tool);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## Set Algorithm DH Parameters `rm_algo_set_dh()`

- **Method prototype**:

```C
void rm_algo_set_dh(rm_dh_t dh)
```

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `dh`  |    Input    |    DH parameters.   |

- **Usage demo**
  
```C
// Set the current DH parameters for the algorithm (example values; modify according to actual requirements)
rm_dh_t dh_data = {
    .a = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .d = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .alpha = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .offset = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02}
};
rm_algo_set_dh(dh_data);
```

## Get Algorithm DH Parameters `rm_algo_get_dh()`

- **Method prototype**:

```C
rm_dh_t rm_algo_get_dh()
```

*Jump to [rm_dh_t](../../struct/dh/index.md) for details of the structure.*

- **Parameter description**:

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `dh`  |    Output    |    Current DH parameters.  |

- **Usage demo**
  
```C
rm_dh_t dh_data = rm_algo_get_dh();
printf("dh a:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.a[0], dh_data.a[1], dh_data.a[2], dh_data.a[3], dh_data.a[4], dh_data.a[5], dh_data.a[6]);
printf("dh d:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.d[0], dh_data.d[1], dh_data.d[2], dh_data.d[3], dh_data.d[4], dh_data.d[5], dh_data.d[6]);
printf("dh alpha:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.alpha[0], dh_data.alpha[1], dh_data.alpha[2], dh_data.alpha[3], dh_data.alpha[4], dh_data.alpha[5], dh_data.alpha[6]);
printf("dh offset:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.offset[0], dh_data.offset[1], dh_data.offset[2], dh_data.offset[3], dh_data.offset[4], dh_data.offset[5], dh_data.offset[6]);
```

## <div id = '6299'>Numerical Method to Determine if the Robot is in a Singular Configuration `rm_algo_universal_singularity_analyse()`</div>

- **Method prototype**:

```C
int rm_algo_universal_singularity_analyse(const float* const q, float singluar_value_limit)
```

- **Parameter description:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `q`  |    Input     |    The joint angles to be judged (described in mechanical zero position), unit: °.    |
    |   `singluar_value_limit`  |    Input     |   The minimum singular value threshold. If NULL is passed, the internal default value will be used, with a default value of 0.01 (this value is between 0 and 1).    |

- **Return value:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    | Normal under the current threshold condition.  |
    |  -1  |    `int`    | Indicates that the robot is in a singular area under the current threshold condition.|
    |  -2   |    `int`    | Indicates that the calculation failed. |

- **Usage demo**
  
```C
float q_s[6] = {0, 43.4, -105.7, 0, -30, 0};
float singularity_limit = 0.01;
int ret_qs = wrapper.rm_algo_universal_singularity_analyse(q_s, singularity_limit);
```

## Set Custom Singular Area Range Threshold (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_set_singularity_thresholds()`

- **Method prototype**:

```C
void rm_algo_kin_set_singularity_thresholds(float limit_qe, float limit_qw, float limit_d)
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `limit_qe`  |    Input     |   The range setting for elbow singularity area (i.e., the range where J3 is close to 0, or for RML63, the range where J3 is close to -9.68), unit: °, default: 10deg.   |
|   `limit_qw`  |    Input     |   The range setting for wrist singularity area (i.e., the range where J5 is close to 0), unit: °, default: 10deg.    |
|   `limit_d`  |    Input     |    The range setting for shoulder singularity area (i.e., the distance from the wrist center to the singular plane), unit: m, default: 0.05.    |

- **Usage demo**
  
```C
rm_algo_kin_set_singularity_thresholds(12.0, 12.0, 0.05);
```

## Get Custom Singular Area Range Threshold (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_get_singularity_thresholds()`

- **Method prototype**:

```C
void rm_algo_kin_get_singularity_thresholds(float* limit_qe, float* limit_qw, float* limit_d)
```

- **Parameter description:**

|   Parameter    |   Type    |   Description    |
| :--- | :--- | :--- |
|   `limit_qe`  |    Output     |    The range setting for elbow singularity area (i.e., the range where J3 is close to 0, or for RML63, the range where J3 is close to -9.68), unit: °, default: 10deg.    |
|   `limit_qw`  |    Output     |   The range setting for wrist singularity area (i.e., the range where J5 is close to 0), unit: °, default: 10deg.    |
|   `limit_d`  |    Output     |    The range setting for shoulder singularity area (i.e., the distance from the wrist center to the singular plane), unit: m, default: 0.05.  |

- **Usage demo**

```C
float limit_qe = 0;
float limit_qw = 0;
float limit_d = 0;
rm_algo_kin_get_singularity_thresholds(&limit_qe, &limit_qw, &limit_d);
```

## Restore Initial Singular Area Range Threshold (Only applicable for analytical method to analyze robot singularity) `rm_algo_kin_singularity_thresholds_init()`

- **Method prototype**:

```C
void rm_algo_kin_singularity_thresholds_init()
```

- **Usage demo**
  
```C
rm_algo_kin_singularity_thresholds_init();
```

## <div id = '6301'>Analytical Method to Determine if the Robot is in a Singular Configuration (Only supports six degrees of freedom) `rm_algo_kin_robot_singularity_analyse()`</div>

- **Method prototype**:

```C
int rm_algo_kin_robot_singularity_analyse(const float* const q, float *distance)
```

- **Parameter description:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `q`  |    Input     |    The joint angles to be judged, unit: °.    |
    |   `distance`  |    Output     |   Returns the distance from the wrist center to the shoulder singular plane. The closer this value is to 0, the closer it is to the shoulder singularity, unit: m. If not needed, NULL can be passed.   |

- **Return value:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |  Normal. |
    |  -1  |    `int`    | Shoulder singularity.|
    |  -2   |    `int`    | Elbow singularity. |
    |  -3   |    `int`    |Wrist singularity. |
    |  -4   |    `int`    | Only supports six degrees of freedom robot arms.|

- **Usage demo**
  
```C
float q_s[6] = {0, 43.4, -105.7, 0, -30, 0};
float distance = 0.00;
int ret = wrapper.rm_algo_kin_robot_singularity_analyse(q_s, &distance);
```

## Set Tool Envelope Sphere Parameters `rm_algo_set_tool_envelope()`

- **Method prototype**:

```C
void rm_algo_set_tool_envelope(const int toolSphere_i, rm_tool_sphere_t data)
```

*Jump to [rm_tool_sphere_t](../../struct/toolEnvelopeSphere/index.md) for details of the structure.*

- **Parameter description:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `toolSphere_i`  |    Input     |   The tool envelope sphere number (0~4).   |
    |   `data`  |    Input     |    The tool envelope sphere parameters, note that its parameters are described in the end-effector flange coordinate system.    |

- **Usage demo**
  
```C
rm_tool_sphere_t envelope = {0.01, {0.0, 0.0, 0.05}};
wrapper.rm_algo_set_tool_envelope(0, envelope);
```

## Get Tool Envelope Sphere Parameters `rm_algo_get_tool_envelope()`

- **Method prototype**:

```C
void rm_algo_get_tool_envelope(const int toolSphere_i, rm_tool_sphere_t *data)
```

*Jump to [rm_tool_sphere_t](../../struct/toolEnvelopeSphere/index.md) for details of the structure.*

- **Parameter description:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `toolSphere_i`  |    Input     |  The tool envelope sphere number (0~4).   |
    |   `data`  |    Output    |   The tool envelope sphere parameters, note that its parameters are described in the end-effector flange coordinate system.    |

- **Usage demo**
  
```C
rm_tool_sphere_t envelope = {0.0, {0.0, 0.0, 0.0}};
wrapper.rm_algo_get_tool_envelope(0, &envelope);
```

## <div id = '6289'>Self-Collision Detection Algorithm `rm_algo_safety_robot_self_collision_detection()`</div>

- **Method prototype**:

```C
int rm_algo_safety_robot_self_collision_detection(float *joint)
```

- **Parameter description:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   `joint`  |    Input     |   The joint angles to be judged, unit: °.    |

- **Return value:**

    |   Parameter    |   Type    |   Description    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    No self-collision will occur.   |
    |   1  |    `int`    |   Self-collision occurs, exceeding joint limits will be considered as a collision.|

- **Usage demo**
  
```C
float q[6] = {0, -30, 130, 0, 90.0, 0};
int ret = wrapper.rm_algo_safety_robot_self_collision_detection(q);
```
