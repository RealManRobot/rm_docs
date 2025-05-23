# <p class="hidden">C、C++: </p>在线编程配置`projectManagement`

本接口包含在线编程文件下发、在线编程文件管理、全局路点管理等相关功能接口。

## 轨迹规划中改变速度比例系数`rm_set_plan_speed()`

- **方法原型：**

```C
int rm_set_plan_speed(rm_robot_handle * handle,int speed)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_send_project_t](../../struct/sendProject/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `speed`  |    输入参数    |    当前进度条的速度数据。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int speed = 20;
ret = rm_set_plan_speed(robot_handle,speed);
```

## 获取在线编程列表`rm_get_program_trajectory_list()`

- **方法原型：**

```C
int rm_get_program_trajectory_list(rm_robot_handle * handle,int page_num,int page_size,const char * vague_search,rm_program_trajectorys_t * trajectorys)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_program_trajectorys_t](../../struct/programTrajectorys/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `page_num`  |    输入参数    |    页码。    |
|   `page_size`  |    输入参数    |    每页大小。    |
|   `vague_search`  |    输入参数    |    模糊搜索的关键词。    |
|   `trajectorys`  |    输出参数    |    在线编程程序列表。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 查询第1页10个在线编程文件
int page_num = 1;
int page_size = 10;
const char *vague_search;
rm_program_trajectorys_t program_trajectorys;
int result = rm_get_program_trajectory_list(robot_handle, page_num, page_size, vague_search, &program_trajectorys);
printf("rm_get_program_trajectory_list result : %d\n", result);
```

## <div id = '6233'>开始运行指定编程文件`rm_set_program_id_run()`</div>

- **方法原型：**

```C
int rm_set_program_id_run(rm_robot_handle * handle,int id,int speed,int block)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`  |    输入参数    |    页码。    |
|   `speed`  |    输入参数    |    1-100，需要运行轨迹的速度，若设置为0，则按照存储的速度运行。    |
|   `block`  |    输入参数    |    阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。    |

::: warning 注意
使用单线程阻塞模式时，请设置超时时间确保轨迹在超时时间内运行结束返回。
:::

- **返回值:**

<div class='tableWrap'>

|   参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**： ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    运行状态已停止但未接收到运行成功，是否在外部停止了轨迹。    |判断是否在外部停止了轨迹，例如触发了暂停、停止等按钮。|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**
  
```C
// 以默认速度运行id为1的在线编程文件，阻塞运行（默认线程模式为多线程）
ret = rm_set_program_id_run(robot_handle, 1, 0, 1);
printf("rm_set_program_id_run result :%d\n", ret);
```

## <div id = '6307'>查询流程图编程运行状态`rm_get_flowchart_program_run_state()`</div>

- **方法原型：**

```C
int rm_get_flowchart_program_run_state(rm_robot_handle *handle, rm_flowchart_run_state_t *run_state);
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_flowchart_run_state_t](../../struct/flowchartstate/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `run_state`   |    输出参数    |    流程图运行状态结构体。    |

- **返回值:**

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../../../releaseNotes/releaseNotesfour/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |  三代控制器不支持该接口   |-|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

- **使用示例**
  
```C
rm_flowchart_run_state_t run_state = {0};
ret = rm_get_flowchart_program_run_state(handle, &run_state);
```

## 删除指定编号轨迹`rm_delete_program_trajectory()`

- **方法原型：**

```C
int rm_delete_program_trajectory(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)和[rm_program_run_state_t](../../struct/programRunState/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    指定轨迹的ID。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 删除编号50的在线编程文件
ret = rm_delete_program_trajectory(robot_handle, 50);
printf("delete program trajectory result : %d\n", ret);
```

## 修改指定编号的轨迹信息`rm_update_program_trajectory()`

- **方法原型：**

```C
int rm_update_program_trajectory(rm_robot_handle * handle,int id,int speed,const char * name)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    指定在线编程轨迹编号。    |
|   `speed`   |    输入参数    |    更新后的规划速度比例 1-100。    |
|   `name`   |    输入参数    |    更新后的文件名称。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 更新编号1的在线编程文件，规划速度为50%，文件名称为“test”
ret = rm_update_program_trajectory(robot_handle,1,50,"test");
printf("update program trajectory result : %d\n", ret);
```

## 设置IO默认运行编号`rm_set_default_run_program()`

- **方法原型：**

```C
int rm_set_default_run_program(rm_robot_handle * handle,int id)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输入参数    |    设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
// 设置 IO 默认运行的在线编程文件编号为1
int ret = -1;
ret = rm_set_default_run_program(robot_handle, 1);
```

## 获取IO默认运行编号`rm_get_default_run_program()`

- **方法原型：**

```C
int rm_get_default_run_program(rm_robot_handle * handle,int * id)
```

*可以跳转[rm_robot_handle](../../struct/robotHandle/index.md)查阅结构体详细描述。*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|   `id`   |    输出参数    |    存储 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置。    |

- **返回值:**

0代表成功，其他错误码请参考[API2错误代码](../../../apierrorList2/index.md)。

- **使用示例**
  
```C
int id;
ret = rm_get_default_run_program(robot_handle, id);
```
