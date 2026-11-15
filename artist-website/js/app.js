// Builds the page from data/site.js (text) and data/works.js (artworks).
(function () {
  var S = window.SITE, W = window.SITE_WORKS || [];
  var FIRST = 12;                       // works shown per chapter before "Show all"
  var filter = "All", expanded = {}, visible = [];
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  W = W.map(function (w, i) { return [w, i]; }).sort(function (a, b) { return (parseInt(a[0].year, 10) - parseInt(b[0].year, 10)) || (a[1] - b[1]); }).map(function (x) { return x[0]; });
  var byId = {}; W.forEach(function (w) { byId[w.id] = w; });

  function title(w) { return w.title || w.series || w.medium; }
  function detail(w) { return [w.title || w.series ? w.medium : null, w.year, w.size].filter(Boolean).join(" · "); }

  // ----- Header, hero
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });
  $("lede").textContent = S.tagline; $("born").textContent = S.born;
  var years = W.map(function (w) { return parseInt(w.year, 10); });
  var y0 = Math.min.apply(null, years), y1 = Math.max.apply(null, years);
  $("fact-years").textContent = y0 + "–" + y1; $("fact-works").textContent = W.length; $("fact-span").textContent = S.periods.length;
  [["hero-first", S.heroFirst], ["hero-latest", S.heroLatest]].forEach(function (p) {
    var w = byId[p[1]]; if (!w) return; var f = $(p[0]);
    var b = el("button"); b.type = "button"; b.setAttribute("aria-label", "View " + title(w) + ", " + w.year);
    var i = el("img"); i.src = w.src; i.alt = title(w) + ", " + w.year; i.width = w.w; i.height = w.h; b.appendChild(i);
    b.addEventListener("click", function () { openLB([w], 0); });
    var c = el("figcaption"); c.appendChild(el("b", null, String(w.year))); c.appendChild(el("span", "label", w.medium));
    f.appendChild(b); f.appendChild(c);
  });

  // ----- Rail: chapters and medium filter
  var cats = ["All"]; W.forEach(function (w) { if (cats.indexOf(w.category) < 0) cats.push(w.category); });
  S.periods.forEach(function (p) { var a = el("a", "chip", p.label); a.href = "#p-" + p.id; $("rail-years").appendChild(a); });
  cats.forEach(function (c) {
    var b = el("button", "chip", c); b.type = "button"; b.setAttribute("aria-pressed", c === filter ? "true" : "false");
    var n = c === "All" ? W.length : W.filter(function (w) { return w.category === c; }).length;
    b.appendChild(el("span", "n", String(n)));
    b.addEventListener("click", function () {
      filter = c; expanded = {};
      $("rail-cats").querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      renderPeriods();
    });
    $("rail-cats").appendChild(b);
  });

  // ----- Timeline chapters
  function eventsFor(p) {
    var out = [];
    S.cv.forEach(function (g) { if (g.heading === "Education") return; g.items.forEach(function (it) { if (it[0] >= p.from && it[0] <= p.to) out.push(it); }); });
    return out.sort(function (a, b) { return a[0] - b[0]; });
  }
  function renderPeriods() {
    var root = $("timeline"); root.textContent = ""; visible = [];
    S.periods.forEach(function (p) {
      var all = W.filter(function (w) { return w.period === p.id; });
      var list = all.filter(function (w) { return filter === "All" || w.category === filter; });
      var sec = el("section", "period"); sec.id = "p-" + p.id;
      var info = el("div", "period-info");
      info.appendChild(el("h2", null, p.label)); info.appendChild(el("h3", null, p.name));
      info.appendChild(el("p", "intro", p.intro));
      if (p.quote) { var q = el("blockquote", null, p.quote); q.appendChild(el("cite", "label", p.quoteBy)); info.appendChild(q); }
      var ev = eventsFor(p);
      if (ev.length) {
        var ul = el("ul", "events");
        ev.forEach(function (it) { var li = el("li"); li.appendChild(el("span", "y", String(it[0]))); li.appendChild(el("span", null, it[1])); ul.appendChild(li); });
        info.appendChild(ul);
      }
      info.appendChild(el("p", "label", list.length + (filter === "All" ? "" : " of " + all.length) + (all.length === 1 ? " work" : " works")));
      var body = el("div"), grid = el("div", "grid");
      var shown = expanded[p.id] ? list : list.slice(0, FIRST);
      shown.forEach(function (w) {
        var b = el("button", "work"); b.type = "button"; b.setAttribute("aria-label", "View " + title(w) + ", " + w.year);
        var i = el("img"); i.loading = "lazy"; i.decoding = "async"; i.src = w.src; i.alt = title(w) + ", " + w.year; i.width = w.w; i.height = w.h;
        var c = el("span", "cap"); c.appendChild(el("span", null, title(w))); c.appendChild(el("span", null, String(w.year)));
        b.appendChild(i); b.appendChild(c);
        b.addEventListener("click", function () { openLB(list, list.indexOf(w)); });
        grid.appendChild(b);
      });
      body.appendChild(grid);
      if (!list.length) body.appendChild(el("p", "empty", "No " + filter.toLowerCase() + " from these years in the archive."));
      if (list.length > FIRST && !expanded[p.id]) {
        var m = el("button", "btn ghost more", "Show all " + list.length + " works from " + p.label); m.type = "button";
        m.addEventListener("click", function () { expanded[p.id] = true; var y = window.scrollY; renderPeriods(); window.scrollTo(0, y); });
        body.appendChild(m);
      }
      sec.appendChild(info); sec.appendChild(body); root.appendChild(sec);
    });
  }
  renderPeriods();

  // Highlight the current chapter in the rail
  if ("IntersectionObserver" in window) {
    var chips = $("rail-years").querySelectorAll("a");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        chips.forEach(function (c) { c.classList.toggle("on", c.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    new MutationObserver(function () { document.querySelectorAll(".period").forEach(function (s) { io.observe(s); }); }).observe($("timeline"), { childList: true });
    document.querySelectorAll(".period").forEach(function (s) { io.observe(s); });
  }

  // ----- About, statement, writing, CV, Studio 9, contact
  S.about.forEach(function (t) { $("about-text").appendChild(el("p", null, t)); });
  $("st-title").textContent = S.statement.title;
  S.statement.text.forEach(function (t) { $("st-text").appendChild(el("p", null, t)); });
  $("st-by").textContent = S.statement.by;
  S.writing.forEach(function (q) {
    var b = el("blockquote"); b.appendChild(el("p", null, "“" + q.quote + "”"));
    var f = el("footer"); f.appendChild(el("b", null, q.by)); f.appendChild(el("span", null, q.source)); b.appendChild(f);
    $("quotes").appendChild(b);
  });
  S.cv.forEach(function (g) {
    var d = el("div", "cv-block" + (g.items.length > 12 ? " long" : "")); d.appendChild(el("h3", null, g.heading));
    var ul = el("ul");
    g.items.forEach(function (it) { var li = el("li"); li.appendChild(el("span", "y", String(it[0]))); li.appendChild(el("span", null, it[1])); ul.appendChild(li); });
    d.appendChild(ul); $("cv-list").appendChild(d);
  });
  var s9 = S.studio9;
  $("s9-title").textContent = s9.title; $("s9-by").textContent = s9.by; $("s9-text").textContent = s9.text;
  s9.shows.forEach(function (it) { var li = el("li"); li.appendChild(el("span", "y", String(it[0]))); li.appendChild(el("span", null, it[1])); $("s9-shows").appendChild(li); });
  $("s9-ig").textContent = "Instagram: @" + s9.instagram;
  s9.images.forEach(function (src) { var i = el("img"); i.loading = "lazy"; i.src = src; i.alt = "Pit-fired pottery from Studio 9, Wardha"; $("s9-pots").appendChild(i); });
  $("c-intro").textContent = S.contact.intro; $("c-email").textContent = S.contact.email; $("c-loc").textContent = S.contact.location;
  $("c-copy").addEventListener("click", function () {
    var b = this, done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy email"; }, 1800); };
    var sel = function () { var r = document.createRange(); r.selectNodeContents($("c-email")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected, now copy"; };
    try { navigator.clipboard.writeText(S.contact.email).then(done).catch(sel); } catch (e) { sel(); }
  });
  $("year").textContent = new Date().getFullYear();

  // ----- Lightbox
  var lb = $("lb"), cur = [], at = 0;
  function show() {
    var w = cur[at];
    $("lb-img").src = w.src; $("lb-img").alt = title(w) + ", " + w.year;
    $("lb-title").textContent = title(w); $("lb-detail").textContent = detail(w);
    $("lb-count").textContent = cur.length > 1 ? (at + 1) + " / " + cur.length : "";
    $("lb-prev").hidden = $("lb-next").hidden = cur.length < 2;
  }
  function openLB(list, i) { cur = list; at = i; show(); if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); }
  function step(d) { at = (at + d + cur.length) % cur.length; show(); }
  $("lb-prev").addEventListener("click", function () { step(-1); });
  $("lb-next").addEventListener("click", function () { step(1); });
  $("lb-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; }, { passive: true });
})();
