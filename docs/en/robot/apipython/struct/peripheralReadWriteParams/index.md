# <p class="hidden">Python: </p>Peripheral Data Read and Write Parameter Structure `rm_peripheral_read_write_params_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `port`  |  `int`  |  Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP device.  |
|  `address`  |  `int`  |  Data starting address.  |
|  `device`  |  `int`  |  Peripheral device address.  |
|  `num`  |  `int`  |  Volume of data.  |

## Constructor function

```Python
rm_ctypes_wrap.rm_peripheral_read_write_params_t.__init__(self, port = None, address = None, device = None, num = None)
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `port`  |  `int, optional`  |  Communication port, 0: controller RS485 port, 1: end interface board RS485 port, 3: controller ModbusTCP device, default: None.  |
|  `address`  |  `int, optional`  |  Data starting address, default: None.  |
|  `device`  |  `int, optional`  |  Peripheral device address, default: None.  |
|  `num`  |  `int, optional`  |  Volume of data, default: None.  |
