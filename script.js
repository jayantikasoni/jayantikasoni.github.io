(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Show confirmation after form redirect */
  if (new URLSearchParams(window.location.search).has('sent')) {
    var sent = document.getElementById('form-sent');
    if (sent) sent.hidden = false;
  }

  /* Nav hairline on scroll */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (reducedMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-fade]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  /* Fade-up on scroll entry, staggered 60ms within each section */
  document.querySelectorAll('section, footer').forEach(function (scope) {
    scope.querySelectorAll('[data-fade]').forEach(function (el, i) {
      el.style.setProperty('--fade-delay', (i * 60) + 'ms');
    });
  });

  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-fade]').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* Stat count-up, once on first view, 800ms ease-out */
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 800;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counted = false;
  var proof = document.querySelector('.proof');
  if (proof) {
    var countObserver = new IntersectionObserver(function (entries) {
      if (counted || !entries[0].isIntersecting) return;
      counted = true;
      proof.querySelectorAll('[data-count]').forEach(countUp);
      countObserver.disconnect();
    }, { threshold: 0.3 });
    countObserver.observe(proof);
  }
})();
