import { defineConfig } from "vitepress";
import { head } from "./head";
import { themeConfig } from "./themes";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "睿尔曼智能科技有限公司-在线文档",
  lang: "zh-CN",
  markdown:{
    image:{
      lazyLoading:true
    }
  },
  lastUpdated: true,
  head,
  themeConfig,
  ignoreDeadLinks:true,
});
