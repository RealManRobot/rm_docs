# <p class="hidden">JSON 协议：</p>坐标系指令集

## 工具坐标系

本命令集用于配置机械臂的工具坐标系，包含计算工具坐标系、输入工具坐标系、切换当前工具坐标系、删除工具坐标系、修改工具坐标系、设置和查询工具坐标系包络参数等。

### 自动计算工具坐标系（标定参考点）`set_auto_tool_frame`

将当前机械臂的末端点设置为计算工作坐标系的参考点，参考点基于六点法的要求进行设置。

::: warning 注意
机械臂只能存储 10 个工具坐标系，若超过 10 个，则新建立工具不成功
:::

- **输入参数**

| 参数                  | 类型     | 说明               |
| :-------------------- | :------- | :----------------- |
| `set_auto_tool_frame` | `string` | 一键设置关节限位。 |
| `point_num`           | `int`    | 1~6 为标定参考点。 |

- **输出参数**

| 参数              | 类型   | 说明                                  |
| :---------------- | :----- | :------------------------------------ |
| `auto_tool_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

::: info 备注
机械臂上电初始化后，默认无负载。以下指令需逐行运行
:::

实现：自动计算工具坐标系，标定当前位置为参考点 6。

```json
{"command":"set_auto_tool_frame","point_num":1}{"command":"set_auto_tool_frame","point_num":2}{"command":"set_auto_tool_frame","point_num":3}{"command":"set_auto_tool_frame","point_num":4}{"command":"set_auto_tool_frame","point_num":5}{"command":"set_auto_tool_frame","point_num":6}
```

**输出**  

```json
{
    "command": "set_auto_tool_frame",
    "auto_tool_frame": true
}
```

### 自动计算工具坐标系（自动计算生成工具）`set_auto_tool_frame`

通过[自动计算工具坐标系（标定参考点）](#自动计算工具坐标系-标定参考点-set-auto-tool-frame)成功标定 6 个参考点之后，运行此指令配置工具坐标系。

> 自动计算工具坐标系（六点法）：机械臂只能存储 10 个工具坐标系，若超过 10 个，则新建立工具不成功。

- **输入参数**

| 参数                  | 类型     | 说明                                 |
| :-------------------- | :------- | :----------------------------------- |
| `set_auto_tool_frame` | `string` | 自动计算工具坐标系。                 |
| `tool_name`           | `string` | 工具坐标系名称，不能超过 10 个字符。 |
| `payload`             | `int`    | 单位：g，最高不超过 5000g            |
| `position`            | `int`    | 质心位置，单位：mm，精度 0.001mm     |

- **输出参数**

| 参数              | 类型   | 说明                                  |
| :---------------- | :----- | :------------------------------------ |
| `auto_tool_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**
  **输入**

::: info 备注
机械臂上电初始化后，默认无负载
:::

实现：自动计算工具坐标系，名称为 tool2_frame，末端负载 5000g，质心位置：x-1mm,y-2mm,z-3mm。

```json
{"command":"set_auto_tool_frame","tool_name":"tool_frame","payload":5000,"position":[1000,2000,3000]}
```

**输出**  

```json
{
    "command": "set_auto_tool_frame",
    "auto_tool_frame": true
}
```

### 手动输入工具坐标系`set_manual_tool_frame`

::: tip 提示
手动输入工具坐标系：机械臂只能存储 10 个工具坐标系，若超过 10 个，则新建立工具不成功
:::

- **输入参数**

| 参数                  | 类型  | 说明                                 |
| :-------------------- | :---- | :----------------------------------- |
| `set_manual_tool_frame` | `int` | 自动计算工具坐标系。                 |
| `tool_name`           | `int` | 工具坐标系名称，不能超过 10 个字符。 |
| `payload`             | `int` | 单位：g，最高不超过 5000g            |
| position              | `int` | 质心位置，单位：mm，精度 0.001mm     |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `manual_tool_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

::: info 备注
机械臂上电初始化后，默认无负载
:::

实现：手动输入工具坐标系，配置参数如下：

名称：tool_frame;<br>
工具位置：x：0.1m，y:0.2m，z：0.03m;<br>
位置精度：0.001mm工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad;<br>
姿态精度：0.001rad末端负载5000g;<br>
质心位置：x-1mm,y-2mm,z-3mm;<br>
payload：单位：g，最高不超过5000g；<br>
position：质心位置，单位：mm，精度0.001mm。

```json
{"command":"set_manual_tool_frame","tool_name":"tool_frame","tool_pose":[100000,200000,30000,400,500,600],"payload":5000,"position":[1000,2000,3000]}
```

**输出**  

```json
{
    "command": "set_manual_tool_frame",
    "manual_tool_frame": true
}
```

### 切换当前工具坐标系`set_change_tool_frame`

- **输入参数**

| 参数                    | 类型     | 说明                                 |
| :---------------------- | :------- | :----------------------------------- |
| `set_change_tool_frame` | `string` | 切换当前工具坐标系。                 |
| `tool_name`             | `string` | 工具坐标系名称，不能超过 10 个字符。 |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `change_tool_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：切换当前工具坐标系，名称 tool2_frame。

