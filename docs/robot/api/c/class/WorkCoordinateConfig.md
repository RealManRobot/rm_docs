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
// 工作坐标系的名称  
const char *workname = "Work1";  

int point_num = 1; // 标定当前位置为工作坐标系原点  

// 调用函数设置自动工作坐标系  
int result = rm_set_auto_work_frame(robot_handle, workname, point_num);  
if (result == 0) {
    printf("Successfully set auto work frame '%s' with point number %d.\n", workname, point_num);  
} else {  
    printf("Failed to set auto work frame '%s'.\n", workname);  
}  
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
// 定义工作名称和位置姿态  
const char *work_name = "Work2";  
rm_pose_t pose; 
pose.position.x = 0.1f;
pose.position.y = 0.0f;
pose.position.z = 0.0f;
pose.euler.rx = 0.0f;
pose.euler.ry = 0.0f;
pose.euler.rz = 0.0f;

// 调用函数设置工作框架  
int result = rm_set_manual_work_frame(handle, work_name, pose);  

// 检查结果  
if (result == 0) {  
    printf("Successfully set work frame '%s'.\n", work_name);  
} else {  
    printf("Failed to set work frame '%s'.\n", work_name);
}  
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
// 坐标系名称，应该与已经设置的工作坐标系名称之一相匹配  
const char *work_name = "Work1";  

// 调用函数更改当前工作坐标系  
int result = rm_change_work_frame(robot_handle, work_name);  
if (result == 0) {  
    printf("Successfully changed to work frame '%s'\n", work_name);  
} else {  
    printf("Failed to change to work frame '%s'. Error code: %d\n", work_name, result);  
}
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
// 指定要删除的坐标系名称，应该与已经设置的工作坐标系名称之一相匹配  
const char *delete_name = "Work1";  

// 调用函数删除指定工作坐标系  
int result = rm_delete_work_frame(robot_handle, delete_name);  
if (result == 0) {  
    printf("Successfully delete work frame '%s'\n", delete_name);  
} else {  
    printf("Failed to delete work frame '%s'. Error code: %d\n", delete_name, result);  
}
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
// 指定要删除的坐标系名称，应该与已经设置的工作坐标系名称之一相匹配  
const char *work_name = "Work2";  
rm_pose_t new_pose = {
        .position = {0.1, 0.1, 0.1},
        .euler = {0.0, 0.0, 0.0}
};
int result = rm_update_work_frame(robot_handle, work_name, new_pose);  
if (result == 0) {  
    printf("Work frame '%s' update successfully\n", work_name);  
} else {  
    printf("Failed to update Work frame '%s'. Error code: %d\n", work_name, result);  
}
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
rm_frame_name_t frame_names[10]; // 最多十个工作坐标系  
int len = -1;  

int result = rm_get_total_work_frame(robot_handle, frame_names, &len);  

if (result == 0) {  
    printf("Total work frames: %d\n", len);  
    for (int i = 0; i < len; i++) {  
        printf("Frame %d: %s\n", i, frame_names[i]);  
    }  
}
else{
    printf("Failed to get total work frames. Error code: %d\n", result)
}
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
rm_pose_t work_pose;
const char *given_name = "Work2";
result = rm_get_given_work_frame(robot_handle, given_name, &work_pose);
if (result == 0) {  
    printf("Successfully get work frame '%s'\n", tool_frame.frame_name);
}  else {  
    printf("Failed to get work frame '%s'. Error code: %d\n", tool_frame.frame_name, result);  
}
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
rm_frame_t work_frame;
result = rm_get_current_work_frame(robot_handle, &work_frame);
if (result == 0) {  
    printf("current work frame name : %s\n", work_frame.frame_name);
}  else {  
    printf("Failed to get current work frame. Error code: %d\n", result);  
}
```
