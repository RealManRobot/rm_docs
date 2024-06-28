# 机械臂运动控制指令类

控制运动的急停、缓停、暂停、继续、清除轨迹以及查询当前规划类型。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 轨迹缓停`rm_set_arm_slow_stop()`

>在当前正在运行的轨迹上停止。

- **方法原型：**

```C
int rm_set_arm_slow_stop(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 轨迹急停`rm_set_arm_stop()`

>关节最快速度停止，轨迹不可恢复。

- **方法原型：**

```C
int rm_set_arm_stop(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 轨迹暂停`rm_set_arm_pause()`

>暂停在规划轨迹上，轨迹可恢复。

- **方法原型：**

```C
int rm_set_arm_pause(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 暂停后继续轨迹运动`rm_set_arm_continue()`

- **方法原型：**

```C
int rm_set_arm_continue(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 清除当前轨迹`rm_set_delete_current_trajectory()`

- **方法原型：**

```C
int rm_set_delete_current_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

>注意：必须在暂停后使用，否则机械臂会发生意外！！！！

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 清除所有轨迹`rm_set_arm_delete_trajectory()`

- **方法原型：**

```C
int rm_set_arm_delete_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

>注意：必须在暂停后使用，否则机械臂会发生意外！！！！

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |

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

```

## 获取当前正在规划的轨迹信息`rm_get_arm_current_trajectory()`

- **方法原型：**

```C
int rm_get_arm_current_trajectory(rm_robot_handle * handle,rm_arm_current_trajectory_e * type,float * data)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_arm_current_trajectory_e](../struct/rm_arm_current_trajectory_e.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   type  |    `/`    |    返回的规划类型。    |
|   data  |    `float`    |    无规划和关节空间规划为当前关节1~7角度数组；笛卡尔空间规划则为当前末端位姿。    |

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

```
