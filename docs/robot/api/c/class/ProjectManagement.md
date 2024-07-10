# 在线编程

包含在线编程文件下发、在线编程文件管理、全局路点管理等相关功能接口。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 文件下发`rm_send_project()`

- **方法原型：**

```C
int rm_send_project(rm_robot_handle * handle,rm_send_project_t project,int * errline)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_send_project_t](../struct/rm_send_project_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   project  |    `/`    |    文件下发参数配置结构体。    |
|   errline  |    `int`    |    若运行失败，该参数返回有问题的工程行数，err_line 为 0，则代表校验数据长度不对，err_line 为 -1，则代表无错误。    |

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

## 轨迹规划中改变速度比例系数`rm_set_plan_speed()`

- **方法原型：**

```C
int rm_set_plan_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_send_project_t](../struct/rm_send_project_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   speed  |    `int`    |    当前进度条的速度数据。    |

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

## 获取在线编程列表`rm_get_program_trajectory_list()`

- **方法原型：**

```C
int rm_get_program_trajectory_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_program_trajectorys_t * trajectorys)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_program_trajectorys_t](../struct/rm_program_trajectorys_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   page_num  |    `int`    |    页码。    |
|   page_size  |    `int`    |    每页大小。    |
|   vague_search  |    `int`    |    模糊搜索。    |
|   trajectorys  |    `int`    |    在线编程程序列表。    |

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

## 开始运行指定编号轨迹`rm_set_program_id_run()`

- **方法原型：**

```C
int rm_set_program_id_run(rm_robot_handle * handle,int id,int speed,int block)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   id  |    `int`    |    页码。    |
|   speed  |    `int`    |    1-100，需要运行轨迹的速度，若设置为0，则按照存储的速度运行。    |
|   block  |    `int`    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意：使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    运行状态已停止但未接收到运行成功，是否在外部停止了轨迹。    |

- **使用示例**
  
```C

```

## 查询在线编程运行状态`rm_get_program_run_state()`

- **方法原型：**

```C
int rm_get_program_run_state(rm_robot_handle * handle,rm_program_run_state_t * run_state)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_program_run_state_t](../struct/rm_program_run_state_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   run_state   |    `/`    |    在线编程运行状态结构体。    |

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

## 删除指定编号轨迹`rm_delete_program_trajectory()`

- **方法原型：**

```C
int rm_delete_program_trajectory(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_program_run_state_t](../struct/rm_program_run_state_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   id   |    `/`    |    指定轨迹的ID。    |

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

## 修改指定编号的轨迹信息`rm_update_program_trajectory()`

- **方法原型：**

```C
int rm_update_program_trajectory(rm_robot_handle * handle,int id,int speed,const char * name)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   id   |    `int`    |    指定在线编程轨迹编号。    |
|   speed   |    `int`    |    更新后的规划速度比例 1-100。    |
|   name   |    `const char`    |    更新后的文件名称。    |

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

## 设置IO默认运行编号`rm_set_default_run_program()`

- **方法原型：**

```C
int rm_set_default_run_program(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   id   |    `int`    |    设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

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

## 获取IO默认运行编号`rm_get_default_run_program()`

- **方法原型：**

```C
int rm_get_default_run_program(rm_robot_handle * handle,int * id)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   id   |    `int`    |    存储 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

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

## 新增全局路点`rm_add_global_waypoint()`

- **方法原型：**

```C
int rm_add_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_waypoint_t](../struct/rm_waypoint_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   waypoint   |    `int`    |    新增全局路点参数（无需输入新增全局路点时间）。    |

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

## 更新全局路点`rm_update_global_waypoint()`

- **方法原型：**

```C
int rm_update_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_waypoint_t](../struct/rm_waypoint_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   waypoint   |    `int`    |    更新全局路点参数（无需输入更新全局路点时间）。    |

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

## 删除全局路点`rm_delete_global_waypoint()`

- **方法原型：**

```C
int rm_delete_global_waypoint(rm_robot_handle * handle,const char * point_name)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_waypoint_t](../struct/rm_waypoint_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   point_name   |    `const char`    |    全局路点名称。    |

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

## 查询指定全局路点`rm_get_given_global_waypoint()`

- **方法原型：**

```C
int rm_get_given_global_waypoint(rm_robot_handle * handle,const char * name,rm_waypoint_t * point)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_waypoint_t](../struct/rm_waypoint_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   name   |    `const char`    |    指定全局路点名称。    |
|   point   |    `/`    |    返回指定的全局路点参数。    |

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

## 查询多个全局路点`rm_get_global_waypoints_list()`

- **方法原型：**

```C
int rm_get_global_waypoints_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_waypoint_list_t * point_list)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_waypoint_t](../struct/rm_waypoint_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|   page_num   |    `int`    |    页码。    |
|   page_size   |    `int`    |    每页大小。    |
|   vague_search   |    `const char`    |    模糊搜索。    |
|   point_list   |    `/`    |    返回的全局路点列表。    |

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
