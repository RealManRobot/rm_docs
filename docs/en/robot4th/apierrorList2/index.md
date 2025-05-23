# <p class="hidden">API：</p>Appendix: API2 Error Codes

## API2 Return Value Definition

- **C/C++**: The interface returns an error code. A return value of 0 indicates success. Other return values can be looked up in the table below.
- **Python**: The interface returns a tuple in the form of (RetVal, data). RetVal is the error code. A return value of 0 indicates success. Other return values can be looked up in the table below. Data represents the retrieved information.

## API2 Error Codes

<div class='tableWrap'>

|Parameter|Type|Description|Handling Suggestions|
|-|-|-|-|
|0|`int`|Success.|-|
|1|`int`|The controller returns false, indicating that the parameters are sent incorrectly or the robotic arm state is wrong.|- **Validate JSON Command**:<br> ① Enable DEBUG logs for the API to capture the raw JSON data.<br> ② Check JSON syntax: Ensure correct formatting of parentheses, quotes, commas, etc. (You can use a JSON validation tool).<br> ③ Verify against the API documentation that parameter names, data types, and value ranges comply with the specifications.<br> ④ After fixing the issues, resend the command and check if the controller returns a normal status code and business data.<br>- **Check Robot Arm Status**:<br> ① Check for real-time error messages in the robot arm controller or logs (such as hardware failures, over-limit conditions), and reset, calibrate, or troubleshoot hardware issues according to the prompts.<br> ② After fixing the issues, resend the command and check if the controller returns a normal status code and business data.|
|-1|`int`|The data transmission fails, indicating that a problem occurs during the communication.|**Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|
|-2|`int`|The data reception fails, indicating that a problem occurs during the communication, or the controller has a return timeout.|- **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.<br> - **Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-3|`int`|The return value parse fails, indicating that the received data format is incorrect or incomplete.|**Verify Version Compatibility**:<br> ① Check if the controller firmware version supports the current API functions. For specific version compatibility, refer to the [Version Description](../releaseNotes/releaseNotesfour/index.md).<br> ② If the version is too low, upgrade the controller or use an API version that is compatible.|
|-4|`int`|The current in-position equipment verification fails, indicating the current in-position equipment is not the joints/elevators/grippers/dexterous hands.|- **Detect Concurrent Control by Multiple Devices**: Check if other devices are sending motion commands to the robot arm, including the motion of the robot arm, gripper, dexterous hand, and elevator.<br> - **Monitor Command Events in Real-Time**: Register the callback function `rm_get_arm_event_call_back`:<br> ① Capture device arrival events (such as motion completion, timeout, etc.).<br> ② Determine the specific device type that triggered the event through the device parameter in the callback.|
|-5|`int`|The single-thread mode does not receive a return value after the timeout, indicating that the timeout period may be improper.|- **Check Timeout Setting**: In single-thread blocking mode, it supports configuring the timeout for waiting for the device to complete its motion. Ensure that the timeout is set longer than the device's motion time.<br> - **Check Network Connectivity**:<br> Use tools like ping/telnet to check if the communication link with the controller is normal.|

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    /* .tableWrap tr th, .tableWrap td {
        width: auto;
    } */
    .tableWrap tr th:nth-child(1),
    .tableWrap td:nth-child(1) {
        width: 10%;
    }
    .tableWrap tr th:nth-child(2),
    .tableWrap td:nth-child(2) {
        width: 10%;
    }
    .tableWrap tr th:nth-child(3),
    .tableWrap td:nth-child(3) {
        width: 30%;
    }
    .tableWrap tr th:nth-child(4),
    .tableWrap td:nth-child(4) {
        width: 50%;
    }
</style>

::: warning

- The error code `-4` in the `Modbus Configuration` and `Trajectory File` interfaces is different from the above error codes. It is defined as `-4: This interface is not supported by the Gen 3 Controller.`.

  - Modbus Configuration `modbusConfig`: [C/C++](../apic/classes/modbusfour/index.md), [Python](../apipython/classes/modbusfour/index.md);
  - Trajectory File: [C/C++](../apic/classes/trajectoryfile/index.md), [Python](../apipython/classes/trajectoryfile/index.md);

