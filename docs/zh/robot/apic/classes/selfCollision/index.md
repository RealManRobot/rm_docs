# <p class="hidden">C、C++: </p>自碰撞安全检测接口配置`selfCollision`

睿尔曼机械臂支持自碰撞安全检测，自碰撞安全检测使能状态下，可确保在轨迹规划、示教等运动过程中机械臂的各个部分不会相互碰撞。通过本接口可以对机械臂自碰撞使能状态进行设置和读取。

## 设置自碰撞安全检测使能状态`rm_set_self_collision_enable()`

- **方法原型：**

```C
int rm_set_self_collision_enable(rm_robot_handle * handle,bool state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `state`  |    输入参数    |    true代表使能，false代表禁使能。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 禁使能自碰撞安全检查
ret = rm_set_self_collision_enable(robot_handle, false);
```

## 获取自碰撞安全检测使能状态`rm_get_self_collision_enable()`

- **方法原型：**

```C
int rm_get_self_collision_enable(rm_robot_handle * handle,bool * state)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `state`  |    输出参数    |    true代表使能，false代表禁使能。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 查询自碰撞安全检测使能状态
bool state;
ret = rm_get_self_collision_enable(robot_handle, &state);
```
