# <p class="hidden">C、C++: </p>UDP主动上报配置`UdpConfig`

睿尔曼机械臂提供 UDP 机械臂状态主动上报接口，使用时需要和机械臂处于同一局域网络下，通过设置主动上报配置接口的目标IP或和机械臂建立 TCP 连接，机械臂即会主动周期性上报机械臂状态数据，数据周期可配置，默认5ms。配置正确并开启三线程模式后，通过注册回调函数可接收并处理主动上报数据。

## 设置 UDP 机械臂状态主动上报配置`rm_set_realtime_push()`

- **方法原型：**

```C
int rm_set_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_realtime_push_config_t](../struct/realtimePushConfig)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `config`  |    输入参数    |    UDP配置结构体。    |

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
// 使能UDP主动上报接口，500ms上报周期，系统外受力数据的坐标系为传感器坐标系
// 上报目标IP为"192.168.1.108"，广播端口号8089
rm_realtime_push_config_t config;
config.cycle = 100;
config.enable = true;
config.force_coordinate = 0;
config.port = 8089;
strcpy(config.ip, "192.168.1.108");
config.custom_config.expand_state = 0;
config.custom_config.joint_speed = 1;
config.custom_config.lift_state = 1;
int ret = rm_set_realtime_push(robot_handle, config);
printf("rm_set_realtime_push result %d\n",ret);
```

## 查询 UDP 机械臂状态主动上报配置`rm_get_realtime_push()`

- **方法原型：**

```C
int rm_get_realtime_push(rm_robot_handle * handle,rm_realtime_push_config_t * config)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_realtime_push_config_t](../struct/realtimePushConfig)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `config`  |    输出参数    |    获取到的UDP机械臂状态主动上报配置。    |

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
rm_realtime_push_config_t gconfig;
ret = rm_get_realtime_push(robot_handle, &gconfig);
printf("realtime config result:d%\n ip:%s\n",ret, gconfig.ip);
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
