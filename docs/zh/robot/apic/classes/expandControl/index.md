# <p class="hidden">C、C++: </p>通用扩展关节配置`expandControl`

本接口用于扩展关节速度环控制、位置环控制及状态获取。

## 扩展关节状态获取`rm_get_expand_state()`

- **方法原型：**

```C
int rm_get_expand_state(rm_robot_handle * handle,rm_expand_state_t * state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_expand_state_t](../../struct/expandState/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `state`  |    输入参数    |    扩展关节状态结构体。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 查询扩展关节状态
rm_expand_state_t state;
int result = rm_get_expand_state(robot_handle, &state);
```

## 扩展关节速度环控制`rm_set_expand_speed()`

- **方法原型：**

```C
int rm_set_expand_speed(rm_robot_handle * handle,int speed)
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
int speed = 50;
ret = rm_set_expand_speed(robot_handle,speed);
```

## 扩展关节位置环控制`rm_set_expand_pos()`

- **方法原型：**

```C
int rm_set_expand_pos(rm_robot_handle * handle,int speed,int pos,int block)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `speed`  |    输入参数    |    速度百分比，1~100。    |
|   `pos`  |    输入参数    |    扩展关节角度，单位度。    |
|   `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 默认线程模式为多线程，以20%的速度阻塞运行到200mm的位置
int ret;
int target = 200;
int speed = 20;
int block = 1;
ret = rm_set_expand_pos(robot_handle,speed,target,block);
```
