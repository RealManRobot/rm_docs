import type { DefaultTheme } from "vitepress";
import { navsList } from "../nav";
import { sidebars } from "../sidebars";
export const themeConfig: DefaultTheme.Config = {
  logo: "/assets/logo.png",
  i18nRouting: false,
  nav: navsList,
  sidebar: sidebars,
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          displayDetails: "显示详细列表",
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询结果",
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
          },
        },
      },
    },
  },
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  lastUpdatedText: "最后更新",
  outlineTitle: "文章标题",
  outline: [1, 6],
  socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
};
