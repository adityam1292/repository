(function () {
  var S = D.S, W = D.W, el = D.el, $ = D.$;
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });
  $("yr").textContent = new Date().getFullYear();

  // ----- Banner: large works and an installation view, rotating every 5 seconds
  var slides = (S.banner || ["2021-2025-002", "images/exhibitions/ex-2019-1.jpg", "2011-2014-010", "2021-2025-004", "2007-009"]).map(function (k) {
    var w = D.byId[k]; return w ? { src: w.src, alt: D.alt(w) } : { src: k, alt: "Installation view" };
  });
  var cur = 0, timer = null, reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  slides.forEach(function (s, i) {
    var im = D.img(s.src, s.alt, null, null, i !== 0); if (i === 0) im.className = "on"; $("banner").appendChild(im);
    var d = el("button"); d.type = "button"; d.setAttribute("aria-label", "Show image " + (i + 1)); d.onclick = function () { show(i); restart(); }; $("dots").appendChild(d);
  });
  function show(i) {
    cur = i; var ims = $("banner").querySelectorAll("img"), ds = $("dots").querySelectorAll("button");
    ims.forEach(function (im, k) { im.classList.toggle("on", k === i); });
    ds.forEach(function (d, k) { if (k === i) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
  }
  function restart() { if (reduce) return; clearInterval(timer); timer = setInterval(function () { show((cur + 1) % slides.length); }, 5000); }
  show(0); restart();

  // ----- Critics on the home page
  D.leadQuotes().forEach(function (q) { $("q-home").appendChild(D.quoteEl(q)); });

  // ----- Home lists (each opens its exhibition page)
  function showItem(x) {
    var li = el("li"); var p = el("p"); var a = el("a", null, x.title); a.href = "#show/" + x.id; var b = el("b"); b.appendChild(a); p.appendChild(b); li.appendChild(p);
    li.appendChild(el("p", null, x.venue + ", " + x.city));
    if (x.credit) li.appendChild(el("p", "sub", x.credit));
    li.appendChild(el("p", "sub", x.dates || String(x.year)));
    var v = el("a", "view-l", "view"); v.href = "#show/" + x.id; li.appendChild(v);
    return li;
  }
  S.exhibitions.forEach(function (x) {
    var k = x.kind.toLowerCase();
    var target = k.indexOf("residency") >= 0 ? "res" : (k.indexOf("solo") >= 0 || k.indexOf("two-person") >= 0 || k.indexOf("feature") >= 0) ? "solo" : "group";
    $(target).appendChild(showItem(x));
  });

  // ----- Work grid: newest first, filter by medium and year
  var order = W.slice().sort(function (a, b) { return parseInt(b.year, 10) - parseInt(a.year, 10); });
  var cats = []; order.forEach(function (w) { if (cats.indexOf(w.category) < 0) cats.push(w.category); });
  cats.forEach(function (c) { var o = el("option", null, c); o.value = c; $("f-medium").appendChild(o); });
  S.periods.slice().reverse().forEach(function (p) { var o = el("option", null, p.label); o.value = p.id; $("f-year").appendChild(o); });
  var PAGE = 24, shown = PAGE, list = order;
  function filtered() {
    var m = $("f-medium").value, y = $("f-year").value;
    return order.filter(function (w) { return (!m || w.category === m) && (!y || w.period === y); });
  }
  function renderGrid() {
    list = filtered(); var g = $("grid"); g.textContent = "";
    list.slice(0, shown).forEach(function (w) {
      var a = el("a", "card"); a.href = "#piece/" + w.id;
      var ph = el("div", "ph"); ph.appendChild(D.img(w.src, D.alt(w))); a.appendChild(ph);
      a.appendChild(el("p", "t", D.title(w))); a.appendChild(el("p", "y", String(w.year)));
      g.appendChild(a);
    });
    $("count").textContent = "Showing " + Math.min(shown, list.length) + " of " + list.length + " works";
    $("more").hidden = shown >= list.length;
  }
  $("f-medium").onchange = $("f-year").onchange = function () { shown = PAGE; renderGrid(); };
  $("more").onclick = function () { shown += PAGE; renderGrid(); };
  renderGrid();

  // ----- Single artwork page
  function renderPiece(id) {
    var cur = filtered(); var i = cur.findIndex(function (w) { return w.id === id; });
    if (i < 0) { cur = order; i = order.findIndex(function (w) { return w.id === id; }); }
    if (i < 0) { location.hash = "#work"; return; }
    var w = cur[i], s = D.seriesOf(w);
    $("p-img").src = D.src(w.src); $("p-img").alt = D.alt(w);
    $("p-title").textContent = D.title(w); $("p-year").textContent = w.year; $("p-medium").textContent = w.medium;
    $("p-size").textContent = w.size || ""; $("p-size").hidden = !w.size;
    $("p-note").textContent = s && s.intro ? s.intro : "";
    var p = cur[(i - 1 + cur.length) % cur.length], n = cur[(i + 1) % cur.length];
    $("p-prev").href = "#piece/" + p.id; $("p-next").href = "#piece/" + n.id;
  }
  document.addEventListener("keydown", function (e) {
    if ($("v-piece").hidden) return;
    if (e.key === "ArrowLeft") location.hash = $("p-prev").getAttribute("href");
    if (e.key === "ArrowRight") location.hash = $("p-next").getAttribute("href");
  });

  // ----- Exhibition page
  function renderShow(id) {
    var x = S.exhibitions.find(function (e) { return e.id === id; }); if (!x) { location.hash = "#home"; return; }
    var r = $("show"); r.textContent = "";
    var back = el("a", "crumb", "← Exhibitions"); back.href = "#home"; r.appendChild(back);
    r.appendChild(el("h1", "show-t", x.title));
    var cap = el("div", "work-cap"); cap.appendChild(el("p", null, x.venue + ", " + x.city)); cap.appendChild(el("p", null, x.dates || String(x.year))); cap.appendChild(el("p", "sub", x.kind)); r.appendChild(cap);
    if (x.text) r.appendChild(el("p", "work-note", x.text));
    if (x.credit) r.appendChild(el("p", "work-note", x.credit));
    var qs = D.quotesFor(x.id); if (qs.length) { var g = el("div", "q-grid show-q"); qs.forEach(function (q) { g.appendChild(D.quoteEl(q)); }); r.appendChild(g); }
    var m = D.exhibitionMedia(x);
    m.views.forEach(function (it) { var f = el("figure", "view"); f.appendChild(D.img(it.src, it.alt)); var c = el("figcaption"); it.cap(c); f.appendChild(c); r.appendChild(f); });
    if (m.works.length) {
      r.appendChild(el("h2", "label show-l", m.label));
      var gr = el("div", "grid");
      (x.works || []).forEach(function (k) { var w = D.byId[k]; if (!w) return; var a = el("a", "card"); a.href = "#piece/" + w.id; var ph = el("div", "ph"); ph.appendChild(D.img(w.src, D.alt(w))); a.appendChild(ph); a.appendChild(el("p", "t", D.title(w))); a.appendChild(el("p", "y", String(w.year))); gr.appendChild(a); });
      r.appendChild(gr);
    }
  }

  // ----- Biography, texts, contact
  $("b-img").src = D.src(S.contact.image || "images/about/portrait.jpg");
  S.bio.forEach(function (t) { $("b-txt").appendChild(el("p", null, t)); });
  D.resume($("cv"), S);
  $("st-title").textContent = S.statement.title;
  S.statement.text.forEach(function (t) { $("st-body").appendChild(el("p", null, t)); });
  $("st-by").textContent = S.statement.by;
  (S.critics || []).forEach(function (q) { $("texts-list").appendChild(D.quoteEl(q)); });
  $("c-email").textContent = S.contact.email; $("c-loc").textContent = S.contact.location;

  var noop = function () {};
  D.router({ home: noop, work: noop, piece: renderPiece, show: renderShow, biography: noop, texts: noop, contact: noop }, "home", function (page) {
    var curPage = page === "piece" ? "work" : page === "show" ? "home" : page;
    document.querySelectorAll(".menu a").forEach(function (a) { if (a.getAttribute("href") === "#" + curPage) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  });
})();
