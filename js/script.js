/*===== typed js =====*/

const typed = new Typed(".multiple-text", {
  strings: [
    "UI/UX Designer!",
    "Interior Designer!",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  loop: true,
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*===== scroll reveal =====*/

ScrollReveal({
  reset: true,
  distance: "140px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about, .services-container, .portfolio-container, .certificates-container, .testimonials-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


/* Carousel */
var swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 865px
    865: {
      slidesPerView: 2,
      spaceBetween: -55
    },
    // when window width is < 865px
    0: {
      slidesPerView: 1,
    }
  }
});