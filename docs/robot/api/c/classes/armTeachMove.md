# <p class="hidden">C、C++: </p>机械臂示教指令`armTeachMove`

机械臂示教控制相关指令，如关节、位置、姿态的步进和示教控制。

## 关节步进`rm_set_joint_step()`

- **方法原型：**

```C
int rm_set_joint_step(rm_robot_handle * handle,int joint_num,float step,int v,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  joint_num  |    输入参数    |    关节序号，1~7。    |
|  step  |    输入参数    |    步进的角度。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
// 默认当前线程模式为多线程，使用阻塞模式，以50%的速度使关节1正向运动10°
rm_set_joint_step(robot_handle, 1, 10, 50, 1); 
```

## 位置步进`rm_set_pos_step()`

>当前工作坐标系下，位置步进。

- **方法原型：**

```C
int rm_set_pos_step(rm_robot_handle * handle,rm_pos_teach_type_e type,float step,int v,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
*可以跳转[rm_pos_teach_type_e](../type/typeList#rm-pos-teach-type-e位置示教方向)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  type  |    输入参数    |    示教类型。    |
|  step  |    输入参数    |    步进的距离，单位m，精确到0.001mm。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

>注意：参考坐标系默认为当前工作坐标系，可调用`rm_set_teach_frame`修改为工具坐标系。

- **使用示例**
  
```C
// 默认当前线程模式为多线程，阻塞模式，沿当前工作坐标系X轴正方向步进0.05m
rm_set_pos_step(robot_handle, RM_X_DIR_E, 0.05f, 50, 1);  
```

## 姿态步进`rm_set_ort_step()`

>当前工作坐标系下，姿态步进。

- **方法原型：**

```C
int rm_set_ort_step(rm_robot_handle * handle,rm-ort-teach-type-e type,float step,int v,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
*可以跳转[rm-ort-teach-type-e](../type/typeList#rm-ort-teach-type-e姿态示教方向)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  type  |    输入参数    |    示教类型。    |
|  step  |    输入参数    |    步进的弧度，单位rad，精确到0.001rad。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

>注意：参考坐标系默认为当前工作坐标系，可调用`rm_set_teach_frame`修改为工具坐标系。

- **使用示例**
  
```C
// 默认当前线程模式为多线程，阻塞模式，绕 x 轴负方向旋转 0.5rad，速度 20%
rm_set_ort_step(robot_handle, RM_RX_ROTATE_E, -0.5f, 20, 1); 
```

## 切换示教运动坐标系`rm_set_teach_frame()`

- **方法原型：**

```C
int rm_set_teach_frame(rm_robot_handle * handle,int frame_type)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*
*可以跳转[rm-ort-teach-type-e](../type/typeList#rm-ort-teach-type-e姿态示教方向)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  frame_type  |    输入参数    |    0: 工作坐标系运动, 1: 工具坐标系运动。    |

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
// 设置示教坐标系为工具坐标系  
if (rm_set_teach_frame(robot_handle, 1) == 0) {  
    printf("Teach Frame set successfully\n");
} else {  
    printf("Failed to get teach frame\n");  
} 
```

## 获取示教参考坐标系`rm_get_teach_frame()`

- **方法原型：**

```C
int rm_get_teach_frame(rm_robot_handle * handle,int frame_type)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*
*可以跳转[rm-ort-teach-type-e](../type/typeList.md#rm-ort-teach-type-e姿态示教方向)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  frame_type  |    输入参数    |    0: 工作坐标系运动, 1: 工具坐标系运动。    |

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
// 获取当前示教坐标系 
int frame_type = -1;  
if (rm_get_teach_frame(&handle, &frame_type) == 0) {  
    printf("Current teach frame: %d\n", frame_type);
} else {  
    printf("Failed to get teach frame\n");  
} 
```

## 关节示教`rm_set_joint_teach()`

- **方法原型：**

```C
int rm_set_joint_teach(rm_robot_handle * handle,int joint_num,int direction,int v)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  joint_num  |    输入参数    |    示教关节的序号，1~7。    |
|  direction  |    输入参数    |    示教方向，0-负方向，1-正方向。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |

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
// 关节1以50%的速度正向示教
rm_set_joint_teach(robot_handle, 1, 1, 50);
```

## 笛卡尔空间位置示教`rm_set_pos_teach()`

>当前工作坐标系下，笛卡尔空间位置示教。

- **方法原型：**

```C
int rm_set_pos_teach(rm_robot_handle * handle,rm_pos_teach_type_e type,int direction,int v)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pos_teach_type_e](/robot/api/c/type/typeList#rm-pos-teach-type-e位置示教方向)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  type  |    输入参数    |    示教类型。    |
|  direction  |    输入参数    |    示教方向，0-负方向，1-正方向。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：参考坐标系默认为当前工作坐标系，可调用`rm_set_teach_frame`修改为工具坐标系。

- **使用示例**
  
```C
// 沿当前工作坐标系X轴正方向示教，速度50%
rm_set_pos_teach(robot_handle, RM_X_DIR_E, 1, 50);
```

## 笛卡尔空间姿态示教`rm_set_ort_teach()`

>当前工作坐标系下，笛卡尔空间姿态示教。

- **方法原型：**

```C
int rm_set_ort_teach(rm_robot_handle * handle,rm-ort-teach-type-e type,int direction,int v)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
*可以跳转[rm-ort-teach-type-e](../type/typeList.md#rm-ort-teach-type-e姿态示教方向)查阅枚举类型详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  type  |    输入参数    |    示教类型。    |
|  direction  |    输入参数    |    示教方向，0-负方向，1-正方向。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：参考坐标系默认为当前工作坐标系，可调用`rm_set_teach_frame`修改为工具坐标系。

- **使用示例**
  
```C
// 阻塞模式姿态示教，绕x 轴负方向旋转,速度 20%
rm_set_ort_teach(robot_handle, RM_RX_ROTATE_E, 0, 20);
```

## 示教停止`rm_set_stop_teach()`

- **方法原型：**

```C
int rm_set_stop_teach(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

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
// 停止示教  
if (rm_set_stop_teach(robot_handle) == 0) {  
    printf("Teach stop successfully\n");
} else {  
    printf("Failed to stop teach\n");  
} 
```
