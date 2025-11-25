// script.js
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-out'
});

// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️ Toggle Light Mode';
}

toggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggle.textContent = '🌙 Toggle Dark Mode';
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '☀️ Toggle Light Mode';
  }
});