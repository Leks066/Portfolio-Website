// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');// Toggle sidebar
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? 'x' : '☰';
});// Close sidebar when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.textContent = '☰';
  });
});

// 2. Typewriter Effect
const textElement = document.getElementById('typewriter');
const phrases = ['Experiences.', 'Solutions.', 'Interfaces.'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
function type() {
  const currentPhrase = phrases[phraseIndex];  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
     typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500; // Pause before new word
  }
    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// 3. Smooth Scrolling for Anchor Links (Backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});const toggle = document.getElementById("theme-toggle");toggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light-mode");  if (document.body.classList.contains("light-mode")) {
    toggle.textContent="☀";
  }else {
    toggle.textContent="🌙";
  }
});if (localStorage.getItem("theme")==="light") {
  document.body.classList.add("light-mode");
}toggle.addEventListener("click", ()=>{
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme","light");
  }else {
    localStorage.setItem("theme","dark");
  }
});
