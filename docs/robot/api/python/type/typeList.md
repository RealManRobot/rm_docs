# <p class="hidden">Python: </p>枚举类型说明

这里列举了睿尔曼机械臂与C/C++ API控制接口相关的枚举类型。

## `rm_thread_mode_e`线程模式

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_SINGLE_MODE_E`    |   单线程模式，单线程非阻塞等待数据返回。  |
|   `RM_DUAL_MODE_E`    |    双线程模式，增加接收线程监测队列中的数据。   |
|   `RM_TRIPLE_MODE_E`     |  三线程模式，在双线程模式基础上增加线程监测UDP接口数据。  |

## `rm_event_type_e`事件类型

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_NONE_EVENT_E`    |   无事件。  |
|   `RM_CURRENT_TRAJECTORY_STATE_E`    |    当前轨迹到位。   |
|   `RM_PROGRAM_RUN_FINISH_E`     |  在线编程运行结束。  |

## `rm_robot_arm_model_e`机械臂型号

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_MODEL_RM_65_E`    |   RM_65  |
|   `RM_MODEL_RM_75_E`    |    RM_75   |
|   `RM_MODEL_RM_63_II_E`     |  RML_63  |
|   `RM_MODEL_ECO_65_E`     |  ECO_65  |
|   `RM_MODEL_ECO_62_E`     |  ECO_62  |
|   `RM_MODEL_GEN_72_E`     |  GEN_72  |
|   `RM_MODEL_ECO_63_E`     |  ECO_63  |

## `rm_force_type_e`机械臂末端力传感器版本

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_MODEL_RM_B_E`    |   标准版。  |
|   `RM_MODEL_RM_ZF_E`    |    一维力版。   |
|   `RM_MODEL_RM_SF_E`     |  六维力版。  |

## `rm_arm_current_trajectory_e`机械臂当前规划类型

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_NO_PLANNING_E`    |   无规划。  |
|   `RM_JOINT_SPACE_PLANNING_E`    |    关节空间规划。   |
|   `RM_CARTESIAN_LINEAR_PLANNING_E`     |  笛卡尔空间直线规划。  |
|   `RM_CARTESIAN_ARC_PLANNING_E`     |  笛卡尔空间圆弧规划。  |
|   `RM_SPLINE_CURVE_MOTION_PLANNING_E`     |  样条曲线运动规划。  |
|   `RM_TRAJECTORY_REPLAY_PLANNING_E`     |  示教轨迹复现规划  |

## `rm_pos_teach_type_e`位置示教方向

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_X_DIR_E`    |   位置示教，x轴方向。  |
|   `RM_Y_DIR_E`    |    位置示教，y轴方向。   |
|   `RM_Z_DIR_E`    |  位置示教，z轴方向。  |

## `rm_ort_teach_type_e`姿态示教方向

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_RX_ROTATE_E`    |   姿态示教，绕x轴旋转。  |
|   `RM_RY_ROTATE_E`    |    姿态示教，绕y轴旋转。   |
|   `RM_RZ_ROTATE_E`    |  姿态示教，绕z轴旋转。  |

## `rm_udp_arm_current_status_e`UDP推送的机械臂当前状态枚举

|   枚举值    |    说明    |
|   :---    |   :---|
|   `RM_IDLE_E`     |   使能但空闲状态      |
|   `RM_MOVE_L_E`       |   move L运动中状态        |
|   `RM_MOVE_J_E`       |   move J运动中状态        |
|   `RM_MOVE_C_E`       |   move C运动中状态        |
|   `RM_MOVE_S_E`       |   move S运动中状态        |
|   `RM_MOVE_THROUGH_JOINT_E`       |   角度透传状态        |
|   `RM_MOVE_THROUGH_POSE_E`        |   位姿透传状态        |
|   `RM_MOVE_THROUGH_FORCE_POSE_E`      |   力控透传状态        |
|   `RM_MOVE_THROUGH_CURRENT_E`     |   电流环透传状态      |
|   `RM_STOP_E`     |   急停状态        |
|   `RM_SLOW_STOP_E`        |   缓停状态        |
|   `RM_PAUSE_E`        |   暂停状态        |
|   `RM_CURRENT_DRAG_E`     |   电流环拖动状态      |
|   `RM_SENSOR_DRAG_E`      |   六维力拖动状态      |
|   `RM_TECH_DEMONSTRATION_E`       |   示教状态        |