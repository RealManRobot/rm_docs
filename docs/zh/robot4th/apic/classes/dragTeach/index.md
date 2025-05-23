# <p class="hidden">C、C++: </p>拖动示教配置`dragTeach`

睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。本接口用于拖动示教的启动控制、拖动轨迹复现的控制、力位混合控制等。

## 拖动示教开始`rm_start_drag_teach()`

- **方法原型：**

```C
int rm_start_drag_teach(rm_robot_handle * handle,int trajectory_record)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `trajectory_record`  |    输入参数    |    拖动示教时记录轨迹，0-不记录，1-记录轨迹。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//控制机械臂进入拖动示教模式，拖动示教时记录轨迹
int trajectory_record = 1;
ret = rm_start_drag_teach(robot_handle,trajectory_record);
```

## 拖动示教结束`rm_stop_drag_teach()`

- **方法原型：**

```C
int rm_stop_drag_teach(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//退出拖动示教模式
ret = rm_stop_drag_teach(robot_handle);
```

## 开始复合模式拖动示教`rm_start_multi_drag_teach_new()`

- **方法原型：**

```C
int rm_start_multi_drag_teach_new(rm_robot_handle * handle,rm_multi_drag_teach_t teach_state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*
*可以跳转[rm_multi_drag_teach_t](../../struct/multiDragTeach/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `teach_state`  |    输入参数    |    复合拖动示教参数    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

::: info 注解
可能失败的原因

- 当前机械臂非六维力版本（六维力拖动示教）。
- 机械臂当前处于 IO 急停状态。
- 机械臂当前处于仿真模式。
- 输入参数有误。
- 使用六维力模式拖动示教时，当前已处于奇异区。
:::

- **使用示例**
  
```C
rm_multi_drag_teach_t teach = 
{
    {0,0,0,0,0,0},      // 所有轴都不可拖动
    0,      // 使用工作坐标系  
    0       // 不开启拖动奇异墙  
};

teach.free_axes[0] = 1;     // 参考坐标系X轴方向可拖动
ret = rm_start_multi_drag_teach_new(robot_handle, teach);
```

## 运动到轨迹起点`rm_drag_trajectory_origin()`

轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20的速度运动到轨迹起点。

- **方法原型：**

```C
int rm_drag_trajectory_origin(rm_robot_handle * handle,int block)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

::: warning 注意
使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。
:::

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 默认当前线程模式为多线程，阻塞运动到轨迹起点
ret = rm_drag_trajectory_origin(robot_handle,1);  
```

## 轨迹复现开始`rm_run_drag_trajectory()`

- **方法原型：**

```C
int rm_run_drag_trajectory(rm_robot_handle * handle,int block)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

<br>必须在拖动示教结束后才能使用，同时保证机械臂位于拖动示教的起点位置，可调用rm_drag_trajectory_origin接口运动至起点位置。

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

