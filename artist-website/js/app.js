// Builds the pages from data/site.js (text) and data/works.js (artworks).
(function () {
  var S = window.SITE, W = window.SITE_WORKS || [];
  var FIRST = 12; // works shown per chapter before "Show all"
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  var byId = {}; W.forEach(function (w) { byId[w.id] = w; });

  document.title = S.artist;
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });

  function title(w) { return w.title || w.series || w.medium; }
  function alt(w) { return title(w) + ", " + w.year; }
  // Caption: Title, year. Medium | dimensions
  function caption(node, w) {
    node.textContent = "";
    var t = w.title || w.series;
    if (t) { node.appendChild(el("i", null, t)); node.appendChild(document.createTextNode(", ")); }
    node.appendChild(document.createTextNode(w.year + ". " + w.medium + (w.size ? " | " + w.size : "")));
  }

  // ----- Home: installation views
  S.home.forEach(function (id) {
    var w = byId[id]; if (!w) return;
    var i = el("img"); i.src = w.src; i.alt = alt(w); i.width = w.w; i.height = w.h;
    $("home-list").appendChild(i);
  });

  // ----- Works: year chapters
  var expanded = {};
  S.periods.forEach(function (p) {
    var b = el("button", "link", p.label); b.type = "button";
    b.addEventListener("click", function () { var s = $("ch-" + p.id); if (s) s.scrollIntoView({ block: "start" }); });
    $("years").appendChild(b);
  });
  function renderChapters() {
    var root = $("chapters"); root.textContent = "";
    S.periods.forEach(function (p) {
      var list = W.filter(function (w) { return w.period === p.id; });
      if (!list.length) return;
      var sec = el("section", "chapter"); sec.id = "ch-" + p.id;
      var head = el("div", "ch-head");
      head.appendChild(el("h2", null, p.label + (p.name ? " — " + p.name : "")));
      if (p.intro) head.appendChild(el("p", "ch-intro", p.intro));
      sec.appendChild(head);
      var grid = el("div", "grid");
      (expanded[p.id] ? list : list.slice(0, FIRST)).forEach(function (w) {
        var b = el("button", "work"); b.type = "button"; b.setAttribute("aria-label", alt(w));
        var i = el("img"); i.loading = "lazy"; i.decoding = "async"; i.src = w.src; i.alt = alt(w); i.width = w.w; i.height = w.h;
        var c = el("span", "cap"); c.appendChild(el("span", null, title(w))); c.appendChild(el("span", null, String(w.year)));
        b.appendChild(i); b.appendChild(c);
        b.addEventListener("click", function () { openLB(p, list, list.indexOf(w)); });
        grid.appendChild(b);
      });
      sec.appendChild(grid);
      if (list.length > FIRST && !expanded[p.id]) {
        var m = el("button", "link more", "Show all " + list.length + " works from " + p.label);
        m.type = "button";
        m.addEventListener("click", function () { expanded[p.id] = true; var y = window.scrollY; renderChapters(); window.scrollTo(0, y); });
        sec.appendChild(m);
      }
      root.appendChild(sec);
    });
  }
  renderChapters();

  // ----- Full-screen viewer
  var lb = $("lb"), cur = [], at = 0, curLabel = "";
  function show() {
    var w = cur[at];
    $("lb-img").src = w.src; $("lb-img").alt = alt(w);
    caption($("lb-meta"), w);
    $("lb-chapter").textContent = curLabel;
    $("lb-count").textContent = (at + 1) + " / " + cur.length;
  }
  function openLB(p, list, i) {
    cur = list; at = i; curLabel = p.label + (p.name ? " — " + p.name : ""); show();
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  }
  function step(d) { if (cur.length) { at = (at + d + cur.length) % cur.length; show(); } }
  $("lb-prev").addEventListener("click", function () { step(-1); });
  $("lb-next").addEventListener("click", function () { step(1); });
  $("lb-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; }, { passive: true });

  // ----- About: biography and résumé
  S.bio.forEach(function (t) { $("bio").appendChild(el("p", null, t)); });
  var intro = el("div"); S.resumeIntro.forEach(function (t) { intro.appendChild(el("p", null, t)); }); $("resume").appendChild(intro);
  S.cv.forEach(function (g) {
    var d = el("div"); d.appendChild(el("h2", null, g.heading)); var ul = el("ul");
    g.items.forEach(function (it) { var li = el("li"); li.appendChild(el("span", "y", String(it[0]))); li.appendChild(el("span", null, it[1])); ul.appendChild(li); });
    d.appendChild(ul); $("resume").appendChild(d);
  });

  // ----- Texts
  $("st-title").textContent = S.statement.title;
  S.statement.text.forEach(function (t) { $("st-body").appendChild(el("p", null, t)); });
  $("st-by").textContent = S.statement.by;
  S.texts.forEach(function (t) {
    var li = el("li"); li.appendChild(el("p", null, t.author + ", ‘" + t.title + "’. " + t.where + "."));
    if (t.excerpt) li.appendChild(el("p", "excerpt", "“" + t.excerpt + "”"));
    $("texts-list").appendChild(li);
  });

  // ----- Contact
  var c = S.contact;
  $("c-email").textContent = c.email; $("c-email").href = "mailto:" + c.email;
  $("c-news").href = "mailto:" + c.email + "?subject=" + encodeURIComponent(c.newsletterSubject) + "&body=" + encodeURIComponent(c.newsletterBody);
  $("c-loc").textContent = c.location;
  if (c.image) $("c-img").src = c.image; else $("c-img").hidden = true;

  // ----- Pages: #home, #works, #about, #texts, #contact
  var views = ["home", "works", "about", "texts", "contact"];
  function route() {
    var h = (location.hash || "").replace("#", ""); if (views.indexOf(h) < 0) h = "home";
    views.forEach(function (v) { $("v-" + v).hidden = v !== h; });
    document.querySelectorAll(".menu a").forEach(function (a) { if (a.getAttribute("href") === "#" + h) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
