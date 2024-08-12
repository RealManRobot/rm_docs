# 机械臂轨迹指令类

机械臂运动控制指令和透传控制指令。运动控制指令包含：关节空间运动、笛卡尔直线运动、样条曲线运动、圆弧运动等；透传控制指令包含角度透传和位姿透传。

## 关节空间运动`rm_movej()`

- **方法原型：**

```C
int rm_movej(rm_robot_handle * handle,const float * joint,int v,int r,int trajectory_connect,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  joint  |    输入参数    |    目标关节1~7角度数组。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  r  |    输入参数    |    交融半径百分比系数，0-100。    |
|  trajectory_connect  |    输入参数    |    轨迹连接标志:<br>0：立即规划并执行轨迹，不与后续轨迹连接；<br>1：将当前轨迹与下一条轨迹一起规划，但不立即执行,阻塞模式下，即使发送成功也会立即返回。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
float joint[6] = {0.0, 0.0, 0.0, 0.0, 90.0, 0.0};

int v = 20; // 速度
int r = 0;  // 交融半径
int trajectory_connect = 0; // 立即规划并执行轨迹
int block = 1; // 阻塞模式（默认线程模式为多线程）

ret = rm_movej(robot_handle, joint, v, r, trajectory_connect, block);
```

## 笛卡尔空间直线运动`rm_movel()`

- **方法原型：**

```C
int rm_movel(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose.md)和查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  pose  |    输入参数    |    目标位姿,位置单位：米；姿态单位：弧度。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  r  |    输入参数    |    交融半径百分比系数，0-100。    |
|  trajectory_connect  |    输入参数    |    轨迹连接标志:<br>0：立即规划并执行轨迹，不与后续轨迹连接；<br>1：将当前轨迹与下一条轨迹一起规划，但不立即执行,阻塞模式下，即使发送成功也会立即返回。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
int v = 20; // 速度
int r = 0;  // 交融半径
int trajectory_connect = 0; // 立即规划并执行轨迹
int block = 1; // 阻塞模式（默认线程模式为多线程）
rm_pose_t pose = {
        .position = {0.5, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// 示例位姿
ret = rm_movel(robot_handle, pose, v, r, trajectory_connect, block);
printf("rm_movel result : %d\n", ret);
```

## 样条曲线运动`rm_moves()`

- **方法原型：**

```C
int rm_moves(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose.md)和查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  pose  |    输入参数    |    目标位姿,位置单位：米；姿态单位：弧度。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大线转速和加速度的百分比。    |
|  r  |    输入参数    |    交融半径百分比系数，0-100。    |
|  trajectory_connect  |    输入参数    |    轨迹连接标志:<br>0：立即规划并执行轨迹，不与后续轨迹连接；<br>1：将当前轨迹与下一条轨迹一起规划，但不立即执行,阻塞模式下，即使发送成功也会立即返回。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注解:样条曲线运动需至少连续下发三个点位（trajectory_connect设置为1），否则运动轨迹为直线。
>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
int v = 20; // 速度
int r = 0;  // 交融半径
int trajectory_connect = 1; // 与下一条轨迹一起规划
int block = 1; // 阻塞模式（默认线程模式为多线程）
rm_pose_t pose1 = {
        .position = {0.1, 0.2, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// 示例位姿1
rm_pose_t pose2 = {
        .position = {0.3, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// 示例位姿2
rm_pose_t pose3 = {
        .position = {0.4, 0.5, 0.5},
        .euler = {0.0, 0.0, 0.0}
};// 示例位姿3

// 发出第一个点位，轨迹连接标志设为1以进行样条曲线连接
result = rm_moves(robot_handle, pose1, v, r, trajectory_connect, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

// 发出第二个点位，轨迹连接标志设为1以进行样条曲线连接
result = rm_moves(robot_handle, pose2, v, r, trajectory_connect, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

// 发出第三个点位，轨迹连接标志设为0立即规划
result = rm_moves(robot_handle, pose3, v, r, 0, block);
if(result != 0) { 
    printf("rm_moves result : %d\n", result);
}

```

## 笛卡尔空间圆弧运动`rm_movec()`

- **方法原型：**

```C
int rm_movec(rm_robot_handle * handle,rm_pose_t pose_via,rm_pose_t pose_to,int v,int r,int loop,int trajectory_connect,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)[rm_pose_t](../struct/pose.md)和查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  pose_via  |    输入参数    |    中间点位姿，位置单位：米，姿态单位：弧度。    |
|  pose_to  |    输入参数    |    终点位姿，位置单位：米，姿态单位：弧度。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大角速度和角加速度的百分比。    |
|  r  |    输入参数    |    交融半径百分比系数，0-100。    |
|  loop  |    输入参数    |    规划圈数。    |
|  trajectory_connect  |    输入参数    |    轨迹连接标志:<br>0：立即规划并执行轨迹，不与后续轨迹连接；<br>1：将当前轨迹与下一条轨迹一起规划，但不立即执行,阻塞模式下，即使发送成功也会立即返回。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
// 圆弧运动
rm_pose_t povia;                                                        
povia.position.x=-0.300;                                                   
povia.position.y=-0.03;                                                   
povia.position.z=0.215;                                                    
povia.euler.rx=3.0;                                                      
povia.euler.ry=0.1;                                                      
povia.euler.rz=0.1;                                                      
rm_pose_t poto;                                                         
poto.position.x=-0.4;                                                      
poto.position.y=-0.030;                                                    
poto.position.z=0.215;                                                     
poto.rx=3.0;                                                       
poto.ry=0.1;                                                       
poto.rz=0.1;                                                       
ret = rm_movec(robot_handle,povia,poto,20,0,0,0,1);
```

