import { defineConfig } from "vitepress";
import { head } from "./head";
import { themeConfig } from "./themes";
import { configZh } from "./configs/zh";
import { configEn } from "./configs/en";
import mdItCustomAttrs from "markdown-it-custom-attrs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title:'睿尔曼智能科技',
  description: "睿尔曼智能科技有限公司-在线文档V1.6.14",
  lang: "zh-CN",
  lastUpdated: true,
  sitemap: {
    hostname: "https://develop.realman-robotics.com/",
  },
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  ignoreDeadLinks:true,
  cleanUrls: true,
  metaChunk:true,
  head,
  themeConfig,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      // link: "/zh",
      ...configZh,
    },
    en: {
      label: "English",
      lang: "en-Us",
      // link: "/en",
      ...configEn,
    },
  },
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
    config: (md) => {
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = "root" } = env;
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case "en":
              return "Copy code";
            default:
              return "复制代码";
          }
        })();
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        );
      };
    },
  },
});
