---
title: "升降机构控制LiftControl"
tags: ""
---

# 升降机构控制`LiftControl`

可用于升降机构控制等，可以查阅[JointConfigSettings继承关系图](../继承关系图/关节配置JointConfigSettings.md)了解与其相关的类的关系。下面是升降机构控制`LiftControl`的详细成员函数说明，包含了方法原型、参数说明、返回值说明和使用示例。

---
## 升降机构速度开环控制`rm_set_lift_speed()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.LiftControl.rm_set_lift_speed (self, int speed)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 速度百分比，-100~100</br>1. speed<0：升降机构向下运</br>2. speed>0：升降机构向上运动</br>3. speed=0：升降机构停止运动|



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 升降机构位置闭环控制`rm_set_lift_height()`

- **方法原型：**
```python
int Robotic_Arm.rm_robot_interface.LiftControl.rm_set_lift_height (self, int speed, int height, int block)
```

- **参数说明:**

| 名称        | 类型    | 说明                                   |
| :-------- | :---- | :----------------------------------- |
| speed      | `int` | 速度百分比，1~100|
| speed      | `int` | 目标高度，单位 mm，范围：0~2600|
|   height  |    `int`    |   阻塞设置</br>多线程模式：</br>0：非阻塞模式，发送指令后立即返回。</br> 1：阻塞模式，等待机械臂到达目标位置或规划失败后才返回。</br>单线程模式</br>0：非阻塞模式。</br>其他值：阻塞模式并设置超时时间，单位为秒。 |



- **返回值:** </br>
函数执行的状态码

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

- **使用使用示例**
  
```python

```

## 获取升降机构状态`rm_set_lift_height()`

- **方法原型：**
```python
tuple[int, dict[str, any]] Robotic_Arm.rm_robot_interface.LiftControl.rm_get_lift_state (self)
```

- **返回值:** </br>
tuple[int,dict[str,any]]: 包含两个元素的元组

1. 获取到的升降机构状态字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   0  |    `int`   |    成功    |
|   1  |    `int`   |   控制器返回false，参数错误或机械臂状态发生错误。    |
|  -1  |    `int`   |   数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`   |   数据接收失败，通信过程中出现问题或者控制器长久没有返回。    |
|  -3  |    `int`   |   返回值解析失败，接收到的数据格式不正确或不完整。   |

2. 获取到的升降机构状态字典

|   参数    |  类型   |   说明    |
| :--- | :--- | :---|
|   rm_expand_state_t  |    `dict[str,any]`   |    获取到的升降机构状态字典，键为rm_expand_state_t结构体的字段名称    |

- **使用使用示例**
  
```python

```
