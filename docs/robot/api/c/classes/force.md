# 末端六维力配置`force`

睿尔曼机械臂六维力版末端配备集成式六维力传感器，无需外部走线，用户可直接通过协议对六维力进行操作， 获取六维力数据。如下图所示，正上方为六维力的 Z 轴，航插反方向为六维力的 Y 轴，坐标系符合右手定则。 机械臂位于零位姿态时，工具坐标系与六维力的坐标系方向一致。
![六维力坐标系](../doc/sixForce.png)
另外，六维力额定力 200N，额定力矩 8Nm，过载水平 300FS，工作温度 5~80℃，准度 0.5FS。使用过程中 注意使用要求，防止损坏六维力传感器。
本接口用于查询和配置六维力的状态信息，包含六维力姿态、零点标定和传感器标定等。

## 查询六维力信息`rm_get_force_data()`

>查询当前六维力传感器得到的力和力矩信息：Fx,Fy,Fz,Mx,My,Mz。

- **方法原型：**

``` C
int rm_get_force_data(rm_robot_handle * handle,rm_force_data_t * data)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_force_data_t](../struct/forceData)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  data  |    输出参数    |    力传感器数据结构体。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。可能情况：当前机械臂不是六维力版本    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
``` C
//获取六维力数据
rm_force_data_t force_data;
ret = rm_get_force_data(robot_handle, &force_data);
printf("get force data result : %d\n", ret);
for(int i = 0; i < 6; i++) {
    printf("force data[%d] : %f \n", i, force_data.force_data[i]);
    printf("work_zero_force_data[%d] : %f \n", i, force_data.work_zero_force_data[i]);
    printf("tool_zero_force_data[%d] : %f \n", i, force_data.tool_zero_force_data[i]);
    printf("zero_force_data[%d] : %f \n", i, force_data.zero_force_data[i]);  
}
```

## 六维力零位标定`rm_clear_force_data()`

>将六维力数据清零，标定当前状态下的零位。

- **方法原型：**

``` C
int rm_clear_force_data(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
``` C
ret = rm_clear_force_data(robot_handle);
printf("clear force data result : %d\n", ret);
```

## 设置六维力重心参数 `rm_set_force_sensor()`

> 设置六维力重心参数，六维力重新安装后，必须重新计算六维力所受到的初始力和重心。分别在不同姿态下，获取六维力的数据， 用于计算重心位置。该指令下发后，机械臂以固定的速度运动到各标定点。
> 以RM65机械臂为例，四个标定点的关节角度分别为：
> 位置1关节角度： 0,0,-60,0,60,0
> 位置2关节角度： 0,0,-60,0,-30,0
> 位置3关节角度： 0,0,-60,0,-30,180
> 位置4关节角度： 0,0,-60,0,-120,0

- **方法原型：**

``` C
int rm_set_force_sensor(rm_robot_handle * handle,bool block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
>注意：必须保证在机械臂静止状态下标定;
>注意：该过程不可中断，中断后必须重新标定;

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   block  |    输入参数    |    `true`表示阻塞模式，等待标定完成后返回；`false`表示非阻塞模式，发送后立即返回。    |

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
// 阻塞完成六维力重心标定
ret = rm_set_force_sensor(robot_handle, true);
printf("set force sensor result : %d\n", ret);
```

## 标定六维力数据`rm_manual_set_force()`

>六维力重新安装后，必须重新计算六维力所受到的初始力和重心。该手动标定流程，适用于空间狭窄工作区域，以防自动标定过程中 机械臂发生碰撞，用户可以手动选取四个位置下发，当下发完四个点后，机械臂开始自动沿用户设置的目标运动，并在此过程中计算六维力重心。

- **方法原型：**

``` C
int rm_manual_set_force(rm_robot_handle * handle,int count,float * joint,bool block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*
>注意：上述4个位置必须按照顺序依次下发，当下发完位置4后，机械臂开始自动运行计算重心。

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   count  |    输入参数    |    点位；1~4。    |
|   joint  |    输入参数    |    关节角度，单位：°。    |
|   block  |    输入参数    |    `true`表示阻塞模式，等待标定完成后返回；`false`表示非阻塞模式，发送后立即返回。    |

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
// 定义四个关节角度数组，每个数组对应一个标定位置  
float joint_pos1[6] = {0, 0, -60, 0, 60, 0}; // 第一个位置  
float joint_pos2[6] = {0, 0, -60, 0, -30, 0}; // 第二个位置  
float joint_pos3[6] = {0, 0, -60, 0, -30, 180}; // 第三个位置  
float joint_pos4[6] = {0, 0, -60, 0, -120, 0}; // 第四个位置  

// 阻塞模式，等待标定完成  
bool block = true;  

// 顺序设置四个位置  
for (int i = 1; i <= 4; i++) {  
    float *current_joint;  
    switch (i) {  
        case 1: current_joint = joint_pos1; break;  
        case 2: current_joint = joint_pos2; break;  
        case 3: current_joint = joint_pos3; break;  
        case 4: current_joint = joint_pos4; break;  
        default: continue; // 不应该到达这里  
    }  

    // 调用函数，发送标定位置  
    int status = rm_manual_set_force(robot_handle, i, current_joint, block);  

    // 检查函数返回值  
    switch (status) {  
        case 0:  
            printf("标定位置 %d 成功\n", i);  
            break;  
        case 1:  
            printf("标定位置 %d 失败：控制器返回错误或参数错误\n", i);  
            return 1; // 提前退出程序  
        case -1:  
            printf("标定位置 %d 数据发送失败\n", i);  
            return -1;  
        case -2:  
            printf("标定位置 %d 数据接收失败或超时\n", i);  
            return -2;  
        case -3:  
            printf("标定位置 %d 返回值解析失败\n", i);  
            return -3;  
        default:  
            printf("未知错误\n");  
            return status;  
    }  
}  
```

## 停止标定力传感器重心`rm_stop_set_force_sensor()`

>在标定力传感器过程中，如果发生意外，发送该指令，停止机械臂运动，退出标定流程。

- **方法原型：**

```C
int rm_stop_set_force_sensor(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

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
//退出六维力标定流程
ret = rm_stop_set_force_sensor(robot_handle);
```
