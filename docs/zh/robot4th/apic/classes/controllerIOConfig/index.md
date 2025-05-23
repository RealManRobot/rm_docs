# <p class="hidden">C、C++: </p>控制器IO配置及查询`controllerIOConfig`

睿尔曼机械臂的控制器为输入和输出模式共用，本接口用于配置机械臂控制器IO模式和IO电源电压。

## 设置数字IO模式`rm_set_IO_mode()`

### C语言版本

- **方法原型：**

```C
int rm_set_IO_mode(rm_robot_handle *handle, int io_num, rm_io_config_t config)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)、[rm_io_config_t](../../struct/ioConfig/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `io_num`  |    输入参数    |    IO 端口号，范围：1~4。    |
|  `config`  |    输入参数    |    数字IO配置结构体。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置数字IO 1号通道实时调速功能复用模式
int io_num = 1;
rm_io_config_t config = (rm_io_config_t){0};
config.io_mode = 14;
config.io_real_time_config_t.speed = 50;
config.io_real_time_config_t.mode = 1;
ret = rm_set_IO_mode (robot_handle, io_num, config);

//设置数字IO 1号通道输入开始功能复用模式
int io_num = 1;
rm_io_config_t config = (rm_io_config_t){0};
config.io_mode = 2;
ret = rm_set_IO_mode (robot_handle, io_num, config);
```

### C++版本

- **方法原型：**

```C
int rm_set_IO_mode(rm_robot_handle *handle, int io_num, int io_mode, int io_speed_mode=0, int io_speed=0)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

| 参数            | 类型               | 说明                                                         |
| :-------------- | :----------------- | :----------------------------------------------------------- |
| `handle`        | 输入参数           | 机械臂句柄。                                                 |
| `io_num`        | 输入参数           | IO 端口号，范围：1~4。                                       |
| `io_mode`       | 输入参数           | 模式，<br>0-通用输入模式；<br>1-通用输出模式；<br>2-输入开始功能复用模式；<br>3-输入暂停功能复用模式；<br>4-输入继续功能复用模式；<br>5-输入急停功能复用模式；<br>6-输入进入电流环拖动复用模式；<br>7-输入进入力只动位置拖动模式（六维力版本可配置）； <br>8-输入进入力只动姿态拖动模式（六维力版本可配置）；<br>9-输入进入力位姿结合拖动复用模式（六维力版本可配置）； <br>10-输入外部轴最大软限位复用模式（外部轴模式可配置）；<br>11-输入外部轴最小软限位复用模式（外部轴模式可配置）；<br>12-输入初始位姿功能复用模式；<br>13-输出碰撞功能复用模式；<br>14-实时调速功能复用模式。 |
| `io_speed_mode` | 输入参数（可缺省） | 1-单次触发模式，当IO拉低速度设置为speed参数值，IO恢复高电平速度设置为初始值。<br>2-连续触发模式，IO拉低速度设置为speed参数值，IO恢复高电平速度维持当前值<br>（io_mode为14时生效） |
| `io_speed`      | 输入参数（可缺省） | 速度取值范围0-100（io_mode为14时生效）                       |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**

```C++
RM_Service robot_service;
//设置数字IO 1号通道输入开始功能复用模式
int io_num = 1;                              
int io_mode = 2;                       
ret = robot_service.rm_set_IO_mode (robot_handle,io_num,io_mode);

