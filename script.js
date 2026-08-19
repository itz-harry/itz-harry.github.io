document.addEventListener("DOMContentLoaded", function () {

  // 1. SCROLL REVEAL FOR BELOW SECTIONS
  const cardsToAnimate = document.querySelectorAll(
    '.cards, .main, .service-card, .project-card, details, .contact-form, .contact-info'
  );

  cardsToAnimate.forEach((el) => {
    el.classList.add('scroll-reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  cardsToAnimate.forEach((el) => observer.observe(el));


  // 2. MOBILE HAMBURGER MENU
  const hamburgerBtn = document.getElementById("hamburger-btn") || document.querySelector(".menu");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburgerBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    const allNavLinks = navLinks.querySelectorAll("a");
    allNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    document.addEventListener("click", function (e) {
      if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }

});