```json
{ "command": "set_change_tool_frame", "tool_name": "tool2_frame" }
```

**输出**  

```json
{
    "command": "set_change_tool_frame",
    "change_tool_frame": true
}
```

### 删除工具坐标系`set_delete_tool_frame`

- **输入参数**

| 参数                    | 类型     | 说明                                 |
| :---------------------- | :------- | :----------------------------------- |
| `set_delete_tool_frame` | `string` | 删除工具坐标系。                     |
| `tool_name`             | `string` | 工具坐标系名称，不能超过 10 个字符。 |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `delete_tool_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：删除工具坐标系，名称 tool2_frame。

```json
{ "command": "set_delete_tool_frame", "tool_name": "tool2_frame" }
```

**输出**  

```json
{
    "command": "set_delete_tool_frame",
    "delete_tool_frame": true
}
```

### 修改工具坐标系`update_tool_frame`

修改工具坐标系。

- **输入参数**

| 参数                | 类型     | 说明                                 |
| :------------------ | :------- | :----------------------------------- |
| `update_tool_frame` | `string` | 修改工具坐标系参数。                 |
| `tool_name`         | `string` | 工具坐标系名称，不能超过 10 个字符。 |
| `tool_pose`         | `int`    | 工具相对机械臂末端法兰中心位姿       |

- **输出参数**

| 参数           | 类型   | 说明                                  |
| :------------- | :----- | :------------------------------------ |
| `update_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：指定要修改的工具坐标系，配置参数如下：

名称：tool_frame；<br>
工具位置：x：0.1m，y:0.2m，z：0.03m；<br>
位置精度：0.001mm；<br>
工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad；<br>
姿态精度：0.001rad；<br>
末端负载5000g；<br>
质心位置：x-1mm,y-2mm,z-3mm；<br>
payload：单位：g，最高不超过5000g；<br>
position：质心位置，单位：mm，精度0.001mm。<br>

```json
{"command":"update_tool_frame","tool_name":"tool_frame","tool_pose":[100000,200000,30000,400,500,600],"payload":5000,"position":[1000,2000,3000]}
```

**输出**  

```json
{
    "command": "update_tool_frame",
    "update_state": true
}
```

### 设置工具坐标系包络参数`set_tool_envelope`

- **输入参数**

| 参数                | 类型     | 说明                                                                         |
| :------------------ | :------- | :--------------------------------------------------------------------------- |
| `set_tool_envelope` | `string` | 设置工具坐标系包络参数。                                                     |
| `tool_name`         | `string` | 控制器中已存在的工具坐标系名称，如果不存在该字段，则为临时设置当前包络参数。 |
| `list`              | `int`    | 包络参数列表，每个工具最多支持 5 个包络球，可以没有包络。                    |
| `name`              | `string` | 工具包络球体的名称，1-10 个字节，支持字母数字下划线。                        |
| `radius`            | `int`    | 工具包络球体的半径，单位 0.001m。                                            |
| `x`                 | `int`    | 工具包络球体球心基于末端法兰坐标系的 X 轴坐标，单位 0.001m。                 |
| `y`                 | `int`    | 工具包络球体球心基于末端法兰坐标系的 Y 轴坐标，单位 0.001m。                 |
| `z`                 | `int`    | 工具包络球体球心基于末端法兰坐标系的 Z 轴坐标，单位 0.001m。                 |

- **输出参数**

