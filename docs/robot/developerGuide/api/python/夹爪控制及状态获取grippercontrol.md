---
title: "夹爪控制及状态获取GripperControl"
tags: ""
---

# 夹爪控制及状态获取`GripperControl`

可用于夹爪控制及状态获取。睿尔曼机械臂末端配备了因时机器人公司的 EG2-4C2 手爪，为了便于用户操作手爪，机械臂控制器 对用户开放了手爪的控制协议（手爪控制协议与末端modbus 功能互斥）可以查阅[JointConfigSettings继承关系图](../继承关系图/关节配置JointConfigSettings.md)了解与其相关的类的关系。下面是夹爪控制及状态获取`GripperControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---
## 设置手爪行程，即手爪开口的最大值和最小值，设置成功后会自动保存，手爪断电不丢失`rm_set_gripper_route()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.GripperControl.rm_set_gripper_route (self, int min_route, int max_route)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| min_route      | `int` | 手爪开口最小值，范围：0~1000，无单位量纲 max_route (int): 手爪开口最大值，范围：0~1000，无单位量纲                    |


- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |


- **使用使用示例**
  
```python

```

## 松开手爪，即手爪以指定的速度运动到开口最大处`rm_set_gripper_release()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.GripperControl.rm_set_gripper_release (self, int speed, bool block, int timeout)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 手爪松开速度，范围 1~1000，无单位量纲    |
| block      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| timeout      | `int` | 阻塞模式下超时时间设置，单位：秒    |



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |


- **使用使用示例**
  
```python

```

## 手爪力控夹取，手爪以设定的速度和力夹取，当夹持力超过设定的力阈值后，停止夹取`rm_set_gripper_pick()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.GripperControl.rm_set_gripper_pick (self, int speed, int force, bool block, int timeout)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 手爪夹取速度，范围 1~1000，无单位量纲    |
| force      | `int` | 力控阈值，范围：50~1000，无单位量纲    |
| block      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| timeout      | `int` | 阻塞模式下超时时间设置，单位：秒    |



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |


- **使用使用示例**
  
```python

```

## 手爪持续力控夹取`rm_set_gripper_pick_on()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.GripperControl.rm_set_gripper_pick_on (self, int speed, int force, bool block, int timeout)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 手爪夹取速度，范围 1~1000，无单位量纲    |
| force      | `int` | 力控阈值，范围：50~1000，无单位量纲    |
| block      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| timeout      | `int` | 阻塞模式下超时时间设置，单位：秒    |



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |


- **使用使用示例**
  
```python

```

## 设置手爪达到指定位置`rm_set_gripper_position()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.GripperControl.rm_set_gripper_position (self, int position, bool block, int timeout)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| position      | `int` | 手爪开口位置，范围：1~1000，无单位量纲    |
| block      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| timeout      | `int` | 阻塞模式下超时时间设置，单位：秒    |



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |
|  -4  |    `int`   |    超时   |


- **使用使用示例**
  
```python

```

## 查询夹爪状态`rm_get_gripper_state()`

- **方法原型：**
```python
tuple[int, dict[str, any]] Robotic_Arm.rm_robot_interface.GripperControl.rm_get_gripper_state	(self)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| position      | `int` | 手爪开口位置，范围：1~1000，无单位量纲    |
| block      | `bool` | true 表示阻塞模式，false 表示非阻塞模式    |
| timeout      | `int` | 阻塞模式下超时时间设置，单位：秒    |



- **返回值:** </br>
tuple[int,dict[str, any]]: 包含两个元素的元组 -int 函数执行的状态码

1. int: 函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 夹爪状态信息

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_gripper_state_t  |    `dict[str, any]`   |    夹爪状态信息字典，键为rm_gripper_state_t结构体的字段名称    |

- **使用使用示例**
  
```python

```
