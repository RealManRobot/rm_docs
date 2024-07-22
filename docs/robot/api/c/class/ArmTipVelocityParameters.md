# 机械臂末端运动参数配置

机械臂末端运动参数设置及查询，包含线速度设置与查询、角速度设置与查询、角加速度设置与查询、碰撞等级设置与查询等。

## 设置机械臂末端最大线速度`rm_set_arm_max_line_speed()`

- **方法原型：**

```C
int rm_set_arm_max_line_speed(rm_robot_handle * handle,float speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输入参数    |    末端最大线速度，单位m/s。    |

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
//设置机械臂末端最大线速度0.1m/s
float speed = 0.1;
ret = rm_set_arm_max_line_speed(robot_handle,speed);
```

## 设置机械臂末端最大线加速度`rm_set_arm_max_line_acc()`

- **方法原型：**

```C
int rm_set_arm_max_line_acc(rm_robot_handle * handle,float acc)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  acc  |    输入参数    |    末端最大线加速度，单位m/s^2。    |

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
//设置机械臂末端最大线加速度2m/s²
float acc = 2;
ret = rm_set_arm_max_line_acc(robot_handle,acc);
```

## 设置机械臂末端最大角速度`rm_set_arm_max_angular_speed()`

- **方法原型：**

```C
int rm_set_arm_max_angular_speed(rm_robot_handle * handle,float speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输入参数    |    末端最大角速度，单位rad/s。    |

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
//设置机械臂末端最大角速度0.2rad/s
float speed = 0.2;
ret=rm_set_arm_max_angular_speed(robot_handle,speed);
```

## 设置机械臂末端最大角加速度`rm_set_arm_max_angular_acc()`

- **方法原型：**

```C
int rm_set_arm_max_angular_acc(rm_robot_handle * handle,float acc)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  acc  |    输入参数    |    末端最大角加速度，单位rad/s^2。    |

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
//设置机械臂末端最大角加速度4rad/s²
float acc = 4;
ret = rm_set_arm_max_angular_acc(robot_handle,acc);
```

## 设置机械臂末端参数为默认值`rm_set_arm_tcp_init()`

- **方法原型：**

```C
int rm_set_arm_tcp_init(rm_robot_handle * handle)
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
//初始化机械臂参数，机械臂的末端参数回复到默认值。默认参数为：
// 末端线速度：0.1m/s末端线加速度：0.5m/s²
// 末端角速度：0.2rad/s末端角加速度：1rad/s²
ret = rm_set_arm_tcp_init(robot_handle);
```

## 设置机械臂动力学碰撞检测等级`rm_set_collision_state()`

- **方法原型：**

```C
int rm_set_collision_state(rm_robot_handle * handle,int collision_stage)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  collision_stage  |    输入参数    |    等级：0~8，0-无碰撞检测，8-碰撞检测最灵敏。    |

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
//设置机械臂碰撞防护等级为1
int stage = 1;
ret=rm_set_collision_state(robot_handle,stage,RM_BLOCK);
```

## 查询碰撞防护等级`rm_get_collision_stage()`

- **方法原型：**

```C
int rm_get_collision_stage(rm_robot_handle * handle,int * collision_stage)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  collision_stage  |    输出参数    |    存放返回的碰撞等级值的变量，数据为0-8，0-无碰撞检测，8-碰撞检测最灵敏。    |

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
//查询机械臂动力学碰撞等级
int stage = -1;
ret = rm_get_collision_stage(robot_handle,&stage);
```

## 获取机械臂末端最大线速度`rm_get_arm_max_line_speed()`

- **方法原型：**

```C
int rm_get_arm_max_line_speed(rm_robot_handle * handle,float * speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输出参数    |    存放返回的末端最大线速度值的变量，单位m/s。    |

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
//获取机械臂末端线速度
float speed = 0;                                                              
ret = rm_get_arm_max_line_speed(robot_handle,&speed);
```

## 获取机械臂末端最大线加速度`rm_get_arm_max_line_acc()`

- **方法原型：**

```C
int rm_get_arm_max_line_acc(rm_robot_handle * handle,float * acc)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  acc  |    输出参数    |    存放返回的末端最大线加速度值的变量，单位m/s^2。    |

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
//获取机械臂末端线加速度
float acc = 0;                                                            
ret = rm_get_arm_max_line_acc(robot_handle,&acc);      
```

## 获取机械臂末端最大角速度`rm_get_arm_max_angular_speed()`

- **方法原型：**

```C
int rm_get_arm_max_angular_speed(rm_robot_handle * handle,float * speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输出参数    |    存放返回的末端末端最大角速度值的变量，单位rad/s。    |

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
//获取机械臂末端角速度
float speed = 0;
ret = rm_get_arm_max_angular_speed(robot_handle,&speed);
```

## 获取机械臂末端最大角加速度`rm_get_arm_max_angular_acc()`

- **方法原型：**

```C
int rm_get_arm_max_angular_speed(rm_robot_handle * handle,float * speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  acc  |    输出参数    |    存放返回的末端最大角加速度值的变量，单位rad/s^2。    |

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
//获取末端角加速度
float acc = 0;
ret = rm_get_arm_max_angular_speed(robot_handle,&acc);
```
