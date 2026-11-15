// Builds the pages from data/site.js (text) and data/works.js (artworks).
(function () {
  var S = window.SITE, W = window.SITE_WORKS || [];
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  var byId = {}; W.forEach(function (w) { byId[w.id] = w; });
  var periodOf = function (w) { return w.period; };

  document.title = S.artist;
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });

  // Caption: Title, year. Medium | dimensions
  function caption(node, w) {
    node.textContent = "";
    var t = w.title || w.series;
    if (t) { node.appendChild(el("i", null, t)); node.appendChild(document.createTextNode(", ")); }
    node.appendChild(document.createTextNode(w.year + ". " + w.medium + (w.size ? " | " + w.size : "")));
  }
  function alt(w) { return (w.title || w.series || w.medium) + ", " + w.year; }

  // ----- Home: installation views
  S.home.forEach(function (id) {
    var w = byId[id]; if (!w) return;
    var i = el("img"); i.src = w.src; i.alt = alt(w); i.width = w.w; i.height = w.h;
    $("home-list").appendChild(i);
  });

  // ----- Selected works: slideshow
  var list = S.selectedWorks.map(function (id) { return byId[id]; }).filter(Boolean), at = 0;
  var thumbBtns = [], yearBtns = [];
  S.periods.forEach(function (p) {
    var first = -1; list.forEach(function (w, i) { if (first < 0 && periodOf(w) === p.id) first = i; });
    if (first < 0) return;
    var b = el("button", "link", p.label); b.type = "button"; b.dataset.p = p.id;
    b.addEventListener("click", function () { go(first); });
    $("years").appendChild(b); yearBtns.push(b);
  });
  list.forEach(function (w, i) {
    var b = el("button"); b.type = "button"; b.setAttribute("aria-label", alt(w));
    var im = el("img"); im.loading = "lazy"; im.src = w.src; im.alt = ""; im.width = Math.round(64 * w.w / w.h); im.height = 64;
    b.appendChild(im); b.addEventListener("click", function () { go(i); });
    $("thumbs").appendChild(b); thumbBtns.push(b);
  });
  function go(i) {
    if (!list.length) return;
    at = (i + list.length) % list.length; var w = list[at];
    $("work-img").src = w.src; $("work-img").alt = alt(w);
    caption($("work-meta"), w);
    $("work-count").textContent = (at + 1) + " / " + list.length;
    thumbBtns.forEach(function (b, k) { if (k === at) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current"); });
    yearBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.p === periodOf(w) ? "true" : "false"); });
    var t = thumbBtns[at], strip = $("thumbs");
    if (t && strip.clientWidth) strip.scrollLeft = t.offsetLeft - strip.offsetLeft - (strip.clientWidth - t.offsetWidth) / 2;
  }
  ["hit-prev", "btn-prev"].forEach(function (id) { $(id).addEventListener("click", function () { go(at - 1); }); });
  ["hit-next", "btn-next"].forEach(function (id) { $(id).addEventListener("click", function () { go(at + 1); }); });
  document.addEventListener("keydown", function (e) {
    if ($("v-works").hidden) return;
    if (e.key === "ArrowLeft") go(at - 1); if (e.key === "ArrowRight") go(at + 1);
  });
  var x0 = null, stage = document.querySelector(".stage");
  stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", function (e) { if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) { e.preventDefault(); go(at + (dx < 0 ? 1 : -1)); } x0 = null; });

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
    if (h === "works") go(at);
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  go(0); route();
})();
