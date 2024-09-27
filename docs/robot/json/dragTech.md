# <p class="hidden">JSON 协议：</p>拖动示教指令集

## 拖动示教

睿尔曼机械臂在拖动示教过程中，可记录拖动的轨迹点，并根据用户的指令对轨迹进行复现。

### 拖动示教开始`start_drag_teach`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `start_drag_teach` | `string` |拖动示教开始。|
| `trajectory_record` | `int` |拖动示教时记录轨迹，0-不记录，1-记录轨迹。|

- **代码示例**

**输入**  

```json
{"command":"start_drag_teach","trajectory_record":1}
```

**输出**  

设置成功（true-设置成功，false-设置失败）。

```json
{
    "command": "start_drag_teach",
    "drag_teach": true
}
```

### 拖动示教结束`stop_drag_teach`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `stop_drag_teach` | `string` |拖动示教结束。|

```json
{"command":"stop_drag_teach"}
```

**输出**
设置成功（true-设置成功，false-设置失败）。

```json
{
    "command": "stop_drag_teach",
    "drag_teach": true
}
```

### 开始复合模式拖动示教`start_multi_drag_teach`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `start_multi_drag_teach` | `string` |开始复合模式拖动示教。|
| `frame` | `int` |拖参考坐标系，0-工作坐标系 1-工具坐标系。|
| `free_axes` | `int` |自由驱动方向，前三个元素表示TCP将按照参考坐标系的x、y、z方向平移拖动，后三个元素表示TCP将按照参考坐标系的rx、ry、rz方向旋转拖动。|
| `singular_wall` | `int` |可选参数，仅在六维力模式拖动示教中生效，用于指定是否开启拖动奇异墙，0表示关闭拖动奇异墙，1表示开启拖动奇异墙，若无配置参数，默认启动拖动奇异墙。|

- **代码示例**

**输入**  

```json
{"command":"start_multi_drag_teach","free_axes":[0,1,1,0,1,0],"frame":0,"singular_wall":0}
```

**输出**
设置成功:

```json
{
    "command": "start_multi_drag_teach",
    "set_state": true
}
```

设置失败:

```json
{
    "command": "start_multi_drag_teach",
    "set_state": false
}
```

::: warning 注意
失败的可能原因：

- 当前机械臂非六维力版本（六维力拖动示教）
- 机械臂当前处于IO急停状态
- 机械臂当前处于仿真模式
- 输入参数有误
- 使用六维力模式拖动示教时，当前已处于奇异区
:::

### 轨迹复现开始`run_drag_trajectory`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `run_drag_trajectory` | `string` |轨迹复现开始。|

- **代码示例**

**输入**  

```json
{"command":"run_drag_trajectory"}
```

**输出**
复现成功:

```json
{
    "command": "run_drag_trajectory",
    "run_state": true
}
```

复现失败:

```json
{
    "command": "run_drag_trajectory",
    "run_state": false
}
```

### 轨迹复现暂停`pause_drag_trajectory`

轨迹复现过程中暂停。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `pause_drag_trajectory` | `string` |轨迹复现暂停。|

- **代码示例**

**输入**  

```json
{"command":"pause_drag_trajectory"}
```

**输出**
暂停成功：

```json
{
    "command": "pause_drag_trajectory",
    "pause_state": true
}
```

暂停失败：

```json
{
    "command": "pause_drag_trajectory",
    "pause_state": false
}
```

### 轨迹复现继续`continue_drag_trajectory`

轨迹复现过程中暂停后继续。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `continue_drag_trajectory` | `string` |轨迹复现继续。|

- **代码示例**

**输入**  

```json
{"command":"continue_drag_trajectory"}
```

**输出**
继续成功：

```json
{
    "command": "continue_drag_trajectory",
    "continue_state": true
}
```

继续失败：

```json
{
    "command": "continue_drag_trajectory",
    "continue_state": false
}
```

### 轨迹复现停止`stop_drag_trajectory`

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `stop_drag_trajectory` | `string` |轨迹复现停止。|

- **代码示例**

**输入**  

```json
{"command":"stop_drag_trajectory"}
```

**输出**
停止成功：

```json
{
    "command": "stop_drag_trajectory",
    "stop_state": true
}
```

停止失败：

```json
{
    "command": "stop_drag_trajectory",
    "stop_state": false
}
```

### 运动到轨迹起点`drag_trajectory_origin`

轨迹复现前，必须控制机械臂运动到轨迹起点，如果设置正确，机械臂将以20%的速度运动到轨迹起点。

- **输入参数**

| 功能描述 | 类型 |说明|
| :--- | :--- |:---|
| `drag_trajectory_origin` | `string` |轨迹复现起点。|

- **代码示例**

**输入**  

```json
{"command":"drag_trajectory_origin"}
```

**输出**  

```json
{
    "device": 0,
    "state": "current_trajectory_state",
    "trajectory_connect": 0,
    "trajectory_state": true
}
```

### 获取拖动示教轨迹`save_trajectory`

- **输入参数**

| 参数              | 类型     | 说明               |
| :---------------- | :------- | :----------------- |
| `save_trajectory` | `string` | 保存轨迹。         |
| `trajectory_name` | `int`    | 轨迹要保存的名称。 |

- **输出参数**

| 参数 | 类型 | 说明 |
|:------------------|:-------|:----------------------------------------|
|`point` | `list` | 部拖动示教点位。 |

- **代码示例**

**输入**  

实现：获取刚拖动过的轨迹，在拖动示教后调用。

```json
{"command":"save_trajectory","trajectory_name":"XXX"}
```

**输出**  

```json
{
    "point": [
        30971,
        56885,
        -3416,
        76201,
        47121,
        -4845
    ]
}
```

### 设置电流环拖动示教灵敏度`set_drag_teach_sensitivity`

- **输入参数**

| 参数              | 类型     | 说明               |
| :---------------- | :------- | :----------------- |
| `set_drag_teach_sensitivity` | `string` | 设置电流环拖动示教灵敏度         |

- **代码示例**

**输入**  

说明：grade百分比，取值范围0~100%

```json
{"command":"set_drag_teach_sensitivity","grade":0}
```

**输出**  

设置成功:

```json
{
    "command": "set_drag_teach_sensitivity",
    "set_state": true
}
```

设置失败:

```json
{
    "command": "set_drag_teach_sensitivity",
    "set_state": false
}
```

::: warning 备注
灵敏度取0-100, 数值越小越沉，当设置为100时保持原本拖动灵敏度。
:::

### 获取电流环拖动示教灵敏度`get_drag_teach_sensitivity`

- **输入参数**

| 参数              | 类型     | 说明               |
| :---------------- | :------- | :----------------- |
| `get_drag_teach_sensitivity` | `string` | 获取电流环拖动示教灵敏度         |

- **代码示例**

**输入**  

说明：grade百分比，取值范围0~100%

```json
{"command":"get_drag_teach_sensitivity"}
```

**输出**  

查询成功:

```json
{
    "command": "get_drag_teach_sensitivity",
    "grade": 0
}
```

::: warning 备注
灵敏度取0-100, 数值越小越沉，当设置为100时保持原本拖动灵敏度。
:::