- The following interfaces do not use the above error codes. Please refer to the error code list in the corresponding interface documentation.

  - Inverse kinematics function `rm_algo_inverse_kinematics()`: [C/C++](../apic/classes/algo/index.md#6241), [Python](../apipython/classes/algo/index.md#6242);
  - Select the Optimal Solution from Multiple Solutions (Currently supports only six degrees of freedom robots) `rm_algo_ikine_select_ik_solve()`: [C/C++](../apic/classes/algo/index.md#6273), [Python](../apipython/classes/algo/index.md#6274);
  - Check if the Inverse Kinematics Solution Exceeds Joint Position Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_position_limit()`：[C/C++](../apic/classes/algo/index.md#6291)、[Python](../apipython/classes/algo/index.md#6292)；
  - Check if the Inverse Kinematics Solution Exceeds Joint Velocity Limits (Currently supports only six degrees of freedom robots) `rm_algo_ikine_check_joint_velocity_limit()`：[C/C++](../apic/classes/algo/index.md#6293)、[Python](../apipython/classes/algo/index.md#6294)；
  - Calculate Arm Angle from Reference Configuration (Only supports RM75) `rm_algo_calculate_arm_angle_from_config_rm75()`：[C/C++](../apic/classes/algo/index.md#6295)、[Python](../apipython/classes/algo/index.md#6296)；
  - Solve Inverse Kinematics for RM75 Using Arm Angle Method `rm_algo_inverse_kinematics_rm75_for_arm_angle()` ：[C/C++](../apic/classes/algo/index.md#6297)、[Python](../apipython/classes/algo/index.md#6298)；
  - Numerical Method to Determine if the Robot is in a Singular Configuration `rm_algo_universal_singularity_analyse()` ：[C/C++](../apic/classes/algo/index.md#6299)、[Python](../apipython/classes/algo/index.md#6300)；
  - Analytical Method to Determine if the Robot is in a Singular Configuration (Only supports six degrees of freedom) `rm_algo_kin_robot_singularity_analyse()`：[C/C++](../apic/classes/algo/index.md#6301)、[Python](../apipython/classes/algo/index.md#6302)；
  - Save the drag teaching trajectory `rm_save_trajectory()`: [C/C++](../apic/classes/dragTeach/index.md#6243), [Python](../apipython/classes/dragTeach/index.md#6244);
  - Set the 6-DoF Drag Mode `rm_set_force_drag_mode()`: [C/C++](../apic/classes/dragTeach/index.md#6245), [Python](../apipython/classes/dragTeach/index.md#6246);
  - Get the 6-DoF Drag Mode `rm_get_drag_teach_sensitivity()`: [C/C++](../apic/classes/dragTeach/index.md#6247), [Python](../apipython/classes/dragTeach/index.md#6248);
  - Release gripper`rm_set_gripper_release()`: [C/C++](../apic/classes/gripperControl/index.md#6249), [Python](../apipython/classes/gripperControl/index.md#6250);
  - Gripper force-controlled grasping`rm_set_gripper_pick()`: [C/C++](../apic/classes/gripperControl/index.md#6251), [Python](../apipython/classes/gripperControl/index.md#6252);
  - Gripper continuous force-controlled grasping`rm_set_gripper_pick_on()`: [C/C++](../apic/classes/gripperControl/index.md#6253), [Python](../apipython/classes/gripperControl/index.md#6254);
  - Set gripper to a specified position`rm_set_gripper_position()`: [C/C++](../apic/classes/gripperControl/index.md#6255), [Python](../apipython/classes/gripperControl/index.md#6256);
  - Run dexterous hand target gesture sequence number `rm_set_hand_posture()`: [C/C++](../apic/classes/handControl/index.md#6257), [Python](../apipython/classes/handControl/index.md#6258);
  - Run dexterous hand action sequence number `rm_set_hand_seq()`: [C/C++](../apic/classes/handControl/index.md#6259), [Python](../apipython/classes/handControl/index.md#6260);
  - Run Specified Program File `rm_set_program_id_run()`: [C/C++](../apic/classes/projectManagement/index.md#6263), [Python](../apipython/classes/projectManagement/index.md#6264);
  - Initialize thread mode `rm_init()`: [C/C++](../apic/classes/roboticArm/index.md#6265), [Python](../apipython/classes/roboticArm/index.md#6266);
  - Delete the specified robotic arm instance `rm_delete_robot_arm()`: [C/C++](../apic/classes/roboticArm/index.md#6267), [Python](../apipython/classes/roboticArm/index.md#6268);
  - Get basic information of robotic arm `rm_get_robot_info()`: [C/C++](../apic/classes/roboticArm/index.md#6269), [Python](../apipython/classes/roboticArm/index.md#6270);
  - Query Flowchart Program Run State `rm_get_flowchart_program_run_state()`; [C/C++](../apic/classes/projectManagement/index.md#6303), [Python](../apipython/classes/projectManagement/index.md#6304);
  - Set Robotic Arm Emergency Stop State `rm_set_arm_emergency_stop()`; [C/C++](../apic/classes/roboticArm/index.md#6305), [Python](../apipython/classes/roboticArm/index.md#6306);
:::
