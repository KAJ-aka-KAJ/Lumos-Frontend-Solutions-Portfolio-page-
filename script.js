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
      nav.classList.remove("open"); // close menu on mobile after click
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
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// ===============================
// Back to Top Button
// ===============================
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// Skill Counters Animation
// ===============================
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.textContent = Math.ceil(count) + "%";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "%";
      }
    };

    updateCounter();
  });
}

const skillsSection = document.getElementById("skills");

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      animateCounters();
      countersStarted = true;
    }
  });
}, { threshold: 0.4 });

skillsObserver.observe(skillsSection);