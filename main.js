// Typed Animation
var typed = new Typed('#element', {
  strings: ["Web Developer", "Frontend Developer", "Node.js Developer"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});

// Add active class on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 150;

  sections.forEach(sec => {
    if(scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight){
      navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href").slice(1) === sec.getAttribute("id")){
          link.classList.add("active");
        }
      });
    }
  });
});
