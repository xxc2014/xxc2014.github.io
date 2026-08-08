/* ========================================
   小小崔 · 站点数据
   修改这里的内容来更新网站，不用改 HTML
   ======================================== */

// 站点基本信息
var SITE = {
  title: "小小崔 · 作品集与博客",
  tagline: "12 岁 · 独立开发者 · 信奥选手 · 自媒体",
  bio: "这里是我的小角落，放我做的东西、写的字，还有折腾代码的过程。",
  author: "小小崔",
  year: 2026
};

// 导航菜单
var NAV = [
  { label: "首页", href: "index.html" },
  { label: "作品", href: "works.html" },
  { label: "信奥", href: "oi.html" },
  { label: "自媒体", href: "media.html" },
  { label: "博客", href: "blog.html" }
];

// 作品列表
var WORKS = [
  {
    title: "Todo 小助手",
    tags: ["Web", "React"],
    desc: "一个简洁的待办事项管理工具，支持分类、优先级和本地存储。",
    link: "#"
  },
  {
    title: "代码片段库",
    tags: ["Web", "JavaScript"],
    desc: "收集常用代码片段，支持搜索、标签和复制。",
    link: "#"
  },
  {
    title: "数学练习器",
    tags: ["Python", "CLI"],
    desc: "用 Python 写的命令行数学练习工具，适合信奥入门练习。",
    link: "#"
  }
];

// 信奥经历
var OI = [
  { date: "2025-11", title: "CSP-J 入门组初赛", desc: "第一次参加信息学竞赛，紧张但很有趣。" },
  { date: "2025-09", title: "开始学 C++", desc: "从零开始学 C++ 基础语法，每天刷一两道题。" },
  { date: "2025-07", title: "接触编程", desc: "从 Scratch 转到 Python，开始对编程产生兴趣。" }
];

// 自媒体账号
var MEDIA = [
  { platform: "小红书", account: "@小小崔", icon: "📕", link: "#" },
  { platform: "抖音", account: "@小小崔", icon: "🎵", link: "#" },
  { platform: "B站", account: "@小小崔coding", icon: "📺", link: "#" }
];

// 博客文章
var POSTS = [
  {
    title: "我的第一个网页上线啦",
    date: "2026-08-08",
    excerpt: "花了几天时间，终于把自己的个人主页做出来了。记录一下搭建过程。",
    link: "#"
  },
  {
    title: "CSP-J 备考笔记：基础算法",
    date: "2026-07-20",
    excerpt: "整理了排序、搜索、贪心这几个基础算法的思路和模板。",
    link: "#"
  },
  {
    title: "用 Python 写了一个自动发微博的脚本",
    date: "2026-07-05",
    excerpt: "学了 requests 库之后，试着写了一个自动发布内容的脚本，踩了不少坑。",
    link: "#"
  }
];
