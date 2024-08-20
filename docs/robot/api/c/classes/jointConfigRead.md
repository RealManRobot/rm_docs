# <p class="hidden">C、C++: </p>关节配置查询`JointConfigReader`

可用于查询关节、驱动器的最大速度、加速度或者限位等

## 查询关节最大速度`rm_get_joint_max_speed()`

- **方法原型：**

```C
int rm_get_joint_max_speed(rm_robot_handle * handle,float * max_speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_speed`  |    输入参数    |    关节1~7转速数组，单位：°/s。    |

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
float max_speed[6];
ret = rm_get_joint_max_speed(robot_handle, max_speed);
printf("get joint max speed result : %d\n", ret);
printf("Max speeds: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_speed[i]);
}
printf("\n");
```

## 查询关节最大加速度`rm_get_joint_max_acc()`

- **方法原型：**

```C
int rm_get_joint_max_acc(rm_robot_handle * handle,float * max_acc)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_acc`  |    输入参数    |    关节1~7加速度数组，单位：°/s。    |

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
float max_acc[6];
ret = rm_get_joint_max_acc(robot_handle, max_acc);
printf("get joint max acc result : %d\n", ret);
printf("Max accelerations: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_acc[i]);
}
printf("\n");
```

## 查询关节最小限位`rm_get_joint_min_pos()`

- **方法原型：**

```C
int rm_get_joint_min_pos(rm_robot_handle * handle,float * min_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `min_pos`  |    输入参数    |    关节1~7最小位置数组，单位：°。    |

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
float min_pos[6];
ret = rm_get_joint_min_pos(robot_handle, min_pos);
printf("get joint min pos result : %d\n", ret);
printf("Min positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", min_pos[i]);
}
printf("\n");
```

## 查询关节最大限位`rm_get_joint_max_pos()`

- **方法原型：**

```C
int rm_get_joint_max_pos(rm_robot_handle * handle,float * max_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_pos`  |    输入参数    |    关节1~7最大位置数组，单位：°。    |

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
float max_pos[6];
ret = rm_get_joint_max_pos(robot_handle, max_pos);
printf("get joint max pos result : %d\n", ret);
printf("Max positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_pos[i]);
}
printf("\n");
```

## 查询关节最大速度(驱动器)`rm_get_joint_drive_max_speed()`

- **方法原型：**

```C
int rm_get_joint_drive_max_speed(rm_robot_handle * handle,float * max_speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_speed`  |    输入参数    |    关节1~7转速数组，单位：°/s。    |

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
float max_speed[6];
ret = rm_get_joint_drive_max_speed(robot_handle, max_speed);
printf("get joint drive max speed result : %d\n", ret);
printf("Max drive speeds: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_speed[i]);
}
printf("\n");
```

## 查询关节最大加速度(驱动器)`rm_get_joint_drive_max_acc()`

- **方法原型：**

```C
int rm_get_joint_drive_max_acc(rm_robot_handle * handle,float * max_acc)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_acc`  |    输入参数    |    关节1~7加速度数组，单位：°/s。    |

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
float max_acc[6];
ret = rm_get_joint_drive_max_acc(robot_handle, max_acc);
printf("get joint drive max acc result : %d\n", ret);
printf("Max accelerations: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_acc[i]);
}
printf("\n");
```

## 查询关节最小限位(驱动器)`rm_get_joint_drive_min_pos()`

- **方法原型：**

```C
int rm_get_joint_drive_min_pos(rm_robot_handle * handle,float * min_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `min_pos`  |    输入参数    |    关节1~7最小位置数组，单位：°。    |

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
float min_pos[6];
ret = rm_get_joint_drive_min_pos(robot_handle, min_pos);
printf("get joint drive min pos result : %d\n", ret);
printf("Min positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", min_pos[i]);
}
printf("\n");
```

## 查询关节最大限位(驱动器)`rm_get_joint_drive_max_pos()`

- **方法原型：**

```C
int rm_get_joint_drive_max_pos(rm_robot_handle * handle,float * max_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `max_pos`  |    输入参数    |    关节1~7最大位置数组，单位：°。    |

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
float max_pos[6];
ret = rm_get_joint_drive_max_pos(robot_handle, max_pos);
printf("get joint drive max pos result : %d\n", ret);
printf("Max positions: ");
for (int i = 0; i < 6; i++) {
    printf("%.2f ", max_pos[i]);
}
printf("\n");
```

## 查询关节使能状态`rm_get_joint_en_state()`

- **方法原型：**

```C
int rm_get_joint_en_state(rm_robot_handle * handle,uint8_t * en_state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `en_state`  |    输入参数    |    关节1~7使能状态数组，1-使能状态，0-掉使能状态。    |

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
uint8_t en_state[6];
ret = rm_get_joint_en_state(robot_handle, en_state);
printf("get joint en state result : %d\n", ret);
printf("Enable states: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", en_state[i]);
}
printf("\n");
```

## 查询关节错误代码`rm_get_joint_err_flag()`

- **方法原型：**

```C
int rm_get_joint_err_flag(rm_robot_handle * handle,uint16_t * err_flag,uint16_t * brake_state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `err_flag`  |    输入参数    |    反馈关节错误代码，错误码请参见[机械臂错误码查询](../eeorList)。    |
|  `brake_state`  |    输入参数    |    反馈关节抱闸状态，1 代表抱闸未打开，0 代表抱闸已打开。    |

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
uint16_t err_flag[6];
uint16_t brake_state[6];
ret = rm_get_joint_err_flag(robot_handle, err_flag,brake_state);
printf("get joint err flag result : %d\n", ret);
printf("Error flags: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", err_flag[i]);
}
printf("\n");
printf("Brake states: ");
for (int i = 0; i < 6; i++) {
    printf("%d ", brake_state[i]);
}
printf("\n");
```
