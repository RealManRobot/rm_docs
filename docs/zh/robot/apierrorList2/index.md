# <p class="hidden">API：</p>附录：API2错误代码

## API2返回值定义

- C/C++：接口返回值为错误码，返回0为成功，返回其他值可查询下表。
- Python：接口返回值都是一个元组，接口的返回值形式为（RetVal，data），RetVal 为错误码，返回0为成功，返回其他值可查询下表；data 为获取的数据。

## API2错误代码

<div class='tableWrap'>

|  参数    |   类型    |   说明    |处理建议|
| :--- | :--- | :--- |:---|
|   0  |    `int`    |    成功。    |-|
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |- **校验JSON指令**：<br> ①启用API的DEBUG日志，捕获原始JSON数据。<br> ②检查JSON语法：确保括号、引号、逗号等格式正确（可借助JSON校验工具）。<br> ③对照API文档，验证参数名称、数据类型及取值范围是否符合规范。<br>④修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。<br>- **检查机械臂状态**：<br> ①查看机械臂控制器或日志中的实时报错信息（如硬件故障、超限等），根据提示复位、校准或排查硬件问题。<br>②修正问题后重新发送指令，检查控制器返回的状态码及业务数据是否正常。|
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |**检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。<br>- **校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。<br>- **调用ModbusTCP接口**：仅在读写控制器ModbusTCP设备时适用，创建机械臂控制句柄后，必须调用`rm_set_modbustcp_mode()`接口，否则无法接收到返回值。|
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |**校验版本兼容性**：<br>①核对控制器固件版本是否支持当前API功能，具体版本配套关系请参考[版本变更说明](../releaseNotes/releaseNotes/index.md)。<br>②若版本过低需升级控制器或使用适配的API版本。|
|  -4  |    `int`    |    当前到位设备校验失败，即当前到位设备不为关节/升降机构/夹爪/灵巧手。    |- **检测多设备并发控制**：检查是否有其他设备给机械臂发送运动指令：包括机械臂、夹爪、灵巧手、升降机的运动；<br>- **实时监听指令事件**：注册回调函数 `rm_get_arm_event_call_back`：<br>①捕获设备到位事件（如运动完成、超时等）；<br>②通过回调参数 device 判断触发事件的具体设备类型。|
|  -5  |    `int`    |    单线程阻塞模式超时未接收到返回，请确保超时时间设置合理。    |- **检查超时时长设置**：单线程阻塞模式下，支持配置等待设备运动完成的超时时间，务必确保设置超时时间大于设备运动时间；<br>- **检查网络连通性**：<br>使用ping/telnet等工具检测与控制器的通信链路是否正常。|

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

::: warning 注意

以下为不适用以上错误代码的接口，请查看对应接口中的错误码列表。

- 逆解函数`rm_algo_inverse_kinematics()`：[C/C++](../apic/classes/algo/index.md#6211)、[Python](../apipython/classes/algo/index.md#6212)；
- 从多解中选取最优解（当前仅支持六自由度机器人）`rm_algo_ikine_select_ik_solve()`：[C/C++](../apic/classes/algo/index.md#6271)、[Python](../apipython/classes/algo/index.md#6272)；
- 检查逆解结果是否超出关节限位（当前仅支持六自由度机器人）`rm_algo_ikine_check_joint_position_limit()`：[C/C++](../apic/classes/algo/index.md#6277)、[Python](../apipython/classes/algo/index.md#6278)；
- 检查逆解结果是否超出速度限位（当前仅支持六自由度机器人）`rm_algo_ikine_check_joint_velocity_limit()`：[C/C++](../apic/classes/algo/index.md#6279)、[Python](../apipython/classes/algo/index.md#6280)；
- 根据参考位形计算臂角大小（仅支持RM75）`rm_algo_calculate_arm_angle_from_config_rm75()`：[C/C++](../apic/classes/algo/index.md#6281)、[Python](../apipython/classes/algo/index.md#6282)；
- 臂角法求解RM75逆运动学 `rm_algo_inverse_kinematics_rm75_for_arm_angle()`：[C/C++](../apic/classes/algo/index.md#6283)、[Python](../apipython/classes/algo/index.md#6284)；
- 数值法判断机器人是否处于奇异位形 `rm_algo_universal_singularity_analyse()`：[C/C++](../apic/classes/algo/index.md#6285)、[Python](../apipython/classes/algo/index.md#6286)；
- 解析法判断机器人是否处于奇异位形（仅支持六自由度）`rm_algo_kin_robot_singularity_analyse()`：[C/C++](../apic/classes/algo/index.md#6287)、[Python](../apipython/classes/algo/index.md#6288)；
- 自碰撞检测算法`rm_algo_safety_robot_self_collision_detection()`：[C/C++](../apic/classes/algo/index.md#6275)、[Python](../apipython/classes/algo/index.md#6276)；
- 保存拖动示教轨迹`rm_save_trajectory()`：[C/C++](../apic/classes/dragTeach/index.md#6213)、[Python](../apipython/classes/dragTeach/index.md#6214)；
- 设置六维力拖动示教模式`rm_set_force_drag_mode()`：[C/C++](../apic/classes/dragTeach/index.md#6215)、[Python](../apipython/classes/dragTeach/index.md#6216)；
- 获取六维力拖动示教模式`rm_get_force_drag_mode()`：[C/C++](../apic/classes/dragTeach/index.md#6217)、[Python](../apipython/classes/dragTeach/index.md#6218)；
- 松开夹爪`rm_set_gripper_release()`：[C/C++](../apic/classes/gripperControl/index.md#6219)、[Python](../apipython/classes/gripperControl/index.md#6220)；
- 夹爪力控夹取`rm_set_gripper_pick()`：[C/C++](../apic/classes/gripperControl/index.md#6221)、[Python](../apipython/classes/gripperControl/index.md#6222)；
- 夹爪持续力控夹取`rm_set_gripper_pick_on()`：[C/C++](../apic/classes/gripperControl/index.md#6223)、[Python](../apipython/classes/gripperControl/index.md#6224)；
- 设置夹爪达到指定位置`rm_set_gripper_position()`：[C/C++](../apic/classes/gripperControl/index.md#6225)、[Python](../apipython/classes/gripperControl/index.md#6226)；
- 运行灵巧手目标手势序列号`rm_set_hand_posture()`：[C/C++](../apic/classes/handControl/index.md#6227)、[Python](../apipython/classes/handControl/index.md#6228)；
- 运行灵巧手动作序列号`rm_set_hand_seq()`：[C/C++](../apic/classes/handControl/index.md#6229)、[Python](../apipython/classes/handControl/index.md#6230)；
- 文件下发`rm_send_project()`：[C/C++](../apic/classes/projectManagement/index.md#6231)、[Python](../apipython/classes/projectManagement/index.md#6232)；
- 开始运行指定编程文件`rm_set_program_id_run()`：[C/C++](../apic/classes/projectManagement/index.md#6233)、[Python](../apipython/classes/projectManagement/index.md#6234)；
- 初始化线程模式`rm_init()`：[C/C++](../apic/classes/roboticArm/index.md#6235)、[Python](../apipython/classes/roboticArm/index.md#6236)；
- 删除指定机械臂实例`rm_delete_robot_arm()`：[C/C++](../apic/classes/roboticArm/index.md#6237)、[Python](../apipython/classes/roboticArm/index.md#6238)；
- 获取机械臂基本信息`rm_get_robot_info()`：[C/C++](../apic/classes/roboticArm/index.md#6239)、[Python](../apipython/classes/roboticArm/index.md#6240)；

:::
