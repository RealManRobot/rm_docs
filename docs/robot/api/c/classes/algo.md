# <p class="hidden">C、C++: </p>算法接口配置`algo`

针对睿尔曼机械臂，提供正逆解、各种位姿参数转换等工具接口。

## 初始化算法依赖数据`rm_algo_init_sys_data()`

- **方法原型：**

```C
void rm_algo_init_sys_data(rm_robot_arm_model_e Mode,rm_force_type_e Type)
```

*可以跳转[rm_robot_arm_model_e](../type/typeList.md#rm_robot_arm_model_e机械臂型号)和[rm_force_type_e](../type/typeList.md#rm_force_type_e机械臂末端力传感器版本)查阅枚举类型详细描述*
>备注：不连接机械臂时调用

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

## 设置工作坐标系`rm_algo_get_angle()`

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

## 获取安装角度`rm_algo_set_workframe()`

- **方法原型：**

```C
void rm_algo_set_workframe(const rm_frame_t *const coord_work)
```

*可以跳转[rm_frame_t](../struct/frame)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `coord_work`  |    输出参数    |    坐标系数据(无需设置名称)。    |

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

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

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

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

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

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

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
|   `joint_limit`  |    输出参数    |    关节最大限位角度，单位°。    |

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
|   `mode`  |    输入参数    |     - true：遍历模式，冗余参数遍历的求解策略。适于当前位姿跟要求解的位姿差别特别大的应用场景，如MOVJ_P、位姿编辑等，耗时较长</br> - false：单步模式，自动调整冗余参数的求解策略。适于当前位姿跟要求解的位姿差别特别小、连续周期控制的场景，如笛卡尔空间规划的位姿求解等，耗时短。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    逆解成功。    |
|   1  |    `int`    |    逆解失败。    |
|  -1  |    `int`    |    上一时刻关节角度输入为空。    |
|  -2  |    `int`    |    目标位姿四元数不合法。    |

>注意：<br>
>1.机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
>2.未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

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

## 逆解函数`rm_algo_inverse_kinematics()`

- **方法原型：**

```C
int rm_algo_inverse_kinematics(rm_robot_handle * handle,rm_inverse_kinematics_params_t params,float * q_out)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_inverse_kinematics_params_t](../struct/inverseKinematicsParams.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `params`  |    输入参数    |    逆解输入参数结构体。    |
|   `q_out`  |    输出参数    |    输出的关节角度 单位°。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    逆解成功。    |
|   1  |    `int`    |    逆解失败。    |
|  -1  |    `int`    |    上一时刻关节角度输入为空。    |
|  -2  |    `int`    |    目标位姿四元数不合法。    |

>注意：<br>
>1.机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
>2.未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

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

## 正解算法`rm_algo_forward_kinematics()`

- **方法原型：**

```C
rm_pose_t rm_algo_forward_kinematics(rm_robot_handle * handle,const float *const joint)
```

*可以跳转[rm_pose_t](../struct/pose)和[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄，连接机械臂时传入机械臂控制句柄，不连接时传入NULL。    |
|   `joint`  |    输入参数    |    关节角度，单位：°。    |

- **返回值:**

[rm_pose_t](../struct/pose)目标位姿，包含机械臂x，y，z，rx，ry，rz的信息。

>注意：<br>
>1.机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；<br>
>2.未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

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

## 欧拉角转四元数`rm_algo_euler2quaternion()`

- **方法原型：**

```C
rm_quat_t rm_algo_euler2quaternion(rm_euler_t eu)
```

*可以跳转[rm_quat_t](../struct/quat)和[rm_euler_t](../struct/euler)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu  |    输入参数    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_quat_t](../struct/quat)结构体中的四元数。

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

*可以跳转[rm_quat_t](../struct/quat)和[rm_euler_t](../struct/euler)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `qua`  |    输入参数    |    四元数。    |

- **返回值:**

返回[rm_euler_t](../struct/euler)结构体中的欧拉角。

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

*可以跳转[rm_matrix_t](../struct/matrix)和[rm_euler_t](../struct/euler)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `state`  |    输入参数    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_euler_t](../struct/euler)结构体中旋转矩阵。

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

*可以跳转[rm_matrix_t](../struct/matrix)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `state`  |    输入参数    |    位姿。    |

- **返回值:**

返回[rm_matrix_t](../struct/matrix)结构体中旋转矩阵。

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

*可以跳转[rm_matrix_t](../struct/matrix)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    旋转矩阵。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿。

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

*可以跳转[rm_matrix_t](../struct/matrix)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    工作坐标系在基坐标系下的矩阵。    |
|   `state`  |    输入参数    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿，表示基坐标系在工作坐标系下的位姿。

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

*可以跳转[rm_matrix_t](../struct/matrix)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `matrix`  |    输入参数    |    工作坐标系在基坐标系下的矩阵。    |
|   `state`  |    输入参数    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿，表示工作坐标系在基坐标系下的位姿。

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

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `curr_joint`  |    输入参数    |    当前关节角度，单位°。    |
|   `rotate_axis`  |    输入参数    |    旋转轴: 1:x轴, 2:y轴, 3:z轴。    |
|   `rotate_angle`  |    输入参数    |    旋转角度: 旋转角度, 单位：°。    |
|   `choose_axis`  |    输入参数    |    指定计算时使用的坐标系。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿。

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

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `curr_joint`  |    输入参数    |    当前关节角度，单位°。    |
|   `move_lengthx`  |    输入参数    |    沿X轴移动长度，单位：米。    |
|   `move_lengthy`  |    输入参数    |    沿Y轴移动长度，单位：米。    |
|   `move_lengthz`  |    输入参数    |    沿Z轴移动长度，单位：米。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿,表示工作坐标系下的位姿。

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

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `poseCurrent`  |    输入参数    |    当前时刻位姿（欧拉角形式）。    |
|   `deltaPosAndRot`  |    输入参数    |    移动及旋转数组，位置移动（单位：m），旋转（单位：度）。    |
|   `frameMode`  |    输入参数    |    坐标系模式选择 0:Work（work即可任意设置坐标系），1:Tool。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿，表示平移旋转后的位姿。

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

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `eu_end`  |    输入参数    |    基于世界坐标系和默认工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿,表示基于工作坐标系和工具坐标系的末端位姿。

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

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `eu_tool`  |    输入参数    |    基于工作坐标系和工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/pose)结构体中位姿,表示基于世界坐标系和默认工具坐标系的末端位姿。

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
