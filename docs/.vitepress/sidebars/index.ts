import type { DefaultTheme } from "vitepress";
export const sidebars: DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti =
  [
    {
      text: "类列表",
      collapsed: false,
      items: [
        {
          text: "关节配置",
          link: "/python/class/jointConfig.md",
        },
      ],
    },
    {
      text: "结构体",
      collapsed: false,
      items: [
        {
          text: "a",
          link: "/python/struct/a.md",
        },
      ],
    },
  ];
