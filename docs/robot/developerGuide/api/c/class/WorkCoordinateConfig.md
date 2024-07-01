# 工作坐标系配置

工作坐标系标定、切换、删除、修改、查询等管理。



## 三点法自动设置工作坐标系`rm_set_auto_work_frame()`

- **方法原型：**

```C
int rm_set_auto_work_frame(rm_robot_handle * handle,const char * workname,int point_num)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  workname  |    `const char`    |    工作坐标系名称，不能超过十个字节。    |
|  point_num  |    `int`    |    1~3代表3个标定点，依次为原点、X轴一点、Y轴一点，4代表生成坐标系。    |

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

## 手动设置工作坐标系`rm_set_manual_work_frame()`

- **方法原型：**

```C
int rm_set_manual_work_frame(rm_robot_handle * handle,const char * work_name,rm_pose_t pose)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  work_name  |    `const char`    |    工作坐标系名称，不能超过十个字节。    |
|  pose  |    `/`    |    新工作坐标系相对于基坐标系的位姿。    |

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

## 切换当前工作坐标系`rm_change_work_frame()`

- **方法原型：**

```C
int rm_change_work_frame(rm_robot_handle * handle,const char * work_name)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  work_name  |    `const char`    |    目标工作坐标系名称。    |

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

## 删除指定工作坐标系`rm_delete_work_frame()`

- **方法原型：**

```C
int rm_delete_work_frame(rm_robot_handle * handle,const char * work_name)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  work_name  |    `const char`    |    要删除的工作坐标系名称。    |

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

## 修改指定工作坐标系`rm_update_work_frame()`

- **方法原型：**

```C
int rm_update_work_frame(rm_robot_handle * handle,const char * work_name,rm_pose_t pose)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  work_name  |    `const char`    |    工作坐标系名称，不能超过十个字节。    |
|  pose  |    `/`    |    新工作坐标系相对于基坐标系的位姿。    |

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

## 获取所有坐标系名称`rm_get_total_work_frame()`

- **方法原型：**

```C
int rm_get_total_work_frame(rm_robot_handle * handle,rm_frame_name_t * frame_names,int * len)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_name_t](../struct/rm_frame_name_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  frame_names  |    `/`    |    存放返回的工作坐标系名称字符数组。    |
|  len  |    `int`    |    存放返回的工作坐标系名称长度。    |

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

## 获取指定工作坐标系`rm_get_given_work_frame()`

- **方法原型：**

```C
int rm_get_given_work_frame(rm_robot_handle * handle,const char * name,rm_pose_t * pose)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_pose_t](../struct/rm_pose_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  name  |    `const char`    |    指定的工作坐标系名称。    |
|  pose  |    `/`    |    存放返回的位姿。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    1.数据接收失败，通信过程中出现问题或者控制器超时没有返回；2.查询的工具坐标系不存在。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C

```

## 获取当前工作坐标系`rm_get_current_work_frame()`

- **方法原型：**

```C
int rm_get_current_work_frame(rm_robot_handle * handle,rm_frame_t * work_frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |   机械臂控制句柄 。    |
|  work_frame  |    `const char`    |    存放返回的坐标系。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    1.数据接收失败，通信过程中出现问题或者控制器超时没有返回；2.查询的工具坐标系不存在。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C

```