| 参数        | 类型   | 说明                                  |
| :---------- | :----- | :------------------------------------ |
| `set_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：名为 left 工具包络球的半径为 0.02m,球心 x 坐标 0.01m,球心 y 坐标 0.02m,z 坐标 0.03m;<br>
名为 right 工具包络球的半径为 0.03m,球心 x 坐标 0.03m,球心 y 坐标 0.04m,z 坐标 0.05m;<br>
名为 center 工具包络球的半径为 0.04m,球心 x 坐标 0.05m,球心 y 坐标 0.06m,z 坐标 0.07m;<br>

```json
{"command":"set_tool_envelope","tool_name":"test","list":[{"name":"left","radius":20,"x":10,"y":20,"z":30},{"name":"right","radius":30,"x":30,"y":40,"z":50},{"name":"center","radius":40,"x":50,"y":60,"z":70}]}
```

**输出**  

```json
{
    "command": "set_tool_envelope",
    "set_state": true
}
```

### 查询工具坐标系包络参数`get_tool_envelope`

- **输入参数**

| 参数                | 类型     | 说明                                                                 |
| :------------------ | :------- | :------------------------------------------------------------------- |
| `get_tool_envelope` | `string` | 查询工具的包络参数.                                                  |
| `tool_name`         | `string` | 指定要查询的工具坐标系名称，如果不存在该字段，则为查询当前包络参数。 |

- **输出参数**

| 参数        | 类型     | 说明                                                                                        |
| :---------- | :------- | :------------------------------------------------------------------------------------------ |
| `tool_name` | `string` | 控制器中已存在的工具坐标系名称。                                                            |
| `list`      | `array`  | 包络参数列表，每个工具最多支持 5 个包络球，可以没有包络                                     |
| `name`      | `string` | 工具包络球体的名称，1-10 个字节，支持字母数字下划线                                         |
| `radius`    | `number` | 工具包络球体的半径，单位 0.001m，示例中 left 的半径为 0.02m                                 |
| `x`         | `number` | 工具包络球体球心基于末端法兰坐标系的 X 轴坐标，单 0.001m，示例中 left 的球心 x 坐标 0.01m   |
| `y`         | `number` | 工具包络球体球心基于末端法兰坐标系的 Y 轴坐标，单位 0.001m，示例中 left 的球心 y 坐标 0.02m |
| `z`         | `number` | 工具包络球体球心基于末端法兰坐标系的 Z 轴坐标，单位 0.001m，示例中 left 的球心 z 坐标 0.03m |

- **代码示例**

**输入**  

实现：查询名为 tool1 工具坐标系的包络参数。

```json
{"command":"get_tool_envelope","tool_name":"tool1"}
```

**输出**  

查询结果:

```json
{
    "command": "get_tool_envelope",
    "tool_name": "test",
    "list": [
        {
            "name": "left",
            "radius": 20,
            "x": 10,
            "y": 20,
            "z": 30
        },
        {
            "name": "right",
            "radius": 30,
            "x": 30,
            "y": 40,
            "z": 50
        },
        {
            "name": "center",
            "radius": 40,
            "x": 50,
            "y": 60,
            "z": 70
        }
    ]
}
```

查询失败:

```json
{
    "command": "get_tool_envelope",
    "get_state": false
}
```

### 查询当前工具坐标系`get_current_tool_frame`

- **输入参数**

| 参数                     | 类型     | 说明           |
| :----------------------- | :------- | :------------- |
| `get_current_tool_frame` | `string` | 查询当前工具坐标系。 |

- **输出参数**

| 参数                 | 类型     | 说明               |
| :------------------- | :------- | :----------------- |
| `current_tool_frame` | `string` | 返回当前工具信息。 |

- **代码示例**

**输入**  

实现：查询当前工具坐标系。

```json
{ "command": "get_current_tool_frame" }
```

**输出**  

返回当前工具坐标系信息,如下：

工具名称：tool2_frame；<br>
工具位置：x：0.1m，y:0.2m，z：0.03m；<br>
位置精度：0.001mm；<br>
工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad；<br>
姿态精度：0.001rad；<br>
重量：payload：5kg精度0.001kg；<br>
质心：position：1mm精度0.001mm。

```json
{
    "state": "current_tool_frame",
    "tool_name": "tool2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ],
    "payload": 5000,
    "position": [
        1000,
        2000,
        3000
    ]
}
```

### 查询已有所有工具名称`get_total_tool_frame`

- **输入参数**

| 参数                   | 类型     | 说明                   |
| :--------------------- | :------- | :--------------------- |
| `get_total_tool_frame` | `string` | 查询已有所有工具名称。 |

- **输出参数**

| 参数               | 类型     | 说明               |
| :----------------- | :------- | :----------------- |
| `total_tool_frame` | `string` | 返回所有工具名称。 |

- **代码示例**

**输入**  

实现：查询已有所有工具名称。<br>

```json
{ "command": "get_total_tool_frame" }
```

**输出**  

返回所有工具名称，共 10 个。工具名称：base_tool1，base_tool2，其中“NULL”为空坐标系，未建立。

```json
{
  "state":"total_tool_frame",
  "tool_names":["base_tool1","base_tool2"….,"NULL"]
}
```

### 查询指定工具坐标系`get_tool_frame`

- **输入参数**

| 参数             | 类型     | 说明               |
| :--------------- | :------- | :----------------- |
| `get_tool_frame` | `string` | 查询指定工具信息。 |
| `tool_name`      | `string` | 工具名称。         |

- **输出参数**

| 参数               | 类型    | 说明               |
| :----------------- | :------ | :----------------- |
| `given_tool_frame` | `sting` | 返回指定工具信息。 |

- **代码示例**

**输入**  

实现：查询指定工具信息。

```json
{ "command": "get_tool_frame", "tool_name": "tool" }
```

**输出**  

返回指定工具信息，如下：

工具名称：tool2_frame,<br>
工具位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm<br>
工具姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad<br>
重量：payload：5kg精度0.001kg<br>
质心：position：1mm精度0.001mm。

成功

```json
{
    "state": "given_tool_frame",
    "tool_name": "tool2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ],
    "payload": 5000,
    "position": [
        1000,
        2000,
        3000
    ]
}
```

失败：

```json
{
    "command": "get_tool_frame",
    "get_state": false
}
```

## 工作坐标系

本命令集用于配置机械臂的工作坐标系，包含手动设置坐标系、输入工具坐标系、切换当前工具坐标系、删除工具坐标系、修改工具坐标系等。

### 自动设置工作坐标系`set_auto_work_frame`

::: tip 提示
机械臂只能存储 10 个工作坐标系，若超过 10 个，则新建立坐标系不成功
:::

- **输入参数**

| 参数                  | 类型     | 说明                                                                                       |
| :-------------------- | :------- | :----------------------------------------------------------------------------------------- |
| `set_auto_work_frame` | `string` | 自动设置工作坐标系。                                                                       |
| `frame_name`          | `string` | 工作坐标系名称，不能超过 10 个字符                                                         |
| `point_num`           | `int`    | 参考点 1~3 代表工作坐标系原点、X 轴一点和 Y 轴上一点，4 代表根据前三个标定点计算工作坐标系 |

- **输出参数**

| 参数              | 类型   | 说明                                  |
| :---------------- | :----- | :------------------------------------ |
| `auto_work_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**
  
