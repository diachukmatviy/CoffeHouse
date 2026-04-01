const modal = document.getElementById("bookingModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-button");

if (btn && modal) {
  btn.onclick = function () {
    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.add("show");
    }, 10);

    const scrollBar = window.innerWidth - document.documentElement.clientWidth;
  };
}

document.querySelectorAll("nav a").forEach((link) => {
  link.onclick = function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        window.scrollTo({
          top: targetSection.offsetTop - navHeight,
          behavior: "smooth",
        });
      }
    }
  };
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (backToTopBtn) {
  backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

const scrollElem = document.getElementById("scroll");
if (scrollElem) {
  setInterval(() => {
    scrollElem.scrollLeft += 1;
  }, 20);
}
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.005,
  },
);

elements.forEach((el) => observer.observe(el));
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
