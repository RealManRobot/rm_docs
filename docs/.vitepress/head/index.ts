import type { HeadConfig } from "vitepress";
export const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/assets/logo.png" }],
  ["link", { rel: "stylesheet", href: "/css/index.css" }],
  ["meta", { name: "keywords", content: "睿尔曼智能科技" }],
  [
    'link',
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  ],
  [
    'link',
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  [
    'link',
    { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
  ],
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
