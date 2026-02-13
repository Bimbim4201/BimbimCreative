document.querySelector(".primary").addEventListener("click", () => {
  alert("CV coming soon 🚀");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const githubLink = document.getElementById("githubLink");
const closeModal = document.querySelector(".close-modal");

const demoLink = document.getElementById("demoLink");

document.querySelectorAll(".project-item").forEach(card => {
  const btn = card.querySelector(".view-btn");

  card.addEventListener("click", () => {
    modal.classList.add("active");

    modalImg.src = btn.dataset.img;
    modalTitle.textContent = btn.dataset.title;
    modalDesc.textContent = btn.dataset.desc;
    githubLink.href = btn.dataset.github;

    if (btn.dataset.demo) {
      demoLink.style.display = "inline-block";
      demoLink.href = btn.dataset.demo;
    } else {
      demoLink.style.display = "none";
    }
  });
});



closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});


const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 25; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 10 + Math.random() * 20 + "s";
  p.style.animationDelay = Math.random() * 10 + "s";

  particleContainer.appendChild(p);
}

const glow = document.querySelector(".glow-cursor");

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));




/* Menu MOBILE */

const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


let startY = 0;

modal.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

modal.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (endY - startY > 80) {
    modal.classList.remove("active");
  }
});

document.querySelectorAll(".navbar ul a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});



