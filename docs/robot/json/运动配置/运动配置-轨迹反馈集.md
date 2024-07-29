# 运动配置-轨迹反馈集

<div style="height: 2px; background-image: linear-gradient(to right, #ccc, #ccc); margin: 1em 0;"></div>

## 当前轨迹结束返回标志

**参数说明：**

| 参数                       | 类型 | 说明                                                         |
| :------------------------- | :--- | :----------------------------------------------------------- |
| `current_trajectory_state` |   `string`   | 当前轨迹结束返回标志。                                       |
| `device`                   |   `int`   | 0：关节、1：夹爪、2：灵巧手、3：升降机构、4：扩展关节、其他：保留。 |

**示例：**
实现：当前轨迹到达目标。

```json
{"state":"current_trajectory_state","trajectory_state":true,"device":0}
```
