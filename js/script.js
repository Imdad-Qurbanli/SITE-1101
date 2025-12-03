// ==========================================
// HAMBURGER MENU TOGGLE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = (hamburger && hamburger.contains(event.target)) || 
                            (navMenu && navMenu.contains(event.target));
        
        if (!isClickInside && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ==========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ==========================================

    updateActiveNavLink();
    window.addEventListener('hashchange', updateActiveNavLink);

    function updateActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // ==========================================
    // SMOOTH SCROLL BEHAVIOR
    // ==========================================

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

    // ==========================================
    // SCROLL TO TOP BUTTON (Optional)
    // ==========================================

    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTopBtn';
    scrollButton.innerHTML = '&#10148;';
    scrollButton.title = 'Scroll to top';
    document.body.appendChild(scrollButton);

    // Style the button with JavaScript
    const style = document.createElement('style');
    style.textContent = `
        #scrollToTopBtn {
            display: none;
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: var(--primary-color, #0066cc);
            color: white;
            border: none;
            padding: 15px 18px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            z-index: 999;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        #scrollToTopBtn:hover {
            background-color: #0052a3;
            transform: translateY(-5px);
        }

        @media (max-width: 480px) {
            #scrollToTopBtn {
                bottom: 20px;
                right: 20px;
                padding: 12px 15px;
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);

    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        const scrollButton = document.getElementById('scrollToTopBtn');
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .project-card,
        .project-card-large,
        .skill-category,
        .timeline-item,
        .timeline-item-resume {
            opacity: 0;
        }
    `;
    document.head.appendChild(animationStyle);

    // Observe elements
    document.querySelectorAll('.project-card, .project-card-large, .skill-category, .timeline-item, .timeline-item-resume').forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // FORM VALIDATION (if needed in future)
    // ==========================================

    // Prevent form submission if exists
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    });
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Get current page name
function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

// Add class to element
function addClass(element, className) {
    element.classList.add(className);
}

// Remove class from element
function removeClass(element, className) {
    element.classList.remove(className);
}

// Toggle class on element
function toggleClass(element, className) {
    element.classList.toggle(className);
}
