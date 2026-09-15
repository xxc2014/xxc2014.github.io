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

/* =========================================================
   编程作品
   - WORKS：已完成、可在线演示的作品（作品集主展示）
   - WIP：待完成 / 进行中的作品（默认 3 个先归到这里）
   点卡片或「在线演示」按钮即可跳到 demos/ 直接玩。
   ========================================================= */

const WORKS = [
  {
    title: "2048 数字合成",
    cat: "Web 游戏",
    year: "2026",
    status: "可演示",
    icon: "🎮",
    desc: "经典 2048 数字合成游戏，方向键 / 手机滑动都能玩，带计分和最高分记录。",
    longDesc: "用原生 HTML + CSS + JavaScript 从零实现的经典 2048 游戏。支持键盘方向键和手机滑动操作，实时计分，最高分用 localStorage 记住，界面自适应电脑和手机。",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    demo: "demos/2048.html",
    links: { demo: "demos/2048.html" }
  },
  {
    title: "贪吃蛇",
    cat: "Web 游戏",
    year: "2026",
    status: "可演示",
    icon: "🐍",
    desc: "经典贪吃蛇，吃到食物会变长，撞墙或撞到自己就结束，手机可滑动控制。",
    longDesc: "用原生 JavaScript 实现的经典贪吃蛇游戏。支持键盘方向键和手机滑动控制，含速度递增、计分和最高分，界面适配电脑和手机。",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "demos/snake.html",
    links: { demo: "demos/snake.html" }
  },
  {
    title: "像素画板",
    cat: "创作工具",
    year: "2026",
    status: "可演示",
    icon: "🎨",
    desc: "在网格上点一点就能画像素画，调色、橡皮擦、清空、还能保存成图片。",
    longDesc: "一个像素画创作小工具：点击或拖动即可在网格上作画，支持调色板、橡皮擦、清空和导出 PNG 图片，电脑鼠标和手机触屏都能用。",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "demos/pixel-art.html",
    links: { demo: "demos/pixel-art.html" }
  },
  {
    title: "番茄专注钟",
    cat: "效率工具",
    year: "2026",
    status: "可演示",
    icon: "⏱️",
    desc: "25 分钟专注 + 5 分钟休息的番茄工作法计时器，帮自己集中注意力。",
    longDesc: "一个番茄工作法计时器：默认 25 分钟专注 + 5 分钟休息，可自定义时长，有开始、暂停、重置，时间到了会提醒，界面适配手机和电脑。",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "demos/pomodoro.html",
    links: { demo: "demos/pomodoro.html" }
  },
  {
    title: "待办清单",
    cat: "效率工具",
    year: "2026",
    status: "可演示",
    icon: "✅",
    desc: "随手记下要做的事，完成打个勾，数据存在浏览器里，刷新也不会丢。",
    longDesc: "一个本地优先的待办清单：添加、勾选完成、删除，数据保存在浏览器 localStorage 里，刷新甚至关闭浏览器都不会丢，适配手机和电脑。",
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "demos/todo.html",
    links: { demo: "demos/todo.html" }
  },
  {
    title: "打字测速",
    cat: "工具",
    year: "2026",
    status: "可演示",
    icon: "⌨️",
    desc: "一分钟打字测速，实时统计打字速度与正确率，看看自己手速多快。",
    longDesc: "一个打字测速小工具：倒计时 60 秒，实时统计输入正确率和打字速度（字/分钟），结束后给出成绩，支持键盘输入，适配电脑和手机。",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "demos/typing.html",
    links: { demo: "demos/typing.html" }
  }
];

/* 待完成 / 进行中的作品（还没做好，先标记为「待完成」） */
const WIP = [
  {
    title: "《裂隙拼块：边界迷途》",
    cat: "Python 游戏",
    year: "2026",
    status: "待完成",
    icon: "🎮",
    desc: "纯 Python 开发的 PC 端解谜沙盒游戏，可打包成 exe 直接运行，正在参加腾讯游戏创作大赛。",
    longDesc: "独立开发的纯 Python 解谜沙盒游戏，参加腾讯游戏创作大赛。项目采用文件分层组织、双分支管理，从 0 到 1 独立完成，可打包成 exe 免安装直接运行。",
    tags: ["Python", "Pygame", "游戏"],
    stack: ["Python", "Pygame"],
    featured: false,
    links: { demo: "https://b23.tv/n45jV7I", blog: "blog/post-liedeng-piankuai.html" }
  },
  {
    title: "鸿蒙 VIP 自动续费提醒",
    cat: "鸿蒙 App",
    year: "2026",
    status: "待完成",
    icon: "🔔",
    desc: "单机版 VIP 续费提醒工具，5 元买断，不联网、不订阅，帮容易忘记续费日期的人准时提醒。",
    longDesc: "一款单机版续费提醒 App，专为容易忘记 VIP 续费日期的人设计：本地记录、定时提醒、不上传任何数据，5 元买断制。",
    tags: ["HarmonyOS", "Android", "单机"],
    stack: ["HarmonyOS", "Android"],
    featured: false,
    links: {}
  },
  {
    title: "智能笔记",
    cat: "工具 App",
    year: "2026",
    status: "待完成",
    icon: "📝",
    desc: "智能笔记工具，方便随手记录灵感、整理日常，把零散的想法收纳到一起。",
    longDesc: "一款本地优先的笔记工具，用于随手记录灵感、整理日常，让零散想法有处安放。",
    tags: ["笔记", "工具", "本地"],
    stack: [],
    featured: false,
    links: {}
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
    title: "8 月第四周周报",
    date: "2026-08-23",
    tag: "周报",
    excerpt: "本周重点完善《裂隙拼块：边界迷途》的 Bug，版本更稳但功能迭代放缓；社群保持活跃但多为围观、收获有限；新发现 ShipIt Hackathon 正在准备参赛。",
    url: "blog/post-weekly-2026-08-23.html"
  },
  {
    title: "8 月第三周周报",
    date: "2026-08-16",
    tag: "周报",
    excerpt: "本周完成新游戏立项、主体架构与提示词编写，社群答疑拿到实际奖励，大师课按时完成；下周重点推进游戏开发和申报材料。",
    url: "blog/post-weekly-2026-08-16.html"
  },
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