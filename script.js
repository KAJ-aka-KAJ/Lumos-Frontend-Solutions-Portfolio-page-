// ===============================
// Mobile Menu Toggle
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===============================
// Smooth Scroll Navigation
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("open"); // close menu after click (mobile)
    }
  });
});

// ===============================
// Scroll Animations (Intersection Observer)
// ===============================
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // trigger once
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));