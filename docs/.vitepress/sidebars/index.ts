import type { DefaultTheme } from "vitepress";
export const sidebars: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti =
  {
    "/robot/": [
      {
        text: "概述",
        link: "/robot/summarize/",
      },
      {
        text: "版本对照表",
        link: "/robot/versionComparisonTable",
      },
      {
        text: "入门指南",
        collapsed: true,
        items: [
          // {
          //   text: "用户手册",
          //   link: "/robot/guide/manual",
          // },
          {
            text: "硬件准备",
            link: "/robot/quickUseManual/",
          },
        ],
      },
      {
        text: "Demo演示",
        collapsed: true,
        items: [
          {
            text: "API(C、C++)示例",
            collapsed: true,
            items: [
              {
                text: "基础示例",
                link: "/robot/demo/c/simpleProcess/readme",
              },
              {
                text: "坐标系操作示例",
                link: "/robot/demo/c/coordinateSystem/readme",
              },
              {
                text: "力位混合控制示例",
                link: "/robot/demo/c/forceControl/readme",
              },
              {
                text: "末端控制夹爪示例",
                link: "/robot/demo/c/gripper/readme",
              },
              {
                text: "IO端口使用示例",
                link: "/robot/demo/c/IOControl/readme",
              },
              {
                text: "升降机控制示例",
                link: "/robot/demo/c/lift/readme",
              },
              {
                text: "Modbus RTU使用示例",
                link: "/robot/demo/c/modbusRTU/readme",
              },
              {
                text: "样条曲线运动示例",
                link: "/robot/demo/c/moves/readme",
              },
              {
                text: "关节角度透传示例",
                link: "/robot/demo/c/movejCANFD/readme",
              },
              {
                text: "在线编程示例",
                link: "/robot/demo/c/onlineProgram/readme",
              },
              {
                text: "算法示例",
                link: "/robot/demo/c/algoInterface/readme",
              },
            ],
          },
          {
            text: "API(Python)示例",
            collapsed: true,
            items: [
              {
                text: "基础示例",
                link: "/robot/demo/python/simpleProcess/readme",
              },
              {
                text: "坐标系操作示例",
                link: "/robot/demo/python/coordinateSystem/readme",
              },
              {
                text: "机械臂版本操作示例",
                link: "/robot/demo/python/doubleRoboticArm/readme",
              },
              {
                text: "力位混合控制示例",
                link: "/robot/demo/python/forceControl/readme",
              },
              {
                text: "末端控制夹爪示例",
                link: "/robot/demo/python/gripper/readme",
              },
              {
                text: "IO端口使用示例",
                link: "/robot/demo/python/IOControl/readme",
              },
              {
                text: "升降机控制示例",
                link: "/robot/demo/python/lift/readme",
              },
              {
                text: "Modbus RTU使用示例",
                link: "/robot/demo/python/modbusRTU/readme",
              },
              {
                text: "样条曲线运动示例",
                link: "/robot/demo/python/moves/readme",
              },
              {
                text: "关节角度透传示例",
                link: "/robot/demo/python/movejCANFD/readme",
              },
              {
                text: "在线编程示例",
                link: "/robot/demo/python/onlineProgram/readme",
              },
              {
                text: "算法示例",
                link: "/robot/demo/python/algoInterface/readme",
              },
            ],
          },
          {
            text: "ROS示例",
            collapsed: true,
            items: [
              {
                text: "机械臂运动控制",
                link: "/robot/demo/ros/controlArmMove",
              },
              {
                text: "力位混合控制规划",
                link: "/robot/demo/ros/forcePositionControl",
              },
              {
                text: "机械臂状态",
                link: "/robot/demo/ros/armState",
              },
            ],
          },
          {
            text: "ROS2示例",
            collapsed: true,
            items: [
              {
                text: "Foxy",
                collapsed: true,
                items: [
                  {
                    text: "机械臂运动控制",
                    link: "/robot/demo/ros2/foxy/controlArmMove",
                  },
                  {
                    text: "力位混合控制规划",
                    link: "/robot/demo/ros2/foxy/forcePositionControl",
                  },
                  {
                    text: "获取机械臂状态",
                    link: "/robot/demo/ros2/foxy/getArmState",
                  },
                ],
              },
              {
                text: "Humble",
                collapsed: true,
                items: [
                  {
                    text: "机械臂运动控制",
                    link: "/robot/demo/ros2/humble/controlArmMove",
                  },
                  {
                    text: "力位混合控制规划",
                    link: "/robot/demo/ros2/humble/forcePositionControl",
                  },
                  {
                    text: "获取机械臂状态",
                    link: "/robot/demo/ros2/humble/getArmState",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "JSON协议",
        collapsed: true,
        items: [
          {
            text: "关节配置指令集",
            link: "/robot/json/jointConfig",
          },
          {
            text: "机械臂配置指令集",
            link: "/robot/json/armConfig",
          },
          {
            text: "运动配置指令集",
            link: "/robot/json/motionConfig",
          },
          {
            text: "系统配置指令集",
            link: "/robot/json/systemConfig",
          },
          {
            text: "升降机构（选配）配置指令集",
            link: "/robot/json/liftControl",
          },
          {
            text: "通用扩展关节（选配）配置指令集",
            link: "/robot/json/expandControl",
          },
          {
            text: "在线编程配置指令集",
            link: "/robot/json/onlineProgram",
          },
          {
            text: "UDP 主动上报（第三代）配置指令集",
            link: "/robot/json/udpConfig",
          },
          {
            text: "电子围栏和虚拟墙配置指令集",
            link: "/robot/json/electronicFence",
          },
          {
            text: "自碰撞安全检测（第三代）配置指令集",
            link: "/robot/json/selfCollision",
          },
          {
            text: "附录：错误代码",
            link: "/robot/json/errorList",
          },
        ],
      },
      {
        text: "API(C、C++)",
        collapsed: true,
        items: [
          {
            text: "快速开始",
            link: "/robot/api/c/getStarted",
          },
          {
            text: "接口说明",
            collapsed: true,
            items: [
              {
                text: "连接机械臂配置",
                link: "/robot/api/c/classes/roboticArm",
              },
              {
                text: "在线编程配置",
                link: "/robot/api/c/classes/projectManagement",
              },
              {
                text: "工具坐标系配置",
                link: "/robot/api/c/classes/toolCoordinateConfig",
              },
              {
                text: "工作坐标系配置",
                link: "/robot/api/c/classes/workCoordinateConfig",
              },
              {
                text: "初始位置配置",
                link: "/robot/api/c/classes/armInitPosition",
              },
              {
                text: "机械臂运动状态控制指令",
                link: "/robot/api/c/classes/armMotionControl",
              },
              {
                text: "机械臂状态查询",
                link: "/robot/api/c/classes/armState",
              },
              {
                text: "机械臂示教指令",
                link: "/robot/api/c/classes/armTeachMove",
              },
              {
                text: "机械臂末端运动参数配置",
                link: "/robot/api/c/classes/armTipVelocityParameters",
              },
              {
                text: "通讯内容配置",
                link: "/robot/api/c/classes/communicationConfig",
              },
              {
                text: "控制器IO配置及查询",
                link: "/robot/api/c/classes/controllerIOConfig",
              },
              {
                text: "拖动示教配置",
                link: "/robot/api/c/classes/dragTeach",
              },
              {
                text: "末端工具IO配置",
                link: "/robot/api/c/classes/effectorIOConfig",
              },
              {
                text: "通用扩展关节配置",
                link: "/robot/api/c/classes/expandControl",
              },
              {
                text: "末端六维力配置",
                link: "/robot/api/c/classes/force",
              },
              {
                text: "力位混合控制补偿配置",
                link: "/robot/api/c/classes/forcePositionControl",
              },
              {
                text: "末端工具夹爪配置",
                link: "/robot/api/c/classes/gripperControl",
              },
              {
                text: "五指灵巧手配置",
                link: "/robot/api/c/classes/handControl",
              },
              {
                text: "系统安装方式配置",
                link: "/robot/api/c/classes/installPos",
              },
              {
                text: "关节配置",
                link: "/robot/api/c/classes/jointConfigSettings",
              },
              {
                text: "升降机构配置",
                link: "/robot/api/c/classes/liftControl",
              },
              {
                text: "Modbus 配置",
                link: "/robot/api/c/classes/modbusConfig",
              },
              {
                text: "机械臂轨迹指令",
                link: "/robot/api/c/classes/movePlan",
              },
            ],
          },
          {
            text: "结构体",
            collapsed: true,
            items: [
              {
                text: "全部状态",
                link: "/robot/api/c/struct/allState",
              },
              {
                text: "当前状态",
                link: "/robot/api/c/struct/currentState",
              },
              {
                text: "关节状态",
                link: "/robot/api/c/struct/jointStatus",
              },
              {
                text: "机械臂基本信息",
                link: "/robot/api/c/struct/robotInfo",
              },
              {
                text: "位置姿态",
                link: "/robot/api/c/struct/pose",
              },
              {
                text: "位置坐标",
                link: "/robot/api/c/struct/position",
              },
              {
                text: "坐标系",
                link: "/robot/api/c/struct/frame",
              },
              {
                text: "坐标系名称",
                link: "/robot/api/c/struct/frameName",
              },
              {
                text: "在线编程运行状态",
                link: "/robot/api/c/struct/programRunState",
              },
              {
                text: "在线编程列表",
                link: "/robot/api/c/struct/programTrajectorys",
              },
              {
                text: "在线编程储存",
                link: "/robot/api/c/struct/trajectoryData",
              },
              {
                text: "全局点位列表",
                link: "/robot/api/c/struct/waypointList",
              },
              {
                text: "全局点位储存",
                link: "/robot/api/c/struct/waypoint",
              },
              {
                text: "软件版本",
                link: "/robot/api/c/struct/softwareVersion",
              },
              {
                text: "夹爪状态",
                link: "/robot/api/c/struct/gripperState",
              },
              {
                text: "包络球参数列表",
                link: "/robot/api/c/struct/envelopeBallsList",
              },
              {
                text: "包络球参数",
                link: "/robot/api/c/struct/envelopesBall",
              },
              {
                text: "包络球集合",
                link: "/robot/api/c/struct/sendProject",
              },
              {
                text: "升降机/扩展关节状态",
                link: "/robot/api/c/struct/expandState",
              },
              {
                text: "电子围栏/虚拟墙使能状态",
                link: "/robot/api/c/struct/electronicFenceEnable",
              },
              {
                text: "动力学模型",
                link: "/robot/api/c/struct/dynamicVersion",
              },
              {
                text: "几何体模型参数",
                link: "/robot/api/c/struct/fenceConfig",
              },
              {
                text: "几何体模型长方体",
                link: "/robot/api/c/struct/fenceConfigCube",
              },
              {
                text: "几何体模型矢量平面",
                link: "/robot/api/c/struct/fenceConfigPlane",
              },
              {
                text: "几何体模型球体",
                link: "/robot/api/c/struct/fenceConfigSphere",
              },
              {
                text: "力传感器数据",
                link: "/robot/api/c/struct/forceSensor",
              },
              {
                text: "六维力传感器数据",
                link: "/robot/api/c/struct/forceData",
              },
              {
                text: "机械臂控制句柄",
                link: "/robot/api/c/struct/robotHandle",
              },
              {
                text: "无线网络信息",
                link: "/robot/api/c/struct/wifiNet",
              },
              {
                text: "外设数据读写",
                link: "/robot/api/c/struct/peripheralReadWriteParams",
              },
              {
                text: "UDP主动上报",
                link: "/robot/api/c/struct/realtimeArmJointState",
              },
              {
                text: "UDP主动上报接口配置",
                link: "/robot/api/c/struct/realtimePushConfig",
              },
              {
                text: "算法库版本",
                link: "/robot/api/c/struct/algorithmVersion",
              },

              {
                text: "欧拉角",
                link: "/robot/api/c/struct/euler",
              },
              {
                text: "四元数",
                link: "/robot/api/c/struct/quat",
              },
              {
                text: "旋转矩阵",
                link: "/robot/api/c/struct/matrix",
              },
              {
                text: "逆解参数",
                link: "/robot/api/c/struct/inverseKinematicsParams",
              },
              {
                text: "编译说明",
                link: "/robot/api/c/struct/planinfo",
              },
            ],
          },
          {
            text: "枚举",
            link: "/robot/api/c/type/typeList",
          },
        ],
      },
      {
        text: "API(Python)",
        collapsed: true,
        items: [
          {
            text: "快速开始",
            link: "/robot/api/python/getStarted",
          },
          {
            text: "接口说明",
            collapsed: true,
            items: [
              {
                text: "机械臂连接控制",
                link: "/robot/api/python/classes/roboticArm",
              },
              {
                text: "工具坐标系配置",
                link: "/robot/api/python/classes/toolCoordinateConfig",
              },

              {
                text: "工作坐标系配置",
                link: "/robot/api/python/classes/workCoordinateConfig",
              },
              {
                text: "机械臂状态查询",
                link: "/robot/api/python/classes/armState",
              },

              {
                text: "机械臂运动参数配置",
                link: "/robot/api/python/classes/tipVelocityParameters",
              },
              {
                text: "机械臂示教及步进运动控制",
                link: "/robot/api/python/classes/teachMove",
              },

              {
                text: "拖动示教配置",
                link: "/robot/api/python/classes/dragTeach",
              },
              {
                text: "机械臂运动状态控制",
                link: "/robot/api/python/classes/motionControl",
              },

              {
                text: "通讯内容配置",
                link: "/robot/api/python/classes/communicationConfig",
              },

              {
                text: "系统配置",
                link: "/robot/api/python/classes/controllerConfig",
              },
              {
                text: "系统安装方式配置",
                link: "/robot/api/python/classes/installPos",
              },
              {
                text: "通用扩展关节配置",
                link: "/robot/api/python/classes/expandControl",
              },
              {
                text: "升降机构配置",
                link: "/robot/api/python/classes/liftControl",
              },
              {
                text: "末端六维力配置",
                link: "/robot/api/python/classes/force",
              },
              {
                text: "电子围栏和虚拟墙配置",
                link: "/robot/api/python/classes/electronicFenceConfig",
              },
              {
                text: "力位混合控制补偿配置",
                link: "/robot/api/python/classes/forcePositionControl",
              },
              {
                text: "全局路点管理",
                link: "/robot/api/python/classes/globalWaypointManage",
              },
              {
                text: "末端工具夹爪配置",
                link: "/robot/api/python/classes/gripperControl",
              },
              {
                text: "五指灵巧手配置",
                link: "/robot/api/python/classes/handControl",
              },
              {
                text: "IO控制",
                link: "/robot/api/python/classes/ioConfig",
              },
              {
                text: "关节配置",
                link: "/robot/api/python/classes/jointsConfig",
              },
              {
                text: "关节配置查询",
                link: "/robot/api/python/classes/jointsConfigQuery",
              },
              {
                text: "Modbus 配置",
                link: "/robot/api/python/classes/modbusConfig",
              },
              {
                text: "机械臂轨迹控制",
                link: "/robot/api/python/classes/movePlan",
              },
              {
                text: "自碰撞安全检测接口配置",
                link: "/robot/api/python/classes/selfCollision",
              },
              {
                text: "在线编程文件管理",
                link: "/robot/api/python/classes/programManagement",
              },
              {
                text: "算法接口配置",
                link: "/robot/api/python/classes/algo",
              },
              {
                text: "UDP 主动上报配置",
                link: "/robot/api/python/classes/udpConfig",
              },
            ],
          },
          {
            text: "结构体",
            collapsed: true,
            items: [
              {
                text: "算法库信息",
                link: "/robot/api/python/struct/algorithmVersion",
              },
              {
                text: "机械臂所有状态参数",
                link: "/robot/api/python/struct/armAllState",
              },
              {
                text: "机械臂软件版本信息",
                link: "/robot/api/python/struct/armSoftwareVersion",
              },
              {
                text: "控制器ctrl层软件信息",
                link: "/robot/api/python/struct/ctrlVersion",
              },
              {
                text: "机械臂当前状态",
                link: "/robot/api/python/struct/currentArmState",
              },
              {
                text: "动力学版本信息",
                link: "/robot/api/python/struct/dynamicVersion",
              },
              {
                text: "电子围栏/虚拟墙",
                link: "/robot/api/python/struct/electronicFenceEnable",
              },
              {
                text: "工具坐标系包络参数",
                link: "/robot/api/python/struct/envelopeBall",
              },
              {
                text: "工具坐标系包络参数列表",
                link: "/robot/api/python/struct/envelopeBallsList",
              },
              {
                text: "欧拉角",
                link: "/robot/api/python/struct/euler",
              },
              {
                text: "机械臂到位事件",
                link: "/robot/api/python/struct/eventPushData",
              },
              {
                text: "扩展关节状态",
                link: "/robot/api/python/struct/expandState",
              },
              {
                text: "电子围栏参数",
                link: "/robot/api/python/struct/fenceConfig",
              },
              {
                text: "几何模型长方体参数",
                link: "/robot/api/python/struct/fenceConfigCube",
              },
              {
                text: "几何模型参数列表",
                link: "/robot/api/python/struct/fenceConfigList",
              },
              {
                text: "几何模型点面矢量平面参数",
                link: "/robot/api/python/struct/fenceConfigPlane",
              },
              {
                text: "几何模型球体参数",
                link: "/robot/api/python/struct/fenceConfigSphere",
              },
              {
                text: "几何模型名称",
                link: "/robot/api/python/struct/fenceNames",
              },
              {
                text: "六维力传感器数据",
                link: "/robot/api/python/struct/forceData",
              },
              {
                text: "力控数据",
                link: "/robot/api/python/struct/forceSensor",
              },
              {
                text: "机械臂位置姿态",
                link: "/robot/api/python/struct/frame",
              },
              {
                text: "坐标系名称",
                link: "/robot/api/python/struct/frameName",
              },
              {
                text: "夹爪状态",
                link: "/robot/api/python/struct/gripperState",
              },
              {
                text: "逆运动学参数",
                link: "/robot/api/python/struct/inverseKinematicsParams",
              },
              {
                text: "机械臂关节状态",
                link: "/robot/api/python/struct/jointStatus",
              },
              {
                text: "矩阵",
                link: "/robot/api/python/struct/matrix",
              },
              {
                text: "读写外设数据参数",
                link: "/robot/api/python/struct/peripheralReadWriteParams",
              },
              {
                text: "控制器plan层软件信息",
                link: "/robot/api/python/struct/planInfo",
              },
              {
                text: "坐标系",
                link: "/robot/api/python/struct/pose",
              },
              {
                text: "位置",
                link: "/robot/api/python/struct/position",
              },
              {
                text: "机械臂程序运行状态",
                link: "/robot/api/python/struct/programRunState",
              },
              {
                text: "查询在线编程列表",
                link: "/robot/api/python/struct/programTrajectories",
              },
              {
                text: "四元数",
                link: "/robot/api/python/struct/quat",
              },
              {
                text: "机械臂实时状态推送",
                link: "/robot/api/python/struct/realtimeArmJointState",
              },
              {
                text: "UDP主动上报机械臂状态",
                link: "/robot/api/python/struct/realtimePushConfig",
              },
              {
                text: "句柄",
                link: "/robot/api/python/struct/robotHandle",
              },
              {
                text: "机械臂基本信息",
                link: "/robot/api/python/struct/robotInfo",
              },
              {
                text: "发送编程文件信息",
                link: "/robot/api/python/struct/sendProject",
              },
              {
                text: "在线编程存储信息",
                link: "/robot/api/python/struct/trajectoryData",
              },
              {
                text: "全局路点",
                link: "/robot/api/python/struct/waypoint",
              },
              {
                text: "全局路点列表",
                link: "/robot/api/python/struct/waypointList",
              },
              {
                text: "无线网络信息",
                link: "/robot/api/python/struct/wifiNet",
              },
            ],
          },
          {
            text: "枚举",
            link: "/robot/api/python/type/typeList",
          },
        ],
      },
      {
        text: "ROS开发",
        collapsed: true,
        items: [
          {
            text: "快速开始",
            link: "/robot/ros/getStarted",
          },
          {
            text: "ROS机械臂驱动功能说明",
            link: "/robot/ros/driver",
          },
          {
            text: "快速启动",
            link: "/robot/ros/bringup/",
          },
          {
            text: "moveit通信功能说明",
            link: "/robot/ros/control",
          },
          {
            text: "机械臂模型展示功能说明",
            link: "/robot/ros/description",
          },
          {
            text: "机械臂使用示例",
            link: "/robot/ros/example",
          },
          {
            text: "虚拟机械臂使用说明",
            link: "/robot/ros/gazebo",
          },
          {
            text: "moveit控制机械臂使用说明",
            link: "/robot/ros/moveitConfig",
          },
          {
            text: "机械臂ROS话题说明",
            link: "/robot/ros/driverDetailDescription",
          },
          {
            text: "ROS 框架消息文件",
            link: "/robot/ros/msg",
          },
        ],
      },
      {
        text: "ROS2开发",
        collapsed: true,
        items: [
          {
            text: "快速开始",
            link: "/robot/ros2/getStarted",
          },
          {
            text: "快速启动",
            link: "/robot/ros2/bringup",
          },
          {
            text: "moveit通信功能说明",
            link: "/robot/ros2/control",
          },
          {
            text: "机械臂模型展示功能说明",
            link: "/robot/ros2/description",
          },
          {
            text: "ROS机械臂驱动功能说明",
            link: "/robot/ros2/driver",
          },
          {
            text: "机械臂使用示例",
            link: "/robot/ros2/example",
          },
          {
            text: "虚拟机械臂使用说明",
            link: "/robot/ros2/gazebo",
          },
          {
            text: "moveit2控制机械臂使用说明",
            link: "/robot/ros2/moveit2Config",
          },
          {
            text: "自定义消息说明",
            link: "/robot/ros2/rosInterfaces",
          },
        ],
      },
      {
        text: "Modbus",
        collapsed: true,
        items: [
          {
            text: "Modbus从站地址表",
            link: "/robot/modbus/",
          },
        ],
      },
      {
        text: "D-H模型及参数",
        collapsed: true,
        items: [
          {
            text: "RM65系列D-H模型及参数",
            link: "/robot/DH/RM65系列D-H参数模型及参数",
          },
          {
            text: "RM75系列D-H模型及参数",
            link: "/robot/DH/RM75系列D-H参数模型及参数",
          },
          {
            text: "RML63系列D-H模型及参数",
            link: "/robot/DH/RML63系列D-H参数模型及参数",
          },
          {
            text: "ECO65系列D-H模型及参数",
            link: "/robot/DH/ECO65系列D-H参数模型及参数",
          },
          {
            text: "GEN72系列D-H模型及参数",
            link: "/robot/DH/GEN72系列D-H参数模型及参数",
          },
        ],
      },
      {
        text: "常见问题",
        collapsed: true,
        items: [
          {
            text: "快速使用常见问题",
            link: "/robot/FQA/nounConcept",
          },
          {
            text: "机械臂API开发常见问题",
            link: "/robot/FQA/sdk/",
          },
        ],
      },
      {
        text: "相关下载",
        collapsed: true,
        items: [
          {
            text: "二次开发",
            link: "/robot/download/redevelopment",
          },
          {
            text: "其他",
            link: "/robot/download/other",
          },
        ],
      },
    ],
  };