//设置数字IO 1号通道实时调速功能复用模式
int io_num = 1;
int io_mode = 14;
int io_speed = 50;
int io_speed_mode = 1;
ret = robot_service.rm_set_IO_mode (robot_handle, io_num, io_mode, io_speed_mode, io_speed);
```

## 设置数字IO输出`rm_set_DO_state()`

- **方法原型：**

```C
int rm_set_DO_state(rm_robot_handle * handle,int io_num,int state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `io_num`  |    输入参数    |    IO 端口号，范围：1~4。    |
|  `state`  |    输入参数    |    IO 状态，1-输出高，0-输出低。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置数字IO 1号通道输出高
int io_num = 1;                              
int state = 1;                       
ret = rm_set_DO_state(robot_handle,io_num,state);
```

## 获取数字IO状态`rm_get_IO_state()`

### C语言版本

- **方法原型：**

```C
int rm_get_IO_state(rm_robot_handle *handle, int io_num, rm_io_get_t* config)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)、[rm_io_get_t](../../struct/ioGetConfig/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `io_num`  |    输入参数    |    IO 端口号，范围：1~4。    |
|  `config`  |    输出参数    |    数字IO状态获取结构体。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//查询数字IO输出1号通道状态
int num = 1;
rm_io_get_t config = (rm_io_get_t){0};
ret = rm_get_IO_state(robot_handle, num, &config); 
```

### C++版本

- **方法原型：**

```C
int rm_get_IO_state(rm_robot_handle *handle, int io_num, int* state, int* mode, int* io_speed_mode=nullptr, int* io_speed=nullptr)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

| 参数            | 类型               | 说明                                                         |
| :-------------- | :----------------- | :----------------------------------------------------------- |
| `handle`        | 输入参数           | 机械臂句柄。                                                 |
| `io_num`        | 输入参数           | IO 端口号，范围：1~4。                                       |
| `state`         | 输入参数           | IO 状态，1-输出高，0-输出低。                                |
| `io_mode`       | 输出参数           | 模式，<br>0-通用输入模式；<br>1-通用输出模式；<br>2-输入开始功能复用模式；<br>3-输入暂停功能复用模式；<br>4-输入继续功能复用模式；<br>5-输入急停功能复用模式；<br>6-输入进入电流环拖动复用模式；<br>7-输入进入力只动位置拖动模式（六维力版本可配置）； <br>8-输入进入力只动姿态拖动模式（六维力版本可配置）；<br>9-输入进入力位姿结合拖动复用模式（六维力版本可配置）； <br>10-输入外部轴最大软限位复用模式（外部轴模式可配置）；<br>11-输入外部轴最小软限位复用模式（外部轴模式可配置）；<br>12-输入初始位姿功能复用模式；<br>13-输出碰撞功能复用模式；<br>14-实时调速功能复用模式。 |
| `io_speed_mode` | 输出参数（可缺省） | 1-单次触发模式，当IO拉低速度设置为speed参数值，IO恢复高电平速度设置为初始值。<br>2-连续触发模式，IO拉低速度设置为speed参数值，IO恢复高电平速度维持当前值<br>（io_mode为14时可查询） |
| `io_speed`      | 输出参数（可缺省） | 速度取值范围0-100（io_mode为14时可查询）                     |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**

```C
RM_Service robot_service;
//查询数字IO输出1号通道状态
int num = 1;
int state;
int mode;
ret = robot_service.rm_get_IO_state(robot_handle,num,&state,&mode); 

//查询数字IO 1号通道实时调速功能复用模式
int io_num = 1;
int io_mode;
int io_speed;
int io_speed_mode;
ret = robot_service.rm_set_IO_mode (robot_handle, io_num, io_mode, io_speed_mode, io_speed);
```

## 获取所有IO输入状态`rm_get_IO_input()`

- **方法原型：**

```C
int rm_get_IO_input(rm_robot_handle * handle,int * DI_state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `DI_state`  |    输出参数    |    1~4端口数字输入状态数组，1：高，0：低，-1：该端口不是输入模式。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//查询所有IO输入状态
int DI_state[4] = {0};
ret = rm_get_IO_input(robot_handle,DI_state);
```

## 获取所有IO输出状态`rm_get_IO_output()`

- **方法原型：**

```C
int rm_get_IO_output(rm_robot_handle * handle,int * DO_state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `DO_state`  |    输出参数    |    1~4端口数字输出状态数组，1：高，0：低，-1：该端口不是输出模式。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//查询所有IO输出状态
int DO_state[4] = {0};
ret = rm_get_IO_output(robot_handle,DO_state);
```

## 设置控制器电源输出`rm_set_voltage()`

- **方法原型：**

```C
int rm_set_voltage(rm_robot_handle * handle,int voltage_type)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `voltage_type`  |    输入参数    |    电源输出类型，0：0V，2：12V，3：24V。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置控制器端电源开机输出输出24V
int type = 3;
ret = rm_set_voltage(robot_handle, type); 
```

## 获取控制器电源输出`rm_get_voltage()`

- **方法原型：**

```C
int rm_get_voltage(rm_robot_handle * handle,int * voltage_type)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `voltage_type`  |    输出参数    |    电源输出类型，0：0V，2：12V，3：24V。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//查询电源输出状态
int voltage_type;
ret = rm_get_voltage(robot_handle,&voltage_type);    
```
