(function () {
  var S = D.S, el = D.el, $ = D.$;
  document.querySelectorAll("[data-artist]").forEach(function (n) { n.textContent = S.artist; });
  var G = S.gallery || {};
  $("v-enter").style.backgroundImage = "url('" + D.src(G.entrance || "images/exhibitions/ex-2019-1.jpg") + "')";

  // ----- Viewer
  var lb = $("lb"), items = [], at = 0;
  function show() { var it = items[at]; $("lb-img").src = D.src(it.src); $("lb-img").alt = it.alt; it.cap($("lb-cap")); $("lb-count").textContent = items.length > 1 ? (at + 1) + " / " + items.length : ""; $("lb-prev").hidden = $("lb-next").hidden = items.length < 2; }
  function open(list, i) { items = list; at = i; show(); if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); }
  function step(d) { at = (at + d + items.length) % items.length; show(); }
  $("lb-prev").onclick = function () { step(-1); }; $("lb-next").onclick = function () { step(1); }; $("lb-close").onclick = function () { lb.close(); };
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  function workItem(w) { return { src: w.src, alt: D.alt(w), cap: function (n) { D.caption(n, w); } }; }

  // ----- Exhibitions drop-down
  var panel = $("dd-panel"), btn = $("dd-btn");
  var all = el("a"); all.href = "#exhibitions"; all.appendChild(el("span", null, "All exhibitions")); panel.appendChild(all);
  S.exhibitions.forEach(function (x) { var a = el("a"); a.href = "#exhibition/" + x.id; a.appendChild(el("span", null, x.title)); a.appendChild(el("span", "y", String(x.year))); panel.appendChild(a); });
  function setDD(open) { panel.hidden = !open; btn.setAttribute("aria-expanded", open ? "true" : "false"); }
  btn.onclick = function (e) { e.stopPropagation(); setDD(panel.hidden); };
  document.addEventListener("click", function (e) { if (!panel.hidden && !panel.contains(e.target)) setDD(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setDD(false); });

  // ----- About: wide image, statement in his words, then biography
  var ban = D.byId[G.aboutBanner || "2011-2014-010"]; if (ban) { $("a-banner").src = D.src(ban.src); $("a-banner").alt = D.alt(ban); }
  var ab = $("about");
  ab.appendChild(el("h1", null, "About"));
  S.statement.text.forEach(function (t) { ab.appendChild(el("p", null, t)); });
  ab.appendChild(el("p", "sig", S.statement.by + ", from ‘" + S.statement.title + "’"));
  ab.appendChild(el("h2", null, "Biography"));
  S.bio.forEach(function (t) { ab.appendChild(el("p", null, t)); });

  // ----- Exhibitions index and pages
  S.exhibitions.forEach(function (x) {
    var li = el("li"), a = el("a"); a.href = "#exhibition/" + x.id;
    a.appendChild(el("span", "y", String(x.year))); a.appendChild(el("span", "t", x.title)); a.appendChild(el("span", "v", x.venue + ", " + x.city));
    li.appendChild(a); $("ex-index").appendChild(li);
  });
  function renderExhibition(id) {
    var i = S.exhibitions.findIndex(function (x) { return x.id === id; }); if (i < 0) { location.hash = "#exhibitions"; return; }
    var x = S.exhibitions[i], pg = $("ex-page"); pg.textContent = "";
    var h = el("div", "ex-head"); h.appendChild(el("p", "meta", x.kind + " · " + x.year)); h.appendChild(el("h1", null, x.title)); h.appendChild(el("p", "meta", [x.venue, x.city, x.dates].filter(Boolean).join(", "))); pg.appendChild(h);
    var t = el("div", "ex-text"); if (x.text) t.appendChild(el("p", null, x.text)); if (x.credit) t.appendChild(el("p", "credit", x.credit)); if (t.childNodes.length) pg.appendChild(t);
    var list = (x.images || []).map(function (p) { return { src: p, alt: "Installation view, " + x.title, cap: function (n) { n.textContent = "Installation view, " + x.title + ", " + x.venue + ", " + x.city + ", " + x.year; } }; })
      .concat((x.works || []).map(function (k) { return D.byId[k]; }).filter(Boolean).map(workItem));
    if (list.length) {
      var g = el("div", "ex-imgs");
      list.forEach(function (it, k) { var b = el("button"); b.type = "button"; if (k === 0) b.className = "wide"; b.setAttribute("aria-label", it.alt); b.appendChild(D.img(it.src, it.alt)); b.onclick = function () { open(list, k); }; g.appendChild(b); });
      pg.appendChild(g);
    }
    var nav = el("nav", "ex-pn"), p = S.exhibitions[i - 1], n = S.exhibitions[i + 1];
    var pa = el("a", null, p ? "← " + p.title + " (" + p.year + ")" : ""); pa.href = p ? "#exhibition/" + p.id : "#exhibitions";
    var na = el("a", null, n ? n.title + " (" + n.year + ") →" : ""); na.href = n ? "#exhibition/" + n.id : "#exhibitions";
    nav.appendChild(pa); nav.appendChild(na); pg.appendChild(nav);
  }

  // ----- Works: a filmstrip per series
  S.series.forEach(function (s) {
    var ws = D.seriesWorks(s); if (!ws.length) return;
    var sec = el("section", "strip-sec"), info = el("div", "strip-info");
    info.appendChild(el("h2", null, s.title)); info.appendChild(el("p", "y", s.years + " · " + ws.length + " works")); if (s.intro) info.appendChild(el("p", "i", s.intro));
    var strip = el("div", "strip"); strip.setAttribute("aria-label", s.title); var list = ws.map(workItem);
    ws.forEach(function (w, k) { var b = el("button"); b.type = "button"; b.setAttribute("aria-label", D.alt(w)); b.appendChild(D.img(w.src, D.alt(w), Math.round(260 * w.w / w.h), 260)); b.onclick = function () { open(list, k); }; strip.appendChild(b); });
    sec.appendChild(info); sec.appendChild(strip); $("strips").appendChild(sec);
  });

  $("c-email").textContent = S.contact.email; $("c-loc").textContent = S.contact.location;

  // ----- Pages
  var noop = function () {};
  D.router({ enter: noop, about: noop, exhibitions: noop, exhibition: renderExhibition, works: noop, contact: noop }, "enter", function (page) {
    $("v-enter").hidden = page !== "enter"; $("site").hidden = page === "enter"; setDD(false);
    var cur = page === "exhibition" ? "exhibitions" : page;
    document.querySelectorAll(".menu > a").forEach(function (a) { if (a.getAttribute("href") === "#" + cur) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (cur === "exhibitions") btn.setAttribute("aria-current", "page"); else btn.removeAttribute("aria-current");
  });
})();
