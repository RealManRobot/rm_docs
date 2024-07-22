# 机械臂运动控制指令类

控制运动的急停、缓停、暂停、继续、清除轨迹以及查询当前规划类型。

## 轨迹缓停`rm_set_arm_slow_stop()`

>在当前正在运行的轨迹上停止。

- **方法原型：**

```C
int rm_set_arm_slow_stop(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 设置机器人缓慢停止  
if (rm_set_arm_slow_stop(robot_handle) == 0) {  
    printf("Arm set to slow stop successfully.\n");  
} else {  
    printf("Failed to set arm to slow stop.\n");  
} 
```

## 轨迹急停`rm_set_arm_stop()`

>关节最快速度停止，轨迹不可恢复。

- **方法原型：**

```C
int rm_set_arm_stop(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 设置机器人急停  
if (rm_set_arm_stop(robot_handle) == 0) {  
    printf("Arm set to stop successfully.\n");  
} else {  
    printf("Failed to set arm to stop.\n");  
}
```

## 轨迹暂停`rm_set_arm_pause()`

>暂停在规划轨迹上，轨迹可恢复。

- **方法原型：**

```C
int rm_set_arm_pause(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 设置机器人暂停  
if (rm_set_arm_pause(robot_handle) == 0) {  
    printf("Arm set to pause successfully.\n");  
} else {  
    printf("Failed to set arm to pause.\n");  
} 
```

## 暂停后继续轨迹运动`rm_set_arm_continue()`

- **方法原型：**

```C
int rm_set_arm_continue(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 设置机器人暂停后继续  
if (rm_set_arm_continue(robot_handle) == 0) {  
    printf("Arm set to continue successfully.\n");  
} else {  
    printf("Failed to set arm to continue.\n");  
} 
```

## 清除当前轨迹`rm_set_delete_current_trajectory()`

- **方法原型：**

```C
int rm_set_delete_current_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

>注意：必须在暂停后使用，否则机械臂会发生意外！！！！

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 删除当前轨迹  
if (rm_set_delete_current_trajectory(robot_handle) == 0) {  
    printf("Current trajectory deleted successfully.\n");
} else {  
    printf("Failed to delete Current trajectory.\n");  
} 
```

## 清除所有轨迹`rm_set_arm_delete_trajectory()`

- **方法原型：**

```C
int rm_set_arm_delete_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

>注意：必须在暂停后使用，否则机械臂会发生意外！！！！

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
// 清除所有轨迹  
if (rm_set_arm_delete_trajectory(robot_handle) == 0) {  
    printf("Trajectory deleted successfully.\n");
} else {  
    printf("Failed to delete Trajectory.\n");  
} 
```

## 获取当前正在规划的轨迹信息`rm_get_arm_current_trajectory()`

- **方法原型：**

```C
int rm_get_arm_current_trajectory(rm_robot_handle * handle,rm_arm_current_trajectory_e * type,float * data)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*
*可以跳转[rm_arm_current_trajectory_e](跳转到typc_list的rm_arm_current_trajectory_e)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   type  |    输入参数    |    返回的规划类型。    |
|   data  |    输出参数    |    存放无规划和关节空间规划为当前关节1~7角度数组；笛卡尔空间规划则为当前末端位姿。    |

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
// 获取当前机械臂轨迹的信息
rm_arm_current_trajectory_e trajectory_type;  
float trajectory_data[7]; 
if (rm_get_arm_current_trajectory(robot_handle, &trajectory_type, trajectory_data) == 0) {  
    printf("Current arm trajectory type: %d\n", trajectory_type);    
} 
```
