# 机械臂状态查询

机械臂当前状态、关节温度、电流、电压查询。

## 获取机械臂当前状态`rm_get_current_arm_state()`

获取机械臂的位姿、角度、机械臂错误码、控制器错误码等信息。

- **方法原型：**

```C
int rm_get_current_arm_state(rm_robot_handle * handle,rm_current_arm_state_t * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_current_arm_state_t](../struct/currentState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  state  |    输出参数    |    机械臂当前状态结构体。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
// 获取机械臂当前状态  
rm_current_arm_state_t current_state;  
if (rm_get_current_arm_state(robot_handle, &current_state) == 0) { 
    printf("Current Pose: \n");  
    printf("Position: (%.3f, %.3f, %.3f) m\n",  
           current_state.pose.position.x, current_state.pose.position.y, current_state.pose.position.z);  
    printf("Quaternion: (%.3f, %.3f, %.3f, %.3f)\n",  
           current_state.pose.quaternion.w, current_state.pose.quaternion.x, current_state.pose.quaternion.y, current_state.pose.quaternion.z);  
    printf("Euler Angles: (%.3f, %.3f, %.3f) rad\n",  
           current_state.pose.euler.rx, current_state.pose.euler.ry, current_state.pose.euler.rz);  
    printf("Joint Angles: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", current_state.joint[i]);  
    }  
    printf("\nArm Error: %u\n", current_state.arm_err);  
    printf("System Error: %u\n", current_state.sys_err);  
} else {  
    printf("Failed to get current arm state\n");  
}  
```

## 获取关节当前温度`rm_get_current_joint_temperature()`

- **方法原型：**

```C
int rm_get_current_joint_temperature(rm_robot_handle * handle,float * temperature)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  temperature  |    输出参数    |    存放关节1~7温度数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
float temperature[ARM_DOF];  
if (rm_get_current_joint_temperature(robot_handle, temperature) == 0) {  
    printf("Joint Temperature: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", temperature[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint temperature\n");  
} 
```

## 获取关节当前电流`rm_get_current_joint_current()`

- **方法原型：**

```C
int rm_get_current_joint_current(rm_robot_handle * handle,float * current)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  current  |    输出参数    |    存放关节1~7电流数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
float current[ARM_DOF];  
if (rm_get_current_joint_current(robot_handle, current) == 0) {  
    printf("Joint current: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", current[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint current\n");  
} 
```

## 获取关节当前电压`rm_get_current_joint_voltage()`

- **方法原型：**

```C
int rm_get_current_joint_voltage(rm_robot_handle * handle,float * voltage)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  voltage  |    输出参数    |    存放关节1~7电压数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
float voltage[ARM_DOF];  
if (rm_get_current_joint_voltage(robot_handle, voltage) == 0) {  
    printf("Joint voltage: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", voltage[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint voltage\n");  
} 
```

## 获取当前关节角度`rm_get_joint_degree()`

- **方法原型：**

```C
int rm_get_joint_degree(rm_robot_handle * handle,float * joint)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  joint  |    输出参数    |    当前7个关节的角度数组。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
float degree[ARM_DOF];  
if (rm_get_joint_degree(robot_handle, degree) == 0) {  
    printf("Joint degree: "); 
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f ", degree[i]);  
    }
    printf("\n");  
} else {  
    printf("Failed to get joint degree\n");  
} 
```

## 获取机械臂所有状态信息`rm_get_arm_all_state()`

- **方法原型：**

```C
int rm_get_arm_all_state(rm_robot_handle * handle,rm_arm_all_state_t * state)机械臂状态查询
```

*可以跳转[rm_robot_handle](../struct/robotHandled)和[rm_arm_all_state_t](../struct/allState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  state  |    输出参数    |    存储机械臂信息的结构体。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
rm_arm_all_state_t all_state;  
if (rm_get_arm_all_state(robot_handle, &all_state) == 0) {  
    printf("Joint Currents: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f mA ", all_state.joint_current[i]);  
    }  
    printf("\nJoint Temperatures: ");  
    for (int i = 0; i < ARM_DOF; i++) {  
        printf("%.2f C ", all_state.joint_temperature[i]);  
    }  
    // 打印其他信息...  
} else {  
    printf("Failed to get arm all state\n");  
} 
```
