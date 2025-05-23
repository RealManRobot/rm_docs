# <p class="hidden">Python: </p>Type description

Here is a list of the types related to the Python API control interface of the RealMan robotic arm.

## `rm_thread_mode_e` Thread mode

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_SINGLE_MODE_E`    |   Single-thread mode, waiting for data return in a non-blocking manner.  |
|   `RM_DUAL_MODE_E`    |    Dual-thread mode, adding a receiving thread to monitor data in the queue.  |
|   `RM_TRIPLE_MODE_E`     |  Triple-thread mode, adding a thread to monitor UDP interface data based on the dual-thread mode.  |

## `rm_event_type_e` Event type

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_NONE_EVENT_E`    |   Non-event.  |
|   `RM_CURRENT_TRAJECTORY_STATE_E`    |    Current trajectory in position.  |
|   `RM_PROGRAM_RUN_FINISH_E`     |  Online programming running finished.  |

## `rm_robot_arm_model_e` Robotic arm model

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_MODEL_RM_65_E`    |   RM_65  |
|   `RM_MODEL_RM_75_E`    |    RM_75   |
|   `RM_MODEL_RM_63_II_E`     |  RML_63_II  |
|   `RM_MODEL_RM_63_III_E`     |  RML_63_III  |
|   `RM_MODEL_ECO_65_E`     |  ECO_65  |
|   `RM_MODEL_ECO_62_E`     |  ECO_62  |
|   `RM_MODEL_GEN_72_E`     |  GEN_72  |
|   `RM_MODEL_ECO_63_E`     |  ECO_63  |

## `rm_force_type_e` End force sensor type

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_MODEL_RM_B_E`    |   Standard version.  |
|   `RM_MODEL_RM_ZF_E`    |    1-DoF force version.  |
|   `RM_MODEL_RM_SF_E`     |  6-DoF force version.  |
|   `RM_MODEL_RM_ISF_E`     |  Integrated six-axis force version.  |

## `rm_arm_current_trajectory_e` Current robotic arm planning type

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_NO_PLANNING_E`    |   No planning.  |
|   `RM_JOINT_SPACE_PLANNING_E`    |    Joint space planning.  |
|   `RM_CARTESIAN_LINEAR_PLANNING_E`     |  Cartesian space linear planning.  |
|   `RM_CARTESIAN_ARC_PLANNING_E`     |  Cartesian space arc planning.  |
|   `RM_SPLINE_CURVE_MOTION_PLANNING_E`     |  Spline curve motion planning.  |
|   `RM_TRAJECTORY_REPLAY_PLANNING_E`     | Teaching trajectory replay planning.

## `rm_pos_teach_type_e` Position teaching direction

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_X_DIR_E`    |   Position teaching, along X-direction.  |
|   `RM_Y_DIR_E`    |    Position teaching, along Y-direction.  |
|   `RM_Z_DIR_E`    |  Position teaching, along Z-direction.  |

## `rm_ort_teach_type_e` Orientation teaching direction

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_RX_ROTATE_E`    |   Orientation teaching, rotating around the X-axis.  |
|   `RM_RY_ROTATE_E`    |    Orientation teaching, rotating around the Y-axis.  |
|   `RM_RZ_ROTATE_E`    |   Orientation teaching, rotating around the Z-axis.  |

## `rm_udp_arm_current_status_e` UDP-based pushed current robotic arm state

|   Enumerated value    |    Description    |
|   :---    |   :---|
|   `RM_IDLE_E`     |   Enabled but idle state      |
|   `RM_MOVE_L_E`       |   move L running state        |
|   `RM_MOVE_J_E`       |   move J running state         |
|   `RM_MOVE_C_E`       |   move C running state         |
|   `RM_MOVE_S_E`       |   move S running state         |
|   `RM_MOVE_THROUGH_JOINT_E`       |   Pass-through joint state        |
|   `RM_MOVE_THROUGH_POSE_E`        |   Pass-through pose state      |
|   `RM_MOVE_THROUGH_FORCE_POSE_E`      |   Pass-through force control state       |
|   `RM_MOVE_THROUGH_CURRENT_E`     |     Pass-through current loop state    |
|   `RM_STOP_E`     |   Quick stop state        |
|   `RM_SLOW_STOP_E`        |   Slow stop state      |
|   `RM_PAUSE_E`        |   Pause state        |
|   `RM_CURRENT_DRAG_E`     |   Current loop drag state      |
|   `RM_SENSOR_DRAG_E`      |   6-DoF force sensor drag state      |
|   `RM_TECH_DEMONSTRATION_E`       |   Teaching state        |

## `rm_force_position_sensor_e`Force-Position Hybrid Control Sensor Enumeration

| Enumerated value    |    Description         |
| :------------------ | :----------- |
| `RM_FP_0F_SENSOR_E` | One-dimensional Force Sensor |
| `RM_FP_SF_SENSOR_E` | Six-dimensional Force Sensor |

## `rm_force_position_mode_e`Force-Position Hybrid Control Mode Enumeration

| Enumerated value    |    Description          |
| :------------------------ | :------------- |
| `RM_FP_BASE_COORDINATE_E` | Base Coordinate System Force Control |
| `RM_FP_TOOL_COORDINATE_E` |Tool Coordinate System Force Control |

## `rm_force_position_dir_e`Force-Position Hybrid Control Mode (Single Direction) Force Control Direction Enumeration

| Enumerated value    |    Description        |
| :----------- | :----------- |
| `RM_FP_X_E`  | Along the X-axis        |
| `RM_FP_Y_E`  | Along the Y-axis        |
| `RM_FP_Z_E`  | Along the Z-axis      |
| `RM_FP_RX_E` | Along the RX orientation |
| `RM_FP_RY_E` | Along the RY orientation |
| `RM_FP_RZ_E` | Along the RZ orientation|

## `rm_trajectory_connect_config_e`Trajectory Connection Configuration

| Enumerated value    |    Description                     |
| :--------------------------- | :------------------------------------- |
| `RM_TRAJECTORY_DISCONNECT_E` | Execute the planned trajectory immediately without connecting to the subsequent trajectory |
| `RM_TRAJECTORY_CONNECT_E`    | Plan and execute the current trajectory together with the next trajectory       |