::: warning 注意
使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。
:::

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 默认当前线程模式为多线程，阻塞复现拖动示教轨迹
int block = 1;
ret = rm_run_drag_trajectory(robot_handle,block);
```

## 暂停轨迹复现`rm_pause_drag_trajectory()`

控制机械臂在轨迹复现过程中的暂停。

- **方法原型：**

```C
int rm_pause_drag_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//轨迹复现暂停
ret = rm_pause_drag_trajectory(robot_handle);
```

## 继续轨迹复现`rm_continue_drag_trajectory()`

控制机械臂在轨迹复现过程中暂停之后的继续。

- **方法原型：**

```C
int rm_continue_drag_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//轨迹复现继续
ret = rm_continue_drag_trajectory(robot_handle);
```

## 停止轨迹复现`rm_stop_drag_trajectory()`

控制机械臂在轨迹复现过程中的停止。

- **方法原型：**

```C
int rm_stop_drag_trajectory(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//轨迹复现停止
ret = rm_stop_drag_trajectory(robot_handle);
```

## <div id = '6213'>保存拖动示教轨迹`rm_save_trajectory()`</div>

- **方法原型：**

```C
int rm_save_trajectory(rm_robot_handle * handle,char * name,int * num)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `name`  |    输入参数    |    轨迹要保存的文件路径及名称，长度不超过300个字符，例: d:/rm_test.txt。    |
|   `num`  |    输出参数    |    轨迹点数。    |

- **返回值:**

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    文件打开失败。    |- **检查文件路径**：确保文件路径是正确的，没有拼写错误。<br>- **检查文件权限**：确保用户有权限读取该文件。如果文件位于受保护的目录中，可能需要管理员权限。<br>- **检查文件是否被其他程序占用**：确保文件没有被其他程序打开或锁定。如果文件被占用，可能需要关闭占用文件的程序。<br>- **联系技术支持**：如果以上步骤都无法解决问题，用户可以联系技术支持团队，提供详细的错误信息和操作步骤，以便技术支持人员进行进一步的调查和诊断。<br>- **重试操作**：尝试重新执行 rm_save_trajectory 函数，看看问题是否仍然存在。<br>- **尝试保存到其他文件**：测试是否与特定文件有关。|
|  -5  |    `int`    |    文件名称截取失败。    |检查文件路径是否为空或格式不正确。|
|  -6  |    `int`    |    获取到的点位解析错误，保存失败。    |- **查看日志**：检查保存过程中控制器返回的json指令是否正确。<br>- **检查网络连接**：如果网络不稳定，没有接收到完整的json协议可能会返回此报错，确保网络连接正常后重试。<br>- **联系技术支持**：如果以上步骤都无法解决问题，可联系技术支持团队，提供操作步骤以及日志文件，以便技术支持人员进行进一步的调查和诊断。|

- **使用示例**
  
```C
// 保存拖动示教点位到指定路径
char *name = "/home/realman/work/example.txt";
int num = -1;
ret = rm_save_trajectory(robot_handle, name, &num);
printf("rm_save_trajectory result :%d, num:%d\n", ret, num);
```

## 力位混合控制`rm_set_force_position()`

在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```C
int rm_set_force_position(rm_robot_handle * handle,int sensor,int mode,int direction,float N)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `sensor`  |    输入参数    |    0-一维力；1-六维力。    |
|   `mode`  |    输入参数    |    0-基坐标系力控；1-工具坐标系力控。    |
|   `direction`  |    输入参数    |    力控方向；<br>0-沿X轴；<br>1-沿Y轴；<br>2-沿Z轴；<br>3-沿RX姿态方向；<br>4-沿RY姿态方向；<br>5-沿RZ姿态方向。    |
|   `N`  |    输入参数    |    力的大小，单位N。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置六维力基坐标系Z轴力控，5N力大小     
int sensor = 1;
int mode = 0;
int direction = 2;
float N = 5;                          
ret = rm_set_force_position(robot_handle, sensor, mode, direction, N);
```

## 力位混合控制`rm_set_force_position_new()`

在笛卡尔空间轨迹规划时，使用该功能可保证机械臂末端接触力恒定，使用时力的方向与机械臂运动方向不能在同一方向。 开启力位混合控制，执行笛卡尔空间运动，接收到运动完成反馈后，需要等待2S后继续下发下一条运动指令。

- **方法原型：**

```C
int rm_set_force_position_new(rm_robot_handle * handle, rm_force_position_t param)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*
*可以跳转[rm_force_position_t](../../struct/forcePosition/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `param`  |    输入参数    |    力位混合控制参数。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
rm_force_position_t param = {
    1,
    1,
    {3, 3, 4, 3, 3, 3},
    {0, 0, 1, 0, 0, 0},
    {0.1, 0.1, 0.1, 10, 10, 10},
};

rm_set_force_position_new(robot_handle, param);
```

## 结束力位混合控制`rm_stop_force_position()`

- **方法原型：**

```C
int rm_stop_force_position(rm_robot_handle * handle)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//结束力位混合控制
ret = rm_stop_force_position(robot_handle);
```

## 设置电流环拖动示教灵敏度`rm_set_drag_teach_sensitivity()`

- **方法原型：**

```C
int rm_set_drag_teach_sensitivity(rm_robot_handle * handle, int grade)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   grade  |    输入参数    |    等级，0到100，表示0~100%，当设置为100时保持初始状态。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 设置灵敏度50%
ret = rm_set_drag_teach_sensitivity(robot_handle, 50);
```

## 获取电流环拖动示教灵敏度`rm_get_drag_teach_sensitivity()`

- **方法原型：**

```C
int rm_get_drag_teach_sensitivity(rm_robot_handle * handle, int* grade)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   grade  |    输出参数    |    等级，0到100，表示0~100%，当设置为100时保持初始状态。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int grade;
ret = rm_get_drag_teach_sensitivity(robot_handle, &grade);
```

## <div id = '6215'>设置六维力拖动示教模式`rm_set_force_drag_mode()`</div>

- **方法原型：**

```C
int rm_set_force_drag_mode(rm_robot_handle * handle, int mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明：**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   mode  |    输入参数    |    0表示快速拖动模式 1表示精准拖动模式。    |

- **返回值：**

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    非六维力版本机械臂，不支持此功能。    |该功能需要六维力版本机械臂，如果机械臂为六维力版本：<br>1.检查连接句柄是否有效：无效的连接句柄会导致API无法正确获取到机械臂末端信息；<br>2.检查机械臂版本信息：确保机械臂型号为六维力版本，避免误使用标准末端的机械臂升级包给机械臂升级导致该功能不可用。|

- **使用示例**
  
```C
// 设置精准拖动模式
ret = rm_set_force_drag_mode(robot_handle, 1);
```

## <div id = '6217'>获取六维力拖动示教模式`rm_get_force_drag_mode()`</div>

- **方法原型：**

```C
int rm_get_force_drag_mode(rm_robot_handle * handle, int* mode)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明：**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   handle  |    输入参数    |    机械臂句柄。    |
|   mode  |    输出参数    |    0表示快速拖动模式 1表示精准拖动模式。    |

- **返回值：**

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    非六维力版本机械臂，不支持此功能。    |该功能需要六维力版本机械臂，如果机械臂为六维力版本：<br>1.检查连接句柄是否有效：无效的连接句柄会导致API无法正确获取到机械臂末端信息；<br>2.检查机械臂版本信息：确保机械臂型号为六维力版本，避免误使用标准末端的机械臂升级包给机械臂升级导致该功能不可用。|

- **使用示例**
  
```C
int mode;
ret = rm_get_force_drag_mode(robot_handle, &mode);
```
