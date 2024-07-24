# 升降机构控制

本接口用于升降机构速度开环控制、位置闭环控制及状态获取。

## 升降机构速度开环控制`rm_set_lift_speed()`

- **方法原型：**

```C
int rm_set_lift_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   speed  |    输入参数    |    速度百分比，-100~100：<br>speed<0：升降机构向下运动;<br>speed>0：升降机构向上运动;<br>speed=0：升降机构停止运动;    |

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
//设置移动平台移动速度50%，向下运动
int speed = -50;
ret = rm_set_lift_speed(robot_handle,speed);
```

## 升降机构位置闭环控制`rm_set_lift_height()`

- **方法原型：**

```C
int rm_set_lift_height(rm_robot_handle * handle,int speed,int height,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   speed  |    输入参数    |    速度百分比，1~100。    |
|   height  |    输入参数    |    目标高度，单位 mm，范围：0~2600。    |
|   block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意：使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为升降机构。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
//设置目标高度100mm，升降速度50%，阻塞运动，默认线程模式为多线程模式
int height = 100;
int speed = 50;
ret = rm_set_lift_height(robot_handle,speed,height,1);
```

## 获取升降机构状态`rm_get_lift_state()`

- **方法原型：**

```C
int rm_get_lift_state(rm_robot_handle * handle,rm_expand_state_t * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_expand_state_t](../struct/expandState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   state   |    输出参数    |    当前升降机构状态。    |

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
// 查询升降机状态
rm_expand_state_t state;
int result = rm_get_lift_state(robot_handle, &state);
```