**输入**  

实现：设置工作坐标系，名称 work2_frame，将当前位置标定为参考点 3（Y 轴上一点）。

```json
{"command":"set_auto_work_frame","frame_name":"work_frame","point_num":3}
```

**输出**  

```json
{
    "command": "set_auto_work_frame",
    "auto_work_frame": true
}
```

### 手动输入工作坐标系`set_manual_work_frame`

::: tip 提示
机械臂只能存储 10 个工作坐标系，若超过 10 个，则新建立坐标系不成功
:::

- **输入参数**

| 参数                    | 类型     | 说明                               |
| :---------------------- | :------- | :--------------------------------- |
| `set_manual_work_frame` | `string` | 手动输入工作坐标系。               |
| `frame_name`            | `string` | 工作坐标系名称，不能超过 10 个字符 |
| `frame_pose`            | `int`    | 工作位置                           |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `manual_work_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

实现：手动输入工作坐标系，配置参数如下：

名称：work_frame；<br>
坐标系位置：x：0.1m，y:0.2m，z：0.03m；<br>
位置精度：0.001mm；<br>
坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad；<br>
姿态精度：0.001rad。<br>

```json
{"command":"set_manual_work_frame","frame_name":"work_frame","frame_pose":[100000,200000,30000,400,500,600]}
```

**输出**  

```json
{
    "command": "set_manual_work_frame",
    "manual_work_frame": true
}
```

### 切换当前工作坐标系`set_change_work_frame`

- **输入参数**

| 参数                    | 类型     | 说明                               |
| :---------------------- | :------- | :--------------------------------- |
| `set_change_work_frame` | `string` | 切换当前工作坐标系。               |
| `frame_name`            | `string` | 工作坐标系名称，不能超过 10 个字符 |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `change_work_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

切换当前工作坐标系，名称 work2_frame。

```json
{"command":"set_change_work_frame","frame_name":"work2_frame"}
```

**输出**  

```json
{
    "command": "set_change_work_frame",
    "change_work_frame": true
}
```

### 删除工作坐标系`set_delete_work_frame`

- **输入参数**

