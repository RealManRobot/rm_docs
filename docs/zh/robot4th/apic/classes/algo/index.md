# <p class="hidden">C、C++: </p>算法接口配置`algo`

针对睿尔曼机械臂，提供正逆解、各种位姿参数转换等工具接口。

## 初始化算法依赖数据`rm_algo_init_sys_data()`

- **方法原型：**

```C
void rm_algo_init_sys_data(rm_robot_arm_model_e Mode,rm_force_type_e Type)
```

*可以跳转[rm_robot_arm_model_e](../../type/index.md#rm_robot_arm_model_e机械臂型号)和[rm_force_type_e](../../type/index.md#rm_force_type_e机械臂末端力传感器版本)查阅枚举类型详细描述*
::: tip 说明
不连接机械臂时调用。
:::

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `Mode`  |    输入参数    |    机械臂型号。    |
|   `Type`  |    输入参数    |    传感器型号。    |

- **使用示例**

```C
rm_robot_arm_model_e Mode = RM_MODEL_RM_75_E;
rm_force_type_e Type = RM_MODEL_RM_SF_E;
rm_algo_init_sys_data(Mode, Type);
```

## 获取算法库版本号`rm_algo_version()`

- **方法原型：**

```C
char* rm_algo_version(void);
```

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   -  |    `str`    |    算法库版本号。    |

- **使用示例**

```C
char *version = rm_algo_version();
printf("current algo version: %s\n", version);
```

## 设置安装角度`rm_algo_set_angle()`

- **方法原型：**

```C
void rm_algo_set_angle(float x,float y,float z)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `x`  |    输入参数    |    X轴安装角度，单位°。    |
|   `y`  |    输入参数    |    Y轴安装角度，单位°。    |
|   `z`  |    输入参数    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```C
rm_algo_set_angle(0, 90, 0)
```

## 获取安装角度`rm_algo_get_angle()`

- **方法原型：**

```C
void rm_algo_get_angle(float x,float y,float z)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `x`  |    输出参数    |    X轴安装角度，单位°。    |
|   `y`  |    输出参数    |    Y轴安装角度，单位°。    |
|   `z`  |    输出参数    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```C
float x,y,z;
rm_algo_get_angle(&x,&y,&z);
```

## 设置工作坐标系`rm_algo_set_workframe()`

- **方法原型：**

```C
void rm_algo_set_workframe(const rm_frame_t *const coord_work)
```

*可以跳转[rm_frame_t](../../struct/frame/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `coord_work`  |    输入参数    |    坐标系数据(无需设置名称)。    |

- **使用示例**
  
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

## 获取当前工作坐标系`rm_algo_get_curr_workframe()`

- **方法原型：**

```C
void rm_algo_get_curr_workframe(rm_frame_t * coord_work)
```

*可以跳转[rm_frame_t](../../struct/frame/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `coord_work`  |    输出参数    |    当前工作坐标系(获取到的坐标系参数，不包括坐标系名称)。    |

- **使用示例**
  
```C
rm_frame_t coord_work;
rm_algo_get_curr_workframe(&coord_work);
```

## 设置工具坐标系`rm_algo_set_toolframe()`

- **方法原型：**

```C
void rm_algo_set_toolframe(const rm_frame_t *const coord_tool)
```

*可以跳转[rm_frame_t](../../struct/frame/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `coord_tool`  |    输入参数    |    坐标系数据。    |

- **使用示例**
  
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

## 获取算法当前工具坐标系`rm_algo_get_curr_toolframe()`

- **方法原型：**

```C
void rm_algo_get_curr_toolframe(rm_frame_t * coord_tool)
```

*可以跳转[rm_frame_t](../../struct/frame/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `coord_tool`  |    输出参数    |    当前工具坐标系。    |

- **使用示例**
  
```C
rm_frame_t coord_tool;
rm_algo_get_curr_toolframe(&coord_tool);
```

## 设置算法关节最大限位`rm_algo_set_joint_max_limit()`

- **方法原型：**

```C
void rm_algo_set_joint_max_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_limit`  |    输入参数    |    关节最大限位角度，单位°。    |

- **使用示例**
  
```C
float joint_limit[6] = {150,100,90,120,120,300};
rm_algo_set_joint_max_limit(joint_limit);
```

## 获取算法关节最大限位`rm_algo_get_joint_max_limit()`

- **方法原型：**

```C
void rm_algo_get_joint_max_limit(float * joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_limit`  |    输出参数    |    返回关节最大限位。    |

- **使用示例**
  
```C
float after_joint_limit[7];
rm_algo_get_joint_max_limit(after_joint_limit);
```

## 设置算法关节最小限位`rm_algo_set_joint_min_limit()`

- **方法原型：**

```C
void rm_algo_set_joint_min_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_limit`  |    输入参数    |    最小限位角度，单位°。    |

- **使用示例**
  
```C
float joint_limit[6] = {150,100,90,120,120,300};
rm_algo_set_joint_min_limit(joint_limit);
```

## 获取算法关节最小限位`rm_algo_get_joint_min_limit()`

- **方法原型：**

```C
void rm_algo_get_joint_min_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_limit`  |    输出参数    |    存放返回关节最小限位。    |

- **使用示例**
  
```C
float after_joint_limit[7];
rm_algo_get_joint_min_limit(after_joint_limit);
```

## 设置算法关节最大速度`rm_algo_set_joint_max_speed()`

- **方法原型：**

```C
void rm_algo_set_joint_max_speed(const float *const joint_slim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_slim_max`  |    输入参数    |    最大转速（RPM），单位转/分。    |

- **使用示例**
  
```C
float joint_slim_max[6] = {20,20,20,20,20,20};
rm_algo_set_joint_max_speed(joint_slim_max);
```

## 获取算法关节最大速度`rm_algo_get_joint_max_speed()`

- **方法原型：**

```C
void rm_algo_get_joint_max_speed(float * joint_slim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_slim_max`  |    输出参数    |    存放返回的最大转速（RPM），单位转/分。    |

- **使用示例**
  
```C
float after_joint_slimit_max[6];
rm_algo_get_joint_max_speed(after_joint_slimit_max);
```

## 设置算法关节最大加速度`rm_algo_set_joint_max_acc()`

- **方法原型：**

```C
void rm_algo_set_joint_max_acc(const float *const joint_alim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_alim_max`  |    输入参数    |    最大加速度，单位RPM/s。    |

- **使用示例**
  
```C
float joint_alimit[6] = {20,20,20,20,20,20};
rm_algo_set_joint_max_acc(joint_alimit);
```

## 获取算法关节最大加速度`rm_algo_get_joint_max_acc()`

- **方法原型：**

```C
void rm_algo_get_joint_max_acc(float * joint_alim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `joint_alim_max`  |    输出参数    |    存放返回的最大加速度，单位RPM/s。    |

- **使用示例**
  
```C
float after_joint_alimit[6];
rm_algo_get_joint_max_acc(after_joint_alimit);
```

## 设置逆解求解模式`rm_algo_set_redundant_parameter_traversal_mode()`

- **方法原型：**

```C
void rm_algo_set_redundant_parameter_traversal_mode(bool mode);
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `mode`  |    输入参数    |     - true：遍历模式，冗余参数遍历的求解策略。适于当前位姿跟要求解的位姿差别特别大的应用场景，如MOVJ_P、位姿编辑等，耗时较长；<br> - false：单步模式，自动调整冗余参数的求解策略。适于当前位姿跟要求解的位姿差别特别小、连续周期控制的场景，如笛卡尔空间规划的位姿求解等，耗时短。    |

- **使用示例**
  
```C
// 将逆解求解模式设置为遍历模式
rm_algo_set_redundant_parameter_traversal_mode(true);
```

## <div id = '6211'>逆解函数`rm_algo_inverse_kinematics()`</div>

- **方法原型：**

```C
int rm_algo_inverse_kinematics(rm_robot_handle * handle,rm_inverse_kinematics_params_t params,float * q_out)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `handle`  |    输入参数    |    机械臂控制句柄。    |
    |   `params`  |    输入参数    |    逆解输入参数结构体。    |
    |   `q_out`  |    输出参数    |    输出的关节角度 单位°。    |

- **返回值:**

    |   参数    |   类型    |   说明    |处理建议|
    | :--- | :--- | :--- |:---|
    |   0  |    `int`    |    逆解成功。    |-|
    |   1  |    `int`    |    逆解失败。    |如果您认为目标位姿是可解的而逆解失败，以下是一些可能的步骤和考虑因素：<br>1.检查输入参数：确保上一时刻关节角度及目标位姿输入正确，例如位置单位要求米，是否错误使用了毫米。<br>2.设置逆解求解模式：调用rm_algo_set_redundant_parameter_traversal_mode 设置合适的求解模式。<br>3.检查handle句柄是否有效：如连接机械臂使用，需确保句柄是有效的，API内部会根据句柄将机械臂当前配置同步算法。<br>4.检查安装角度、坐标系、限位等是否设置：在不连接机械臂时，如果不使用默认的配置，需调用对应算法接口进行设置。<br>5.联系技术支持：如以上建议都没有解决问题，且确定目标位姿是可解的，可联系睿尔曼公司技术支持，我们将协助您进行验证。|
    |  -1  |    `int`    |    上一时刻关节角度输入为空。    |检查上一时刻的关节角度输入是否为空。|
    |  -2  |    `int`    |    目标位姿四元数不合法。    |检查params中的目标位姿四元数是否合法。|

::: warning 注意

1. 机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
2. 未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

:::

- **使用示例**
  
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

## 计算逆运动学全解（当前仅支持六自由度机器人）`rm_inverse_kinematics_all_solve_t()`

- **方法原型：**

```C
rm_inverse_kinematics_all_solve_t rm_algo_inverse_kinematics_all(rm_robot_handle *handle, rm_inverse_kinematics_params_t params);
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)、[rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md)、[rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `handle`  |    输入参数    |    机械臂控制句柄。    |
    |   `params`  |    输入参数    |    逆解输入参数结构体。    |

- **返回值:**
    返回[rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md)结构体中的八组解。

::: warning 注意

1. 机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
2. 未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

:::

- **使用示例**
  
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

## <div id = '6271'>从多解中选取最优解（当前仅支持六自由度机器人）`rm_algo_ikine_select_ik_solve()`</div>

- **方法原型：**

```C
int rm_algo_ikine_select_ik_solve(float *weight, rm_inverse_kinematics_all_solve_t params);
```

*可以跳转[rm_inverse_kinematics_all_solve_t](../../struct/inverseKinematicsAllParams/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `weight`  |    输入参数    |   各个关节权重,建议默认值为`[1,1,1,1,1,1]`    |
    |   `params`  |    输入参数    |    利用rm_algo_inverse_kinematics_all计算得到的逆解全解结构体    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |  i   |    `int`    | 最优解为params.q_solve[i] |
    |  -1  |    `int`    | 无合适的解，比如求出8组解，但是8组都有关节角度超限位|

- **使用示例**
  
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

## <div id = '6277'>检查逆解结果是否超出关节限位（当前仅支持六自由度机器人）`rm_algo_ikine_check_joint_position_limit()`</div>

- **方法原型：**

```C
int rm_algo_ikine_check_joint_position_limit( const float* const q_solve)
```

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `q_solve`  |    输入参数    |    关节角度，单位：°。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    未超限位。    |
    |  -1  |    `int`    | 当前机器人非六自由度。|
    |  i   |    `int`    | 第i个关节超限位。 |

- **使用示例**
  
```C
float q_solve[7] = {1.943, 21.305, -2.819, 78.314, 1.013, 80.404};
int ret = rm_algo_ikine_check_joint_position_limit(q_solve);
```

## <div id = '6279'>检查逆解结果是否超出速度限位（当前仅支持六自由度机器人）`rm_algo_ikine_check_joint_velocity_limit()`</div>

- **方法原型：**

```C
int rm_algo_ikine_check_joint_velocity_limit(float dt, const float* const q_ref, const float* const q_solve)
```

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `dt`  |    输入参数    |    两帧数据之间的时间间隔，即控制周期，单位sec。    |
    |   `q_ref`  |    输入参数    |    参考关节角度或者第一帧数据角度，单位：°。    |
    |   `q_solve`  |    输入参数    |    一组解，即一组关节角度，单位：°。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    未超速度限位。    |
    |  -1  |    `int`    | 当前机器人非六自由度。|
    |  i   |    `int`    | 第i个关节超限位。 |

- **使用示例**
  
```C
float dt = 0.01;
float q_ref[6] = {1.943, 21.305, -2.819, 78.314, 1.013, 80.404};
float q_solve[6] = {1.943, 23.305, -2.819, 80, 1.013, 80.404};
int ret = wrapper.rm_algo_ikine_check_joint_velocity_limit(dt, q_ref, q_solve);
```

## <div id = '6281'>根据参考位形计算臂角大小（仅支持RM75）`rm_algo_calculate_arm_angle_from_config_rm75()`</div>

- **方法原型：**

```C
int rm_algo_calculate_arm_angle_from_config_rm75(float *q_ref, float *arm_angle)
```

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `q_ref`  |    输入参数    |    当前参考位形的关节角度，单位°。    |
    |   `arm_angle`  |    输出参数    |    计算结果，当前参考位形对应的臂角大小，单位°。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    求解成功。    |
    |  -1  |    `int`    | 求解失败，或机型非RM75。|

- **使用示例**
  
```C
float q[7] = {0.0, 20.0, 70.0, 0.0, 30.0, 10.0, 10.0};
float arm_angle = 0;
int ret = rm_algo_calculate_arm_angle_from_config_rm75(q, &arm_angle);
printf("arm_angle = %f\n", phi);
printf("ret = %d\n", ret);
```

## <div id = '6283'>臂角法求解RM75逆运动学 `rm_algo_inverse_kinematics_rm75_for_arm_angle()`</div>

- **方法原型：**

```C
int rm_algo_inverse_kinematics_rm75_for_arm_angle(rm_inverse_kinematics_params_t params, float arm_angle, float *q_solve)
```

*可以跳转[rm_inverse_kinematics_params_t](../../struct/inverseKinematicsParams/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `params`  |    输入参数    |    逆解参数结构体。    |
    |   `arm_angle`  |    输入参数    |   指定臂角大小，单位:°。    |
    |   `q_solve`  |    输出参数    |    求解结果，单位:°。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    求解成功。    |
    |  -1  |    `int`    | 求解失败。|
    |  -2   |    `int`    | 求解结果超出限位。 |
    |  -3   |    `int`    | 机型非RM75。 |

- **使用示例**
  
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

## 正解算法 `rm_algo_forward_kinematics()`

- **方法原型：**

```C
rm_pose_t rm_algo_forward_kinematics(rm_robot_handle * handle,const float *const joint)
```

*可以跳转[rm_pose_t](../../struct/pose/index.md)和[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄，连接机械臂时传入机械臂控制句柄，不连接时传入NULL。    |
|   `joint`  |    输入参数    |    关节角度，单位：°。    |

- **返回值:**

[rm_pose_t](../../struct/pose/index.md)目标位姿，包含机械臂x，y，z，rx，ry，rz的信息。

::: warning 注意

1. 机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
2. 未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。
:::

- **使用示例**
  
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

## 欧拉角转四元数 `rm_algo_euler2quaternion()`

- **方法原型：**

```C
rm_quat_t rm_algo_euler2quaternion(rm_euler_t eu)
```

*可以跳转[rm_quat_t](../../struct/quat/index.md)和[rm_euler_t](../../struct/euler/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu  |    输入参数    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_quat_t](../../struct/quat/index.md)结构体中的四元数。

- **使用示例**
  
```C
rm_euler_t euler = {(float)0.1, (float)0.2, (float)0.3};
rm_quat_t quat = rm_algo_euler2quaternion(euler);
printf("Euler angles: (rx: %.2f, ry: %.2f, rz: %.2f)\n", euler.rx, euler.ry, euler.rz);
printf("Quaternion: (w: %.2f, x: %.2f, y: %.2f, z: %.2f)\n", quat.w, quat.x, quat.y, quat.z);
```

## 四元数转欧拉角`rm_algo_quaternion2euler()`

- **方法原型：**

```C
rm_euler_t rm_algo_quaternion2euler(rm_quat_t qua)
```

*可以跳转[rm_quat_t](../../struct/quat/index.md)和[rm_euler_t](../../struct/euler/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `qua`  |    输入参数    |    四元数。    |

- **返回值:**

返回[rm_euler_t](../../struct/euler/index.md)结构体中的欧拉角。

- **使用示例**
  
```C
rm_quat_t quat = {(float)1.0, (float)0.0, (float)0.0, (float)0.0};
rm_euler_t euler = rm_algo_quaternion2euler(quat);
printf("Quaternion: (w: %.2f, x: %.2f, y: %.2f, z: %.2f)\n", quat.w, quat.x, quat.y, quat.z);
printf("Euler angles: (rx: %.2f, ry: %.2f, rz: %.2f)\n", euler.rx, euler.ry, euler.rz);
```

## 欧拉角转旋转矩阵`rm_algo_euler2matrix()`

- **方法原型：**

```C
rm_matrix_t rm_algo_euler2matrix(rm_euler_t state)
```

*可以跳转[rm_matrix_t](../../struct/matrix/index.md)和[rm_euler_t](../../struct/euler/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `state`  |    输入参数    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_euler_t](../../struct/euler/index.md)结构体中旋转矩阵。

- **使用示例**
  
```C
//欧拉角转旋转矩阵
rm_euler_t eu;
rm_matrix_t matrix;
eu.rx = -2.85993f;
eu.ry = -0.447394f;
eu.rz = -1.81038f;
matrix = rm_algo_euler2matrix(eu);
```

## 位姿转旋转矩阵`rm_algo_pos2matrix()`

- **方法原型：**

```C
rm_matrix_t rm_algo_pos2matrix(rm_pose_t state)
```

*可以跳转[rm_matrix_t](../../struct/matrix/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `state`  |    输入参数    |    位姿。    |

- **返回值:**

返回[rm_matrix_t](../../struct/matrix/index.md)结构体中旋转矩阵。

- **使用示例**
  
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

## 旋转矩阵转位姿`rm_algo_matrix2pos()`

- **方法原型：**

```C
rm_pose_t rm_algo_matrix2pos(rm_matrix_t matrix)
```

*可以跳转[rm_matrix_t](../../struct/matrix/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    旋转矩阵。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿。

- **使用示例**
  
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

## 基坐标系转工作坐标系`rm_algo_base2workframe()`

- **方法原型：**

```C
rm_pose_t rm_algo_base2workframe(rm_matrix_t matrix,rm_pose_t state)
```

*可以跳转[rm_matrix_t](../../struct/matrix/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    工作坐标系在基坐标系下的矩阵。    |
|   `state`  |    输入参数    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿，表示基坐标系在工作坐标系下的位姿。

- **使用示例**
  
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
    {0.5, 0.5, 0.5},  // 位置
    .euler = {0.1, 0.2, 0.3}  // 欧拉角
};
rm_matrix_t matrix = Algo_Pos2Matrix(pose1);
pose = rm_algo_base2workframe(matrix,pose1);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## 工作坐标系转基坐标系`rm_algo_workframe2base()`

- **方法原型：**

```C
rm_pose_t rm_algo_workframe2base(rm_matrix_t matrix,rm_pose_t state)
```

*可以跳转[rm_matrix_t](../../struct/matrix/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    工作坐标系在基坐标系下的矩阵。    |
|   `state`  |    输入参数    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿，表示工作坐标系在基坐标系下的位姿。

- **使用示例**
  
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
    {0.5, 0.5, 0.5},  // 位置
    .euler = {0.1, 0.2, 0.3}  // 欧拉角
};

pose = rm_algo_workframe2base(matrix,state);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## 计算环绕运动位姿`rm_algo_RotateMove()`

- **方法原型：**

```C
rm_pose_t rm_algo_RotateMove(rm_robot_handle * handle,const float *const curr_joint,int rotate_axis,float rotate_angle,rm_pose_t choose_axis)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `curr_joint`  |    输入参数    |    当前关节角度，单位°。    |
|   `rotate_axis`  |    输入参数    |    旋转轴: 1:x轴, 2:y轴, 3:z轴。    |
|   `rotate_angle`  |    输入参数    |    旋转角度: 旋转角度, 单位：°。    |
|   `choose_axis`  |    输入参数    |    指定计算时使用的坐标系。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿。

- **使用示例**
  
```C
// 计算在frame坐标系下环绕X轴旋转10度后的位姿
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

## 计算沿工具坐标系运动位姿`rm_algo_cartesian_tool()`

- **方法原型：**

```C
rm_pose_t rm_algo_cartesian_tool(rm_robot_handle * handle,const float *const curr_joint,float move_lengthx,float move_lengthy,float move_lengthz)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `curr_joint`  |    输入参数    |    当前关节角度，单位°。    |
|   `move_lengthx`  |    输入参数    |    沿X轴移动长度，单位：米。    |
|   `move_lengthy`  |    输入参数    |    沿Y轴移动长度，单位：米。    |
|   `move_lengthz`  |    输入参数    |    沿Z轴移动长度，单位：米。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿,表示工作坐标系下的位姿。

- **使用示例**
  
```C
float joint[6] = {20,20,70,30,90,120};
rm_pose_t pose = rm_algo_cartesian_tool(joint,0.01f,0.01f,0.01f);
printf("POSE: %f, %f, %f, %f, %f, %f\n",pose.position.x,pose.position.y,pose.position.z,pose.euler.rx ,pose.euler.ry ,pose.euler.rz );
```

## 计算Pos和Rot沿某坐标系有一定的位移和旋转角度后，所得到的位姿数据`rm_algo_cartesian_tool()`

- **方法原型：**

```C
rm_pose_t rm_algo_PoseMove(rm_robot_handle *handle,rm_pose_t poseCurrent, const float *deltaPosAndRot, int frameMode);
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `poseCurrent`  |    输入参数    |    当前时刻位姿（欧拉角形式）。    |
|   `deltaPosAndRot`  |    输入参数    |    移动及旋转数组，位置移动（单位：m），旋转（单位：度）。    |
|   `frameMode`  |    输入参数    |    坐标系模式选择 0:Work（work即可任意设置坐标系），1:Tool。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿，表示平移旋转后的位姿。

- **使用示例**
  
```C
// 有当前角度正解得到当前位姿
float joint[6] = {0,-30,90,30,90,0, 0};
rm_pose_t target = rm_algo_forward_kinematics(handle, joint);
// 计算移动后的位姿
rm_pose_t afterPosAndRot;
float deltaPosAndRot[6] = {0.01,0.01,0.01,20,20,20};
afterPosAndRot = rm_algo_PoseMove(target, deltaPosAndRot,1);
printf("POSE: %f, %f, %f, %f, %f, %f\n",afterPosAndRot.position.x,afterPosAndRot.position.y,afterPosAndRot.position.z,afterPosAndRot.euler.rx ,afterPosAndRot.euler.ry ,afterPosAndRot.euler.rz );
```

## 末端位姿转成工具位姿`rm_algo_end2tool()`

- **方法原型：**

```C
rm_pose_t rm_algo_end2tool(rm_robot_handle * handle,rm_pose_t eu_end)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `eu_end`  |    输入参数    |    基于世界坐标系和默认工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿,表示基于工作坐标系和工具坐标系的末端位姿。

- **使用示例**
  
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

## 工具位姿转末端位姿`rm_algo_tool2end()`

- **方法原型：**

```C
rm_pose_t rm_algo_tool2end(rm_robot_handle * handle,rm_pose_t eu_tool)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `eu_tool`  |    输入参数    |    基于工作坐标系和工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../../struct/pose/index.md)结构体中位姿,表示基于世界坐标系和默认工具坐标系的末端位姿。

- **使用示例**
  
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

## 设置算法DH参数`rm_algo_set_dh()`

- **方法原型：**

```C
void rm_algo_set_dh(rm_dh_t dh)
```

*可以跳转[rm_dh_t](../../struct/dh/index.md)查阅结构体详细描述。*

- **参数说明**：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `dh`  |    输入参数    |    DH参数。    |

- **使用示例**
  
```C
// 设置算法当前DH参数（仅作示例，dh参数根据实际修改）
rm_dh_t dh_data = {
    .a = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .d = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .alpha = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02},
    .offset = {0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02}
};
rm_algo_set_dh(dh_data);
```

## 获取算法DH参数`rm_algo_get_dh()`

- **方法原型：**

```C
rm_dh_t rm_algo_get_dh()
```

*可以跳转[rm_dh_t](../../struct/dh/index.md)查阅结构体详细描述。*

- **参数说明**：

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `dh`  |    输出参数    |    当前DH参数。    |

- **使用示例**
  
```C
rm_dh_t dh_data = rm_algo_get_dh();
printf("dh a:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.a[0], dh_data.a[1], dh_data.a[2], dh_data.a[3], dh_data.a[4], dh_data.a[5], dh_data.a[6]);
printf("dh d:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.d[0], dh_data.d[1], dh_data.d[2], dh_data.d[3], dh_data.d[4], dh_data.d[5], dh_data.d[6]);
printf("dh alpha:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.alpha[0], dh_data.alpha[1], dh_data.alpha[2], dh_data.alpha[3], dh_data.alpha[4], dh_data.alpha[5], dh_data.alpha[6]);
printf("dh offset:[%f,%f,%f,%f,%f,%f,%f]\n", dh_data.offset[0], dh_data.offset[1], dh_data.offset[2], dh_data.offset[3], dh_data.offset[4], dh_data.offset[5], dh_data.offset[6]);
```

## <div id = '6285'>数值法判断机器人是否处于奇异位形 `rm_algo_universal_singularity_analyse()`</div>

- **方法原型：**

```C
int rm_algo_universal_singularity_analyse(const float* const q, float singluar_value_limit)
```

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `q`  |    输入参数    |    要判断的关节角度（机械零位描述），单位：°。    |
    |   `singluar_value_limit`  |    输入参数    |    最小奇异值阈值，若传NULL，则使用内部默认值，默认值为0.01（该值在0-1之间）。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    在当前阈值条件下正常。    |
    |  -1  |    `int`    | 表示在当前阈值条件下判断为奇异区。|
    |  -2   |    `int`    | 表示计算失败。 |

- **使用示例**
  
```C
float q_s[6] = {0, 43.4, -105.7, 0, -30, 0};
float singularity_limit = 0.01;
int ret_qs = wrapper.rm_algo_universal_singularity_analyse(q_s, singularity_limit);
```

## 设置自定义奇异区范围阈值（仅适用于解析法分析机器人奇异状态）`rm_algo_kin_set_singularity_thresholds()`

- **方法原型：**

```C
void rm_algo_kin_set_singularity_thresholds(float limit_qe, float limit_qw, float limit_d)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `limit_qe`  |    输入参数    |    肘部奇异区域范围设置(即J3接近0的范围，若为RML63，则是J3接近-9.68的范围)，单位：°，default: 10deg。    |
|   `limit_qw`  |    输入参数    |    腕部奇异区域范围设置(即J5接近0的范围)，单位：°,default: 10deg。    |
|   `limit_d`  |    输入参数    |    肩部奇异区域范围设置(即腕部中心点距离奇异平面的距离), 单位: m，default: 0.05。    |

- **使用示例**
  
```C
rm_algo_kin_set_singularity_thresholds(12.0, 12.0, 0.05);
```

## 获取自定义奇异区范围阈值（仅适用于解析法分析机器人奇异状态）`rm_algo_kin_get_singularity_thresholds()`

- **方法原型：**

```C
void rm_algo_kin_get_singularity_thresholds(float* limit_qe, float* limit_qw, float* limit_d)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `limit_qe`  |    输出参数    |    肘部奇异区域范围设置(即J3接近0的范围，若为RML63，则是J3接近-9.68的范围)，单位：°，default: 10deg。    |
|   `limit_qw`  |    输出参数    |    腕部奇异区域范围设置(即J5接近0的范围)，单位：°,default: 10deg。    |
|   `limit_d`  |    输出参数    |    肩部奇异区域范围设置(即腕部中心点距离奇异平面的距离), 单位: m，default: 0.05。    |

- **使用示例**

```C
float limit_qe = 0;
float limit_qw = 0;
float limit_d = 0;
rm_algo_kin_get_singularity_thresholds(&limit_qe, &limit_qw, &limit_d);
```

## 恢复初始奇异区范围阈值（仅适用于解析法分析机器人奇异状态）`rm_algo_kin_singularity_thresholds_init()`

- **方法原型：**

```C
void rm_algo_kin_singularity_thresholds_init()
```

- **使用示例**
  
```C
rm_algo_kin_singularity_thresholds_init();
```

## <div id = '6287'>解析法判断机器人是否处于奇异位形（仅支持六自由度）`rm_algo_kin_robot_singularity_analyse()`</div>

- **方法原型：**

```C
int rm_algo_kin_robot_singularity_analyse(const float* const q, float *distance)
```

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `q`  |    输入参数    |    要判断的关节角度,单位:°。    |
    |   `distance`  |    输出参数    |    返回腕部中心点到肩部奇异平面的距离，该值越接近0说明越接近肩部奇异,单位m,不需要时可传NULL。    |

- **返回值:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    正常。    |
    |  -1  |    `int`    | 肩部奇异。|
    |  -2   |    `int`    | 肘部奇异。 |
    |  -3   |    `int`    | 腕部奇异。 |
    |  -4   |    `int`    | 仅支持6自由度机械臂。 |

- **使用示例**
  
```C
float q_s[6] = {0, 43.4, -105.7, 0, -30, 0};
float distance = 0.00;
int ret = wrapper.rm_algo_kin_robot_singularity_analyse(q_s, &distance);
```

## 设置工具包络球参数`rm_algo_set_tool_envelope()`

- **方法原型：**

```C
void rm_algo_set_tool_envelope(const int toolSphere_i, rm_tool_sphere_t data)
```

*可以跳转[rm_tool_sphere_t](../../struct/toolEnvelopeSphere/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `toolSphere_i`  |    输入参数    |    工具包络球编号 (0~4)。    |
    |   `data`  |    输入参数    |    工具包络球参数,注意其参数在末端法兰坐标系下描述。    |

- **使用示例**
  
```C
rm_tool_sphere_t envelope = {0.01, {0.0, 0.0, 0.05}};
wrapper.rm_algo_set_tool_envelope(0, envelope);
```

## 获取工具包络球参数`rm_algo_get_tool_envelope()`

- **方法原型：**

```C
void rm_algo_get_tool_envelope(const int toolSphere_i, rm_tool_sphere_t *data)
```

*可以跳转[rm_tool_sphere_t](../../struct/toolEnvelopeSphere/index.md)查阅结构体详细描述。*

- **参数说明:**

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   `toolSphere_i`  |    输入参数    |    工具包络球编号 (0~4)。    |
    |   `data`  |    输出参数    |    工具包络球参数,注意其参数在末端法兰坐标系下描述。    |

- **使用示例**
  
```C
rm_tool_sphere_t envelope = {0.0, {0.0, 0.0, 0.0}};
wrapper.rm_algo_get_tool_envelope(0, &envelope);
```
