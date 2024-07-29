## 4.14系统安装方式及关节版本信息

睿尔曼机械臂可支持不同形式的安装方式，但是安装方式不同，机器人的动力学模型参数和坐标系的方向也有所差别。

### （1）设置安装方式参数

| 功能描述 | 设置安装方向参数                       |
| :--- | :----------------------------- |
| 参数说明 | `set_install_pose`：设置机械臂基座安装方式 |
| 命令格式 | {s\:s,s:\[i,i,i]}              |

**使用示例：**
说明：

```json
{"command":"set_install_pose","pose":[0,90,45]}
```

**返回示例：**

```json
{"command":"set_install_pose","set_state":true}设置成功
{"command":"set_install_pose","set_state":false}设置失败
```

### （2）查询关节软件版本号

| 功能描述 | 查询关节软件版本号                              |
| :--- | :------------------------------------- |
| 参数说明 | `get_joint_software_version`：获取关节软件版本号 |
| 命令格式 | {s\:s}                                 |

**使用示例：**
说明：

```json
{"command":"get_joint_software_version"}
```

**返回示例：**

```json
{"state":"joint_software_version","version":[531,531,531,531,531,531]}
531为uint16类型，转化为16进制为：0x0213，则当前关节的版本号为2.13

```

### （3）查询末端接口板软件版本号

| 功能描述 | 查询末端接口板软件版本号                             |
| :--- | :--------------------------------------- |
| 参数说明 | `get_tool_software_version`：获取末端接口板软件版本号 |
| 命令格式 | {s\:s}                                   |

**使用示例：**
说明：

```json
{"command":"get_tool_software_version"}
```

**返回示例：**

```json
{"state":"tool_software_version","version":531}
531为uint16类型，转化为16进制为：0x0213，则当前末端接口板的版本号为2.13
```
