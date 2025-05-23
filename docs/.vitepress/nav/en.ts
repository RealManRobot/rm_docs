import type { DefaultTheme } from "vitepress";

const nav = (): DefaultTheme.NavItem[] => {
  return [
    // {
    //   text: "Robot",
    //   items: [
    //     {
    //       text: "Gen 4",
    //       link: "/en/robot4th/summarize/",
    //     },
    //     {
    //       text: "Gen 3",
    //       link: "/en/robot/summarize/",
    //     },
    //   ], activeMatch: "/en/robot/"
    // },
    {
      text: "Robot Gen 3",
      link: "/en/robot/summarize/",
      activeMatch: "/en/robot/",
    },
    {
      text: "Robot Gen 4",
      link: "/en/robot4th/summarize/",
      activeMatch: "/en/robot4th/",
    },
    {
      text: "Joints",
      link: "/en/joints/summarize/index",
      activeMatch: "/en/joints/",
    },
    // { text: "复合机器人", link: "/compositeRobot/index", activeMatch: "/compositeRobot/" },
    { text: "AI", link: "/en/AI/summarize/", activeMatch: "/en/AI/" },
    {
      text: "Case",
      link: "/en/symbiosis/demo/robotDog/",
      activeMatch: "/en/symbiosis/",
    },
    {
      text: "Blog",
      link: "/en/blog/getStarted/",
      activeMatch: "/en/blog/",
    },
    {
      text: "Language Plugin",
      items: [
        {
          text: "简体中文",
          link: "/en/language/Chinese/",
        },
        {
          text: "日本語",
          link: "/en/language/Japanese/",
        },
        {
          text: "한국어",
          link: "/en/language/Korean/",
        },
        {
          text: "Español",
          link: "/en/language/Spanish/",
        },
      ],
      activeMatch: "/en/language/",
    },
  ];
};
export { nav };
