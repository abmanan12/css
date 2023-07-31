// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const navLinks = document.querySelector('.nav-links');
  
    toggleBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  