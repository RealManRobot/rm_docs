# <p class="hidden">C, C++: </p>UDP-Based Real-Time Robotic Arm State Pushing Structure `rm_realtime_arm_joint_state_t`

## Class member variable description

- ### Data parsing error code `errCode`

    -3: data parsing error, indicating that the pushed data is incomplete or incorrectly formatted.

    ```C++
    int rm_realtime_arm_joint_state_t::errCode
    ```

- ### Robotic arm IP address `arm_ip`

    ```C++
    char rm_realtime_arm_joint_state_t::arm_ip[16]
    ```

- ### Joint state `joint_status`

    ```C++
    rm_joint_status_t rm_realtime_arm_joint_state_t::joint_status
    ```

    *Jump to [rm_joint_status_t](../../struct/jointStatus/index.md) for details of the structure.*

- ### Force sensor (available for 6-DoF force version) `force_sensor`

    ```C++
    rm_force_sensor_t rm_realtime_arm_joint_state_t::force_sensor
    ```

    *Jump to [rm_force_sensor_t](../../struct/forceSensor/index.md) for details of the structure.*

- ### Error code `err`

    ```C++
    rm_err_t rm_realtime_arm_joint_state_t::err
    ```

    *Jump to [rm_err_t](../../struct/err/index.md) for details of the structure.*

- ### Current waypoint information `waypoint`

    ```C++
    rm_pose_t rm_realtime_arm_joint_state_t::waypoint
    ```

    *Jump to [rm_pose_t](../../struct/pose/index.md) for details of the structure.*

- ### Lifting joint state `liftState`

    ```C++
    rm_udp_lift_state_t rm_realtime_arm_joint_state_t::liftState
    ```

    *Jump to [rm_udp_lift_state_t](../../struct/udpLiftState/index.md) for details of the structure.*

- ### Expansion joint state `expandState`

    ```C++
    rm_udp_expand_state_t rm_realtime_arm_joint_state_t::expandState
    ```

    *Jump to [rm_udp_expand_state_t](../../struct/udpExpandState/index.md) for details of the structure.*

- ### Dexterous hand state `handState`

    ```C++
    rm_udp_hand_state_t rm_realtime_arm_joint_state_t::handState
    ```

    *Jump to [rm_udp_hand_state_t](../../struct/udpHandState/index.md) for details of the structure.*

- ### Robotic arm state `arm_current_status`

    ```C++
    rm_udp_arm_current_status_e rm_realtime_arm_joint_state_t::arm_current_status
    ```

    *Jump to [Type description](../../type/index.md) for details of `rm_udp_arm_current_status_e`.*

- ### aloha state `aloha_state`

    ```C++
    rm_udp_aloha_state_t rm_realtime_arm_joint_state_t::aloha_state
    ```

    *Jump to [rm_udp_aloha_state_t](../../struct/udpAlohaState/index.md) for details of the structure.*

- ### End-Effector Device Status `rm_plus_state`

    0 - Device is online, 1 - Protocol is not enabled, 2 - Protocol is enabled but the device is not online.

    ```C++
    int rm_realtime_arm_joint_state_t::rm_plus_state
    ```

- ### End-Effector Basic Information `plus_base_info`

    ```C++
    rm_plus_base_info_t m_realtime_arm_joint_state_t::plus_base_info
    ```

    *Jump to [rm_plus_base_info_t](../../struct/plusBase/index.md) for details of the structure.*

- ### End-Effector Real-Time Information `plus_state_info`

    ```C++
    rm_plus_state_info_t rm_realtime_arm_joint_state_t::plus_state_info
    ```

    *Jump to [rm_plus_state_info_t](../../struct/plusState/index.md) for details of the structure.*
