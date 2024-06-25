import path from "node:path";
import fs from "node:fs";

// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  "index.md",
  ".vitepress",
  "node_modules",
  "public",
  "utils",
];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 把方法导出直接使用
function getList(params, path1, pathname, flag?) {
  // 存放结果
  const res: any = [];
  // 开始遍历params
  for (let file in params) {
    // 拼接目录
    const dir = path.join(path1, params[file]);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 先判断是否要遍历子级文件夹,flag为true则遍历,否则不会遍历子级文件夹
      if (flag) {
        // 如果是文件夹并且允许遍历,读取之后作为下一次递归参数
        const files = fs.readdirSync(dir);
        res.push({
          text: params[file],
          collapsible: true,
          items: getList(files, dir, `${pathname}/${params[file]}`),
        });
      }
    } else {
      // 获取名字
      const name = path.basename(params[file]);
      // 排除非 md 文件
      const suffix = path.extname(params[file]);
      if (suffix !== ".md") {
        continue;
      }
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }
  // 对name做一下处理，把后缀删除
  res.map((item) => {
    item.text = item.text.replace(/\.md$/, "");
  });
  return res;
}

// 参数1是文件夹路径,参数二控制是否显示文件夹下面的文件,如果为false则只显示当前文件夹内的文件,不会遍历子级文件夹内的文件(默认是true,会遍历)
export const setSidebar = (pathname, flag = true) => {
  // 获取pathname的路径
  const dirPath = path.join(DIR_PATH, pathname);
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname, flag);
};
