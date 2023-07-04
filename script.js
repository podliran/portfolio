// Add any JavaScript functionality or interactivity to your portfolio website
// Example: smooth scrolling when clicking on navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    for (const link of navLinks) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
  
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
  