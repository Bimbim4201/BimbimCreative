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

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = btn.dataset.img;
    modalTitle.textContent = btn.dataset.title;
    modalDesc.textContent = btn.dataset.desc;
    githubLink.href = btn.dataset.github;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});


const demoLink = document.getElementById("demoLink");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
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

