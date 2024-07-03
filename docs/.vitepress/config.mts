import { defineConfig } from "vitepress";
import { head } from "./head";
import { themeConfig } from "./themes";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "睿尔曼智能",
  description: "睿尔曼智能科技有限公司-在线文档",
  lang: "zh-CN",
  lastUpdated: true,
  head,
  themeConfig,
  cleanUrls:true
});
