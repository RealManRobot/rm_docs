# <p class="hidden">Python: </p>用于发送编程文件信息的结构体`rm_send_project_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `project_path`  |  `c_char * 300`  |  下发文件路径文件路径及名称。  |
|  `project_path_len`  |  `int`  |  路径及名称长度。  |
|  `plan_speed`  |  `int`  |  规划速度比例系数。  |
|  `only_save`  |  `int`  |  0-运行文件，1-仅保存文件，不运行。  |
|  `save_id`  |  `int`  |  保存到控制器中的编号。  |
|  `step_flag`  |  `int`  |  设置单步运行方式模式，1-设置单步模式 0-设置正常运动模式。  |
|  `auto_start`  |  `int`  |  设置默认在线编程文件，1-设置默认 0-设置非默认  |
|  `project_type`  |  `int`  |  下发文件类型。0-在线编程文件，1-拖动示教轨迹文件  |

## 构造函数

```Python
rm_ctypes_wrap.rm_send_project_t.__init__(self, project_path: str = None, plan_speed: int = None, only_save: int = None, save_id: int = None, step_flag: int = None, auto_start: int = None, project_type: int = None):
```

**参数说明：**

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `project_path`  |  `str, optional)`  |  下发文件路径文件路径及名称，默认为None。  |
|  `project_path_len`  |  `int, optional`  |  路径及名称长度，默认为None。  |
|  `plan_speed`  |  `int, optional`  |  规划速度比例系数，默认为None。  |
|  `only_save`  |  `int, optional`  |  0-运行文件，1-仅保存文件，不运行，默认为None。  |
|  `save_id`  |  `int, optional`  |  保存到控制器中的编号，默认为None。  |
|  `step_flag`  |  `int, optional`  |  设置单步运行方式模式，1-设置单步模式 0-设置正常运动模式，默认为None。  |
|  `auto_start`  |  `int, optional`  |  设置默认在线编程文件，1-设置默认 0-设置非默认，默认为None。  |
|  `project_type`  |  `int, optional`  |  下发文件类型。0-在线编程文件，1-拖动示教轨迹文件，默认为None。  |
