# 小小崔 · 作品集与博客

一个**纯静态**的个人作品集 + 博客网站，清新文艺风，零依赖、双击就能看，可直接部署到 GitHub Pages。

## 目录结构

```
.
├── index.html        # 首页（Hero + 各板块预览）
├── works.html        # 编程作品
├── oi.html           # 信奥 / 竞赛经历
├── media.html        # 自媒体 / Vlog 账号
├── blog.html         # 博客列表
├── blog/             # 每篇文章一个独立 HTML
│   ├── post-welcome.html
│   ├── post-tool.html
│   └── template.html   # ← 写新文章时复制它
├── css/
│   └── style.css     # 全部样式
├── js/
│   ├── data.js       # ★ 站点内容都在这（最常改的文件）
│   └── main.js       # 渲染导航/页脚/列表的逻辑
├── .nojekyll         # 让 GitHub Pages 当纯静态发布
└── README.md
```

## 怎么加内容（不用懂太多代码）

所有内容都集中在 `js/data.js`，照着已有条目的格式加就行：

- **加作品** → 在 `WORKS` 数组里加一个对象（标题、分类、图标 emoji、简介、标签、链接）。
- **加信奥经历** → 在 `OI` 数组里加 `{ date, title, desc }`。
- **加 / 改自媒体账号** → 编辑 `MEDIA` 数组。
- **改个人信息** → 改 `SITE` 里的名字、简介、GitHub 地址。

### 写新博客文章

1. 复制 `blog/template.html`，改名为 `blog/post-你的标题.html`。
2. 打开新文件，改 `<title>`、文章标题、日期、标签和正文。
   - 小标题用 `<h2>`，段落用 `<p>`，代码用 `<pre><code>...</code></pre>`，引用用 `<blockquote>`。
3. 打开 `js/data.js`，在 `POSTS` 数组里加一条：
   ```js
   {
     title: "文章标题",
     date: "2026-08-10",          // 格式 YYYY-MM-DD，列表会自动按新到旧排序
     tag: "随笔",
     excerpt: "一句话摘要",
     url: "blog/post-你的标题.html"
   }
   ```
4. 列表页会自动出现这篇文章，不用改 `blog.html`。

## 本地预览

最简单：直接双击 `index.html` 用浏览器打开即可（导航、列表都由 JS 渲染，离线也能看）。

想更接近线上效果，可以在本目录起一个小服务器：
```bash
# 用 Python（电脑一般自带）
python -m http.server 8000
# 然后浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages

本目录已经是一个 git 仓库（默认分支 `master`，含历史提交），不用再 `git init`。

1. 在 GitHub 新建一个仓库（名字随意，比如 `my-blog`；或建 `xxc2014.github.io` 直接当主页）。
2. 把本目录推上去（把 `my-blog` 换成你实际的仓库名）：
   ```bash
   git remote add origin https://github.com/xxc2014/my-blog.git
   git push -u origin master
   ```
   > 推送前建议把提交邮箱改成你 GitHub 一致的真实邮箱：
   > `git config user.email 你的邮箱@xxx.com`（当前是占位 `xiaoxiaocui@example.com`）。
3. 仓库 → **Settings → Pages**，Source 选 `master` 分支、文件夹选 `/ (root)`，保存。
4. 等一两分钟，访问 `https://xxc2014.github.io/my-blog/` 就能看到啦。

> 提示：如果仓库名是 `xxc2014.github.io`，站点会直接挂在 `https://xxc2014.github.io/`，不需要后面的 `/my-blog`。

## 小贴士

- 颜色、字体都在 `css/style.css` 顶部的 `:root` 变量里，想换风格改这里。
- 作品封面现在是 emoji + 渐变色块，不依赖图片文件；以后想用真实截图，把 `WORKS` 里加个 `img` 字段并在 `js/main.js` 的 `renderWorks` 里显示即可。
