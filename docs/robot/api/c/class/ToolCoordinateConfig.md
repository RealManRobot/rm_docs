# 工具坐标系配置

工具坐标系标定、切换、删除、修改、查询及工具包络参数等配置。

## 六点法自动设置工具坐标系-标记点位`rm_set_auto_tool_frame()`

- **方法原型：**

```C
int rm_set_auto_tool_frame(rm_robot_handle * handle,int point_num)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  point_num  |    用户输入    |    1~6代表6个标定点。    |

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
int point_num = 1; // 设置当前位置为第一个标定点  
  
 // 设置当前位置为第一个标定点   
ret = rm_set_auto_tool_frame(robot_handle, point_num);  
if (ret == 0) {  
    // 设置成功  
    printf("Auto tool frame set successfully with point number: %d\n", point_num);  
} else {  
    // 设置失败
    printf("Failed to set auto tool frame. Error code: %d\n", result);  
}
```

## 六点法自动设置工具坐标系-提交`rm_generate_auto_tool_frame()`

- **方法原型：**

```C
int rm_generate_auto_tool_frame(rm_robot_handle * handle,const char * name,float payload,float x,float y,float z)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  name  |    用户输入    |    工具坐标系名称，不能超过十个字节。    |
|   payload  |    用户输入    |    工具执行末端负载重量,单位kg    |
|   x  |    用户输入    |    工具执行末端负载x轴方向位置，单位m。    |
|   y  |    用户输入    |    工具执行末端负载y轴方向位置，单位m。    |
|   z  |    用户输入    |    工具执行末端负载z轴方向位置，单位m。    |

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
// 定义工具坐标系的名称、末端负载重量和质心  
const char *tool_name = "Tool1";  
float tool_payload = 5.0; // 末端负载重量是5kg  
float tool_x = 0.1; // 末端负载质心CX  
float tool_y = 0.2; // 末端负载质心CY  
float tool_z = 0.3; // 末端负载质心CZ  
  
// 调用函数自动生成工具坐标系  
ret = rm_generate_auto_tool_frame(robot_handle, tool_name, tool_payload, tool_x, tool_y, tool_z);  
if (ret == 0) {  
    // 成功生成并设置工具坐标系  
    printf("Auto tool frame '%s' generated and set successfully. \n", tool_name);  
} else {  
    // 生成或设置失败处理  
    printf("Failed to generate and set auto tool frame '%s'. Error code: %d\n", tool_name, ret);  
}
```

## 设置工具坐标系`rm_set_manual_tool_frame()`

- **方法原型：**

```C
int rm_set_manual_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  frame  |    用户输入    |    工具坐标系参数,包含末端负载重量、质心位置坐标等参数。    |

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
// 创建一个rm_frame_t结构体实例并初始化
rm_frame_t toolframe;
strncpy(toolframe.frame_name, "Tool2", sizeof(toolframe.frame_name) - 1);
toolframe.payload = 3.0;
toolframe.pose.position.x = 0.0f;
toolframe.pose.position.y = 0.0f;
toolframe.pose.position.z = 0.0f;
toolframe.pose.euler.rx = 0.0f;
toolframe.pose.euler.ry = 0.0f;
toolframe.pose.euler.rz = 0.0f;
toolframe.x = 0.0f;
toolframe.y = 0.0f;
toolframe.z = 0.0f;

// 调用函数手动设置工具坐标系
int result = rm_set_manual_tool_frame(robot_handle, toolframe);
if (result == 0) {  
    printf("Manual tool frame '%s' set successfully\n", toolframe.frame_name);  
} else {  
    printf("Failed to set manual tool frame '%s'. Error code: %d\n", toolframe.frame_name, result);  
}  
```

## 切换当前工具坐标系`rm_change_tool_frame()`

- **方法原型：**

```C
int rm_change_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  tool_name  |    用户输入    |    目标工具坐标系名称。    |

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
// 工具名称，应该与已经设置的工具坐标系名称之一相匹配  
const char *tool_name = "Tool1";  

// 调用函数更改当前工具坐标系  
int result = rm_change_tool_frame(robot_handle, tool_name);  
if (result == 0) {  
    printf("Successfully changed to tool frame '%s'\n", tool_name);  
} else {  
    printf("Failed to change to tool frame '%s'. Error code: %d\n", tool_name, result);  
} 
```

