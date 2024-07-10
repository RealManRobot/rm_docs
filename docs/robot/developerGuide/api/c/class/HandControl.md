# 五指灵巧手

睿尔曼机械臂末端配置因时的五指灵巧手，可通过协议对灵巧手进行设置。



## 设置灵巧手目标手势序列号`rm_set_hand_posture()`

- **方法原型：**

```C
int rm_set_hand_posture(rm_robot_handle * handle,int posture_num,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  posture_num  |    `int`    |    预先保存在灵巧手内的手势序号，范围：1~40。    |
|  block  |    `bool`    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |
|   timeout  |    `int`    |    阻塞模式下超时时间设置，单位：秒。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为灵巧手。    |
|  -5  |    `int`    |    超时未返回。    |

- **使用示例**
  
```C
//设置灵巧手阻塞执行1号手势，10秒无返回则超时
int posture_num = 1;
ret = rm_set_hand_posture(robot_handle,posture_num,true,10);
```

## 设置灵巧手动作序列`rm_set_hand_seq()`

- **方法原型：**

```C
int rm_set_hand_seq(rm_robot_handle * handle,int seq_num,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  seq_num  |    `int`    |    预先保存在灵巧手内的动作序号，范围：1~40。    |
|  block  |    `bool`    |    `true`表示阻塞模式，等待灵巧手运动结束后返回；`false`表示非阻塞模式，发送后立即返回。    |
|   timeout  |    `int`    |    阻塞模式下超时时间设置，单位：秒。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为灵巧手。    |
|  -5  |    `int`    |    超时未返回。    |

- **使用示例**
  
```C
//设置灵巧手阻塞执行1号动作序列，15秒无返回则超时
int posture_num = 1;
ret = rm_set_hand_seq(robot_handle,posture_num,true,15);
```

## 设置灵巧手各自由度角度`rm_set_hand_angle()`

>设置灵巧手角度，灵巧手有6个自由度，从1~6分别为小拇指，无名指，中指，食指，大拇指弯曲，大拇指旋转。

- **方法原型：**

```C
int rm_set_hand_angle(rm_robot_handle * handle,const int * hand_angle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  hand_angle  |    `const int`    |    预手指角度数组，范围：0~1000. 另外，-1代表该自由度不执行任何操作，保持当前状态。    |

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
//设置灵巧手各手指动作
const int angle[6]= {-1,100,200,300,400,500};
ret = rm_set_hand_angle(robot_handle,angle);
```

## 设置灵巧手速度`rm_set_hand_speed()`

- **方法原型：**

```C
int rm_set_hand_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  speed  |    `int`    |    手指速度，范围：1~1000。    |

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
//设置灵巧手各手指速度
int speed = 500;
ret = rm_set_hand_speed(robot_handle,speed);
```

## 设置灵巧手力阈值`rm_set_hand_force()`

- **方法原型：**

```C
int rm_set_hand_force(rm_robot_handle * handle,int hand_force)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  hand_force  |    `int`    |    手指力，范围：1~1000。    |

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
//设置灵巧手力阈值500
int force = 500;
ret = rm_set_hand_force(robot_handle,force);
```
