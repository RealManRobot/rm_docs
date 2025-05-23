import type { DefaultTheme } from "vitepress";

const nav = (): DefaultTheme.NavItem[] => {
  return [
    // {
    //   text: "机械臂", items: [
    //     {
    //       text: "第四代",
    //       link: "/robot4th/summarize/",
    //     },
    //     {
    //       text: "第三代",
    //       link: "/robot/summarize/",
    //     },
    //   ], activeMatch: "/robot/"
    // },
    {
      text: "第三代机械臂",
      link: "/robot/summarize/",
      activeMatch: "/robot/",
    },
    {
      text: "第四代机械臂",
      link: "/robot4th/summarize/",
      activeMatch: "/robot4th/",
    },
    {
      text: "关节",
      link: "/joints/summarize/",
      activeMatch: "/joints/",
    },
    { text: "AI", link: "/AI/summarize/", activeMatch: "/AI/" },
    {
      text: "项目案例",
      link: "/symbiosis/demo/robotDog/",
      activeMatch: "/symbiosis/",
    },
    {
      text: "博客",
      link: "/blog/getStarted/",
      activeMatch: "/blog/",
    },
    {
      text: "Language Plugin",
      items: [
        {
          text: "English",
          link: "/language/English/",
        },
        {
          text: "日本語",
          link: "/language/Japanese/",
        },
        {
          text: "한국어",
          link: "/language/Korean/",
        },
        {
          text: "Español",
          link: "/language/Spanish/",
        },
      ],
      activeMatch: "/language/",
    },
  ];
};
export{
  nav,
}
// export const navsListZh: DefaultTheme.NavItem[] = [
//   { text: "机械臂", link: "/robot/summarize/", activeMatch: "/robot/" },
//   { text: "关节", link: "/joints/summarize/index.md", activeMatch: "/joints/" },
//   // { text: "复合机器人", link: "/zh/compositeRobot/index", activeMatch: "/compositeRobot/" },
//   { text: "AI", link: "/AI/getStarted/overview.md", activeMatch: "/AI/" },
//   {
//     text: "项目案例",
//     link: "/symbiosis/demo/robotDog/robotDog.md",
//     activeMatch: "/symbiosis/",
//   },
//   {
//     text: "博客",
//     link: "/blog/getStarted/getStarted.md",
//     activeMatch: "/blog/",
//   },
//   {
//     text: "Language Plugin",
//     items:[
//       {text:'English',link:'/language/English/immersiveTranslationPlugin.md'},
//       {text:'日本語',link:'/language/Japanese/immersiveTranslationPlugin.md'},
//       {text:'한국어',link:'/language/Korean/immersiveTranslationPlugin.md'},
//       {text:'Español',link:'/language/Spanish/immersiveTranslationPlugin.md'},
//     ],
//     activeMatch: "/language/",
//   },
// ];
