// ================= SCROLL REVEAL =================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.10 });

revealElements.forEach(el => observer.observe(el));


// ================= LOADER =================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");

    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 1000); // milliseconds bud
});


// ================= HAMBURGER NAV =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");


// ================= MODALS (Open / Close Logic) =================

// OPEN MODAL FUNCTION
function openModal(modal) {
    if (!modal) return;

    modal.classList.add("active");
    document.body.classList.add("modal-open");

    // Close hamburger menu if open
    if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}

// CLOSE MODAL FUNCTION
function closeModal(modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}


// ================= MODAL TRIGGERS =================
document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = document.getElementById(btn.dataset.modal + 'Modal');
        openModal(modal);
    });
});


// ================= MODAL CLOSE EVENTS =================

// Close via "X" button
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener("click", () => {
        closeModal(btn.closest('.modal'));
    });
});

// Close by clicking outside modal
window.addEventListener("click", (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            closeModal(modal);
        });
    }
});


// ================= HAMBURGER MENU =================

// Toggle open/close
hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
    });
});