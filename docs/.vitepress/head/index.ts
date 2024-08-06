import type { HeadConfig } from "vitepress";
export const head: HeadConfig[] = [
  ["link", { rel: "stylesheet", href: "/css/index.css" }],
  ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3" }],
  // [
  //   'link',
  //   { href: 'https://font.sec.miui.com/font/css?family=Source_Han_Serif:400,600:Source_Han_Serif', rel: 'stylesheet' }
  // ],
  // [
  //   'link',
  //   { href: 'https://font.sec.miui.com/font/css?family=MiSans:500:MiSans', rel: 'stylesheet' }
  // ],
  ["link", { rel: "icon", href: "/assets/logo.png" }],
  ["meta", { name: "keywords", content: "睿尔曼智能科技" }],
  // [
  //   'link',
  //   { href: 'https://font.sec.miui.com/font/css?family=MiSans:400,700:MiSan', rel: 'stylesheet' }
  // ],
  [
    "script",
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?4e8bfd1617a02c2841e7282af583cc0f";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
];
