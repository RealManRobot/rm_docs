# 表示机械臂到位等事件信息的结构体`rm_event_push_data_t`

此结构体用于接收关于机械臂的各类事件信息，如规划轨迹到位、在线编程到位等。通过rm_get_arm_event_call_back接口注册回调函数处理本结构体数据。

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `handle_id`  |  `int`  |  机械臂连接id，用于标识特定的机械臂连接。 |
|  `event_type`  |  `rm_event_type_e`  |  事件类型枚举，表示具体的事件类型：0：无事件；1：当前规划轨迹到位；2：当前在线编程到位。 |
|  `trajectory_state`  |  `bool`  |  表示已到位规划轨迹的状态，true-成功，false-失败。  |
|  `device`  |  `int`  |  表示当前已到位规划的设备标识符，用于进一步区分不同类型的设备。0：关节；1：夹爪；2：灵巧手；3：升降机构；4：扩展关节；其他：保留。 |
|  `trajectory_connect`  |  `int`  |  表示当前已到位规划的轨迹是否连接下一条：0：代表全部到位；1：代表连接下一条轨迹。  |
|  `program_id`  |  `int`  |  当前到位的在线编程。  |

## 构造函数

```python
rm_ctypes_wrap.rm_realtime_push_config_t.__init__(self,int  cycle = None,bool  enable = None,int  port = None,int  force_coordinate = None,str  ip = None)
```

UDP机械臂状态主动上报接口配置构造函数。
**参数说明：**
|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `cycle`  |  `int, optional`  |  广播周期，5ms的倍数。Defaults to None。 |
|  `enable`  |  `bool, optional`  |  使能，是否主动上报。Defaults to None。 |
|  `port`  |  `int, optional`  |  广播的端口号。Defaults to None。  |
|  `force_coordinate`  |  `int, optional`  |  系统外受力数据的坐标系（力传感器版本支持）。 0：传感器坐标系；1：当前工作坐标系；2：当前工具坐标系。 |
|  `ip`  |  `str, optional`  |  自定义的上报目标IP地址。Defaults to None。  |

## 成员函数

```python
rm_realtime_push_config_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
