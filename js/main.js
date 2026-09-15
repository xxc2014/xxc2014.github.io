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

  /* ---------- 作品集工具函数 ---------- */

  /* 去重 */
  function uniq(arr) {
    return arr.filter(function (v, i) { return arr.indexOf(v) === i; });
  }

  /* 汇总所有作品用到的技术关键词（去重） */
  function collectSkills() {
    var list = [];
    WORKS.forEach(function (w) {
      (w.stack || []).forEach(function (s) { if (list.indexOf(s) < 0) list.push(s); });
    });
    return list;
  }

  /* 外部链接按钮 */
  function workLinks(w) {
    var l = w.links || {};
    var out = "";
    if (l.demo) out += '<a class="pf-ext" href="' + l.demo + '" target="_blank" rel="noopener">演示</a>';
    if (l.github) out += '<a class="pf-ext" href="' + l.github + '" target="_blank" rel="noopener">GitHub</a>';
    if (l.blog) out += '<a class="pf-ext" href="' + l.blog + '">博客</a>';
    return out;
  }

  /* 标签列表 */
  function tagList(tags) {
    return '<div class="tags">' + (tags || []).map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>";
  }

  /* 单张作品卡片 */
  function workCard(w, i) {
    var meta = [w.year, w.status].filter(Boolean).join(" · ");
    var demo = w.demo ? '<a class="pf-demo" href="' + w.demo + '">▶ 在线演示</a>' : "";
    var links = workLinks(w);
    return (
      '<article class="pf-card" data-cat="' + w.cat + '" data-index="' + i + '">' +
        '<div class="pf-thumb">' + (w.icon || "✨") + (w.featured ? '<span class="pf-flag">精选</span>' : "") + "</div>" +
        '<div class="pf-body">' +
          '<div class="pf-top"><span class="pf-cat">' + w.cat + "</span>" + (meta ? '<span class="pf-meta">' + meta + "</span>" : "") + "</div>" +
          "<h3>" + w.title + "</h3>" +
          "<p>" + w.desc + "</p>" +
          tagList(w.tags) +
          '<div class="pf-actions">' +
            '<span class="pf-open" data-open="' + i + '">查看详情 →</span>' +
            demo +
            (!w.demo && links ? '<span class="pf-links">' + links + "</span>" : "") +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* 待完成作品卡片（无演示、无弹窗，弱化显示） */
  function wipCard(w) {
    return (
      '<article class="pf-card wip-card">' +
        '<div class="pf-thumb">' + (w.icon || "💭") + '<span class="pf-flag">待完成</span></div>' +
        '<div class="pf-body">' +
          '<div class="pf-top"><span class="pf-cat">' + w.cat + "</span>" + (w.year ? '<span class="pf-meta">' + w.year + "</span>" : "") + "</div>" +
          "<h3>" + w.title + "</h3>" +
          "<p>" + w.desc + "</p>" +
          tagList(w.tags) +
        "</div>" +
      "</article>"
    );
  }

  /* 作品卡片（works.html + index 预览共用） */
  function renderWorks() {
    var box = document.getElementById("works-list");
    if (!box) return;
    box.className = "pf-grid";
    box.innerHTML = WORKS.map(workCard).join("");
  }

  /* 待完成作品（works.html「待完成」 + index「正在做」共用） */
  function renderWip() {
    var html = WIP.map(wipCard).join("");
    ["wip-list", "home-wip-list"].forEach(function (id) {
      var box = document.getElementById(id);
      if (!box) return;
      box.className = "pf-grid";
      box.innerHTML = html;
    });
    var wrap = document.getElementById("wip-wrap");
    var homeWrap = document.getElementById("home-wip-wrap");
    if (wrap) wrap.hidden = !WIP.length;
    if (homeWrap) homeWrap.hidden = !WIP.length;
  }

  /* ---------- 作品集专属（仅在对应容器存在时生效） ---------- */

  /* 顶部统计 */
  function renderStats() {
    var box = document.getElementById("pf-stats");
    if (!box) return;
    var cats = uniq(WORKS.map(function (w) { return w.cat; }));
    var skills = collectSkills();
    box.innerHTML =
      '<div class="pf-stat"><b>' + WORKS.length + "</b><span>项目</span></div>" +
      '<div class="pf-stat"><b>' + cats.length + "</b><span>分类</span></div>" +
      '<div class="pf-stat"><b>' + skills.length + "</b><span>技术点</span></div>";
  }

  /* 技术栈 */
  function renderSkills() {
    var box = document.getElementById("pf-skills");
    if (!box) return;
    var skills = collectSkills();
    if (!skills.length) {
      box.innerHTML = '<span class="pf-empty">整理中…</span>';
      return;
    }
    box.innerHTML = skills.map(function (s) { return '<span class="pf-skill">' + s + "</span>"; }).join("");
  }

  /* 精选项目 */
  function renderFeatured() {
    var box = document.getElementById("pf-featured");
    var wrap = document.getElementById("pf-featured-wrap");
    if (!box) return;
    var f = WORKS.filter(function (w) { return w.featured; })[0];
    if (!f) { if (wrap) wrap.hidden = true; return; }
    if (wrap) wrap.hidden = false;
    var links = workLinks(f);
    var demo = f.demo ? '<a class="pf-demo" href="' + f.demo + '">▶ 在线演示</a>' : "";
    box.innerHTML =
      '<article class="pf-feature">' +
        '<div class="pf-feature-icon">' + (f.icon || "✨") + "</div>" +
        '<div class="pf-feature-body">' +
          '<div class="pf-top"><span class="pf-cat">' + f.cat + '</span><span class="pf-meta">' + f.year + " · " + f.status + "</span></div>" +
          "<h3>" + f.title + "</h3>" +
          "<p>" + (f.longDesc || f.desc) + "</p>" +
          tagList(f.tags) +
          (demo || links ? '<div class="pf-actions" style="margin-top:16px;">' + demo + (links ? '<span class="pf-links">' + links + "</span>" : "") + "</div>" : "") +
        "</div>" +
      "</article>";
  }

  /* 分类筛选 */
  function renderFilter() {
    var box = document.getElementById("pf-filter");
    if (!box) return;
    var cats = ["全部"].concat(uniq(WORKS.map(function (w) { return w.cat; })));
    box.innerHTML = cats.map(function (c, i) {
      return '<button class="pf-chip' + (i === 0 ? " active" : "") + '" data-cat="' + c + '">' + c + "</button>";
    }).join("");
    box.querySelectorAll(".pf-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        box.querySelectorAll(".pf-chip").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-cat");
        document.querySelectorAll("#works-list .pf-card").forEach(function (card) {
          card.style.display = (cat === "全部" || card.getAttribute("data-cat") === cat) ? "" : "none";
        });
      });
    });
  }

  /* 详情弹窗 */
  function openDetail(i) {
    var modal = document.getElementById("pf-modal");
    var body = document.getElementById("pf-modal-body");
    var w = WORKS[i];
    if (!modal || !body || !w) return;
    var links = workLinks(w);
    body.innerHTML =
      '<div class="pf-modal-head">' +
        '<div class="pf-modal-icon">' + (w.icon || "✨") + "</div>" +
        '<div class="pf-modal-title">' +
          '<div class="pf-top"><span class="pf-cat">' + w.cat + "</span>" + (w.year ? '<span class="pf-meta">' + w.year + " · " + w.status + "</span>" : "") + "</div>" +
          "<h3>" + w.title + "</h3>" +
        "</div>" +
      "</div>" +
      '<p class="pf-modal-desc">' + (w.longDesc || w.desc) + "</p>" +
      '<div class="pf-modal-sec"><h4>技术 / 标签</h4>' + tagList(w.tags) + "</div>" +
      (links ? '<div class="pf-modal-sec"><h4>了解更多</h4><div class="pf-links">' + links + "</div></div>" : "");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeDetail() {
    var modal = document.getElementById("pf-modal");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  /* 绑定点击事件 */
  function bindWorkClicks() {
    var modal = document.getElementById("pf-modal");
    document.querySelectorAll("[data-open]").forEach(function (el) {
      el.addEventListener("click", function () {
        if (modal) {
          openDetail(parseInt(this.getAttribute("data-open"), 10));
        } else {
          location.href = prefix() + "works.html";
        }
      });
    });
    if (!modal) return;
    document.querySelectorAll("#pf-modal [data-close]").forEach(function (el) {
      el.addEventListener("click", closeDetail);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDetail();
    });
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
    renderWip();
    renderStats();
    renderSkills();
    renderFeatured();
    renderFilter();
    renderOI();
    renderMedia();
    renderPosts();
    bindWorkClicks();
  });
})();