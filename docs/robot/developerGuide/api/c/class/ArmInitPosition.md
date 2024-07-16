# 初始位置设置

记录机械臂初始位置

## 设置机械臂的初始位置角度`rm_set_init_pose()`

- **方法原型：**

```C
int rm_set_init_pose(rm_robot_handle * handle,float * joint)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  joint  |    `/`    |    机械臂初始位置关节角度数组。    |

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
// 定义一个包含关节角度的数组（6轴机械臂）  
float joint_angles[6] = {0.1, -0.3, 1.5, 2.7, -1.2, 0.8};  

// 调用函数设置初始姿态  
int result = rm_set_init_pose(robot_handle, joint_angles);  
if (result == 0) { 
    printf("Initial pose set successfully.\n");  
} else {  
    printf("Failed to set initial pose. Error code: %d\n", result);  
} 
```

## 获取机械臂初始位置角度`rm_get_init_pose()`

- **方法原型：**

```C
int rm_get_init_pose(rm_robot_handle * handle,float * joint)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    `/`    |    机械臂句柄。    |
|  joint  |    `/`    |    存放机械臂初始位置关节角度数组。    |

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
float joint_angles[6];  
// 调用函数获取初始姿态  
int result = rm_get_init_pose(robot_handle, joint_angles);  
if (result == 0) { 
    printf("Initial pose retrieved successfully.\n");  
    // 打印关节角度或位置 
    for (int i = 0; i < 6; i++) {  
        printf("Joint %d: %.2f\n", i + 1, joint_angles[i]);  
    }  
} else {  
    printf("Failed to retrieve initial pose.\n");  
}  
```
