// ===== Ano atual no rodapé =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Menu mobile =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

// ===== Reveal ao rolar =====
const revealEls = document.querySelectorAll(
    ".about, .card, .member, .contact, .section__head"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ===== Contador animado nas estatísticas =====
const stats = document.querySelectorAll(".stat__num");
let countersStarted = false;

function animateCounter(el) {
    const target = Number(el.dataset.target);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                stats.forEach(animateCounter);
            }
        });
    }, { threshold: 0.4 }
);
if (stats.length) statsObserver.observe(stats[0]);

// ===== Header com sombra ao rolar =====
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 8px 30px rgba(0,0,0,.35)" : "none";
});