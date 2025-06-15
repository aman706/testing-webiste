// Smooth scroll for nav
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const section = document.querySelector(targetID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
