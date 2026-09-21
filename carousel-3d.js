/* Arc-flow 3D carousel — dependency-free, static.
   Cards ride an arc in 3D: drag to spin, click a card to focus, auto-plays.
   Mounts itself before .footer (fallback: .portfolio-next) once React renders. */
(function () {
  "use strict";

  var SLIDES = [
    { src: "/assets/skillforge-thumb.jpg",      kicker: "Flagship product", title: "SkillForge" },
    { src: "/assets/flylio-thumb.jpg",          kicker: "Flagship product", title: "Flylio" },
    { src: "/assets/mountain-kirkjufell.webp",  kicker: "Redstone Labs",    title: "From concept to launch" },
    { src: "/assets/og-image.jpg",              kicker: "The studio",       title: "Built across markets" },
    { src: "/assets/mark.png",                  kicker: "The mark",         title: "Redstone Labs", logo: true }
  ];
  var AUTOPLAY_MS = 4500;
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function mod(i, n) { return ((i % n) + n) % n; }

  function mount() {
    var anchor = document.querySelector(".footer") ||
                 document.querySelector(".portfolio-next");
    if (!anchor || !anchor.parentNode) return;

    var n = SLIDES.length;
    var section = document.createElement("section");
    section.className = "arc3d";
    section.setAttribute("aria-label", "Selected work in 3D");

    var cardsHtml = SLIDES.map(function (s, i) {
      return (
        '<div class="arc3d__card' + (s.logo ? " arc3d__card--logo" : "") + '" data-i="' + i + '" role="button" tabindex="0" aria-label="Focus: ' + s.title + '">' +
          '<img src="' + s.src + '" alt="' + s.title + '" draggable="false"' + (i > 1 ? ' loading="lazy"' : "") + ">" +
          '<div class="arc3d__cap"><div class="arc3d__cap-kicker">' + s.kicker + "</div>" +
          '<div class="arc3d__cap-title">' + s.title + "</div></div>" +
        "</div>"
      );
    }).join("");

    var dotsHtml = SLIDES.map(function (s, i) {
      return '<button class="arc3d__dot" data-i="' + i + '" aria-label="Go to slide ' + (i + 1) + ": " + s.title + '"' +
        (i === 0 ? ' aria-current="true"' : "") + "></button>";
    }).join("");

    section.innerHTML =
      '<div class="arc3d__head">' +
        '<div class="arc3d__label">In motion</div>' +
        '<h2 class="arc3d__title">Selected work, in 3D</h2>' +
        '<p class="arc3d__sub">Drag the arc or let it spin — every product we ship, rendered large. Built by Redstone Labs.</p>' +
      "</div>" +
      '<div class="arc3d__viewport" tabindex="0" aria-roledescription="carousel" aria-label="Work carousel">' +
        cardsHtml +
      "</div>" +
      '<div class="arc3d__nav">' +
        '<button class="arc3d__btn" data-dir="-1" aria-label="Previous slide">&#8592;</button>' +
        '<div class="arc3d__dots">' + dotsHtml + "</div>" +
        '<button class="arc3d__btn" data-dir="1" aria-label="Next slide">&#8594;</button>' +
      "</div>" +
      '<div class="arc3d__hint">Drag to spin &nbsp;&middot;&nbsp; Click a card to focus</div>';

    anchor.parentNode.insertBefore(section, anchor);

    var viewport = section.querySelector(".arc3d__viewport");
    var cards = Array.prototype.slice.call(section.querySelectorAll(".arc3d__card"));
    var dots = Array.prototype.slice.call(section.querySelectorAll(".arc3d__dot"));

    var pos = 0, target = 0;
    var dragging = false, lastX = 0, vel = 0, lastT = 0;
    var hovering = false, timer = null;

    function spacing() {
      var w = cards[0] ? cards[0].offsetWidth : 300;
      return Math.max(180, w * 0.58);
    }
    // shortest signed offset of card i from float position p, in (-n/2, n/2]
    function offsetOf(i, p) {
      var o = mod(i - Math.round(p), n) + (Math.round(p) - p);
      // simpler: fractional offset then wrap
      o = (i - p) % n;
      if (o > n / 2) o -= n;
      if (o < -n / 2) o += n;
      return o;
    }
    function activeIndex() { return mod(Math.round(target), n); }

    function paint() {
      var sp = spacing();
      for (var i = 0; i < n; i++) {
        var off = offsetOf(i, pos);
        var a = Math.abs(off);
        var x = off * sp;
        var z = -a * 300 - a * a * 45;
        var ry = -off * 34;
        var s = 1 - Math.min(a * 0.13, 0.3);
        var op = 1 - Math.min(a * 0.36, 0.78);
        cards[i].style.transform =
          "translateX(" + x.toFixed(1) + "px) translateZ(" + z.toFixed(1) + "px)" +
          " rotateY(" + ry.toFixed(2) + "deg) scale(" + s.toFixed(3) + ")";
        cards[i].style.opacity = op.toFixed(3);
        cards[i].style.zIndex = String(100 - Math.round(a * 10));
        cards[i].style.filter = a > 1.7 ? "brightness(0.5)" : (a > 0.55 ? "brightness(0.78)" : "none");
        if (a < 0.5) cards[i].classList.add("arc3d__card--active");
        else cards[i].classList.remove("arc3d__card--active");
      }
      var act = activeIndex();
      for (var d = 0; d < n; d++) {
        if (d === act) dots[d].setAttribute("aria-current", "true");
        else dots[d].removeAttribute("aria-current");
      }
    }

    function frame() {
      pos += (target - pos) * 0.11;
      if (Math.abs(target - pos) < 0.0004) pos = target;
      paint();
      requestAnimationFrame(frame);
    }

    function goTo(i) {
      var o = (i - target) % n;
      if (o > n / 2) o -= n;
      if (o < -n / 2) o += n;
      target = target + o;
      restartAutoplay();
    }

    function restartAutoplay() {
      if (timer) { clearInterval(timer); timer = null; }
      if (reduceMotion) return;
      timer = setInterval(function () {
        if (!dragging && !hovering && !document.hidden) target += 1;
      }, AUTOPLAY_MS);
    }

    // drag
    viewport.addEventListener("pointerdown", function (e) {
      dragging = true; lastX = e.clientX; vel = 0; lastT = performance.now();
      viewport.setPointerCapture(e.pointerId);
      if (timer) { clearInterval(timer); timer = null; }
    });
    viewport.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var now = performance.now();
      var dx = e.clientX - lastX;
      lastX = e.clientX;
      target -= dx / spacing();
      vel = 0.85 * vel + 0.15 * (dx / Math.max(1, now - lastT));
      lastT = now;
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      target = Math.round(target + vel * 90);
      restartAutoplay();
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    viewport.addEventListener("mouseenter", function () { hovering = true; });
    viewport.addEventListener("mouseleave", function () { hovering = false; });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) restartAutoplay();
    });

    // controls
    section.querySelectorAll(".arc3d__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        target = Math.round(target) + parseInt(btn.getAttribute("data-dir"), 10);
        restartAutoplay();
      });
    });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.getAttribute("data-i"), 10));
      });
    });
    cards.forEach(function (card) {
      function focus() { goTo(parseInt(card.getAttribute("data-i"), 10)); }
      card.addEventListener("click", focus);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focus(); }
      });
    });
    viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { target = Math.round(target) + 1; restartAutoplay(); }
      if (e.key === "ArrowLeft") { target = Math.round(target) - 1; restartAutoplay(); }
    });

    restartAutoplay();
    requestAnimationFrame(frame);
  }

  function ready() {
    if (document.querySelector(".footer, .portfolio-next")) { mount(); return; }
    var done = false;
    var obs = new MutationObserver(function () {
      if (!done && document.querySelector(".footer, .portfolio-next")) {
        done = true; obs.disconnect(); mount();
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); if (!done) mount(); }, 9000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
