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
        link: "/robot/versionControl",
      },
      {
        text: "入门指南",
        items: [
          {
            text: "用户手册",
            link: "/robot/guide/manual",
          },
          {
            text: "硬件准备",
            link: "/robot/guide/hardwarePreparation",
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
            link: "/robot/example/api",
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
        items: [
          {
            text: "快速开始",
            link: "/robot/json/",
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
                text: "快速开始",
                link: "/robot/api/c/getStarted",
              },
              {
                text: "接口列表",
                collapsed: true,
                items: [
                  {
                    text: "连接机械臂",
                    link: "/robot/api/c/class/roboticArm",
                  },
                  {
                    text: "工具坐标系配置",
                    link: "/robot/api/c/class/toolCoordinateConfig",
                  },
                  {
                    text: "工作坐标系配置",
                    link: "/robot/api/c/class/workCoordinateConfig",
                  },
                  {
                    text: "初始位置设置",
                    link: "/robot/api/c/class/armInitPosition",
                  },
                  {
                    text: "机械臂运动控制指令类",
                    link: "/robot/api/c/class/armMotionControl",
                  },
                  {
                    text: "机械臂状态查询",
                    link: "/robot/api/c/class/armState",
                  },
                  {
                    text: "机械臂示教指令类",
                    link: "/robot/api/c/class/armTeachMove",
                  },
                  {
                    text: "机械臂末端运动参数配置",
                    link: "/robot/api/c/class/armTipVelocityParameters",
                  },
                  {
                    text: "通讯配置",
                    link: "/robot/api/c/class/communicationConfig",
                  },
                  {
                    text: "控制器IO配置及获取",
                    link: "/robot/api/c/class/controllerIOConfig",
                  },
                  {
                    text: "拖动示教",
                    link: "/robot/api/c/class/dragTeach",
                  },
                  {
                    text: "末端工具IO控制",
                    link: "/robot/api/c/class/effectorIOConfig",
                  },
                  {
                    text: "通用扩展关节控制",
                    link: "/robot/api/c/class/expandControl",
                  },
                  {
                    text: "末端传感器六维力",
                    link: "/robot/api/c/class/force",
                  },
                  {
                    text: "透传力位混合控制补偿",
                    link: "/robot/api/c/class/gripperControl",
                  },
                  {
                    text: "五指灵巧手",
                    link: "/robot/api/c/class/handControl",
                  },
                  {
                    text: "系统安装方式",
                    link: "/robot/api/c/class/installPos",
                  },
                  {
                    text: "初始位置设置",
                    link: "/robot/api/c/class/jointConfigSettings",
                  },
                  {
                    text: "关节配置",
                    link: "/robot/api/c/class/armInitPosition",
                  },
                  {
                    text: "升降机构控制",
                    link: "/robot/api/c/class/liftControl",
                  },
                  {
                    text: "Modbus配置",
                    link: "/robot/api/c/class/modbusConfig",
                  },
                  {
                    text: "机械臂轨迹指令类",
                    link: "/robot/api/c/class/movePlan",
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
            link: "/robot/api/python",
          },
        ],
      },
      {
        text: "ROS文档",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/robot/ros/",
          },
        ],
      },
      {
        text: "ROS2文档",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/robot/ros2/",
          },
        ],
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "示例",
            link: "/robot/FQA/",
          },
        ],
      },
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
                    link: "/joints/api/c/class/RoboticArm",
                  },
                  {
                    text: "工具坐标系配置",
                    link: "/joints/api/c/class/ToolCoordinateConfig",
                  },
                  {
                    text: "工作坐标系配置",
                    link: "/joints/api/c/class/WorkCoordinateConfig",
                  },
                  {
                    text: "初始位置设置",
                    link: "/joints/api/c/class/ArmInitPosition",
                  },
                  {
                    text: "机械臂运动控制指令类",
                    link: "/joints/api/c/class/ArmMotionControl",
                  },
                  {
                    text: "机械臂状态查询",
                    link: "/joints/api/c/class/ArmState",
                  },
                  {
                    text: "机械臂示教指令类",
                    link: "/joints/api/c/class/ArmTeachMove",
                  },
                  {
                    text: "机械臂末端运动参数配置",
                    link: "/joints/api/c/class/ArmTipVelocityParameters",
                  },
                  {
                    text: "通讯配置",
                    link: "/joints/api/c/class/CommunicationConfig",
                  },
                  {
                    text: "控制器IO配置及获取",
                    link: "/joints/api/c/class/ControllerIOConfig",
                  },
                  {
                    text: "拖动示教",
                    link: "/joints/api/c/class/DragTeach",
                  },
                  {
                    text: "末端工具IO控制",
                    link: "/joints/api/c/class/EffectorIOConfig",
                  },
                  {
                    text: "通用扩展关节控制",
                    link: "/joints/api/c/class/ExpandControl",
                  },
                  {
                    text: "末端传感器六维力",
                    link: "/joints/api/c/class/Force",
                  },
                  {
                    text: "透传力位混合控制补偿",
                    link: "/joints/api/c/class/GripperControl",
                  },
                  {
                    text: "五指灵巧手",
                    link: "/joints/api/c/class/HandControl",
                  },
                  {
                    text: "系统安装方式",
                    link: "/joints/api/c/class/InstallPos",
                  },
                  {
                    text: "初始位置设置",
                    link: "/joints/api/c/class/JointConfigSettings",
                  },
                  {
                    text: "关节配置",
                    link: "/joints/api/c/class/ArmInitPosition",
                  },
                  {
                    text: "升降机构控制",
                    link: "/joints/api/c/class/LiftControl",
                  },
                  {
                    text: "Modbus配置",
                    link: "/joints/api/c/class/ModbusConfig",
                  },
                  {
                    text: "机械臂轨迹指令类",
                    link: "/joints/api/c/class/MovePlan",
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
