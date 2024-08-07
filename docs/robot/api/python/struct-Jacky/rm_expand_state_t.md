# 读写外设数据参数结构体`rm_peripheral_read_write_params_t`

## 属性

|  属性  |  类型  |  说明  |
| --- | --- | --- |
|  `port`  |  `int`  |  通讯端口0-控制器RS485端口，1-末端接口板RS485接口，3-控制器ModbusTCP设备。  |
|  `address`  |  `int`  |  数据起始地址。  |
|  `device`  |  `int`  |  外设设备地址。  |
|  `num`  |  `int`  |  数据数量。  |

## 成员函数

```Python
def Robotic_Arm.rm_ctypes_wrap.rm_expand_state_t.to_dict (self, recurse = True)
```

