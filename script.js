document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Navbar "Glass" Effect on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '1.5rem 2rem'; // Shrink slightly
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '2rem'; // Return to original size
        }
    });

    // 3. Scroll Reveal Animation (The "Slick" Factor)
    // This looks for any element with class 'reveal' and fades it in
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target specific sections for the reveal effect
    const revealElements = document.querySelectorAll('.card, .hero-content, .section-title, .split-content p, .step, tr');
    
    revealElements.forEach(el => {
        el.classList.add('reveal'); // Add the base class via JS
        observer.observe(el);
    });

    // 4. Auto-Update Copyright Year
    const yearSpan = document.querySelector('.footer-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
});