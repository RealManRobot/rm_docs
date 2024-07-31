import type { DefaultTheme } from "vitepress";
export const sidebars: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti =
  {
    "/robot/": [
      {
        text: "概述",
        link: "/robot/summarize",
      },
      {
        text: "版本对照表",
        link: "/robot/versionComparisonTable",
      },
      {
        text: "入门指南",
        items: [
          // {
          //   text: "用户手册",
          //   link: "/robot/guide/manual",
          // },
          {
            text: "快速开始",
            link: "/robot/quickUseManual",
          },
        ],
      },
      {
        text: "Demo示例",
        items: [
          {
            text: "开发指南",
            link: "/robot/example/guide",
          },
          {
            text: "JSON协议",
            link: "/robot/example/json",
          },
          {
            text: "API",
            collapsed: false,
            items: [
              {
                text: "API(C)",
                collapsed: true,
                items: [
                  {
                    text: "基础示例",
                    link: "/robot/demo/c/simpleProcess/readme",
                  },
                  {
                    text: "坐标系操作",
                    link: "/robot/demo/c/coordinateSystem/readme",
                  },
                  {
                    text: "力控",
                    link: "/robot/demo/c/forceControl/readme",
                  },
                  {
                    text: "抓取",
                    link: "/robot/demo/c/gripper/readme",
                  },
                  {
                    text: "IO功能",
                    link: "/robot/demo/c/IOControl/readme",
                  },
                  {
                    text: "升降机控制",
                    link: "/robot/demo/c/lift/readme",
                  },
                  {
                    text: "ModbusRTU",
                    link: "/robot/demo/c/modbusRTU/readme",
                  },
                  {
                    text: "样条曲线运动",
                    link: "/robot/demo/c/moves/readme",
                  },
                  {
                    text: "角度透传",
                    link: "/robot/demo/c/movejCANFD/readme",
                  },
                  {
                    text: "在线编程",
                    link: "/robot/demo/c/onlineProgram/readme",
                  },
                  {
                    text: "算法",
                    link: "/robot/demo/c/algoInterface/readme",
                  },
                ],
              },
              {
                text: "API(Python)",
                collapsed: true,
                items: [
                  {
                    text: "基础示例",
                    link: "/robot/demo/python/simpleProcess/readme",
                  },
                  {
                    text: "坐标系操作",
                    link: "/robot/demo/python/coordinateSystem/readme",
                  },
                  {
                    text: "机械臂版本操作",
                    link: "/robot/demo/python/doubleRoboticArm/readme",
                  },
                  {
                    text: "力控",
                    link: "/robot/demo/python/forceControl/readme",
                  },
                  {
                    text: "抓取",
                    link: "/robot/demo/python/gripper/readme",
                  },
                  {
                    text: "IO功能",
                    link: "/robot/demo/python/IOControl/readme",
                  },
                  {
                    text: "升降机控制",
                    link: "/robot/demo/python/lift/readme",
                  },
                  {
                    text: "ModbusRTU",
                    link: "/robot/demo/python/modbusRTU/readme",
                  },
                  {
                    text: "样条曲线运动",
                    link: "/robot/demo/python/moves/readme",
                  },
                  {
                    text: "角度透传",
                    link: "/robot/demo/python/movejCANFD/readme",
                  },
                  {
                    text: "在线编程",
                    link: "/robot/demo/python/onlineProgram/readme",
                  },
                  {
                    text: "算法",
                    link: "/robot/demo/python/algoInterface/readme",
                  },
                ],
              },
            ],
          },
          {
            text: "ROS",
            link: "/robot/example/ros",
          },
          {
            text: "ROS2",
            link: "/robot/example/ros2",
          },
        ],
      },
      {
        text: "JSON协议",
        collapsed: true,
        items: [
          {
            text: "机械臂初始状态",
            link: "/robot/json/armInit",
          },
          {
            text: "坐标系查询",
            link: "/robot/json/coordinateQuery",
          },
          {
            text: "运动参数命令集",
            link: "/robot/json/motionParameterCommand",
          },
          {
            text: "运动参数查询",
            link: "/robot/json/motionParameterQuery",
          },
          {
            text: "运动类指令",
            link: "/robot/json/armMotionControl",
          },
          {
            text: "示教运动类指令",
            link: "/robot/json/armTeachMove",
          },
          {
            text: "轨迹类指令",
            link: "/robot/json/movePlan",
          },
          {
            text: "步进类指令",
            link: "/robot/json/stepControl",
          },
          {
            text: "状态查询",
            link: "/robot/json/statusQuery",
          },
          {
            text: "工具坐标系命令集",
            link: "/robot/json/toolCoordinateCommand",
          },
          {
            text: "工作坐标系命令集",
            link: "/robot/json/wrokingCoordinateCommand",
          },
          {
            text: "关节配置",
            link: "/robot/json/jointConfigCommand",
          },
          {
            text: "关节配置查询",
            link: "/robot/json/jointConfigQuery",
          },
          {
            text: "机械臂状态查询",
            link: "/robot/json/armState",
          },
          {
            text: "通讯配置",
            link: "/robot/json/communicationConfig",
          },
          {
            text: "控制器IO",
            link: "/robot/json/controllerIOConfig",
          },
          {
            text: "拖动示教",
            link: "/robot/json/dragTeach",
          },
          {
            text: "末端IO",
            link: "/robot/json/effectorIOConfig",
          },
          {
            text: "六维力传感器",
            link: "/robot/json/force",
          },
          {
            text: "透传力位混合控制补偿",
            link: "/robot/json/forcePositionControl",
          },
          {
            text: "手爪控制",
            link: "/robot/json/gripperControl",
          },
          {
            text: "五指灵巧手",
            link: "/robot/json/handControl",
          },
          {
            text: "modbus",
            link: "/robot/json/modbusSet",
          },
          {
            text: "系统指令",
            link: "/robot/json/systemCommand",
          },
          {
            text: "系统查询和反馈",
            link: "/robot/json/systemQuery",
          },
          {
            text: "udp主动上报",
            link: "/robot/json/udpConfig",
          },
          {
            text: "数据管理",
            link: "/robot/json/dataManagement",
          },
          {
            text: "电子围栏",
            link: "/robot/json/electronicFence",
          },
          {
            text: "虚拟墙",
            link: "/robot/json/virtualWall",
          },
          {
            text: "在线编程储存列表",
            link: "/robot/json/onlineProgrammingStoresList",
          },
          {
            text: "文件传输",
            link: "/robot/json/fileTransfer",
          },
          {
            text: "全局路点",
            link: "/robot/json/globalWaypoint",
          },
          {
            text: "提示框",
            link: "/robot/json/promptBox",
          },
          {
            text: "自碰撞安全检测",
            link: "/robot/json/selfCollision",
          },
          {
            text: "通用扩展关节",
            link: "/robot/json/expandControl",
          },
          {
            text: "升降机",
            link: "/robot/json/liftControl",
          },
          {
            text: "错误码列表",
            link: "/robot/json/errorList",
          },
        ],
      },
      {
        text: "API文档(C)",
        collapsed: false,
        items: [
          {
            text: "快速开始",
            link: "/robot/api/c/getStarted",
          },
          {
            text: "接口列表",
            collapsed: true,
            items: [
              {
                text: "连接机械臂",
                link: "/robot/api/c/classes/roboticArm",
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
                text: "初始位置设置",
                link: "/robot/api/c/classes/armInitPosition",
              },
              {
                text: "机械臂运动控制指令类",
                link: "/robot/api/c/classes/armMotionControl",
              },
              {
                text: "机械臂状态查询",
                link: "/robot/api/c/classes/armState",
              },
              {
                text: "机械臂示教指令类",
                link: "/robot/api/c/classes/armTeachMove",
              },
              {
                text: "机械臂末端运动参数配置",
                link: "/robot/api/c/classes/armTipVelocityParameters",
              },
              {
                text: "通讯配置",
                link: "/robot/api/c/classes/communicationConfig",
              },
              {
                text: "控制器IO配置及获取",
                link: "/robot/api/c/classes/controllerIOConfig",
              },
              {
                text: "拖动示教",
                link: "/robot/api/c/classes/dragTeach",
              },
              {
                text: "末端工具IO控制",
                link: "/robot/api/c/classes/effectorIOConfig",
              },
              {
                text: "通用扩展关节控制",
                link: "/robot/api/c/classes/expandControl",
              },
              {
                text: "末端传感器六维力",
                link: "/robot/api/c/classes/force",
              },
              {
                text: "透传力位混合控制补偿",
                link: "/robot/api/c/classes/gripperControl",
              },
              {
                text: "五指灵巧手",
                link: "/robot/api/c/classes/handControl",
              },
              {
                text: "系统安装方式",
                link: "/robot/api/c/classes/installPos",
              },
              {
                text: "初始位置设置",
                link: "/robot/api/c/classes/jointConfigSettings",
              },
              {
                text: "关节配置",
                link: "/robot/api/c/classes/armInitPosition",
              },
              {
                text: "升降机构控制",
                link: "/robot/api/c/classes/liftControl",
              },
              {
                text: "Modbus配置",
                link: "/robot/api/c/classes/modbusConfig",
              },
              {
                text: "机械臂轨迹指令类",
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
                text: "UPD主动上报",
                link: "/robot/api/c/struct/realtimeArmJointState",
              },
              {
                text: "UPD主动上报接口配置",
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
        text: "API文档(Python)",
        collapsed: false,
        items: [
          {
            text: "快速开始",
            link: "/robot/api/python/getStarted",
          },
          {
            text: "接口列表",
            collapsed: true,
            items: [
              {
                text: "机械臂连接",
                link: "/robot/api/python/classes/roboticArm",
              },
              {
                text: "工具坐标系",
                link: "/robot/api/python/classes/toolCoordinateConfig",
              },

              {
                text: "工作坐标系",
                link: "/robot/api/python/classes/workCoordinateConfig",
              },
              {
                text: "机械臂状态",
                link: "/robot/api/python/classes/armState",
              },

              {
                text: "机械臂运动参数",
                link: "/robot/api/python/classes/tipVelocityParameters",
              },
              {
                text: "示教运动",
                link: "/robot/api/python/classes/teachMove",
              },

              {
                text: "拖动示教",
                link: "/robot/api/python/classes/dragTeach",
              },
              {
                text: "机械臂运动的急停、暂停、继续等控制",
                link: "/robot/api/python/classes/motionControl",
              },

              {
                text: "通讯配置",
                link: "/robot/api/python/classes/communicationConfig",
              },

              {
                text: "系统配置",
                link: "/robot/api/python/classes/controllerConfig",
              },
              {
                text: "安装方式及关节、末端软件版本号查询",
                link: "/robot/api/python/classes/installPos",
              },
              {
                text: "扩展关节",
                link: "/robot/api/python/classes/expandControl",
              },
              {
                text: "升降机控制",
                link: "/robot/api/python/classes/liftControl",
              },
              {
                text: "末端六维力传感器",
                link: "/robot/api/python/classes/force",
              },
              {
                text: "电子围栏和虚拟墙",
                link: "/robot/api/python/classes/electronicFenceConfig",
              },
              {
                text: "透传力位混合控制补偿",
                link: "/robot/api/python/classes/forcePositionControl",
              },
              {
                text: "全局路点管理",
                link: "/robot/api/python/classes/globalWaypointManage",
              },
              {
                text: "夹爪控制",
                link: "/robot/api/python/classes/gripperControl",
              },
              {
                text: "五指灵巧手控制",
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
                text: "Modbus配置",
                link: "/robot/api/python/classes/modbusConfig",
              },
              {
                text: "轨迹规划指令",
                link: "/robot/api/python/classes/movePlan",
              },
              {
                text: "自碰撞安全检测",
                link: "/robot/api/python/classes/selfCollision",
              },
              {
                text: "在线编程",
                link: "/robot/api/python/classes/programManagement",
              },
              {
                text: "算法",
                link: "/robot/api/python/classes/alog",
              },
              {
                text: "UDP主动上报",
                link: "/robot/api/python/classes/udpConfig",
              },
            ],
          },
        ],
      },
      {
        text: "ROS文档",
        collapsed: true,
        items: [
          {
            text: "driverDetailDescription",
            link: "/robot/ros/driverDetailDescription",
          },
          {
            text: "bringup",
            link: "/robot/ros/bringup",
          },
          {
            text: "control",
            link: "/robot/ros/control",
          },
          {
            text: "driver",
            link: "/robot/ros/driver",
          },
          {
            text: "description",
            link: "/robot/ros/description",
          },
          {
            text: "example",
            link: "/robot/ros/example",
          },
          {
            text: "gazebo",
            link: "/robot/ros/gazebo",
          },
          {
            text: "moveitConfig",
            link: "/robot/ros/moveitConfig",
          },
          {
            text: "msg",
            link: "/robot/ros/msg",
          },
        ],
      },
      {
        text: "ROS2文档",
        collapsed: true,
        items: [
          {
            text: "快速开始",
            link: "/robot/ros2/getStarted",
          },
          {
            text: "bringup",
            link: "/robot/ros2/bringup",
          },
          {
            text: "control",
            link: "/robot/ros2/control",
          },
          {
            text: "description",
            link: "/robot/ros2/description",
          },
          {
            text: "driver",
            link: "/robot/ros2/driver",
          },
          {
            text: "example",
            link: "/robot/ros2/example",
          },
          {
            text: "gazebo",
            link: "/robot/ros2/gazebo",
          },
          {
            text: "moveit2_config",
            link: "/robot/ros2/moveit2Config",
          },
          {
            text: "ros_interfaces",
            link: "/robot/ros2/rosInterfaces",
          },
        ],
      },
      {
        text: "modbus",
        items: [
          {
            text: "modbus从站地址表",
            link: "/robot/modbus/index",
          },
        ],
      },
      // {
      //   text: "常见问题",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "示例",
      //       link: "/robot/FQA/",
      //     },
      //   ],
      // },
    ],
    "/joints/": [
      {
        text: "概述",
        link: "/joints/summarize",
      },
      {
        text: "版本对照表",
        link: "/joints/versionControl",
      },
      {
        text: "入门指南",
        items: [
          {
            text: "用户手册",
            link: "/joints/guide/manual",
          },
          {
            text: "硬件准备",
            link: "/joints/guide/hardwarePreparation",
          },
        ],
      },
      {
        text: "Demo示例",
        items: [
          {
            text: "开发指南",
            link: "/joints/example/guide",
          },
          {
            text: "JSON协议",
            link: "/joints/example/json",
          },
          {
            text: "API",
            link: "/joints/example/api",
          },
          {
            text: "ROS",
            link: "/joints/example/ros",
          },
          {
            text: "ROS2",
            link: "/joints/example/ros2",
          },
        ],
      },
      {
        text: "JSON协议",
        items: [
          {
            text: "快速开始",
            link: "/joints/json/",
          },
        ],
      },
      {
        text: "API文档(C)",
        collapsed: false,
        items: [
          {
            text: "C & C++",
            collapsed: true,
            items: [
              {
                text: "类列表",
                collapsed: true,
                items: [
                  {
                    text: "连接机械臂",
                    link: "/joints/api/c/classes/RoboticArm",
                  },
                  {
                    text: "工具坐标系配置",
                    link: "/joints/api/c/classes/ToolCoordinateConfig",
                  },
                  {
                    text: "工作坐标系配置",
                    link: "/joints/api/c/classes/WorkCoordinateConfig",
                  },
                  {
                    text: "初始位置设置",
                    link: "/joints/api/c/classes/ArmInitPosition",
                  },
                  {
                    text: "机械臂运动控制指令类",
                    link: "/joints/api/c/classes/ArmMotionControl",
                  },
                  {
                    text: "机械臂状态查询",
                    link: "/joints/api/c/classes/ArmState",
                  },
                  {
                    text: "机械臂示教指令类",
                    link: "/joints/api/c/classes/ArmTeachMove",
                  },
                  {
                    text: "机械臂末端运动参数配置",
                    link: "/joints/api/c/classes/ArmTipVelocityParameters",
                  },
                  {
                    text: "通讯配置",
                    link: "/joints/api/c/classes/CommunicationConfig",
                  },
                  {
                    text: "控制器IO配置及获取",
                    link: "/joints/api/c/classes/ControllerIOConfig",
                  },
                  {
                    text: "拖动示教",
                    link: "/joints/api/c/classes/DragTeach",
                  },
                  {
                    text: "末端工具IO控制",
                    link: "/joints/api/c/classes/EffectorIOConfig",
                  },
                  {
                    text: "通用扩展关节控制",
                    link: "/joints/api/c/classes/ExpandControl",
                  },
                  {
                    text: "末端传感器六维力",
                    link: "/joints/api/c/classes/Force",
                  },
                  {
                    text: "透传力位混合控制补偿",
                    link: "/joints/api/c/classes/GripperControl",
                  },
                  {
                    text: "五指灵巧手",
                    link: "/joints/api/c/classes/HandControl",
                  },
                  {
                    text: "系统安装方式",
                    link: "/joints/api/c/classes/InstallPos",
                  },
                  {
                    text: "初始位置设置",
                    link: "/joints/api/c/classes/JointConfigSettings",
                  },
                  {
                    text: "关节配置",
                    link: "/joints/api/c/classes/ArmInitPosition",
                  },
                  {
                    text: "升降机构控制",
                    link: "/joints/api/c/classes/LiftControl",
                  },
                  {
                    text: "Modbus配置",
                    link: "/joints/api/c/classes/ModbusConfig",
                  },
                  {
                    text: "机械臂轨迹指令类",
                    link: "/joints/api/c/classes/MovePlan",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "API文档(Python)",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/joints/api/python",
          },
        ],
      },
      {
        text: "ROS文档",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/joints/ros/",
          },
        ],
      },
      {
        text: "ROS2文档",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/joints/ros2/",
          },
        ],
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/joints/FQA/",
          },
        ],
      },
    ],
    "/compositeRobot/": [
      {
        text: "快速开始",
        items: [
          {
            text: "示例",
            link: "/compositeRobot/",
          },
        ],
      },
    ],
    "/AI/": [
      {
        text: "概述",
        link: "/AI/intro",
      },
      {
        text: "Demo演示",
        link: "/AI/demo/",
      },
      {
        text: "SDK开发指南",
        items: [
          {
            text: "yolo",
            collapsed: false,
            items: [
              {
                text: "简要介绍",
                link: "/AI/developerGuide/yolo/introduction",
              },
              {
                text: "快速开始",
                link: "/AI/developerGuide/yolo/gettingStarted",
              },
              {
                text: "环境配置",
                link: "/AI/developerGuide/yolo/developmentEnvironmentConfig",
              },
              {
                text: "接口示例",
                link: "/AI/developerGuide/yolo/interfaceExample",
              },
              {
                text: "资源下载",
                link: "/AI/developerGuide/yolo/download",
              },
              {
                text: "故障排除",
                link: "/AI/developerGuide/yolo/troubleshooting",
              },
              {
                text: "常见问题",
                link: "/AI/developerGuide/yolo/fqa",
              },
            ],
          },
          {
            text: "视觉伺服",
            collapsed: false,
            items: [
              {
                text: "介绍",
                link: "/AI/visualServo/index",
              },
            ],
          },
          {
            text: "6D姿态",
            collapsed: false,
            items: [
              {
                text: "介绍",
                link: "/AI/6D-Attitude/index",
              },
            ],
          },
        ],
      },
      {
        text: "常见问题",
        items: [
          {
            text: "cuda环境安装",
            link: "/AI/FQA/environmentalInstallation",
          },
        ],
      },
      {
        text: "相关下载",
        link: "/AI/download",
      },
    ],
    "/symbiosis/": [
      {
        text: "概述",
        link: "/symbiosis/",
      },
      {
        text: "软件方案",
        collapsed: false,
        items: [
          {
            text: "综合案例",
            link: "/symbiosis/scheme/software",
          },
          {
            text: "机械臂案例",
            link: "/symbiosis/scheme/robot",
          },
          {
            text: "ROS案例",
            link: "/symbiosis/scheme/ros",
          },
        ],
      },
      {
        text: "硬件生态",
        collapsed: false,
        items: [
          {
            text: "介绍",
            link: "/symbiosis/hardware/",
          },
        ],
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/symbiosis/FQA/",
          },
        ],
      },
    ],
  };