## 删除指定工具坐标系`rm_delete_tool_frame()`

- **方法原型：**

```C
int rm_delete_tool_frame(rm_robot_handle * handle,const char * tool_name )
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  tool_name  |    用户输入    |    要删除的工具坐标系名称。    |

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
// 工具名称，应该与已经设置的工具坐标系名称之一相匹配  
const char *tool_name = "Tool1";  

// 调用函数删除指定工具坐标系  
int result = rm_delete_tool_frame(robot_handle, tool_name);  
if (result == 0) {  
    printf("Successfully delete tool frame '%s'\n", tool_name);  
} else {  
    printf("Failed to delete tool frame '%s'. Error code: %d\n", tool_name, result);  
}
```

## 修改指定工具坐标系`rm_update_tool_frame()`

- **方法原型：**

```C
int rm_update_tool_frame(rm_robot_handle * handle,rm_frame_t frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  frame  |    用户输入    |    要修改的工具坐标系名称。    |

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
// 创建一个rm_frame_t结构体实例并初始化
rm_frame_t toolframe;
// 工具坐标系名称，应该与已经设置的工具坐标系名称之一相匹配  
strncpy(toolframe.frame_name, "Tool2", sizeof(toolframe.frame_name) - 1);
// 修改坐标系参数
toolframe.payload = 5.0;
toolframe.pose.position.x = 0.0f;
toolframe.pose.position.y = 0.0f;
toolframe.pose.position.z = 0.1f;
toolframe.pose.euler.rx = 0.0f;
toolframe.pose.euler.ry = 0.0f;
toolframe.pose.euler.rz = 0.0f;
toolframe.x = 0.0f;
toolframe.y = 0.0f;
toolframe.z = 0.0f;

// 调用函数修改Tool2工具坐标系
int result = rm_update_tool_frame(robot_handle, toolframe);
if (result == 0) {  
    printf("Tool frame '%s' update successfully\n", toolframe.frame_name);  
} else {  
    printf("Failed to update tool frame '%s'. Error code: %d\n", toolframe.frame_name, result);  
}  
```

## 获取所有工具坐标系名称`rm_get_total_tool_frame()`

- **方法原型：**

```C
int rm_get_total_tool_frame(rm_robot_handle * handle,rm_frame_name_t * frame_names,int * len)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_name_t](../struct/rm_frame_name_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  frame_names  |    用户输入    |    存放返回的工具坐标系名称字符数组。    |
|  len  |    输出    |    存放返回的工具坐标系名称长度。    |

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
rm_frame_name_t frame_names[10]; // 最多十个工具坐标系  
int len = -1;  

int result = rm_get_total_tool_frame(robot_handle, frame_names, &len);  

if (result == 0) {  
    printf("Total tool frames: %d\n", len);  
    for (int i = 0; i < len; i++) {  
        printf("Frame %d: %s\n", i, frame_names[i]);  
    }  
}
else{
    printf("Failed to get total tool frames. Error code: %d\n", result)
}
```

## 获取指定工具坐标系`rm_get_given_tool_frame()`

- **方法原型：**

```C
int rm_get_given_tool_frame(rm_robot_handle * handle,const char * name,rm_frame_t * frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  name  |    用户输入    |    指定的工具坐标系名称。    |
|  frame  |    输出    |    存放返回的工具参数。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    1.数据接收失败，通信过程中出现问题或者控制器超时没有返回。2.查询的工具坐标系不存在。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
rm_frame_t tool_frame;
const char *given_name = "Tool2";
result = rm_get_given_tool_frame(robot_handle, given_name, &tool_frame);
if (result == 0) {  
    printf("given tool frame name : %s\n", tool_frame.frame_name);
    printf("given tool frame payload : %f\n", tool_frame.payload);
    printf("given tool frame x : %f\n", tool_frame.x); 
    printf("given tool frame y : %f\n", tool_frame.y);
    printf("given tool frame z : %f\n", tool_frame.z);
}  else {  
    printf("Failed to get tool frame '%s'. Error code: %d\n", tool_frame.frame_name, result);  
}  
```

