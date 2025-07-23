// Animate skill bars when in view
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = value + '%';
    });
}
// Fade-in animation for sections
function revealOnScroll() {
    const fadeUps = document.querySelectorAll('.fade-in-up');
    const fadeIns = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    fadeUps.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.style.opacity = 1;
            el.style.animationPlayState = 'running';
        }
    });
    fadeIns.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.style.opacity = 1;
            el.style.animationPlayState = 'running';
        }
    });
}
// Simple scroll event to trigger animation
window.addEventListener('scroll', revealOnScroll);
// Animate on load if already in view
window.addEventListener('DOMContentLoaded', () => {
    // Animate hero text and image
    const heroText = document.querySelector('.hero-text');
    const heroImg = document.querySelector('.hero-image');
    if (heroText) {
        heroText.classList.add('fade-in-up');
        heroText.style.animationDelay = '0.2s';
        heroText.style.animationPlayState = 'running';
    }
    if (heroImg) {
        heroImg.classList.add('fade-in');
        heroImg.style.animationDelay = '0.5s';
        heroImg.style.animationPlayState = 'running';
    }
    // Animate about section
    const about = document.querySelector('.about-content');
    if (about) {
        about.classList.add('fade-in-up');
        about.style.animationDelay = '0.4s';
        about.style.animationPlayState = 'paused';
    }
    // Animate journey, skills, contact
    const journey = document.querySelector('.journey');
    if (journey) {
        journey.classList.add('fade-in-up');
        journey.style.animationDelay = '0.6s';
        journey.style.animationPlayState = 'paused';
    }
    const skills = document.querySelector('.skills');
    if (skills) {
        skills.classList.add('fade-in-up');
        skills.style.animationDelay = '0.8s';
        skills.style.animationPlayState = 'paused';
    }
    const contact = document.querySelector('.contact');
    if (contact) {
        contact.classList.add('fade-in-up');
        contact.style.animationDelay = '1s';
        contact.style.animationPlayState = 'paused';
    }
    revealOnScroll();
    // Existing skills animation
    const skillsSection = document.querySelector('.skills');
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        animateSkills();
    }
});
// Contact form validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
}
// Animate skill bars on scroll
function animateSkillBars() {
    const bars = document.querySelectorAll('.progress.animate-on-scroll');
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
            bar.classList.add('animated');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Smooth scroll for anchor links (with header offset)
const header = document.querySelector('header');
const headerHeight = header ? header.offsetHeight : 80;
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offset = rect.top + scrollTop - headerHeight + 2; // +2 for small gap
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
}
// Highlight active nav link on scroll (improved logic)
function setActiveNav() {
    let closestIndex = 0;
    let minDist = Infinity;
    const scrollPos = window.scrollY + 120; // Offset for sticky header
    sections.forEach((section, i) => {
        if (section) {
            const dist = Math.abs(section.offsetTop - scrollPos);
            if (section.offsetTop - 120 <= window.scrollY && dist < minDist) {
                minDist = dist;
                closestIndex = i;
            }
        }
    });
    navLinks.forEach((link, i) => {
        if (i === closestIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', setActiveNav);
window.addEventListener('DOMContentLoaded', setActiveNav);

// Mobile nav hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
        const isOpen = mainNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a nav link is clicked (on mobile)
    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                mainNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';
});

// Section fade/slide-in animation
function animateSections() {
    document.querySelectorAll('[data-animate]').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.classList.add('animated');
        }
    });
}
window.addEventListener('scroll', animateSections);
window.addEventListener('DOMContentLoaded', animateSections);

// Animated nav underline
function updateNavUnderline() {
    const underline = document.querySelector('.nav-underline');
    const active = document.querySelector('.nav-link.active');
    if (underline && active) {
        const rect = active.getBoundingClientRect();
        const navRect = active.closest('nav').getBoundingClientRect();
        underline.style.width = rect.width + 'px';
        underline.style.left = (rect.left - navRect.left) + 'px';
        underline.style.opacity = 1;
    }
}
window.addEventListener('scroll', updateNavUnderline);
window.addEventListener('resize', updateNavUnderline);
window.addEventListener('DOMContentLoaded', updateNavUnderline);

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');
let testimonialIndex = 0;
function showTestimonial(idx) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === idx);
    });
}
if (prevBtn && nextBtn && testimonials.length) {
    prevBtn.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
    nextBtn.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
    showTestimonial(testimonialIndex);
}

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle && darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Custom contact form handler for async Formspree submission
async function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const formData = {
        name: form.elements['name'].value.trim(),
        email: form.elements['email'].value.trim(),
        message: form.elements['message'].value.trim()
    };
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields. All fields are required to submit the form.');
        return false;
    }
    // Optionally, disable the submit button here
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    try {
        const response = await fetch('https://formspree.io/f/movlevdd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Thank you! Your message has been sent.');
            form.reset();
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    } catch (error) {
        alert('There was an error sending your message. Please try again later.');
    }
    if (submitBtn) submitBtn.disabled = false;
    return false;
} 