# <p class="hidden">C、C++: </p>升降机构配置`liftControl`

本接口用于升降机构速度开环控制、位置闭环控制及状态获取。

## 升降机构速度开环控制`rm_set_lift_speed()`

- **方法原型：**

```C
int rm_set_lift_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `speed`  |    输入参数    |    速度百分比，-100~100：<br>1. speed<0：升降机构向下运动；<br>2. speed>0：升降机构向上运动；<br>3. speed=0：升降机构停止运动。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置移动平台移动速度50%，向下运动
int speed = -50;
ret = rm_set_lift_speed(robot_handle,speed);
```

## 升降机构位置闭环控制`rm_set_lift_height()`

- **方法原型：**

```C
int rm_set_lift_height(rm_robot_handle * handle,int speed,int height,int block)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `speed`  |    输入参数    |    速度百分比，1~100。    |
|   `height`  |    输入参数    |    目标高度，单位 mm，范围：0~2600。    |
|   `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

::: warning 注意
使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。
:::

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//设置目标高度100mm，升降速度50%，阻塞运动，默认线程模式为多线程模式
int height = 100;
int speed = 50;
ret = rm_set_lift_height(robot_handle,speed,height,1);
```

## 获取升降机构状态`rm_get_lift_state()`

- **方法原型：**

```C
int rm_get_lift_state(rm_robot_handle * handle,rm_expand_state_t * state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_expand_state_t](../../struct/expandState/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `state`   |    输出参数    |    当前升降机构状态。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 查询升降机状态
rm_expand_state_t state;
int result = rm_get_lift_state(robot_handle, &state);
```
