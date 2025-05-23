# <p class="hidden">Python: </p>UDP-Based Real-Time Robotic Arm State Pushing Interface Configuration `rm_realtime_push_config_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `cycle`  |  `int`  |  Broadcast cycle, in multiples of 5 ms. |
|  `enable`  |  `bool`  |  Enable, real-time push. |
|  `port`  |  `int`  |  Broadcast port number.  |
|  `force_coordinate`  |  `int`  |  Frame for external force data (available for force sensor). 0: sensor frame, 1: current work frame, 2: current tool frame. |
|  `ip`  |  `bytes`  |  Custom pushing target IP address.  |
|  `custom_config`  |  [`rm_udp_custom_config_t`](../../struct/udpCustomConfig/index.md)  |  Custom pushing item.  |

## Constructor function

```python
rm_ctypes_wrap.rm_realtime_push_config_t.__init__(self,int  cycle = None,bool  enable = None,int  port = None,int  force_coordinate = None,str  ip = None, custom_config:rm_udp_custom_config_t = None)
```

Constructor function of UDP-based real-time robotic arm state pushing interface configuration.

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `cycle`  |  `int`, `optional`  |  Broadcast cycle, in multiples of 5 ms. Default: None. |
|  `enable`  |  `bool`, `optional`  |  Enable, real-time push. Default: None. |
|  `port`  |  `int`, `optional`  |  Broadcast port number. Default: None.  |
|  `force_coordinate`  |  `int`, `optional`  |  Frame for external force data (available for force sensor). 0: sensor frame, 1: current work frame, 2: current tool frame. |
|  `ip`  |  `str`, `optional`  |  Custom pushing target IP address. Default: None.  |
|  `custom_config`  |  [`rm_udp_custom_config_t`](../../struct/udpCustomConfig/index.md), `optional`  |  Custom pushing item. Default: None.  |

## Member function

```python
rm_realtime_push_config_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
