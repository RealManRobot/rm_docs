import type { DefaultTheme } from "vitepress";
import { navsList } from "../nav";
import { sidebars } from "../sidebars";
export const themeConfig: DefaultTheme.Config = {
  logo: {
    light: "/assets/light_logo.png",
    dark: "/assets/dark_logo.png",
  },
  i18nRouting: false,
  nav: navsList,
  sidebar: sidebars,
  search: {
    provider: "local",
    options: {
      detailedView:true,
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
    // provider: "algolia",
    // options: {
    //   appId: "SV1S7E1V17",
    //   apiKey: "39c7aa258845ab79fe2f9402dbd9724c",
    //   // apiKey: "98077eb74fe04293108c60a5ba47dc3f",
    //   indexName: "develop-realman-robotics",
    //   placeholder: "搜索文档",
    //   translations: {
    //     button: {
    //       buttonText: "搜索文档",
    //       buttonAriaLabel: "搜索文档",
    //     },
    //     modal: {
    //       searchBox: {
    //         resetButtonTitle: "清除查询条件",
    //         resetButtonAriaLabel: "清除查询条件",
    //         cancelButtonText: "取消",
    //         cancelButtonAriaLabel: "取消",
    //       },
    //       startScreen: {
    //         recentSearchesTitle: "搜索历史",
    //         noRecentSearchesText: "没有搜索历史",
    //         saveRecentSearchButtonTitle: "保存至搜索历史",
    //         removeRecentSearchButtonTitle: "从搜索历史中移除",
    //         favoriteSearchesTitle: "收藏",
    //         removeFavoriteSearchButtonTitle: "从收藏中移除",
    //       },
    //       errorScreen: {
    //         titleText: "无法获取结果",
    //         helpText: "你可能需要检查你的网络连接",
    //       },
    //       footer: {
    //         selectText: "选择",
    //         navigateText: "切换",
    //         closeText: "关闭",
    //         searchByText: "搜索提供者",
    //       },
    //       noResultsScreen: {
    //         noResultsText: "无法找到相关结果",
    //         suggestedQueryText: "你可以尝试查询",
    //         reportMissingResultsText: "你认为该查询应该有结果？",
    //         reportMissingResultsLinkText: "点击反馈",
    //       },
    //     },
    //   },
    // },
    provider: "algolia",
    options: {
      appId: "SV1S7E1V17",
      apiKey: "98077eb74fe04293108c60a5ba47dc3f",
      // apiKey: "98077eb74fe04293108c60a5ba47dc3f",
      indexName: "develop-realman-robotics",
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
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
  outlineTitle: "目录",
  outline: [1, 6],
  footer: {
    message:
      "<a class='footerStyle' href='https://beian.miit.gov.cn/'>京ICP备20031630号-2</a>",
    copyright: `©2021 睿尔曼智能科技（北京）有限公司 版权所有<br>V 1.0.1`,
  },
  socialLinks: [{ icon: "github", link: "https://github.com/RealManRobot" }],
};
