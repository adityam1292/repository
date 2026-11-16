(function () {
  var S = D.S, el = D.el, $ = D.$;
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });

  // ----- Viewer: items are {src, alt, cap(node)}
  var lb = $("lb"), items = [], at = 0;
  function show() { var it = items[at]; $("lb-img").src = D.src(it.src); $("lb-img").alt = it.alt; it.cap($("lb-cap")); $("lb-count").textContent = items.length > 1 ? (at + 1) + " / " + items.length : ""; $("lb-prev").hidden = $("lb-next").hidden = items.length < 2; }
  function open(list, i) { items = list; at = i; show(); if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); }
  function step(d) { at = (at + d + items.length) % items.length; show(); }
  $("lb-prev").onclick = function () { step(-1); }; $("lb-next").onclick = function () { step(1); }; $("lb-close").onclick = function () { lb.close(); };
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  function workItem(w) { return { src: w.src, alt: D.alt(w), cap: function (n) { D.caption(n, w); } }; }

  // ----- Exhibitions archive
  S.exhibitions.forEach(function (x) {
    var a = el("article", "ex");
    a.appendChild(el("h2", null, x.venue + " (" + x.year + ")"));
    a.appendChild(el("p", "t", x.title));
    a.appendChild(el("p", "meta", [x.dates, x.city].filter(Boolean).join(", ")));
    a.appendChild(el("p", "kind", x.kind));
    if (x.text) a.appendChild(el("p", "txt", x.text));
    if (x.credit) a.appendChild(el("p", "credit", x.credit));
    var list = (x.images || []).map(function (p) { return { src: p, alt: "Installation view, " + x.title + ", " + x.venue, cap: function (n) { n.textContent = "Installation view, " + x.title + ", " + x.venue + ", " + x.city + ", " + x.year; } }; })
      .concat((x.works || []).map(function (id) { return D.byId[id]; }).filter(Boolean).map(workItem));
    if (list.length) {
      var t = el("div", "thumbs");
      list.forEach(function (it, i) { var b = el("button"); b.type = "button"; b.setAttribute("aria-label", it.alt); b.appendChild(D.img(it.src, "")); b.onclick = function () { open(list, i); }; t.appendChild(b); });
      a.appendChild(t);
    }
    $("ex-list").appendChild(a);
  });

  // ----- Works: series grid
  S.series.forEach(function (s) {
    var ws = D.seriesWorks(s); if (!ws.length) return;
    var cover = (s.cover && D.byId[s.cover]) || ws[0];
    var a = el("a", "series-card"); a.href = "#series/" + s.id;
    a.appendChild(D.img(cover.src, s.title, cover.w, cover.h));
    a.appendChild(el("h2", null, s.title)); a.appendChild(el("p", null, s.years + " · " + ws.length + " works"));
    $("series-grid").appendChild(a);
  });
  function renderSeries(id) {
    var i = S.series.findIndex(function (s) { return s.id === id; }); if (i < 0) i = 0;
    var s = S.series[i], ws = D.seriesWorks(s), list = ws.map(workItem);
    $("s-title").textContent = s.title; $("s-years").textContent = s.years; $("s-intro").textContent = s.intro || "";
    var g = $("s-grid"); g.textContent = "";
    ws.forEach(function (w, k) {
      var b = el("button", "work"); b.type = "button"; b.setAttribute("aria-label", D.alt(w));
      b.appendChild(D.img(w.src, D.alt(w), w.w, w.h)); var c = el("span", "cap"); D.caption(c, w); b.appendChild(c);
      b.onclick = function () { open(list, k); }; g.appendChild(b);
    });
    var p = S.series[i - 1], n = S.series[i + 1];
    $("s-prev").textContent = p ? "← " + p.title : ""; $("s-prev").href = p ? "#series/" + p.id : "#works";
    $("s-next").textContent = n ? n.title + " →" : ""; $("s-next").href = n ? "#series/" + n.id : "#works";
  }

  // ----- Texts, CV, contact
  $("st-title").textContent = S.statement.title;
  S.statement.text.forEach(function (t) { $("st-body").appendChild(el("p", null, t)); });
  $("st-by").textContent = S.statement.by;
  S.texts.forEach(function (t) { var li = el("li"); li.appendChild(el("p", "src", t.author + ", ‘" + t.title + "’. " + t.where + ".")); if (t.excerpt) li.appendChild(el("p", "q", "“" + t.excerpt + "”")); $("texts-list").appendChild(li); });
  D.resume($("cv"), S);
  $("c-email").textContent = S.contact.email; $("c-loc").textContent = S.contact.location;

  var noop = function () {};
  D.router({ exhibitions: noop, works: noop, series: renderSeries, texts: noop, cv: noop, contact: noop }, "exhibitions", function (page) {
    var cur = page === "series" ? "works" : page;
    document.querySelectorAll(".menu a").forEach(function (a) { if (a.getAttribute("href") === "#" + cur) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  });
})();
