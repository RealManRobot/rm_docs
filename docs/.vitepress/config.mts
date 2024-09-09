import { defineConfig } from "vitepress";
import { head } from "./head";
import { themeConfig } from "./themes";
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "睿尔曼智能科技有限公司-在线文档V1.0.1",
  lang: "zh-CN",
  markdown:{
    image:{
      lazyLoading:true
    },
    math:true,
    config:(md)=>{
      md.use(mdItCustomAttrs,'image',{
        'data-fancybox': "gallery"
      })
    }
  },
  sitemap:{
    hostname: 'https://develop.realman-robotics.com/'
  },
  lastUpdated: true,
  head,
  themeConfig,
  ignoreDeadLinks:true,
  srcExclude:['**/joints/**','**/symbiosis/**']
});