## 获取当前工具坐标系`rm_get_current_tool_frame()`

- **方法原型：**

```C
int rm_get_current_tool_frame(rm_robot_handle * handle,rm_frame_t * tool_frame)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_frame_t](../struct/rm_frame_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  tool_fram  |    输出    |    存放返回的坐标系。    |

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
rm_frame_t tool_frame;
result = rm_get_current_tool_frame(robot_handle, &tool_frame);
if (result == 0) {  
    printf("current tool frame name : %s\n", tool_frame.frame_name);
    printf("current tool frame payload : %f\n", tool_frame.payload);
    printf("current tool frame x : %f\n", tool_frame.x);
    printf("current tool frame y : %f\n", tool_frame.y);
    printf("current tool frame z : %f\n", tool_frame.z);
}  else {  
    printf("Failed to get current tool frame. Error code: %d\n", result);  
} 
```

## 设置工具坐标系的包络参数`rm_set_tool_envelope()`

- **方法原型：**

```C
int rm_set_tool_envelope(rm_robot_handle * handle,rm_envelope_balls_list_t envelope)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_envelope_balls_list_t](../struct/rm_envelope_balls_list_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  envelope  |    用户输入    |    包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。    |

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
rm_envelope_balls_list_t envelope_balls_list;
// 工具坐标系名称，应该与已经设置的工具坐标系名称之一相匹配 
strcpy(envelope_balls_list.tool_name, "Tool2");
// 要设置的包络球数量
envelope_balls_list.size = 1;
strcpy(envelope_balls_list.balls[0].name, "L");
envelope_balls_list.balls[0].radius = 0.1;
envelope_balls_list.balls[0].x = 0.01;
envelope_balls_list.balls[0].y = 0.01;
envelope_balls_list.balls[0].z = 0.01;
result = rm_set_tool_envelope(robot_handle, envelope_balls_list);
if (result == 0) {  
    printf("Successfully set tool frame '%s' envelope '%s'\n", envelope_balls_list.tool_name, envelope_balls_list.balls[0].name);  
}  else {  
    printf("Failed to set tool frame envelope. Error code: %d\n", result);  
} 
```

## 获取工具坐标系的包络参数`rm_get_tool_envelope()`

- **方法原型：**

```C
int rm_get_tool_envelope(rm_robot_handle * 	handle,const char * tool_name,rm_envelope_balls_list_t * envelope
)
```

*可以跳转[rm_robot_handle](../struct/rm_robot_handle.md)和[rm_envelope_balls_list_t](../struct/rm_envelope_balls_list_t.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    用户输入    |    机械臂句柄。    |
|  tool_name  |    输出    |    控制器中已存在的工具坐标系名称。    |
|  envelope  |    输出    |    存放返回的包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。    |

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
// 工具坐标系名称，应该与已经设置的工具坐标系名称之一相匹配   
const char *tool_name = "Tool2";  

// 分配并初始化包络球列表  
rm_envelope_balls_list_t envelope;  
memset(&envelope, 0, sizeof(envelope)); // 初始化结构体，将所有成员设置为0  
strcpy(envelope.tool_name, tool_name); // 复制工具名称  

result = rm_get_tool_envelope(robot_handle, tool_name, &envelope);  

// 检查函数返回值，并打印结果  
if (result == 0) { 
    printf("Successfully retrieved tool envelope for tool '%s'.\n", tool_name);  
    printf("Number of envelopes: %d\n", envelope.size);  
    for (int i = 0; i < envelope.size; i++) {  
        printf("Envelope %d: Name='%s', Radius=%.3f, Center=(%.3f, %.3f, %.3f)\n",  
                i, envelope.balls[i].name, envelope.balls[i].radius,  
                envelope.balls[i].x, envelope.balls[i].y, envelope.balls[i].z);  
    }  
} else {  
    printf("Failed to retrieve tool envelope for tool '%s'.\n", tool_name);  
}  
```
