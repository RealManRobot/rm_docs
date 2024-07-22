# 关节配置

对机械臂的关节参数进行设置，如速度、加速度、限位、零位、关节报错信息等。
如果关节发生错误，则无法修改关节参数，必须先清除关节错误代码。另外设置关节之前， 必须先将关节掉使能，否则会设置不成功。
关节所有参数在修改完成后，会自动保存到关节 Flash，立即生效，之后关节处于掉使能状态，修改完参数后必须发送指令控制关节上使能。



## 设置关节最大速度`rm_set_joint_max_speed()`

- **方法原型：**

```C
int rm_set_joint_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_speed  |    用户输入    |    关节最大速度，单位：°/s。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_acc  |    用户输入    |    关节最大加速度，单位：°/s²。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  min_pos  |    用户输入    |    关节最小位置，单位：°。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_pos  |    用户输入    |    关节最大位置，单位：°。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_speed  |    用户输入    |    关节最大速度，单位：°/s。    |

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

## 设置关节最大加速度(硬件)`rm_set_joint_drive_max_acc()`

- **方法原型：**

```C
int rm_set_joint_drive_max_speed(rm_robot_handle * handle,int joint_num,float max_speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_acc  |    用户输入    |    关节最大加速度，单位：°/s²。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  min_pos  |    用户输入    |    关节最小位置。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  max_pos  |    用户输入    |    关节最大位置。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |
|  en_state  |    用户输入     |    1：上使能 0：掉使能。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  joint_num  |    用户输入    |    关节序号。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  limit_mode  |    用户输入    |    1:正式模式，各关节限位为规格参数中的软限位和硬件限位。    |

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

## 查询关节最大速度`rm_get_joint_max_speed()`

- **方法原型：**

```C
int rm_get_joint_max_speed(rm_robot_handle * handle,float * max_speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_speed  |    用户输入    |    关节1~7转速数组，单位：°/s。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_acc  |    用户输入    |    关节1~7加速度数组，单位：°/s。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  min_pos  |    用户输入    |    关节1~7最小位置数组，单位：°。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_pos  |    用户输入    |    关节1~7最大位置数组，单位：°。    |

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

## 查询关节(硬件)最大速度`rm_get_joint_drive_max_speed()`

- **方法原型：**

```C
int rm_get_joint_drive_max_speed(rm_robot_handle * handle,float * max_speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_speed  |    用户输入    |    关节1~7转速数组，单位：°/s。    |

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

## 查询关节(驱动器)最大加速度`rm_get_joint_drive_max_acc()`

- **方法原型：**

```C
int rm_get_joint_drive_max_acc(rm_robot_handle * handle,float * max_acc)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_acc  |    用户输入    |    关节1~7加速度数组，单位：°/s。    |

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

## 查询关节(驱动器)最小限位`rm_get_joint_drive_min_pos()`

- **方法原型：**

```C
int rm_get_joint_drive_min_pos(rm_robot_handle * handle,float * min_pos)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  min_pos  |    用户输入    |    关节1~7最小位置数组，单位：°。    |

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

## 查询关节(驱动器)最大限位`rm_get_joint_drive_max_pos()`

- **方法原型：**

```C
int rm_get_joint_drive_max_pos(rm_robot_handle * handle,float * max_pos)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  max_pos  |    用户输入    |    关节1~7最大位置数组，单位：°。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  en_state  |    用户输入    |    关节1~7使能状态数组，1-使能状态，0-掉使能状态。    |

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

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  err_flag  |    用户输入    |    反馈关节错误代码，错误码请参见[机械臂错误码查询](../eeorList.md)。    |
|  brake_state  |    用户输入    |    反馈关节抱闸状态，1 代表抱闸未打开，0 代表抱闸已打开。    |

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
