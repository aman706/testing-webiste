// Smooth scroll with offset for fixed navbars
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100; // Adjust for top-nav + navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');
  
  if (name && email && message) {
    status.textContent = "Thank you! We'll get back to you soon.";
    status.style.color = "green";
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
  }
});
