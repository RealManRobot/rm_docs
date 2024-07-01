import type { DefaultTheme } from "vitepress";
export const sidebars: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti =
  {
    "/robot/": [
      {
        text: "概述",
        link: "/robot/summarize",
      },
      {
        text: "硬件产品介绍",
        link: "/robot/hardwareProduct",
      },
      {
        text: "入门指南",
        items: [
          {
            text: "快速开始",
            link: "/robot/guide/gettingStarted",
          },
          {
            text: "用户手册",
            link: "/robot/guide/manual",
          },
          {
            text: "版本对照表",
            link: "/robot/guide/versionControl",
          },
          {
            text: "开发入门",
            link: "/robot/guide/introduction",
          },
          {
            text: "Demo示例",
            link: "/robot/guide/example",
          },
        ],
      },
      {
        text: "开发指南",
        items: [
          {
            text: "机械臂协议文档",
            link: "/robot/developerGuide/protocolDocument",
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
                    items: [
                      {
                        text: "连接机械臂",
                        link: "/robot/developerGuide/api/c/class/RoboticArm",
                      },
                      {
                        text: "工具坐标系配置",
                        link: "/robot/developerGuide/api/c/class/ToolCoordinateConfig",
                      },
                      {
                        text: "工作坐标系配置",
                        link: "/robot/developerGuide/api/c/class/WorkCoordinateConfig",
                      },
                      {
                        text: "初始位置设置",
                        link: "/robot/developerGuide/api/c/class/ArmInitPosition",
                      },
                      {
                        text: "机械臂运动控制指令类",
                        link: "/robot/developerGuide/api/c/class/ArmMotionControl",
                      },
                      {
                        text: "机械臂状态查询",
                        link: "/robot/developerGuide/api/c/class/ArmState",
                      },
                      {
                        text: "机械臂示教指令类",
                        link: "/robot/developerGuide/api/c/class/ArmTeachMove",
                      },
                      {
                        text: "机械臂末端运动参数配置",
                        link: "/robot/developerGuide/api/c/class/ArmTipVelocityParameters",
                      },
                      {
                        text: "通讯配置",
                        link: "/robot/developerGuide/api/c/class/CommunicationConfig",
                      },
                      {
                        text: "控制器IO配置及获取",
                        link: "/robot/developerGuide/api/c/class/ControllerIOConfig",
                      },
                      {
                        text: "拖动示教",
                        link: "/robot/developerGuide/api/c/class/DragTeach",
                      },
                      {
                        text: "末端工具IO控制",
                        link: "/robot/developerGuide/api/c/class/EffectorIOConfig",
                      },
                      {
                        text: "通用扩展关节控制",
                        link: "/robot/developerGuide/api/c/class/ExpandControl",
                      },
                      {
                        text: "末端传感器六维力",
                        link: "/robot/developerGuide/api/c/class/Force",
                      },
                      {
                        text: "透传力位混合控制补偿",
                        link: "/robot/developerGuide/api/c/class/GripperControl",
                      },
                      {
                        text: "五指灵巧手",
                        link: "/robot/developerGuide/api/c/class/HandControl",
                      },
                      {
                        text: "系统安装方式",
                        link: "/robot/developerGuide/api/c/class/InstallPos",
                      },
                      {
                        text: "初始位置设置",
                        link: "/robot/developerGuide/api/c/class/JointConfigSettings",
                      },
                      {
                        text: "关节配置",
                        link: "/robot/developerGuide/api/c/class/ArmInitPosition",
                      },
                      {
                        text: "升降机构控制",
                        link: "/robot/developerGuide/api/c/class/LiftControl",
                      },
                      {
                        text: "Modbus配置",
                        link: "/robot/developerGuide/api/c/class/ModbusConfig",
                      },
                      {
                        text: "机械臂轨迹指令类",
                        link: "/robot/developerGuide/api/c/class/MovePlan",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Python",
                collapsed: true,
                items: [
                  {
                    text: "类列表",
                    link: "/robot/developerGuide/python/index",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "示例",
        link: "/robot/example/",
      },
      {
        text: "常见问题",
        link: "/robot/FQA/index",
      },
      {
        text: "相关下载",
        link: "/robot/download/index",
      },
      {
        text: "历史手册",
        link: "/robot/handbook/index",
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
        text: "",
        items: [
          {
            text: "",
            link: "",
          },
        ],
      },
    ],
    "/AI/": [
      {
        text: "简介",
        link: "/AI/intro",
      },
      {
        text: "SDK开发指南",
        items: [
          {
            text: "yolo",
            items: [
              {
                text: "快速开始",
                link: "/AI/developerGuide/yolo/gettingStarted",
              },
              {
                text: "概述",
                link: "/AI/developerGuide/yolo/introduction",
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
            ],
          },
          {
            text: "视觉伺服",
            link: "/AI/visualServo/index",
          },
          {
            text: "6D姿态",
            link: "/AI/6D-Attitude/index",
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
        text: "历史版本",
        link: "/AI/versionControl",
      },
    ],
    "/symbiosis/": [
      {
        text: "",
        items: [
          {
            text: "",
            link: "",
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
