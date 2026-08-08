/* =========================================================
   站点数据 —— 想加内容，主要改这里！
   每个板块都是一个数组，照着已有条目的格式加新对象即可。
   ========================================================= */

/* 站点基本信息 */
const SITE = {
  name: "小小崔",
  fullName: "崔浩宇",
  tagline: "12 岁 · 独立开发者 · 信奥选手 · 自媒体",
  bio: "辽宁本溪的六年级小学生。喜欢用代码做点小工具，也在练信息学奥赛，偶尔在抖音 / B站 分享自己的折腾过程。这个站是我自己的作品集和博客。",
  github: "https://github.com/xxc2014",      // ← 你的 GitHub 地址
  email: "chy20140718@163.com"             // 已填；页脚暂不公开显示（"不打开"）
};

/* 编程作品（works.html 展示） */
const WORKS = [
  {
    title: "鸿蒙 VIP 自动续费提醒",
    cat: "鸿蒙 App",
    icon: "🔔",
    desc: "一款单机版 VIP 续费提醒工具，5 元买断，帮容易忘记续费日期的人准时提醒，不联网、不订阅。",
    tags: ["HarmonyOS", "Android", "单机"],
    link: "#"            // ← 换成应用商店 / 下载链接
  },
  {
    title: "智能笔记",
    cat: "工具 App",
    icon: "📝",
    desc: "一个智能笔记工具，方便随手记录灵感、整理日常，把零散的想法收纳到一起。",
    tags: ["笔记", "工具", "本地"],
    link: "#"
  },
  {
    title: "《裂隙拼块：边界迷途》",
    cat: "Python 桌面游戏",
    icon: "🎮",
    desc: "纯 Python 开发的 PC 端解谜沙盒游戏，参加腾讯游戏创作大赛，可打包成 exe 直接在电脑运行。B站演示：b23.tv/n45jV7I",
    tags: ["Python", "游戏", "Pygame"],
    link: "#"            // 暂不可点（"不打开"），B站演示见上方描述
  }
];

/* 信奥 / 竞赛经历（oi.html 时间线） */
const OI = [
  {
    date: "2024",
    title: "从 B站 接触信奥",
    desc: "在家里通过 B站 视频首次接触信息学奥赛（oler），开始了解这条路。"
  },
  {
    date: "2025–2026",
    title: "正式兴起",
    desc: "真正投入信竞赛练，开始系统学习与刷题，信奥成为日常的一部分。"
  },
  {
    date: "2028（预计）",
    title: "始考 CSP-S/J",
    desc: "计划从 2028 年起参加 CSP-S/J 认证考试，往前一年稳步准备。"
  }
];

/* 自媒体 / Vlog（media.html 展示） */
const MEDIA = [
  { platform: "抖音",   handle: "@小小崔", icon: "🎵", url: "https://v.douyin.com/JpHqy4s2rXU/", desc: "短平快的折腾记录" },
  { platform: "B站",    handle: "@小小崔", icon: "📺", url: "https://b23.tv/n45jV7I", desc: "稍长一点的教程与 vlog" }
];

/* 博客文章（blog.html 列表；每篇是 blog/ 下的独立 HTML） */
const POSTS = [
  {
    title: "我的第一个作品集博客上线啦",
    date: "2026-08-06",
    tag: "随笔",
    excerpt: "从想有个属于自己的小角落，到用纯静态 HTML 把它搭出来——记录这个站是怎么诞生的。",
    url: "blog/post-welcome.html"
  },
  {
    title: "用 vibe coding 做我的第一个 App",
    date: "2026-07-20",
    tag: "开发",
    excerpt: "把脑子里的想法交给 AI 辅助实现，从 0 到上架，我学到的几件事。",
    url: "blog/post-tool.html"
  },
  {
    title: "《裂隙拼块：边界迷途》PC端Python游戏开发记录",
    date: "2026-08-04",
    tag: "开发日志",
    excerpt: "独立开发一款纯 Python 解谜沙盒游戏参赛腾讯游戏创作大赛：文件分层、双分支管理、当前进度与后续规划。",
    url: "blog/post-liedeng-piankuai.html"
  }
];