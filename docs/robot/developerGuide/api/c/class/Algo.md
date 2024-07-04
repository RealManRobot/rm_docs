# 算法接口

针对睿尔曼机械臂，提供正逆解、各种位姿参数转换等工具接口。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 初始化算法依赖数据`rm_algo_init_sys_data()`

- **方法原型：**

```C
void rm_algo_init_sys_data(rm_robot_arm_model_e Mode,rm_force_type_e Type)
```

*可以跳转[rm_robot_arm_model_e](跳转到typc_list的rm_robot_arm_model_e)和[rm_force_type_e](跳转到typc_list的rm_force_type_e)查阅枚举类型详细描述*
>备注：不连接机械臂时调用

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   Mode  |    `/`    |    机械臂型号。    |
|   Type  |    `/`    |    传感器型号。    |

- **使用示例**
  
```C

```

## 设置安装角度`rm_algo_set_angle()`

- **方法原型：**

```C
void rm_algo_set_angle(float x,float y,float z)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `/`    |    X轴安装角度，单位°。    |
|   y  |    `/`    |    Y轴安装角度，单位°。    |
|   z  |    `/`    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```C

```

## 获取安装角度`rm_algo_get_angle()`

- **方法原型：**

```C
void rm_algo_get_angle(float x,float y,float z)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `/`    |    X轴安装角度，单位°。    |
|   y  |    `/`    |    Y轴安装角度，单位°。    |
|   z  |    `/`    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```C

```

## 获取安装角度`rm_algo_set_workframe()`

- **方法原型：**

```C
void rm_algo_set_workframe(const rm_frame_t *const coord_work)
```

