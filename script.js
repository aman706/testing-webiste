// Offset navbar scrolling issue
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Adjust for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  // Simulate success message
  if (name && email && message) {
    status.textContent = "Thank you! We'll get back to you soon.";
    status.style.color = 'green';
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = 'red';
  }
});
