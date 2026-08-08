/* =========================================================
   渲染逻辑 —— 统一生成导航、页脚和各板块列表。
   每个页面只需放好对应的容器（见各 HTML 的 id），内容从 data.js 来。
   ========================================================= */

(function () {
  "use strict";

  /* 当前页面标识（用于导航高亮） */
  function currentPage() {
    var p = location.pathname.split("/").pop() || "index.html";
    if (p === "" || p === "index.html") return "home";
    if (p.indexOf("works") === 0) return "works";
    if (p.indexOf("oi") === 0) return "oi";
    if (p.indexOf("media") === 0) return "media";
    if (p.indexOf("blog") === 0) return "blog";
    return "";
  }

  /* 路径前缀：文章页在 blog/ 子目录，链接要回退一层 */
  function prefix() {
    return location.pathname.indexOf("/blog/") >= 0 ? "../" : "";
  }

  /* 渲染导航 */
  function renderNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var cur = currentPage();
    var base = prefix();
    var links = [
      { p: "home",  t: "首页",   u: "index.html" },
      { p: "works", t: "作品",   u: "works.html" },
      { p: "oi",    t: "信奥",   u: "oi.html" },
      { p: "media", t: "自媒体", u: "media.html" },
      { p: "blog",  t: "博客",   u: "blog.html" }
    ];
    nav.className = "nav";
    nav.innerHTML =
      '<div class="nav-inner">' +
        '<a class="brand" href="' + base + 'index.html"><span class="dot"></span>' + (SITE.name || "我的博客") + '</a>' +
        '<nav class="nav-links">' +
          links.map(function (l) {
            return '<a href="' + base + l.u + '"' + (l.p === cur ? ' class="active"' : "") + ">" + l.t + "</a>";
          }).join("") +
        "</nav>" +
      "</div>";
  }

  /* 渲染页脚 */
  function renderFooter() {
    var f = document.getElementById("site-footer");
    if (!f) return;
    var y = new Date().getFullYear();
    var base = prefix();
    f.className = "footer";
    f.innerHTML =
      '<div class="footer-inner">' +
        "<div>© " + y + " " + (SITE.fullName || SITE.name) + " · 用纯静态 HTML 搭建</div>" +
        "<div>" +
          (SITE.github ? '<a href="' + SITE.github + '" target="_blank" rel="noopener">GitHub</a> · ' : "") +
          '<a href="' + base + 'blog.html">博客</a>' +
        "</div>" +
      "</div>";
  }

  /* 作品卡片 */
  function renderWorks() {
    var box = document.getElementById("works-list");
    if (!box) return;
    box.className = "grid";
    box.innerHTML = WORKS.map(function (w) {
      return (
        '<article class="card">' +
          '<div class="thumb">' + (w.icon || "✨") + "</div>" +
          '<div class="body">' +
            '<div class="cat">' + w.cat + "</div>" +
            "<h3>" + w.title + "</h3>" +
            "<p>" + w.desc + "</p>" +
            '<div class="tags">' + (w.tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>" +
            (w.link && w.link !== "#" ? '<a class="card-link" href="' + w.link + '" target="_blank" rel="noopener">查看 / 下载 →</a>' : '<span class="card-link">详情整理中</span>') +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* 信奥时间线 */
  function renderOI() {
    var box = document.getElementById("oi-list");
    if (!box) return;
    box.className = "timeline";
    box.innerHTML = OI.map(function (o) {
      return (
        "<li>" +
          '<div class="date">' + o.date + "</div>" +
          "<h3>" + o.title + "</h3>" +
          "<p>" + o.desc + "</p>" +
        "</li>"
      );
    }).join("");
  }

  /* 自媒体卡片 */
  function renderMedia() {
    var box = document.getElementById("media-list");
    if (!box) return;
    box.className = "grid";
    box.innerHTML = MEDIA.map(function (m) {
      return (
        '<a class="card media-card" href="' + (m.url || "#") + '" target="_blank" rel="noopener">' +
          '<div class="icon">' + (m.icon || "🔗") + "</div>" +
          "<h3>" + m.platform + "</h3>" +
          '<div class="handle">' + m.handle + "</div>" +
          "<p>" + (m.desc || "") + "</p>" +
        "</a>"
      );
    }).join("");
  }

  /* 博客列表 */
  function renderPosts() {
    var box = document.getElementById("posts-list");
    if (!box) return;
    if (!POSTS.length) {
      box.innerHTML = '<p style="color:var(--muted)">还没有文章，去 blog/ 里复制模板写一篇吧～</p>';
      return;
    }
    box.innerHTML = POSTS.slice().sort(function (a, b) {
      return a.date < b.date ? 1 : -1;   // 新的在前
    }).map(function (p) {
      var d = p.date.split("-");
      return (
        '<div class="post-item">' +
          '<div class="meta"><div class="day">' + (d[2] || "") + '</div><div class="mon">' + (d[0] + "." + d[1]) + "</div></div>" +
          '<div class="content">' +
            '<h3><a href="' + p.url + '">' + p.title + "</a></h3>" +
            "<p>" + (p.excerpt || "") + "</p>" +
            '<span class="tag">#' + (p.tag || "随笔") + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* 启动 */
  document.addEventListener("DOMContentLoaded", function () {
    renderNav();
    renderFooter();
    renderWorks();
    renderOI();
    renderMedia();
    renderPosts();
  });
})();