*可以跳转[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   coord_work  |    `/`    |    坐标系数据(无需设置名称)。    |

- **使用示例**
  
```C

```

## 获取当前工作坐标系`rm_algo_get_curr_workframe()`

- **方法原型：**

```C
void rm_algo_get_curr_workframe(rm_frame_t * coord_work)
```

*可以跳转[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   coord_work  |    `/`    |    当前工作坐标系(获取到的坐标系参数，不包括坐标系名称)。    |

- **使用示例**
  
```C

```

## 设置工具坐标系`rm_algo_set_toolframe()`

- **方法原型：**

```C
void rm_algo_set_toolframe(const rm_frame_t *const coord_tool)
```

*可以跳转[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   coord_tool  |    `/`    |    坐标系数据。    |

- **使用示例**
  
```C

```

## 获取算法当前工具坐标系`rm_algo_get_curr_toolframe()`

- **方法原型：**

```C
void rm_algo_get_curr_toolframe(rm_frame_t * coord_tool)
```

*可以跳转[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   coord_tool  |    `/`    |    当前工具坐标系。    |

- **使用示例**
  
```C

```

## 设置算法关节最大限位`rm_algo_set_joint_max_limit()`

- **方法原型：**

```C
void rm_algo_set_joint_max_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `/`    |    关节最大限位角度，单位°。    |

- **使用示例**
  
```C

```

## 获取算法关节最大限位`rm_algo_get_joint_max_limit()`

- **方法原型：**

```C
void rm_algo_get_joint_max_limit(float * joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `/`    |    返回关节最大限位。    |

- **使用示例**
  
```C

```

## 设置算法关节最小限位`rm_algo_set_joint_min_limit()`

- **方法原型：**

```C
void rm_algo_set_joint_min_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `/`    |    最小限位角度，单位°。    |

- **使用示例**
  
```C

```

## 获取算法关节最小限位`rm_algo_get_joint_min_limit()`

- **方法原型：**

```C
void rm_algo_get_joint_min_limit(const float *const joint_limit)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `/`    |    存放返回关节最小限位。    |

- **使用示例**
  
```C

```

## 设置算法关节最大速度`rm_algo_set_joint_max_speed()`

- **方法原型：**

```C
void rm_algo_set_joint_max_speed(const float *const joint_slim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_slim_max  |    `/`    |    最大转速（RPM），单位转/分。    |

- **使用示例**
  
```C

```

## 获取算法关节最大速度`rm_algo_get_joint_max_speed()`

- **方法原型：**

```C
void rm_algo_get_joint_max_speed(float * joint_slim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_slim_max  |    `/`    |    存放返回的最大转速（RPM），单位转/分。    |

- **使用示例**
  
```C

```

## 设置算法关节最大加速度`rm_algo_set_joint_max_acc()`

- **方法原型：**

```C
void rm_algo_set_joint_max_acc(const float *const joint_alim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_alim_max  |    `/`    |    最大加速度，单位RPM/s。    |

- **使用示例**
  
```C

```

## 获取算法关节最大加速度`rm_algo_get_joint_max_acc()`

- **方法原型：**

```C
void rm_algo_get_joint_max_acc(float * joint_alim_max)
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_alim_max  |    `/`    |    存放返回的最大加速度，单位RPM/s。    |

- **使用示例**
  
```C

```

## 逆解函数`rm_algo_inverse_kinematics()`

- **方法原型：**

```C
int rm_algo_inverse_kinematics(rm_robot_handle * handle,rm_inverse_kinematics_params_t params,float * q_out)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_inverse_kinematics_params_t](../struct/rm_inverse_kinematics_params_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄。    |
|   params  |    `/`    |    逆解输入参数结构体。    |
|   q_out  |    `/`    |    输出的关节角度 单位°。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    逆解成功。    |
|   1  |    `int`    |    逆解失败。    |
|  -1  |    `int`    |    上一时刻关节角度输入为空。    |
|  -2  |    `int`    |    目标位姿四元数不合法。    |

>注意：
>1.机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；
>2.未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

- **使用示例**
  
```C

```

## 正解算法`rm_algo_forward_kinematics()`

- **方法原型：**

```C
rm_pose_t rm_algo_forward_kinematics(rm_robot_handle * handle,const float *const joint)
```

*可以跳转[rm_pose_t](../struct/rm_pose_t.md)和[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄，连接机械臂时传入机械臂控制句柄，不连接时传入NULL。    |
|   joint  |    `const float`    |    关节角度，单位：°。    |

- **返回值:**

[rm_pose_t](../struct/rm_pose_t.md)目标位姿，包含机械臂x，y，z，rx，ry，rz的信息。

>注意：
>1.机械臂已连接时，可直接调用该接口进行计算，计算使用的参数均为机械臂当前的参数；
>2.未连接机械臂时，需首先调用初始化算法依赖数据接口，并按照实际需求设置使用的坐标系、安装方式及关节速度位置等限制 （不设置，则按照出厂默认的参数进行计算），此时机械臂控制句柄设置为NULL即可。

- **使用示例**
  
```C
rm_pose_t pose;
pose.position.x = 0.186350;
pose.position.y = 0.062099;
pose.position.z = 0.2;
pose.euler.rx = 3.141;
pose.euler.ry = 0;
pose.euler.rz = 1.569;
float q_in_values[] = {0, 0, -90, 0, -90, 0};
float q_out[6]; 
rm_inverse_kinematics_params_t params = {
    .q_in = *q_in_values,
    .q_pose = &pose,
    .flag = 1,
};
// 不连接机械臂调用正逆解
rm_algo_init_sys_data(RM_MODEL_RM_65_E, RM_MODEL_RM_B_E);
pose = rm_algo_forward_kinematics(NULL, q_out);
printf("rm_algo_forward_kinematics pose:[%.2f] [%.2f] [%.2f]\n",pose.position.x,pose.position.y,pose.position.z);
pose.position.x += 0.01;
int ret = rm_algo_inverse_kinematics(NULL, &params, q_out);
printf("algo_inverse_kinematics:[%d],[%.2f] [%.2f][%.2f] [%.2f][%.2f] [%.2f]\n",ret,q_out[0],q_out[1],q_out[2],q_out[3],q_out[4],q_out[5]);
```

## 欧拉角转四元数`rm_algo_euler2quaternion()`

- **方法原型：**

```C
rm_quat_t rm_algo_euler2quaternion(rm_euler_t eu)
```

*可以跳转[rm_quat_t](../struct/rm_quat_t.md)和[rm_euler_t](../struct/rm_euler_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu  |    `/`    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_quat_t](../struct/rm_quat_t.md)结构体中的四元数。

- **使用示例**
  
```C

```

## 四元数转欧拉角`rm_algo_quaternion2euler()`

- **方法原型：**

```C
rm_euler_t rm_algo_quaternion2euler(rm_quat_t qua)
```

*可以跳转[rm_quat_t](../struct/rm_quat_t.md)和[rm_euler_t](../struct/rm_euler_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   qua  |    `/`    |    四元数。    |

- **返回值:**

返回[rm_euler_t](../struct/rm_euler_t.md)结构体中的欧拉角。

- **使用示例**
  
```C

```

## 欧拉角转旋转矩阵`rm_algo_euler2matrix()`

- **方法原型：**

```C
rm_matrix_t rm_algo_euler2matrix(rm_euler_t state)
```

*可以跳转[rm_matrix_t](../struct/rm_matrix_t.md)和[rm_euler_t](../struct/rm_euler_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   state  |    `/`    |    欧拉角，单位：rad。    |

- **返回值:**

返回[rm_euler_t](../struct/rm_euler_t.md)结构体中旋转矩阵。

- **使用示例**
  
```C

```

## 位姿转旋转矩阵`rm_algo_pos2matrix()`

- **方法原型：**

```C
rm_matrix_t rm_algo_pos2matrix(rm_pose_t state)
```

*可以跳转[rm_matrix_t](../struct/rm_matrix_t.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   state  |    `/`    |    位姿。    |

- **返回值:**

返回[rm_matrix_t](../struct/rm_matrix_t.md)结构体中旋转矩阵。

- **使用示例**
  
```C

```

## 旋转矩阵转位姿`rm_algo_matrix2pos()`

- **方法原型：**

```C
rm_pose_t rm_algo_matrix2pos(rm_matrix_t matrix)
```

*可以跳转[rm_matrix_t](../struct/rm_matrix_t.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `/`    |    旋转矩阵。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿。

- **使用示例**
  
```C

```

## 基坐标系转工作坐标系`rm_algo_base2workframe()`

- **方法原型：**

```C
rm_pose_t rm_algo_base2workframe(rm_matrix_t matrix,rm_pose_t state)
```

*可以跳转[rm_matrix_t](../struct/rm_matrix_t.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `/`    |    工作坐标系在基坐标系下的矩阵。    |
|   state  |    `/`    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿，表示基坐标系在工作坐标系下的位姿。

- **使用示例**
  
```C

```

## 工作坐标系转基坐标系`rm_algo_workframe2base()`

- **方法原型：**

```C
rm_pose_t rm_algo_workframe2base(rm_matrix_t matrix,rm_pose_t state)
```

*可以跳转[rm_matrix_t](../struct/rm_matrix_t.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `/`    |    工作坐标系在基坐标系下的矩阵。    |
|   state  |    `/`    |    工具端坐标在基坐标系下位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿，表示工作坐标系在基坐标系下的位姿。

- **使用示例**
  
```C

```

## 计算环绕运动位姿计算环绕运动位姿`rm_algo_RotateMove()`

- **方法原型：**

```C
rm_pose_t rm_algo_RotateMove(rm_robot_handle * handle,const float *const curr_joint,int rotate_axis,float rotate_angle,rm_pose_t choose_axis)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄。    |
|   curr_joint  |    `const float`    |    当前关节角度，单位°。    |
|   rotate_axis  |    `int`    |    旋转轴: 1:x轴, 2:y轴, 3:z轴。    |
|   rotate_angle  |    `float`    |    旋转角度: 旋转角度, 单位：°。    |
|   choose_axis  |    `/`    |    指定计算时使用的坐标系。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿。

- **使用示例**
  
```C

```

## 计算沿工具坐标系运动位姿`rm_algo_cartesian_tool()`

- **方法原型：**

```C
rm_pose_t rm_algo_cartesian_tool(rm_robot_handle * handle,const float *const curr_joint,float move_lengthx,float move_lengthy,float move_lengthz)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄。    |
|   curr_joint  |    `const float`    |    当前关节角度，单位°。    |
|   move_lengthx  |    `float`    |    沿X轴移动长度，单位：米。    |
|   move_lengthy  |    `float`    |    沿Y轴移动长度，单位：米。    |
|   move_lengthz  |    `float`    |    沿Z轴移动长度，单位：米。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿,表示工作坐标系下的位姿。

- **使用示例**
  
```C

```

## 末端位姿转成工具位姿`rm_algo_end2tool()`

- **方法原型：**

```C
rm_pose_t rm_algo_end2tool(rm_robot_handle * handle,rm_pose_t eu_end)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄。    |
|   eu_end  |    `/`    |    基于世界坐标系和默认工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿,表示基于工作坐标系和工具坐标系的末端位姿。

- **使用示例**
  
```C

```

## 工具位姿转末端位姿`rm_algo_tool2end()`

- **方法原型：**

```C
rm_pose_t rm_algo_tool2end(rm_robot_handle * handle,rm_pose_t eu_tool)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂控制句柄。    |
|   eu_tool  |    `/`    |    基于工作坐标系和工具坐标系的末端位姿。    |

- **返回值:**

返回[rm_pose_t](../struct/rm_pose_t.md)结构体中位姿,表示基于世界坐标系和默认工具坐标系的末端位姿。

- **使用示例**
  
```C

```
