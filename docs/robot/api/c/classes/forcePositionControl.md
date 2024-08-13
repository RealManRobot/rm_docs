# 力位混合控制补偿配置`forcePositionControl`

睿尔曼机械臂配置了一维力和六维力版本，用户除了可直接使用示教器调用底层的力位混合控制模块外，还可以通过该接口将自定义的轨迹以周期性透传的形式结合底层的力位混合控制算法进行补偿。
透传效果和周期、轨迹是否平滑有关，周期要求稳定，防止出现较大波动，用户使用该指令时请做好轨迹规划，轨迹规划的平滑程度决定了机械臂的运行状态。第二代 WIFI 和网口模式透传周期最快 20ms，USB 和 RS485 模式透传周期最快10ms。高速网口的透传周期最快也可到10ms，不过在使用该高速网口前，需要使用指令打开配置。另外第三代有线网口周期最快可达2ms。

## 开启透传力位混合控制补偿模式`rm_start_force_position_move()`

- **方法原型：**

```C
int rm_start_force_position_move(rm_robot_handle * handle)
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
//开启透传力位混合控制补偿模式
ret = rm_start_force_position_move(robot_handle);
```

## 停止透传力位混合控制补偿模式`rm_stop_force_position_move()`

- **方法原型：**

```C
int rm_stop_force_position_move(rm_robot_handle * handle)
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
ret = rm_stop_force_position_move(robot_handle);
```

## 透传力位混合补偿-角度方式`rm_force_position_move_joint()`

- **方法原型：**

```C
int rm_force_position_move_joint(rm_robot_handle * handle,const float * joint,int sensor,int mode,int dir,float force,bool follow)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   joint  |    输入参数    |    目标关节角度。    |
|   sensor  |    输入参数    |    所使用传感器类型，0-一维力，1-六维力。    |
|   mode  |    输入参数    |    模式，0-沿基坐标系，1-沿工具端坐标系。    |
|   dir  |    输入参数    |    力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。    |
|   force  |    输入参数    |    力的大小,单位N。    |
|   follow  |    输入参数    |    是否高跟随。ture：高跟随；flase：低跟随。    |

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
//透传力位混合补偿--关节角度
const float joint[6] = {1,2,3,4,5,6};
int sensor = 0;
int mode = 0;
int dir = 2;
float force = 5;
bool follow = true;
ret=rm_force_position_move_joint(robot_handle,joint,sensor,mode,dir,force,follow);
```

## 透传力位混合补偿-位姿方式`rm_force_position_move_pose()`

- **方法原型：**

```C
int rm_force_position_move_pose(rm_robot_handle * handle,rm_pose_t pose,int sensor,int mode,int dir,float force,bool follow)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   pose  |    输入参数    |    目标关节角度。    |
|   sensor  |    输入参数    |    所使用传感器类型，0-一维力，1-六维力。    |
|   mode  |    输入参数    |    模式，0-沿基坐标系，1-沿工具端坐标系。    |
|   dir  |    输入参数    |    力控方向，0~5分别代表X/Y/Z/Rx/Ry/Rz，其中一维力类型时默认方向为Z方向。    |
|   force  |    输入参数    |    力的大小,单位N。    |
|   follow  |    输入参数    |    是否高跟随。ture：高跟随；flase：低跟随。    |

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
//透传力位混合补偿--位姿
int sensor = 0;
int mode = 0;
int dir = 2;
float force = 15;
bool follow = true;
ret=rm_force_position_move_pose(robot_handle,pose,sensor,mode,dir,force,follow);
```
