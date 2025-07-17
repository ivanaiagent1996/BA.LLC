// Mobile nav toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("show");
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-up, .animate-fade, .animate-zoom').forEach(el => {
  observer.observe(el);
});
