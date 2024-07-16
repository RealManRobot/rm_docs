---
title: "关节配置JointConfigSettings"
tags: ""
---

# 关节配置`JointConfigSettings`

可用于配置关节的速度、加速度、限位、使能、零位、清除错误等，可以查阅[JointConfigSettings继承关系图](../继承关系图/关节配置JointConfigSettings.md)了解与其相关的类的关系。下面是关节配置`JointConfigSettings`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---
## 设置指定关节的最大速度`rm_set_joint_max_speed()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_max_speed(self, int joint_num, float speed)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   speed  |    `float`   |   关节的最大转速，单位为度每秒(°/s)，定义了关节在运动时所能达到的最大速度。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用使用示例**
  
```python

```

## 设置关节最大加速度`rm_set_joint_max_acc()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_max_acc(self, int joint_num, float acc)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   acc  |    `float`   |   关节最大加速度，单位：°/s²，定义了关节在运动时所能达到的最大加速度。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置关节最小位置限位`rm_set_joint_min_pos()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_min_pos(self, int joint_num, float min_pos)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   min_pos  |    `float`   |   关节最小位置，单位：°。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置关节最大位置限位`rm_set_joint_max_pos()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_max_pos(self, joint_num: int, max_pos: float)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   max_pos  |    `float`   |   关节最大位置，单位：°。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节最大速度`rm_set_joint_drive_max_speed()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_drive_max_speed(self, joint_num: int, speed: float)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   speed  |    `float`   |   关节的最大转速，单位为度每秒(°/s)，定义了关节在运动时所能达到的最大速度。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节最大加速度`rm_set_joint_drive_max_acc()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_drive_max_acc(self, joint_num: int, acc: float)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   acc  |    `float`   |   关节最大加速度，单位：°/s²。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节(驱动器)最小限位`rm_set_joint_drive_min_pos()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_drive_min_pos(self, joint_num: int, min_pos: float)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   min_pos  |    `float`   |   关节最小位置，单位：°。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节(驱动器)最大限位`rm_set_joint_drive_max_pos()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_drive_max_pos(self, joint_num: int, max_pos: float)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   max_pos  |    `float`   |   关节最大位置，单位：°。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`   |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节使能状态`rm_set_joint_en_state()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_en_state(self, joint_num: int, en_state: int)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |
|   en_state  |    `int`   |   1：上使能 0：掉使能。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 设置指定关节当前位置为零位`rm_set_joint_zero_pos()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_zero_pos(self, joint_num: int)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 清除指定关节错误代码`rm_set_joint_clear_err()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_set_joint_clear_err(self, joint_num: int)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_num  |    `int`    |    关节的序号，取值范围为1到7，表示机械臂上不同关节的编号。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```

## 恢复关节限位的出厂设置`rm_auto_set_joint_limit()`

- **方法原型：**

```python
int Robotic_Arm.rm_robot_interface.JointConfigSettings.rm_auto_set_joint_limit(self, mode: int)
```

- **参数说明:**

|   名称    |   类型    |   说明    |
| :--- | :--- | :--- |
|   mode  |    `int`    |    1-正式模式，各关节限位为规格参数中的软限位和硬件限位。    |

- **返回值:**</br>
int: 函数执行的状态码

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功    |
|   1  |    `int`    |   控制器返回设置失败，可能是参数错误或控制器发生错误。    |
|   -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|   -2  |    `int`   | 数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|   -3  |    `int`   |   返回值解析失败，控制器返回的数据格式不正确或无法识别。    |

- **使用示例**
  
```python

```
