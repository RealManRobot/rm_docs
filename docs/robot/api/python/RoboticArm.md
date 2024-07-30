# RoboticArm类

机械臂连接、断开、日志设置等操作。

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 构造函数：初始化线程模式`__init__()`

- **方法原型：**

```python
__init__(self, mode: rm_thread_mode_e = None):
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   mode  |    `rm_robot_arm_model_e`    |    RM_SINGLE_MODE_E：单线程模式，单线程非阻塞等待数据返回；RM_DUAL_MODE_E：双线程模式，增加接收线程监测队列中的数据； RM_TRIPLE_MODE_E：三线程模式，在双线程模式基础上增加线程监测UDP接口数据。    |

- **使用示例**
  
```python

```

## 创建机械臂对象`rm_create_robot_arm()`

- **方法原型：**

```python
rm_create_robot_arm(self, ip: str, port: int, level: int = 3, log_func: CFUNCTYPE = None) -> rm_robot_handle:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 删除机械臂对象`rm_delete_robot_arm()`

- **方法原型：**

```python
rm_delete_robot_arm(self) -> int:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 关闭所有机械臂连接`rm_destory()`

>销毁所有线程。

- **方法原型：**

```python
rm_destory(self) -> int:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 保存日志到文件`rm_set_log_save()`

- **方法原型：**

```python
rm_set_log_save(self, path) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 设置真实/仿真模式`rm_set_arm_run_mode()`

- **方法原型：**

```python
rm_set_arm_run_mode(self, mode: int) -> int:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 获取真实/仿真模式`rm_get_arm_run_mode()`

- **方法原型：**

```python
rm_get_arm_run_mode(self) -> tuple[int, int]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 获取机械臂基本信息`rm_get_robot_info()`

- **方法原型：**

```python
rm_get_robot_info(self) -> tuple[int, dict[str, any]]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 注册机械臂事件回调函数`rm_get_arm_event_call_back()`

- **方法原型：**

```python
rm_get_arm_event_call_back(self, event_callback: rm_event_callback_ptr):
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```

## 注册UDP机械臂实时状态主动上报信息回调函数`rm_realtime_arm_state_call_back()`

- **方法原型：**

```python
rm_realtime_arm_state_call_back(self, arm_state_callback):
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
||||

- **使用示例**
  
```python

```
