
const modal = document.getElementById("bookingModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-button");


if (btn && modal) {
    btn.onclick = function() {
        modal.style.display = "flex"; 
        
        
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
        
        document.body.style.overflow = "hidden";
    };
}


function closeModal() {
    if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 400); 
    }
}

if (closeBtn) closeBtn.onclick = closeModal;


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});


document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        }
    };
});


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event){
        event.preventDefault();
        document.getElementById('formMessage').textContent = "Дякуємо! Ми з вами зв'яжемося.";
        this.reset();
    });
}


const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (backToTopBtn) {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

if (backToTopBtn) {
    backToTopBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
}


const scrollElem = document.getElementById("scroll");
if (scrollElem) {
    setInterval(() => {
        scrollElem.scrollLeft += 1;
    }, 20);
}