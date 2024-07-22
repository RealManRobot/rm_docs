# 末端工具—手爪控制

睿尔曼机械臂末端支持因时机器人公司的 EG2-4C2 手爪，为了便于用户操作手爪，机械臂控制器对用户开放了手爪的控制协议（手爪控制协议与末端modbus 功能互斥）。本接口用于控制EG2-4C2手爪的行程、开合、抓取位置、抓取力及读取手爪状态。

## 设置手爪行程`rm_set_gripper_route()`

>设置手爪行程，即手爪开口的最大值和最小值，设置成功后会自动保存，手爪断电不丢失。

- **方法原型：**

```C
int rm_set_gripper_route(rm_robot_handle * handle,int min_limit,int max_limit)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  min_limit  |    输入参数    |    手爪开口最小值，范围：0~1000，无单位量纲。    |
|  max_limit  |    输入参数    |    手爪开口最大值，范围：0~1000，无单位量纲。    |

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
//设置手爪开口最小值70，最大值500
int min_limit = 70;
int max_limit = 500;
ret=rm_set_gripper_route(robot_handle,min_limit,max_limit);
```

## 松开手爪`rm_set_gripper_release()`

>松开手爪，即手爪以指定的速度运动到开口最大处。

- **方法原型：**

```C
int rm_set_gripper_release(rm_robot_handle * handle,int speed,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输入参数    |    手爪松开速度，范围 1~1000，无单位量纲。    |
|  block  |    输入参数    |    true 表示阻塞模式，false 表示非阻塞模式。    |
|  timeout  |    输入参数    |    阻塞模式下超时时间设置，单位：秒。    |

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
//手爪以500的速度松开，10s无返回则超时
int speed =500;
ret = rm_set_gripper_release(robot_handle, speed, true, 10);
```

## 手爪力控夹取`rm_set_gripper_pick()`

>手爪力控夹取，手爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取。

- **方法原型：**

```C
int rm_set_gripper_pick(rm_robot_handle * handle,int speed,int force,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输入参数    |    手爪松开速度，范围 1~1000，无单位量纲。    |
|  force  |    输入参数    |    力控阈值，范围：50~1000，无单位量纲。    |
|  block  |    输入参数    |    true 表示阻塞模式，false 表示非阻塞模式。    |
|  timeout  |    输入参数    |    阻塞模式下超时时间设置，单位：秒。    |

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

## 手爪持续力控夹取`rm_set_gripper_pick_on()`

- **方法原型：**

```C
int rm_set_gripper_pick_on(rm_robot_handle * handle,int speed,int force,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  speed  |    输入参数    |    手爪松开速度，范围 1~1000，无单位量纲。    |
|  force  |    输入参数    |    力控阈值，范围：50~1000，无单位量纲。    |
|  block  |    输入参数    |    true 表示阻塞模式，false 表示非阻塞模式。    |
|  timeout  |    输入参数    |    阻塞模式下超时时间设置，单位：秒。    |

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

## 设置手爪达到指定位置`rm_set_gripper_position()`

>手爪到达指定位置，当当前开口小于指定开口时，手爪以指定速度松开到指定开口位置；当当前开口大于指定开口时， 手爪以指定速度和力矩闭合往指定开口处闭合，当夹持力超过力矩阈值或者达到指定位置后，手爪停止。

- **方法原型：**

```C
int rm_set_gripper_position(rm_robot_handle * handle,int position,bool block,int timeout)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  position  |    输入参数    |    手爪开口位置，范围 1~1000，无单位量纲。    |
|  block  |    输入参数    |    true 表示阻塞模式，false 表示非阻塞模式。    |
|  timeout  |    输入参数    |    阻塞模式下超时时间设置，单位：秒。    |

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
//控制手爪到达500开口度，10s无返回则超时
int position = 500;
ret = rm_set_gripper_position(robot_handle,position,true,10);
```

## 查询夹爪状态`rm_get_gripper_state()`

- **方法原型：**

```C
int rm_get_gripper_state(rm_robot_handle * handle,rm_gripper_state_t * state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_gripper_state_t](../struct/rm_gripper_state_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  state  |    输出参数    |    存放夹爪状态结构体。    |

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
