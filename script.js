// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.section-title, .category-card, .product-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Page navigation functions
function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('makeup-page').classList.remove('active');
    document.getElementById('clothing-page').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMakeup() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('makeup-page').classList.add('active');
    document.getElementById('clothing-page').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animate product cards
    setTimeout(() => {
        const cards = document.querySelectorAll('#makeup-grid .product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

function showClothing() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('makeup-page').classList.remove('active');
    document.getElementById('clothing-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Animate product cards
    setTimeout(() => {
        const cards = document.querySelectorAll('#clothing-grid .product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(255, 182, 193, 0.4)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(255, 182, 193, 0.3)';
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeInUp 1s ease-out';
});