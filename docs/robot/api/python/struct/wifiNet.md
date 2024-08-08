# 无线网络信息结构体`rm_wifi_net_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`channel`|`int`|如果是 AP 模式，则存在此字段，标识 wifi 热点的物理信道号。|
|`ip`|`str`|IP 地址。|
|`mac`|`str`|MAC 地址。|
|`mask`|`str`|子网掩码。|
|`mode`|`str`|'ap' 代表热点模式，'sta' 代表联网模式，'off' 代表未开启无线模式。|
|`password`|`str`|密码。|
|`ssid`|`str`|网络名称 (SSID)。|

## 成员函数

```Python
rm_ctypes_wrap.rm_wifi_net_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。
