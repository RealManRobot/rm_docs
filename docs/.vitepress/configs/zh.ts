import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { nav } from "../nav/zh";
import {
  robotSide,
  robotSide4th,
  jointSide,
  AISide,
  exampleSide,
  blogSide,
} from "../sidebars/zh";

export const configZh: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    logo: {
      light: "/assets/light_logo.png",
      dark: "/assets/dark_logo.png",
    },
    lastUpdated: {
      text: "上次更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    darkModeSwitchLabel: "切换深色模式",
    darkModeSwitchTitle: "切换深色模式",
    lightModeSwitchTitle: "切换浅色模式",
    returnToTopLabel: "返回顶部",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: nav(),
    sidebar: {
      '/robot/':{base:'/robot/',items:robotSide()},
      '/robot4th/':{base:'/robot4th/',items:robotSide4th()},
      '/joints/':{base:'/joints/',items:jointSide()},
      '/AI/':{base:'/AI/',items:AISide()},
      '/symbiosis/':{base:'/symbiosis/',items:exampleSide()},
      '/blog/':{base:'/blog/',items:blogSide()},
    },
    outline: {
      level: "deep",
      label: "目录",
    },
    footer: {
      message:
        "<a class='footerStyle' href='https://beian.miit.gov.cn/'>京ICP备20031630号-1</a>",
      copyright: `©2021 睿尔曼智能科技（北京）有限公司 版权所有<br>V 1.6.14`,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/RealManRobot" }],
  },
};