## 以关节空间运动到目标位姿`rm_movej_p()`

- **方法原型：**

```C
int rm_movej_p(rm_robot_handle * handle,rm_pose_t pose,int v,int r,int trajectory_connect,int block)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)和[rm_pose_t](../struct/pose.md)和查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  pose  |    输入参数    |    目标位姿，位置单位：米，姿态单位：弧度。    |
|  v  |    输入参数    |    速度比例1~100，即规划速度和加速度占关节最大角速度和角加速度的百分比。    |
|  r  |    输入参数    |    交融半径百分比系数，0-100。    |
|  trajectory_connect  |    输入参数    |    轨迹连接标志:<br>0：立即规划并执行轨迹，不与后续轨迹连接；<br>1：将当前轨迹与下一条轨迹一起规划，但不立即执行,阻塞模式下，即使发送成功也会立即返回。    |
|  block  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

>注意:使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节。    |
|  -5  |    `int`    |    单线程模式超时未接收到返回，请确保超时时间设置合理。    |

- **使用示例**
  
```C
// 关节空间运动到目标位姿，阻塞模式（默认线程模式为多线程模式）
// 目标位置：x：0.1m，y:0.2m，z：0.03m；姿态：rx:0.4rad，ry:0.5rad，rz:0.6rad；
// 速度系数20%，不交融，立即规划执行
rm_pose_t pose;                                                            
pose.position.x=-0.1;                                                       
pose.position.y=-0.2;                                                       
pose.position.z=0.3;                                                        
pose.euler.rx=0.4;                                                          
pose.euler.ry=0.5;                                                          
pose.euler.rz=0.6;                                                          
ret = rm_movej_p(robot_handle,pose, 20,0,0,1);  
```

## 角度透传`rm_movej_canfd()`

>角度通过CANFD透传给机械臂，不需控制器规划。若指令正确，机械臂立即执行。

- **方法原型：**

```C
int rm_movej_canfd(rm_robot_handle * handle,float * joint,bool follow,float expand)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)[rm_pose_t](../struct/pose.md)和查阅结构体详细描述*
>透传效果受通信周期和轨迹平滑度影响，因此要求通信周期稳定，避免大幅波动。
>用户在使用此功能时，建议进行良好的轨迹规划，以确保机械臂的稳定运行。
>I系列控制器有线网口周期最快可达2ms，提供了更高的实时性。

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  joint  |    输入参数    |    关节1~7目标角度数组,单位：°。    |
|  follow  |    输入参数    |    true-高跟随，false-低跟随。若使用高跟随，透传周期要求不超过10ms。    |
|  expand  |    输入参数    |    如果存在通用扩展轴，并需要进行透传，可使用该参数进行透传发送。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |

- **使用示例**
  
```C
//角度透传到CANFD，目标关节角度：[1°,0°,20°,30°,0°,20°]
float joint[6] = { 1, 0, 20, 30, 0, 20};
rm_movej_canfd(robot_handle,joint,true,0);
```

## 位姿透传`rm_movep_canfd()`

>位姿通过CANFD透传给机械臂，不需控制器规划。
>当目标位姿被透传到机械臂控制器时，控制器首先尝试进行逆解计算。若逆解成功且计算出的各关节角度与当前角度差异不大，则直接下发至关节执行，跳过额外的轨迹规划步骤。
>这一特性适用于需要周期性调整位姿的场景，如视觉伺服等应用。

- **方法原型：**

```C
int rm_movep_canfd(rm_robot_handle * handle,rm_pose_t pose,bool follow)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)[rm_pose_t](../struct/pose.md)和查阅结构体详细描述*
>透传效果受通信周期和轨迹平滑度影响，因此要求通信周期稳定，避免大幅波动。
>用户在使用此功能时，建议进行良好的轨迹规划，以确保机械臂的稳定运行。
>I系列控制器有线网口周期最快可达2ms，提供了更高的实时性。

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|  pose  |    输入参数    |    位姿 (优先采用四元数表达)。    |
|  follow  |    输入参数    |    true-高跟随，false-低跟随。若使用高跟随，透传周期要求不超过10ms。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |

- **使用示例**
  
```C
/*pose：目标位姿，位置精度：0.001mm，姿态精度：0.001rad
目标位置：x：0m，y:0m，z：0.85049m
目标姿态：rx:0rad，ry:0rad，rz:3.142rad
目标位姿为当前工具在当前工作坐标系下的数值。*/
rm_pose_t pose;                                                           
pose.position.x=0;                                                           
pose.position.y=0;                                                           
pose.position.z=0.85049;                                                         
pose.euler.rx=0;                                                           
pose.euler.ry=0;
pose.euler.rz=3.142;                       
rm_movep_canfd(robot_handle,pose,true);  
```
