import type { DefaultTheme } from "vitepress";

 const themeConfig: DefaultTheme.Config = {
  siteTitle: false,
  search: {
    provider: "local",
    options: {
      detailedView: true,
      miniSearch: {
        searchOptions: {
          maxFuzzy: 1,
          fuzzy: 0.1,
          prefix: true,
          // filter: (result: any) => {
          //   console.log(result);
          //   let arr:any=[]
          //   arr.push(result)
          //   let newArr:any = arr.sort((a, b) => b.score - a.score);
          //   console.log(newArr);
          //   return newArr;
          // },
          combineWith: 'AND',
          fields: ["title","content","text","category"],
          boost:{title:3,content:1,text:1},
        },
      },
      locales: {
        root: {
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
        en: {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search for Documents",
            },
            modal: {
              displayDetails: "Display detailed list",
              noResultsText: "No relevant results could be found",
              resetButtonTitle: "Clear query results",
              footer: {
                selectText: "select",
                navigateText: "switch",
                closeText: "close",
              },
            },
          },
        },
      },
    },
  },
};
export{
  themeConfig,
}