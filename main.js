// Typed.js effect
var typed = new Typed('#element', {
  strings: [
    'I am a passionate B.Tech Computer Science student and aspiring web developer.',
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Section Toggle Script
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

// Show Home by default
document.getElementById('home').classList.add('active');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active', 'fade-in'));

    // Show clicked section
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active', 'fade-in');

    // Update navbar active state
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

