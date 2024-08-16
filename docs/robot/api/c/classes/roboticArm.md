# <p class="hidden">C、C++: </p>连接机械臂配置`roboticArm`

此模块为API及机械臂初始化相关接口，包含API版本号查询、API初始化、连接/断开机械臂、日志设置、 机械臂仿真/真实模式设置、机械臂信息获取、运动到位信息及机械臂实时状态信息回调函数注册等。

## 查询sdk版本号`rm_api_version()`

- **方法原型：**

```C
char* rm_api_version(void)
```

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   /  |    `char*`    |    返回版本号    |

- **使用示例**
  
```C
char *version = rm_api_version();
printf("api version: %s\n", version);
```

## 初始化线程模式`rm_init()`

- **方法原型：**

```C
int rm_init(rm_thread_mode_e mode)
```

*可以跳转 [rm_thread_mode_e](../type/typeList.md#rm_thread_mode_e线程模式) 查阅枚举类型*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   mode：`RM_SINGLE_MODE_E`    |    单线程模式，单线程非阻塞等待数据返回。    |
|   mode：`RM_DUAL_MODE_E`   |   双线程模式，增加接收线程监测队列中的数据。    |
|   mode：`RM_TRIPLE_MODE_E`   |   三线程模式，在双线程模式基础上增加线程监测UDP接口数据。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|  -1  |    `int`    |    创建线程失败。查看日志以获取具体错误    |

- **使用示例**
  
```C
// 初始化线程模式为三线程模式
rm_init(RM_TRIPLE_MODE_E);
```

## 销毁所有线程`rm_destory()`

> 注意：此操作会关闭所有连接。

- **方法原型：**

```C
int rm_destory(void )
```

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |

- **使用示例**
  
```C
rm_destory();
```

## 配置日志打印`rm_set_log_call_back()`

- **方法原型：**

```C
void rm_set_log_call_back(void(*)(const char *message, va_list args) LogCallback, int level)
```

*可以跳转 [rm_thread_mode_e](../type/typeList.md#rm_thread_mode_e线程模式) 查阅枚举类型*

- **参数说明:**

|  参数    |   说明    |
| :--- | :--- |
|   `LogCallback`  |    日志打印回调函数。    |
|   `level`  |   日志打印等级。0：debug级别；1：info级别；2：warn级别；3.error级别。    |

- **使用示例**
  
```C
// 获取当前时间信息
char *get_cur_time()
{
  static char s[32] = {0};
  struct tm* ltime;
  struct timeval stamp;
  gettimeofday(&stamp, NULL);
  ltime = localtime(&stamp.tv_sec);
  strftime(s, 20, "%Y%m%d %H:%M:%S", ltime);
  return s;
}

// 日志回调函数
void api_log(const char* message, va_list args) {
    printf("[%s]: ",get_cur_time());
    vfprintf(stdout, message, args);
}

// 注册日志打印回调函数，打印error级别的日志信息
rm_set_log_call_back(api_log, 3);
```

## 创建一个机械臂控制实例`rm_create_robot_arm()`

- **方法原型：**

```C
rm_robot_handle* rm_create_robot_arm(const char * ip, int port)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   `ip`  |    机械臂的ip地址。    |
|   `port`  |   机械臂的端口号。    |

- **返回值:**

创建成功后，返回机械臂控制[rm_robot_handle](../struct/robotHandle.md)句柄id，连接成功id大于0，连接失败返回-1，达到最大连接数5创建失败返回空。

- **使用示例**
  
```C
rm_robot_handle *robot_handle = rm_create_robot_arm("192.168.1.18",8080);
if(robot_handle->id == -1)
{
    rm_delete_robot_arm(robot_handle);
    printf("arm connect err...\n");
}
else if(robot_handle != NULL)
{
    printf("connect success,arm id %d\n",robot_handle->id);
}
```

## 删除指定机械臂实例`rm_delete_robot_arm()`

- **方法原型：**

```C
int rm_delete_robot_arm(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   变量    |   说明    |
| :--- | :--- |
|   `handle`  |    需要删除的机械臂句柄。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    未找到对应句柄,句柄为空或已被删除。    |

- **使用示例**
  
```C
rm_delete_robot_arm(robot_handle);
```

## 设置机械臂仿真/真实模式`rm_set_arm_run_mode()`

- **方法原型：**

```C
int rm_set_arm_run_mode(rm_robot_handle * handle,int mode)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   `handle`  |    机械臂控制句柄。    |
|   `mode`  |    0：仿真模式；1：真实模式。    |

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
// 设置机械臂运行模式为仿真模式
int ret = rm_set_arm_run_mode(robot_handle, 0);   
if (ret == 0) {  
    // 设置成功  
    printf("Robot arm run mode set successfully.\n");  
} else {  
    // 设置失败
    printf("Failed to set robot arm run mode. Error code: %d\n", ret);  
}
```

## 获取机械臂仿真/真实模式`rm_get_arm_run_mode()`

- **方法原型：**

```C
int rm_get_arm_run_mode(rm_robot_handle * handle,int * mode)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   说明    |
| :--- | :--- |
|   `handle`  |    机械臂控制句柄。    |
|   `mode`  |    0：仿真模式；1：真实模式。    |

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
int mode;
ret = rm_get_arm_run_mode(robot_handle, &mode);   
if (ret == 0) {  
    // 设置成功  
    printf("Robot arm run mode get successfully. Current run mode: %d\n", mode);  
} else {  
    // 设置失败处理  
    printf("Failed to get robot arm run mode. Error code: %d\n", ret);  
}
```

## 获取机械臂基本信息`rm_get_robot_info()`

- **方法原型：**

```C
int rm_get_robot_info(rm_robot_handle * handle,rm_robot_info_t * robot_info)
```

*可以跳转[rm_robot_handle](../struct/robotHandle.md)和[rm_robot_info_t](../struct/robotInfo.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂控制句柄。    |
|   `robot_info`  |    输入参数    |    存放机械臂基本信息结构体。    |


- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    未找到对应句柄,句柄为空或已被删除。    |
|  -2  |    `int`    |    获取到的机械臂基本信息非法，检查句柄是否已被删除。    |

- **使用示例**
  
```C
rm_robot_info_t robot_info;
ret = rm_get_robot_info(robot_handle, &robot_info);
printf("Get robot info result : %d\n", ret);
printf("Robot info : %d %d %d \n", robot_info.arm_dof,robot_info.arm_model,robot_info.force_type);

```

## 机械臂事件回调函数注册`rm_get_arm_event_call_back()`

- **方法原型：**

```C
void rm_get_arm_event_call_back(rm_event_callback_ptr event_callback)
```

*这里使用了机械臂事件回调函数`rm_event_callback_ptr`。<br>方法原型为：`typedef void(* rm_event_callback_ptr) (rm_event_push_data_t data)`。<br>跳转[rm_realtime_arm_joint_state_t](../struct/realtimeArmJointState.md)查阅结构体详情。*

>注意：单线程无法使用该函数获取到位信息。

- **参数说明:**

|   参数    |   值    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    用户自定义    |    机械臂控制句柄。    |
|   `event_callback`  |    用户自定义    |    机械臂事件回调函数，该回调函数接收rm_event_push_data_t类型的数据作为参数，没有返回值。    |

- **使用示例**
  
```C
// 机械臂事件回调函数
void callback_event(rm_event_push_data_t data)
{
    printf("CallbackCallbackCallbackCallbackCallback\n");
    switch (data.event_type)
    {
    case RM_CURRENT_TRAJECTORY_STATE_E:
        printf("当前轨迹运行结果：%d,到位设备：%d，是否存在下一条轨迹：%d\n",data.trajectory_state,data.device, data.trajectory_connect);
        break;
    case RM_PROGRAM_RUN_FINISH_E:
        printf("在线编程运行结束,结束ID:%d\n", data.program_id);
        break;
    default:
        break;
    }
}
// 机械臂事件回调函数注册
rm_get_arm_event_call_back(callback_event);
```

## UDP机械臂状态主动上报信息回调注册`rm_realtime_arm_state_call_back()`

- **方法原型：**

```C
void rm_realtime_arm_state_call_back(rm_realtime_arm_state_callback_ptr realtime_callback)
```

*这里使用了机械臂事件回调函数`rm_realtime_arm_state_callback_ptr`。<br>方法原型为：`typedef void(* rm_realtime_arm_state_callback_ptr) (rm_realtime_arm_joint_state_t data)`。<br>跳转[rm_realtime_arm_joint_state_t](../struct/realtimeArmJointState.md)查阅结构体详情。*

- **参数说明:**

|   参数    |   值    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    用户自定义    |    机械臂控制句柄。    |
|   `realtime_callback`  |    用户自定义    |    机械臂状态信息回调函数。    |

- **使用示例**
  
```C
// 机械臂实时状态回调函数
void callback_rm_realtime_arm_joint_state(rm_realtime_arm_joint_state_t state) {  
    // 检查数据解析错误码  
    if (state.errCode == -3) {  
        printf("Data parsing error: Data incomplete or format incorrect\n");  
    }  
  
    // 打印机械臂的IP地址  
    printf("Arm IP: %s\n", state.arm_ip);  
  
    // 检查机械臂错误码  
    if (state.arm_err != 0) {  
        printf("Arm Error Code: %u\n", state.arm_err);  
    }  
  
    // 遍历并打印关节状态  
    for (int i = 0; i < ARM_DOF; ++i) {  
        printf("Joint %d Current: %.3f mA, Enabled: %s, Error Code: %u, Position: %.3f°, Temperature: %.3f°C, Voltage: %.3f V\n",  
               i, state.joint_status.joint_current[i], state.joint_status.joint_en_flag[i] ? "true" : "false",  
               state.joint_status.joint_err_code[i], state.joint_status.joint_position[i],  
               state.joint_status.joint_temperature[i], state.joint_status.joint_voltage[i]);  
    }  
  
    // 打印力传感器数据(需末端带有力传感器)  
    printf("Force Sensor Raw: [%.3f, %.3f, %.3f, %.3f, %.3f, %.3f] N/Nm\n",  
        state.force_sensor.force[0], state.force_sensor.force[1], state.force_sensor.force[2],  
        state.force_sensor.force[3], state.force_sensor.force[4], state.force_sensor.force[5]);  
    printf("Zero Force: [%.3f, %.3f, %.3f, %.3f, %.3f, %.3f] N/Nm\n",  
        state.force_sensor.zero_force[0], state.force_sensor.zero_force[1], state.force_sensor.zero_force[2],  
        state.force_sensor.zero_force[3], state.force_sensor.zero_force[4], state.force_sensor.zero_force[5]);  
    printf("Force Coordinate System: %d\n", state.force_sensor.coordinate);  

    // 打印系统错误码  
    if (state.sys_err != 0) {  
        printf("System Error Code: %u\n", state.sys_err);  
    }  
  
    // 打印当前路点信息  
    printf("Current Waypoint Position: (%.3f, %.3f, %.3f) m\n",  
           state.waypoint.position.x, state.waypoint.position.y, state.waypoint.position.z);  
    printf("Quaternion: (%.3f, %.3f, %.3f, %.3f)\n",  
           state.waypoint.quaternion.w, state.waypoint.quaternion.x, state.waypoint.quaternion.y, state.waypoint.quaternion.z);  
    printf("Euler Angles: (%.3f, %.3f, %.3f) rad\n",  
           state.waypoint.euler.rx, state.waypoint.euler.ry, state.waypoint.euler.rz);  
} 

// 机械臂实时状态回调函数注册
rm_realtime_arm_state_call_back(callback_rm_realtime_arm_joint_state);
```
