# <p class="hidden">C、C++: </p>全局路点管理`globalWaypointManage`

可用于新增、查询或者更新全局路点。

## 新增全局路点`rm_add_global_waypoint()`

- **方法原型：**

```C
int rm_add_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_waypoint_t](../struct/waypoint)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `waypoint`   |    输入参数    |    新增全局路点参数（无需输入新增全局路点时间）。    |

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
// 新增全局路点p3
rm_waypoint_t waypoint;
strcpy(waypoint.point_name,"p3");
waypoint.joint[0] = 20;
waypoint.joint[1] = 30;
// 剩余关节角度均为 0
for (int i = 2; i < 6; ++i) {
    waypoint.joint[i] = 0.0;
}
// 设置位置姿态
waypoint.pose.position.x = 0.01;
waypoint.pose.position.y = 0.02;
waypoint.pose.position.z = 0.03;
waypoint.pose.euler.rx = 0.1;
waypoint.pose.euler.ry = 0.2;
waypoint.pose.euler.rz = 0.3;
strcpy(waypoint.work_frame, "World");
strcpy(waypoint.tool_frame, "Arm_Tip");
ret = rm_add_global_waypoint(robot_handle, waypoint);
```

## 更新全局路点`rm_update_global_waypoint()`

- **方法原型：**

```C
int rm_update_global_waypoint(rm_robot_handle * handle,rm_waypoint_t waypoint)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_waypoint_t](../struct/waypoint)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `waypoint`   |    输入参数    |    更新全局路点参数（无需输入更新全局路点时间）。    |

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
// 更新全局路点p3
rm_waypoint_t waypoint;
strcpy(waypoint.point_name,"p3");
waypoint.joint[0] = 20;
waypoint.joint[1] = 30;
// 剩余关节角度均为 0
for (int i = 2; i < 6; ++i) {
    waypoint.joint[i] = 0.0;
}
// 设置位置姿态
waypoint.pose.position.x = 0.01;
waypoint.pose.position.y = 0.02;
waypoint.pose.position.z = 0.03;
waypoint.pose.euler.rx = 0.1;
waypoint.pose.euler.ry = 0.2;
waypoint.pose.euler.rz = 0.3;
strcpy(waypoint.work_frame, "World");
strcpy(waypoint.tool_frame, "Arm_Tip");
ret = rm_update_global_waypoint(robot_handle, waypoint);
```

## 删除全局路点`rm_delete_global_waypoint()`

- **方法原型：**

```C
int rm_delete_global_waypoint(rm_robot_handle * handle,const char * point_name)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_waypoint_t](../struct/waypoint)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `point_name`   |    输入参数    |    全局路点名称。    |

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
// 删除全局路点p3
rm_delete_global_waypoint(robot_handle, "p3");
```

## 查询指定全局路点`rm_get_given_global_waypoint()`

- **方法原型：**

```C
int rm_get_given_global_waypoint(rm_robot_handle * handle,const char * name,rm_waypoint_t * point)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_waypoint_t](../struct/waypoint)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `name`   |    输入参数    |    指定全局路点名称。    |
|   `point`   |    输出参数    |    返回指定的全局路点参数。    |

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
// 获取全局路点p3参数
rm_waypoint_t point;
ret = rm_get_given_global_waypoint(robot_handle, "p3", &point);
```

## 查询多个全局路点`rm_get_global_waypoints_list()`

- **方法原型：**

```C
int rm_get_global_waypoints_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_waypoint_list_t * point_list)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_waypoint_t](../struct/waypoint)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `page_num`   |    输入参数    |    页码。    |
|   `page_size`   |    输入参数    |    每页大小。    |
|   `vague_search`   |    输入参数    |    模糊搜索的关键词。    |
|   `point_list`   |    输出参数    |    返回的全局路点列表。    |

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
// 查询第一页10个全局路点信息
rm_waypoint_list_t point_list;
int page_num = 1;
int page_size = 10;
const char *vague_search;
ret = rm_get_global_waypoints_list(robot_handle,page_num,page_size,vague_search,&point_list);
printf("get global waypoints list result : %d\n", ret);
```
