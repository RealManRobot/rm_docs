# <p class="hidden">C、C++: </p>在线编程配置`projectManagement`

本接口包含在线编程文件下发、在线编程文件管理、全局路点管理等相关功能接口。

## 文件下发`rm_send_project()`

- **方法原型：**

```C
int rm_send_project(rm_robot_handle * handle,rm_send_project_t project,int * errline)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_send_project_t](../struct/sendProject)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `project`  |    输入参数    |    文件下发参数配置结构体。    |
|   `errline`  |    输入参数    |    若运行失败，该参数返回有问题的工程行数，err_line 为 0，则代表校验数据长度不对，err_line 为 -1，则代表无错误。    |

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
// 将文件保存到控制器，保存id为10，并以20%的速度运行在线编程文件
rm_send_project_t project;
int errline;
strcpy(project.project_path, "/home/work/realman.txt");
project.plan_speed = 20;
project.only_save = 0;
project.save_id = 10;
project.project_path_len = strlen(project.project_path);
ret = rm_send_project(robot_handle, project, &errline);
printf("send project result: %d, err_line: %d\n", ret, errline);
```

## 轨迹规划中改变速度比例系数`rm_set_plan_speed()`

- **方法原型：**

```C
int rm_set_plan_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_send_project_t](../struct/sendProject)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `speed`  |    输入参数    |    当前进度条的速度数据。    |

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
int speed = 20;
ret = rm_set_plan_speed(robot_handle,speed);
```

## 获取在线编程列表`rm_get_program_trajectory_list()`

- **方法原型：**

```C
int rm_get_program_trajectory_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_program_trajectorys_t * trajectorys)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_program_trajectorys_t](../struct/programTrajectorys)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `page_num`  |    输入参数    |    页码。    |
|   `page_size`  |    输入参数    |    每页大小。    |
|   `vague_search`  |    输入参数    |    模糊搜索的关键词。    |
|   `trajectorys`  |    输出参数    |    在线编程程序列表。    |

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
// 查询第1页10个在线编程文件
int page_num = 1;
int page_size = 10;
const char *vague_search;
rm_program_trajectorys_t program_trajectorys;
int result = rm_get_program_trajectory_list(robot_handle, page_num, page_size, vague_search, &program_trajectorys);
printf("rm_get_program_trajectory_list result : %d\n", result);
```

## 开始运行指定编号轨迹`rm_set_program_id_run()`

- **方法原型：**

```C
int rm_set_program_id_run(rm_robot_handle * handle,int id,int speed,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`  |    输入参数    |    页码。    |
|   `speed`  |    输入参数    |    1-100，需要运行轨迹的速度，若设置为0，则按照存储的速度运行。    |
|   `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

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
// 以默认速度运行id为1的在线编程文件，阻塞运行（默认线程模式为多线程）
ret = rm_set_program_id_run(robot_handle, 1, 0, 1);
printf("rm_set_program_id_run result :%d\n", ret);
```

## 查询在线编程运行状态`rm_get_program_run_state()`

- **方法原型：**

```C
int rm_get_program_run_state(rm_robot_handle * handle,rm_program_run_state_t * run_state)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_program_run_state_t](../struct/programRunState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `run_state`   |    输出参数    |    在线编程运行状态结构体。    |

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
rm_program_run_state_t state;
ret = rm_get_program_run_state(robot_handle, &state);
```

## 删除指定编号轨迹`rm_delete_program_trajectory()`

- **方法原型：**

```C
int rm_delete_program_trajectory(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_program_run_state_t](../struct/programRunState)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    指定轨迹的ID。    |

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
// 删除编号50的在线编程文件
ret = rm_delete_program_trajectory(robot_handle, 50);
printf("delete program trajectory result : %d\n", ret);
```

## 修改指定编号的轨迹信息`rm_update_program_trajectory()`

- **方法原型：**

```C
int rm_update_program_trajectory(rm_robot_handle * handle,int id,int speed,const char * name)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    指定在线编程轨迹编号。    |
|   `speed`   |    输入参数    |    更新后的规划速度比例 1-100。    |
|   `name`   |    输入参数    |    更新后的文件名称。    |

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
// 更新编号1的在线编程文件，规划速度为50%，文件名称为“test”
ret = rm_update_program_trajectory(robot_handle,1,50,"test");
printf("update program trajectory result : %d\n", ret);
```

## 设置IO默认运行编号`rm_set_default_run_program()`

- **方法原型：**

```C
int rm_set_default_run_program(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

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
// 设置 IO 默认运行的在线编程文件编号为1
int ret = -1;
ret = rm_set_default_run_program(robot_handle, 1);
```

## 获取IO默认运行编号`rm_get_default_run_program()`

- **方法原型：**

```C
int rm_get_default_run_program(rm_robot_handle * handle,int * id)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输出参数    |    存储 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

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
int id;
ret = rm_get_default_run_program(robot_handle, id);
```
