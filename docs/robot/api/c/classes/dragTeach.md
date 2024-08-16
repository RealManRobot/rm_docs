# <p class="hidden">C、C++: </p>拖动示教配置`dragTeach`

睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。本接口用于拖动示教的启动控制、拖动轨迹复现的控制、力位混合控制等。

## 拖动示教开始`rm_start_drag_teach()`

- **方法原型：**

```C
int rm_start_drag_teach(rm_robot_handle * handle,int trajectory_record)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  trajectory_record  |    输入参数    |    拖动示教时记录轨迹，0-不记录，1-记录轨迹。    |

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
//控制机械臂进入拖动示教模式，拖动示教时记录轨迹
int trajectory_record = 1;
ret = rm_start_drag_teach(robot_handle,trajectory_record);
```

## 拖动示教结束`rm_stop_drag_teach()`

- **方法原型：**

```C
int rm_stop_drag_teach(rm_robot_handle * handle)
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
//退出拖动示教模式
ret = rm_stop_drag_teach(robot_handle);
```

## 开始复合模式拖动示教`rm_start_multi_drag_teach()`

- **方法原型：**

```C
int rm_start_multi_drag_teach(rm_robot_handle * handle,int mode,int singular_wall)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   mode  |    输入参数    |    拖动示教模式 <br>0-电流环模式，<br>1-使用末端六维力，只动位置，<br>2-使用末端六维力，只动姿态，<br>3-使用末端六维力，位置和姿态同时动。    |
|   singular_wall  |    输入参数    |    仅在六维力模式拖动示教中生效，用于指定是否开启拖动奇异墙，<br>0表示关闭拖动奇异墙，<br>1表示开启拖动奇异墙。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注解：可能失败的原因
>
> - 当前机械臂非六维力版本（六维力拖动示教）。
> - 机械臂当前处于 IO 急停状态。
> - 机械臂当前处于仿真模式。
> - 输入参数有误。
> - 使用六维力模式拖动示教时，当前已处于奇异区。

- **使用示例**
  
```C
//使用末端六维力，只动位置，开启拖动奇异墙
int mode = 1;
int singular_wall = 1;
ret = rm_start_multi_drag_teach(robot_handle,mode,singular_wall);
```

## 运动到轨迹起点`rm_drag_trajectory_origin()`

>轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20的速度运动到轨迹起点。

- **方法原型：**

```C
int rm_drag_trajectory_origin(rm_robot_handle * handle,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
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
// 默认当前线程模式为多线程，阻塞运动到轨迹起点
ret = rm_drag_trajectory_origin(robot_handle,1);  
```

## 轨迹复现开始`rm_run_drag_trajectory()`

- **方法原型：**

```C
int rm_run_drag_trajectory(rm_robot_handle * handle,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
>必须在拖动示教结束后才能使用，同时保证机械臂位于拖动示教的起点位置，可调用rm_drag_trajectory_origin接口运动至起点位置。

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
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
// 默认当前线程模式为多线程，阻塞复现拖动示教轨迹
int block = 1;
ret = rm_run_drag_trajectory(robot_handle,block);
```

## 暂停轨迹复现`rm_pause_drag_trajectory()`

>控制机械臂在轨迹复现过程中的暂停。

- **方法原型：**

```C
int rm_pause_drag_trajectory(rm_robot_handle * handle)
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
//轨迹复现暂停
ret = rm_pause_drag_trajectory(robot_handle);
```

## 继续轨迹复现`rm_continue_drag_trajectory()`

>控制机械臂在轨迹复现过程中暂停之后的继续。

- **方法原型：**

```C
int rm_continue_drag_trajectory(rm_robot_handle * handle)
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
//轨迹复现继续
ret = rm_continue_drag_trajectory(robot_handle);
```

## 停止轨迹复现`rm_stop_drag_trajectory()`

>控制机械臂在轨迹复现过程中的停止。

- **方法原型：**

```C
int rm_stop_drag_trajectory(rm_robot_handle * handle)
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
//轨迹复现停止
ret = rm_stop_drag_trajectory(robot_handle);
```

## 保存拖动示教轨迹`rm_save_trajectory()`

- **方法原型：**

```C
int rm_save_trajectory(rm_robot_handle * handle,char * name,int * num)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   name  |    输入参数    |    轨迹要保存的文件路径及名称，长度不超过300个字符，例: d:/rm_test.txt。    |
|   num  |    输出参数    |    轨迹点数。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    文件打开失败。    |
|  -5  |    `int`    |    文件名称截取失败。    |
|  -6  |    `int`    |    获取到的点位解析错误，保存失败。    |

- **使用示例**
  
```C
// 保存拖动示教点位到指定路径
char *name = "/home/realman/work/example.txt";
int num = -1;
ret = rm_save_trajectory(robot_handle, name, &num);
printf("rm_save_trajectory result :%d, num:%d\n", ret, num);
```

## 力位混合控制`rm_set_force_position()`

>在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```C
int rm_set_force_position(rm_robot_handle * handle,int sensor,int mode,int direction,float N)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   sensor  |    输入参数    |    0-一维力；1-六维力。    |
|   mode  |    输入参数    |    0-基坐标系力控；1-工具坐标系力控。    |
|   direction  |    输入参数    |    力控方向；<br>0-沿X轴；<br>1-沿Y轴；<br>2-沿Z轴；<br>3-沿RX姿态方向；<br>4-沿RY姿态方向；<br>5-沿RZ姿态方向。    |
|   N  |    输入参数    |    力的大小，单位N。    |

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
//设置六维力基坐标系Z轴力控，5N力大小     
int sensor = 1;
int mode = 0;
int direction = 2;
float N = 5;                          
ret = rm_set_force_position(robot_handle, sensor, mode, direction, N);
```

## 结束力位混合控制`rm_stop_force_position()`

- **方法原型：**

```C
int rm_stop_force_position(rm_robot_handle * handle)
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
//结束力位混合控制
ret = rm_stop_force_position(robot_handle);
```
