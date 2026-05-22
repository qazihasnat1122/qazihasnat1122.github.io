// ========================
// PORTFOLIO JAVASCRIPT
// ========================

// ========================
// TYPING EFFECT
// ========================

const typingText = document.querySelector('.typing-text');
const roles = [
    'Aspiring AI Developer',
    'Software Engineering Student',
    'Future AI Agent Engineer',
    'Full Stack Developer',
    'Tech Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 30;
const delayBetweenRoles = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        } else {
            setTimeout(typeRole, deletingSpeed);
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, delayBetweenRoles);
        } else {
            setTimeout(typeRole, typingSpeed);
        }
    }
}

typeRole();

// ========================
// NAVIGATION
// ========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ========================
// SCROLL EFFECTS
// ========================

window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Update active nav link
    updateActiveNavLink();

    // Trigger scroll animations
    triggerScrollAnimations();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ========================
// SCROLL ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.about-text, .skill-item, .project-card, .education-card, .experience-card, .stat-card'
    );

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(element);
    });
}

function triggerScrollAnimations() {
    // Animate skill progress bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const progress = bar.querySelector('.skill-progress');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight && !progress.dataset.animated) {
            progress.dataset.animated = 'true';
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        }
    });
}

setupScrollAnimations();

// ========================
// BACK TO TOP
// ========================

const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================
// PROJECT FILTERING
// ========================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const cardTech = card.getAttribute('data-tech');

            if (filter === 'all' || cardTech === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================
// CONTACT FORM
// ========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:qazihasnat11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();
});

// ========================
// SMOOTH SCROLL BEHAVIOR
// ========================

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

// ========================
// PAGE LOAD ANIMATION
// ========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ========================
// INTERSECTION OBSERVER FOR LAZY ANIMATIONS
// ========================

const observerConfig = {
    threshold: 0.2,
    rootMargin: '0px'
};

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerConfig);

document.querySelectorAll('.project-card, .skill-item, .stat-card').forEach(el => {
    elementObserver.observe(el);
});

// ========================
// LIGHT CURSOR EFFECT (OPTIONAL)
// ========================

const cursorFollower = document.createElement('div');
cursorFollower.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(99, 102, 241, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
`;
document.body.appendChild(cursorFollower);

// Show custom cursor on hover interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.display = 'block';
    });
    el.addEventListener('mouseleave', () => {
        cursorFollower.style.display = 'none';
    });
});

document.addEventListener('mousemove', (e) => {
    if (cursorFollower.style.display === 'block') {
        cursorFollower.style.left = e.clientX - 10 + 'px';
        cursorFollower.style.top = e.clientY - 10 + 'px';
    }
});

// ========================
// PERFORMANCE OPTIMIZATION
// ========================

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================
// INITIALIZATION
// ========================

console.log('Portfolio loaded successfully! ✨');
