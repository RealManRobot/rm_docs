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
                    link: "/robot/developerGuide/c/class/RoboticArm",
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
        text: "",
        items: [
          {
            text: "",
            link: "",
          },
        ],
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
