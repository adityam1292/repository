// Helpers shared by drafts 4, 5 and 6. Content comes from ../../data/site.js and ../../data/works.js.
window.D = (function () {
  var S = window.SITE, W = window.SITE_WORKS || [];
  var BASE = window.SITE_BASE || "";
  var byId = {}; W.forEach(function (w) { byId[w.id] = w; });
  function src(path) { return BASE + path; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function $(id) { return document.getElementById(id); }
  function matches(w, q) { return (!q.period || w.period === q.period) && (!q.category || [].concat(q.category).indexOf(w.category) >= 0); }
  function seriesWorks(s) { return W.filter(function (w) { return matches(w, s.match); }); }
  function seriesOf(w) { for (var i = 0; i < S.series.length; i++) if (matches(w, S.series[i].match)) return S.series[i]; return null; }
  function title(w) { if (w.title) return w.title; var s = seriesOf(w); return s ? s.title : w.medium; }
  function alt(w) { return title(w) + ", " + w.year; }
  // Caption: Title, year. Medium | dimensions
  function caption(node, w) {
    node.textContent = "";
    node.appendChild(el("i", null, title(w)));
    node.appendChild(document.createTextNode(", " + w.year + ". " + w.medium + (w.size ? " | " + w.size : "")));
  }
  function img(path, altText, w, h, lazy) {
    var i = el("img"); i.src = src(path); i.alt = altText || "";
    if (w && h) { i.width = w; i.height = h; }
    if (lazy !== false) { i.loading = "lazy"; i.decoding = "async"; }
    return i;
  }
  function resume(root, S) {
    var intro = el("div", "cv-intro"); S.resumeIntro.forEach(function (t) { intro.appendChild(el("p", null, t)); }); root.appendChild(intro);
    S.cv.forEach(function (g) {
      var d = el("div", "cv-group"); d.appendChild(el("h3", null, g.heading)); var ul = el("ul");
      g.items.forEach(function (it) { var li = el("li"); li.appendChild(el("span", "y", String(it[0]))); li.appendChild(el("span", null, it[1])); ul.appendChild(li); });
      d.appendChild(ul); root.appendChild(d);
    });
  }
  // Simple hash router: "#page" or "#page/param"
  function router(pages, fallback, onRoute) {
    function go() {
      var h = (location.hash || "").replace(/^#/, ""), parts = h.split("/"), page = parts[0], arg = parts.slice(1).join("/");
      if (!pages[page]) { page = fallback; arg = ""; }
      Object.keys(pages).forEach(function (p) { var v = $("v-" + p); if (v) v.hidden = p !== page; });
      pages[page](arg);
      if (onRoute) onRoute(page, arg);
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", go); go();
  }
  // Pictures for an exhibition: installation views first, then the listed works under their label.
  function exhibitionMedia(x) {
    var views = (x.images || []).map(function (p) { return { src: p, alt: "Installation view, " + x.title + ", " + x.venue,
      cap: function (n) { n.textContent = "Installation view, " + x.title + ", " + x.venue + ", " + x.city + ", " + x.year; } }; });
    var works = (x.works || []).map(function (k) { return byId[k]; }).filter(Boolean).map(function (w) {
      return { src: w.src, alt: alt(w), w: w.w, h: w.h, cap: function (n) { caption(n, w); } }; });
    return { views: views, works: works, label: x.worksLabel || "Works" };
  }
  function quotesFor(showId) { return (S.critics || []).filter(function (q) { return q.show === showId; }); }
  function leadQuotes() { return (S.critics || []).filter(function (q) { return q.lead; }); }
  function quoteEl(q, cls) {
    var b = el("blockquote", cls || "q"); b.appendChild(el("p", "q-text", "“" + q.quote + "”"));
    var f = el("footer", "q-by"); f.appendChild(el("b", null, q.by)); f.appendChild(el("span", null, q.source)); b.appendChild(f);
    return b;
  }
  return { exhibitionMedia: exhibitionMedia, quotesFor: quotesFor, leadQuotes: leadQuotes, quoteEl: quoteEl, S: S, W: W, byId: byId, src: src, el: el, $: $, seriesWorks: seriesWorks, seriesOf: seriesOf, title: title, alt: alt, caption: caption, img: img, resume: resume, router: router };
})();
