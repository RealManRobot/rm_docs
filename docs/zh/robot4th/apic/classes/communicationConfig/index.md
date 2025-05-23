# <p class="hidden">C、C++: </p>通讯内容配置`communicationConfig`

机械臂控制器可通过网口、RS232-USB 接口和 RS485 接口与用户通信，本接口为配置响应的通信模式。

## 获取有线网卡信息`rm_get_wired_net()`

获取有线网卡信息，未连接有线网卡则会返回无效数据。

- **方法原型：**

```C
int rm_get_wired_net(rm_robot_handle * handle,char * ip,char * mask,char * mac)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `ip`  |    输入参数    |    网络地址。    |
|  `mask`  |    输入参数    |    子网掩码。    |
|  `mac`  |    输入参数    |    MAC地址。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
//查询有线网卡网络信息
char ip[128];
char mask[128];
char mac[128];
ret = rm_get_wired_net(robot_handle,ip,mask,mac);
```

## 恢复网络出厂设置`rm_set_net_default()`

- **方法原型：**

```C
int rm_set_net_default(rm_robot_handle * handle)
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
//恢复网络出厂设置
ret = rm_set_net_default(robot_handle);
```