| 参数                    | 类型     | 说明                               |
| :---------------------- | :------- | :--------------------------------- |
| `set_delete_work_frame` | `string` | 删除工作坐标系。                   |
| `frame_name`            | `string` | 工作坐标系名称，不能超过 10 个字符 |

- **输出参数**

| 参数                | 类型   | 说明                                  |
| :------------------ | :----- | :------------------------------------ |
| `delete_work_frame` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

删除工作坐标系，名称 work2_frame。

```json
{"command":"set_delete_work_frame","frame_name":"work2_frame"}
```

**输出**  

```json
{
    "command": "set_delete_work_frame",
    "delete_work_frame": true
}
```

### 修改工作坐标系`update_work_frame`

- **输入参数**

| 参数                | 类型     | 说明                               |
| :------------------ | :------- | :--------------------------------- |
| `update_work_frame` | `string` | 修改工作坐标系。                   |
| `frame_name`        | `string` | 工作坐标系名称，不能超过 10 个字符 |
| `frame_pose`        | `string` | 工作位置                           |

- **输出参数**

| 参数           | 类型   | 说明                                  |
| :------------- | :----- | :------------------------------------ |
| `update_state` | `bool` | `ture`：设置成功；`false`：设置失败。 |

- **代码示例**

**输入**  

 实现：修改指定工作坐标系，配置参数如下：

 名称:work_frame;<br>
 坐标系位置：x：0.1m，y:0.2m，z：0.03m;<br>
 位置精度：0.001mm;<br>
 坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad;<br>
 姿态精度：0.001rad。<br>

```json
{"command":"update_work_frame","frame_name":"work_frame","frame_pose":[100000,200000,30000,400,500,600]}
```

**输出**  

```json
{
    "command": "update_work_frame",
    "update_state": true
}
```

### 查询当前工作坐标系`get_current_work_frame`

- **输入参数**

| 参数                     | 类型     | 说明                 |
| :----------------------- | :------- | :------------------- |
| `get_current_work_frame` | `string` | 查询当前工作坐标系。 |

- **输出参数**

| 参数                 | 类型     | 说明                     |
| :------------------- | :------- | :----------------------- |
| `current_work_frame` | `string` | 返回当前工作坐标系信息。 |

- **代码示例**

**输入**  

实现：查询当前工作坐标系。

```json
{ "command": "get_current_work_frame" }
```

**输出**  

返回当前工作坐标系信息，如下：

坐标系名称：work2_frame，<br>
坐标系位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm；<br>
坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad。

```json
{
    "state": "current_work_frame",
    "frame_name": "work2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ]
}
```

### 查询已有所有工作坐标系名称`get_total_work_frame`

- **输入参数**

| 参数                   | 类型     | 说明                         |
| :--------------------- | :------- | :--------------------------- |
| `get_total_work_frame` | `string` | 查询已有所有工作坐标系名称。 |

- **输出参数**

| 参数               | 类型     | 说明                     |
| :----------------- | :------- | :----------------------- |
| `total_work_frame` | `string` | 返回所有工作坐标系名称。 |

- **代码示例**

**输入**  

实现：查询已有所有工作坐标系名称。

```json
{ "command": "get_total_work_frame" }
```

**输出**  

返回所有工作坐标系名称，坐标系名称：work1,work2,…。

```json
{
  "state":"total_work_frame",
  "frame_names":["work1","work2","NULL"]
}
```

### 查询指定工作坐标系`get_work_frame`

- **输入参数**

| 参数             | 类型     | 说明                 |
| :--------------- | :------- | :------------------- |
| `get_work_frame` | `string` | 查询指定工作坐标系。 |
| `frame_name`     | `string` | 坐标系名称           |

- **输出参数**

| 参数               | 类型     | 说明                 |
| :----------------- | :------- | :------------------- |
| `given_work_frame` | `string` | 返回指定坐标系信息。 |

- **代码示例**

**输入**  

实现：查询指定工作坐标系。

```json
{ "command": "get_work_frame", "frame_name": "work1" }
```

**输出**  

返回指定坐标系信息，如下：

坐标系名称：work2_frame，<br>
坐标系位置：x：0.1m，y:0.2m，z：0.03m，位置精度：0.001mm<br>
坐标系姿态：rx：0.4rad，ry：0.5rad，rz：0.6rad，姿态精度：0.001rad。

成功：

```json
{
    "state": "given_work_frame",
    "frame_name": "work2_frame",
    "pose": [
        100000,
        200000,
        30000,
        400,
        500,
        600
    ]
}
```

失败：

```json
{
    "command": "get_work_frame",
    "get_state": false
}
```
