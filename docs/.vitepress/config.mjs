import { defineConfig } from "vitepress";
// import sidebar from "./sidebar/index.js";
import pkg from "../../package.json";

const { license, author, config } = pkg;
const { title, description, repourl } = config.vitepress;

export default defineConfig({
  title, // 网站标题
  description, // 网站描述
  base: "/algorithm/", // 路由前缀
  srcDir: ".", //docs与.vitepress文件夹的关系
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/ico",
        sizes: "16x16",
        href: "./favicon.ico",
      },
    ],
    //   ["script", {}, baidu],
  ],
  markdown: {
    // math: true,
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: `${repourl}/edit/main/:path`,
      text: `Edit this page`,
    },
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © 2020-${new Date().getFullYear()}-${author.name}`,
    },
    lastUpdated: false,
    nav: [
      { text: "data-structure", link: "/structure/" },
      { text: "algorithm", link: "/algorithm/" },
    ],
    outline: "deep",
    // sidebar,
    socialLinks: [{ icon: "github", link: repourl }],
    search: {
      provider: "local",
    },
  },
});
