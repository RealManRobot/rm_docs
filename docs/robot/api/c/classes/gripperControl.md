# <p class="hidden">C、C++: </p>末端工具夹爪配置`gripperControl`

睿尔曼机械臂末端支持各种常见夹爪，在系统中适配了因时的 EG2-4C2 夹爪，为了便于用户操作夹爪，机械臂控制器对用户开放了夹爪的控制协议（夹爪控制协议与末端modbus 功能互斥）。本接口用于控制EG2-4C2夹爪的行程、开合、抓取位置、抓取力及读取夹爪状态。

## 设置夹爪行程`rm_set_gripper_route()`

>设置夹爪行程，即夹爪开口的最大值和最小值，设置成功后会自动保存，夹爪断电不丢失。

- **方法原型：**

```C
int rm_set_gripper_route(rm_robot_handle * handle,int min_limit,int max_limit)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `min_limit`  |    输入参数    |    夹爪开口最小值，范围：0~1000，无单位量纲。    |
|  `max_limit`  |    输入参数    |    夹爪开口最大值，范围：0~1000，无单位量纲。    |

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
//设置夹爪开口最小值70，最大值500
int min_limit = 70;
int max_limit = 500;
ret=rm_set_gripper_route(robot_handle,min_limit,max_limit);
```

## 松开夹爪`rm_set_gripper_release()`

>松开夹爪，即夹爪以指定的速度运动到开口最大处。

- **方法原型：**

```C
int rm_set_gripper_release(rm_robot_handle * handle,int speed,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `speed`  |    输入参数    |    夹爪松开速度，范围 1~1000，无单位量纲。    |
|  `block`  |    输入参数    |    true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
|  `timeout`  |    输入参数    |    阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    超时。    |

- **使用示例**
  
```C
//夹爪以500的速度松开，10s无返回则超时
int speed =500;
ret = rm_set_gripper_release(robot_handle, speed, true, 10);
```

## 夹爪力控夹取`rm_set_gripper_pick()`

>夹爪力控夹取，夹爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取。

- **方法原型：**

```C
int rm_set_gripper_pick(rm_robot_handle * handle,int speed,int force,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `speed`  |    输入参数    |    夹爪松开速度，范围 1~1000，无单位量纲。    |
|  `force`  |    输入参数    |    力控阈值，范围：50~1000，无单位量纲。    |
|  `block`  |    输入参数    |    true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
|  `timeout`  |    输入参数    |    阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    超时。    |

- **使用示例**
  
```C
//设置夹取速度为500，力矩阈值200,10s无返回则超时
int speed = 500;
int force = 200;
ret = rm_set_gripper_pick(robot_handle,speed,force,true,10);
```

## 夹爪持续力控夹取`rm_set_gripper_pick_on()`

- **方法原型：**

```C
int rm_set_gripper_pick_on(rm_robot_handle * handle,int speed,int force,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `speed`  |    输入参数    |    夹爪松开速度，范围 1~1000，无单位量纲。    |
|  `force`  |    输入参数    |    力控阈值，范围：50~1000，无单位量纲。    |
|  `block`  |    输入参数    |    true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
|  `timeout`  |    输入参数    |    阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    超时。    |

- **使用示例**
  
```C
//设置夹取速度500，夹取力矩阈值200，10s无返回则超时。
int speed = 500;
int force = 200;
ret =  rm_set_gripper_pick_on(robot_handle,speed,force,true,10);
```

## 设置夹爪达到指定位置`rm_set_gripper_position()`

>夹爪到达指定位置，当当前开口小于指定开口时，夹爪以指定速度松开到指定开口位置；当当前开口大于指定开口时， 夹爪以指定速度和力矩闭合往指定开口处闭合，当夹持力超过力矩阈值或者达到指定位置后，夹爪停止。

- **方法原型：**

```C
int rm_set_gripper_position(rm_robot_handle * handle,int position,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `position`  |    输入参数    |    夹爪开口位置，范围 1~1000，无单位量纲。    |
|  `block`  |    输入参数    |    true 表示阻塞模式，等待控制器返回夹爪到位指令；false 表示非阻塞模式，不接收夹爪到位指令。   |
|  `timeout`  |    输入参数    |    阻塞模式：设置等待夹爪到位超时时间，单位：秒；非阻塞模式：0-发送后立即返回；其他值-接收设置成功指令后返回。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    超时。    |

- **使用示例**
  
```C
//控制夹爪到达500开口度，10s无返回则超时
int position = 500;
ret = rm_set_gripper_position(robot_handle,position,true,10);
```

## 查询夹爪状态`rm_get_gripper_state()`

- **方法原型：**

```C
int rm_get_gripper_state(rm_robot_handle * handle,rm_gripper_state_t * state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_gripper_state_t](../struct/gripperState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `state`  |    输出参数    |    存放夹爪状态结构体。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

>注意：此接口默认不更新数据，从首次控制夹爪开始后，使能更新状态，如果此时控制灵巧手或打开末端modbus功能，将不再更新数据。另外夹爪需要支持最新的固件，方可支持此功能。

- **使用示例**

```C
//获取夹爪状态
rm_gripper_state_t state;
ret = rm_get_gripper_state(handle, &state);
```
