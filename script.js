
// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .hero .btn').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Welcome message
window.addEventListener('load', () => {
  console.log('Welcome to TechLearn Training Institute!');
});
