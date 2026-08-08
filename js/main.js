/* ========================================
   小小崔 · 站点渲染引擎
   读取 data.js 的数据，动态渲染页面
   ======================================== */

(function () {
  'use strict';

  // 获取当前页面文件名
  var currentPage = location.pathname.split('/').pop() || 'index.html';

  // ========== 导航栏 ==========
  function renderNav() {
    var nav = document.getElementById('site-nav');
    if (!nav || !window.NAV) return;

    var linksHtml = NAV.map(function (item) {
      var isActive = (currentPage === item.href) ||
                     (currentPage === '' && item.href === 'index.html');
      return '<li><a href="' + item.href + '"' +
             (isActive ? ' class="active"' : '') +
             '>' + item.label + '</a></li>';
    }).join('');

    nav.innerHTML =
      '<div class="nav-inner">' +
        '<a class="nav-brand" href="index.html">' + (SITE.author || '小小崔') + '</a>' +
        '<ul class="nav-links">' + linksHtml + '</ul>' +
      '</div>';
  }

  // ========== 页脚 ==========
  function renderFooter() {
    var footer = document.getElementById('site-footer');
    if (!footer) return;
    var year = (SITE && SITE.year) || new Date().getFullYear();
    var author = (SITE && SITE.author) || '小小崔';
    footer.innerHTML =
      '<p>© ' + year + ' ' + author + ' &nbsp;·&nbsp; ' +
      'Built with ♥ &nbsp;·&nbsp; ' +
      '<a href="https://github.com/xxc2014/xxc2014.github.io">GitHub</a></p>';
  }

  // ========== 作品列表 ==========
  function renderWorks() {
    var container = document.getElementById('works-list');
    if (!container || !window.WORKS) return;

    container.innerHTML = WORKS.map(function (w) {
      var tagsHtml = (w.tags || []).map(function (t) {
        return '<span class="tag">' + t + '</span>';
      }).join('');
      var linkHtml = w.link ? '<a href="' + w.link + '" class="card">' : '<div class="card">';
      var linkClose = w.link ? '</a>' : '</div>';
      return linkHtml +
        '<h3>' + w.title + '</h3>' +
        '<p class="desc">' + w.desc + '</p>' +
        '<div class="tags">' + tagsHtml + '</div>' +
        linkClose;
    }).join('');
  }

  // ========== 信奥时间线 ==========
  function renderOI() {
    var container = document.getElementById('oi-list');
    if (!container || !window.OI) return;

    container.innerHTML = '<ul class="timeline">' +
      OI.map(function (item) {
        return '<li>' +
          '<div class="date">' + item.date + '</div>' +
          '<div class="title">' + item.title + '</div>' +
          '<div class="desc">' + item.desc + '</div>' +
          '</li>';
      }).join('') +
      '</ul>';
  }

  // ========== 媒体平台 ==========
  function renderMedia() {
    var container = document.getElementById('media-list');
    if (!container || !window.MEDIA) return;

    container.innerHTML = MEDIA.map(function (m) {
      return '<a class="media-item" href="' + (m.link || '#') + '" target="_blank" rel="noopener">' +
        '<span class="icon">' + (m.icon || '📡') + '</span>' +
        '<div>' +
          '<div class="name">' + m.platform + '</div>' +
          '<div class="account">' + m.account + '</div>' +
        '</div>' +
        '</a>';
    }).join('');
  }

  // ========== 文章列表 ==========
  function renderPosts() {
    var container = document.getElementById('posts-list');
    if (!container || !window.POSTS) return;

    // 按日期降序排列
    var sorted = POSTS.slice().sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });

    container.innerHTML = sorted.map(function (p) {
      return '<a class="post-item" href="' + (p.link || '#') + '">' +
        '<div class="post-title">' + p.title + '</div>' +
        '<div class="post-date">' + p.date + '</div>' +
        '<div class="post-excerpt">' + p.excerpt + '</div>' +
        '</a>';
    }).join('');
  }

  // ========== 初始化 ==========
  function init() {
    renderNav();
    renderFooter();
    renderWorks();
    renderOI();
    renderMedia();
    renderPosts();
  }

  // DOM 就绪后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
