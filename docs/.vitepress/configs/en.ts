import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { nav } from "../nav/en";
import {
  robotSide,
  robotSide4th,
  jointSide,
  AISide,
  exampleSide,
  blogSide,
} from "../sidebars/en";

export const configEn: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    logo: {
      light: "/assets/light_logo.png",
      dark: "/assets/dark_logo.png",
    },
    lastUpdated: {
      text: "Last Update Time",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    returnToTopLabel: "Back to top",
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    nav: nav(),
    sidebar: {
      "/en/robot/": { base: "/en/robot/", items: robotSide() },
      '/en/robot4th/':{base:'/en/robot4th/',items:robotSide4th()},
      "/en/joints/": { base: "/en/joints/", items: jointSide() },
      "/en/AI/": { base: "/en/AI/", items: AISide() },
      "/en/symbiosis/": { base: "/en/symbiosis/", items: exampleSide() },
      "/en/blog/": { base: "/en/blog/", items: blogSide() },
    },
    outline: {
      level: "deep",
      label: "Catalog",
    },
    footer: {
      message:
        "<a class='footerStyle' href='https://beian.miit.gov.cn/'>Jing ICP Record No. 20031630-1</a>",
      copyright: `Copyright ©2021 Realman Intelligent Technology (Beijing) Co., Ltd. All Right Reserved<br>V 1.6.14`,
    },
    socialLinks: [{ icon: "github", link: "https://github.com/RealManRobot" }],
  },
};
