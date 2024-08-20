# <p class="hidden">C、C++: </p>关节配置`jointConfigSettings`

对机械臂的关节参数进行设置，如速度、加速度、限位、零位、关节报错信息等。<br>

如果关节发生错误，则无法修改关节参数，必须先清除关节错误代码。另外设置关节之前， 必须先将关节掉使能，否则会设置不成功。<br>

关节所有参数在修改完成后，会自动保存到关节 Flash，立即生效，之后关节处于掉使能状态，修改完参数后必须发送指令控制关节上使能。

## 设置关节最大速度`rm_set_joint_max_speed()`

- **方法原型：**

```C
int rm_set_joint_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_speed`  |    输入参数    |    关节最大速度，单位：°/s。    |

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
// 设置关节1最大速度180°/s  
int ret = rm_set_joint_max_speed(robot_handle,1,180);
printf("set_joint_max_speed result:%d\n",ret);
```

## 设置关节最大速度`rm_set_joint_max_acc()`

- **方法原型：**

```C
int rm_set_joint_max_acc(rm_robot_handle *handle,int joint_num,float max_acc)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_acc`  |    输入参数    |    关节最大加速度，单位：°/s²。    |

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
//设置关节2最大加速度600°/s²
int joint_num = 2;
float acc = 600;
ret = rm_set_joint_max_acc(robot_handle,joint_num,acc);
```

## 设置关节最小限位`rm_set_joint_min_pos()`

- **方法原型：**

```C
int rm_set_joint_min_pos(rm_robot_handle * handle,int joint_num,float min_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `min_pos`  |    输入参数    |    关节最小位置，单位：°。    |

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
//设置关节1，最小限位度数-178°
int joint_num = 1;                                                        
float joint = -178;                                                        
ret=rm_set_joint_min_pos(robot_handle,joint_num,joint);
```

## 设置关节最大限位`rm_set_joint_max_pos()`

- **方法原型：**

```C
int rm_set_joint_max_pos(rm_robot_handle * handle,int joint_num,float max_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_pos`  |    输入参数    |    关节最大位置，单位：°。    |

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
//设置关节6，最大限位度数360°
int joint_num = 6;
float joint = 360;
ret = rm_set_joint_max_pos(robot_handle,joint_num,joint);
```

## 设置关节最大速度(驱动器)`rm_set_joint_drive_max_speed()`

- **方法原型：**

```C
int rm_set_joint_drive_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_speed`  |    输入参数    |    关节最大速度，单位：°/s。    |

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
// 设置关节驱动器1最大速度180°/s  
int ret = rm_set_joint_drive_max_speed(robot_handle,1,180);
printf("rm_set_joint_drive_max_speed result:%d\n",ret);
```

## 设置关节最大加速度(驱动器)`rm_set_joint_drive_max_acc()`

- **方法原型：**

```C
int rm_set_joint_drive_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_acc`  |    输入参数    |    关节最大加速度，单位：°/s²。    |

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
//设置关节驱动器2最大加速度600°/s²
int joint_num = 2;
float acc = 600;
ret = rm_set_joint_drive_max_speed(robot_handle,joint_num,acc);
```

## 设置关节最小限位(驱动器)`rm_set_joint_drive_min_pos()`

- **方法原型：**

```C
int rm_set_joint_drive_min_pos(rm_robot_handle * handle,int joint_num,float min_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `min_pos`  |    输入参数    |    关节最小位置。    |

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
//设置关节驱动器6，最小限位度数-360°
int joint_num = 6;                                                        
float joint = -360;                                                        
ret=rm_set_joint_drive_min_pos(robot_handle,joint_num,joint);
```

## 设置关节最大限位(驱动器)`rm_set_joint_drive_max_pos()`

- **方法原型：**

```C
int rm_set_joint_drive_max_pos(rm_robot_handle * handle,int joint_num,float max_pos)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `max_pos`  |    输入参数    |    关节最大位置。    |

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
//设置关节驱动器6，最大限位度数360°
int joint_num = 6;
float joint = 360;
ret = rm_set_joint_drive_max_pos(robot_handle,joint_num,joint);
```

## 设置关节最大限位(驱动器)`rm_set_joint_en_state()`

- **方法原型：**

```C
int rm_set_joint_en_state(rm_robot_handle * handle,int joint_num,int en_state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |
|  `en_state`  |    输入参数     |    1：上使能 0：掉使能。    |

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
//设置关节1上使能
int joint_num = 1;                                                         
ret=rm_set_joint_en_state(m_sockhand,joint_num,true,RM_BLOCK);
```

## 设置关节零位`rm_set_joint_zero_pos()`

- **方法原型：**

```C
int rm_set_joint_zero_pos(rm_robot_handle * handle,int joint_num)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |

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
//设置关节3当前位置为零位
int joint_num = 3;                                                         
ret = rm_set_joint_zero_pos(m_sockhand,joint_num); 
```

## 清除关节错误代码`rm_set_joint_clear_err()`

- **方法原型：**

```C
int rm_set_joint_clear_err(rm_robot_handle * handle,int joint_num)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `joint_num`  |    输入参数    |    关节序号。    |

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
//清除关节2错误代码
int joint_num = 2;                                                          
ret=rm_set_joint_clear_err(m_sockhand,joint_num);  
```

## 恢复关节出厂限位`rm_auto_set_joint_limit()`

- **方法原型：**

```C
int rm_auto_set_joint_limit(rm_robot_handle *handle,int limit_mode)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `limit_mode`  |    输入参数    |    1:正式模式，各关节限位为规格参数中的软限位和硬件限位。    |

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
ret = rm_auto_set_joint_limit(robot_handle, 1);
printf("set joint limit result : %d\n", ret);
```
