# 自碰撞安全检测（I系列）

I系列机械臂支持自碰撞安全检测，自碰撞安全检测使能状态下，可确保在轨迹规划、示教等运动过程中机械臂的各个部分不会相互碰撞，需要注意的是，以上自碰撞安全检测功能目前只在仿真模式下生效，用于进行预演轨迹与轨迹优化。



## 设置自碰撞安全检测使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_self_collision_enable|`string` |设置自碰撞安全检测使能状态。|

**使用示例：**
实现：设置当前虚拟墙参数。

```json
{"command":"set_self_collision_enable","set_enable":false}
```

**返回示例 ：**

```json
{"command":"set_self_collision_enable","set_state":true}
```

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|set_state|`bool`|true 成功  false  失败。|

## 获取自碰撞安全检测使能状态

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|get_self_collision_enable|`string` |获取自碰撞安全检测使能状态。|

**使用示例：**
实现：设置当前虚拟墙参数。

```json
{"command":"get_self_collision_enable"}
```

**返回示例 ：**

```json
{"command":"get_self_collision_enable","enable_state":false}
```

**参数说明：**
|   参数    |   类型    |   说明    |
|   :--     |   :--     |   :--     |
|enable_state|bool|`true` 使能  false  禁使能。|
