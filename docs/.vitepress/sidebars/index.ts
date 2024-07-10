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
                text: "类列表",
                collapsed: true,
                items: [
                  {
                    text: "连接机械臂",
                    link: "/robot/api/c/class/RoboticArm",
                  },
                  {
                    text: "工具坐标系配置",
                    link: "/robot/api/c/class/ToolCoordinateConfig",
                  },
                  {
                    text: "工作坐标系配置",
                    link: "/robot/api/c/class/WorkCoordinateConfig",
                  },
                  {
                    text: "初始位置设置",
                    link: "/robot/api/c/class/ArmInitPosition",
                  },
                  {
                    text: "机械臂运动控制指令类",
                    link: "/robot/api/c/class/ArmMotionControl",
                  },
                  {
                    text: "机械臂状态查询",
                    link: "/robot/api/c/class/ArmState",
                  },
                  {
                    text: "机械臂示教指令类",
                    link: "/robot/api/c/class/ArmTeachMove",
                  },
                  {
                    text: "机械臂末端运动参数配置",
                    link: "/robot/api/c/class/ArmTipVelocityParameters",
                  },
                  {
                    text: "通讯配置",
                    link: "/robot/api/c/class/CommunicationConfig",
                  },
                  {
                    text: "控制器IO配置及获取",
                    link: "/robot/api/c/class/ControllerIOConfig",
                  },
                  {
                    text: "拖动示教",
                    link: "/robot/api/c/class/DragTeach",
                  },
                  {
                    text: "末端工具IO控制",
                    link: "/robot/api/c/class/EffectorIOConfig",
                  },
                  {
                    text: "通用扩展关节控制",
                    link: "/robot/api/c/class/ExpandControl",
                  },
                  {
                    text: "末端传感器六维力",
                    link: "/robot/api/c/class/Force",
                  },
                  {
                    text: "透传力位混合控制补偿",
                    link: "/robot/api/c/class/GripperControl",
                  },
                  {
                    text: "五指灵巧手",
                    link: "/robot/api/c/class/HandControl",
                  },
                  {
                    text: "系统安装方式",
                    link: "/robot/api/c/class/InstallPos",
                  },
                  {
                    text: "初始位置设置",
                    link: "/robot/api/c/class/JointConfigSettings",
                  },
                  {
                    text: "关节配置",
                    link: "/robot/api/c/class/ArmInitPosition",
                  },
                  {
                    text: "升降机构控制",
                    link: "/robot/api/c/class/LiftControl",
                  },
                  {
                    text: "Modbus配置",
                    link: "/robot/api/c/class/ModbusConfig",
                  },
                  {
                    text: "机械臂轨迹指令类",
                    link: "/robot/api/c/class/MovePlan",
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
        text: "硬件产品介绍",
        link: "/joints/hardwareProduct",
      },
      {
        text: "入门指南",
        items: [
          {
            text: "快速开始",
            link: "/joints/guide/gettingStarted",
          },
          {
            text: "用户手册",
            link: "/joints/guide/manual",
          },
          {
            text: "版本对照表",
            link: "/joints/guide/versionControl",
          },
          {
            text: "开发入门",
            link: "/joints/guide/introduction",
          },
          {
            text: "Demo示例",
            link: "/joints/guide/example",
          },
        ],
      },
      {
        text: "开发指南",
        items: [
          {
            text: "机械臂协议文档",
            link: "/joints/developerGuide/protocolDocument",
          },
          {
            text: "API开发文档",
            collapsed: false,
            items: [
              {
                text: "C & C++",
                collapsed: true,
                items: [
                  {
                    text: "类列表",
                    link: "/joints/developerGuide/c/class/RoboticArm",
                  },
                ],
              },
              {
                text: "Python",
                collapsed: true,
                items: [
                  {
                    text: "类列表",
                    link: "/joints/developerGuide/python/index",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "示例",
        link: "/joints/example/",
      },
      {
        text: "常见问题",
        link: "/joints/FQA/index",
      },
      {
        text: "相关下载",
        link: "/joints/download/index",
      },
      {
        text: "历史手册",
        link: "/joints/handbook/index",
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
        collapsed:false,
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
        collapsed:false,
        items: [
          {
            text: "介绍",
            link: "/symbiosis/hardware/",
          },
        ],
      },
      {
        text: "常见问题",
        collapsed:false,
        items: [
          {
            text: "示例",
            link: "/symbiosis/FQA/",
          },
        ],
      },
    ],
  };
// [
//   {
//     text: "类列表",
//     collapsed: false,
//     items: [
//       {
//         text: "关节配置",
//         link: "/python/class/jointConfig.md",
//       },
//     ],
//   },
//   {
//     text: "结构体",
//     collapsed: false,
//     items: [
//       {
//         text: "a",
//         link: "/python/struct/a.md",
//       },
//     ],
//   },
// ];
