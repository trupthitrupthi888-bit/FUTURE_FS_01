// Portfolio interactions
const modal = document.getElementById('projectsModal');
const contactModal = document.getElementById('contactModal');
const viewWorkBtn = document.getElementById('viewWorkBtn');
const getInTouchBtn = document.getElementById('getInTouchBtn');
const closeBtn = document.querySelector('.close');
const closeContactModal = document.getElementById('closeContactModal');
const contactForm = document.querySelector('.contact-form');

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (modal) {
            modal.style.display = 'block';
        } else {
            scrollToSection('projects');
        }
    });
}

if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (contactModal) {
            contactModal.style.display = 'block';
        } else {
            scrollToSection('contact');
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

if (closeContactModal) {
    closeContactModal.addEventListener('click', function() {
        if (contactModal) {
            contactModal.style.display = 'none';
        }
    });
}

window.addEventListener('click', function(event) {
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
    if (contactModal && event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('input, textarea');
        const formData = {};
        inputs.forEach(input => {
            if (input.value.trim()) {
                formData[input.placeholder] = input.value;
            }
        });

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();

        if (contactModal) {
            contactModal.style.display = 'none';
        }
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const skills = document.querySelector('#skills');
    if (!skills) {
        return;
    }

    const position = skills.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 150) {
        const htmlFill = document.querySelector('.html');
        const cssFill = document.querySelector('.css');
        const jsFill = document.querySelector('.js');
        const reactFill = document.querySelector('.react');

        if (htmlFill) htmlFill.style.width = '95%';
        if (cssFill) cssFill.style.width = '90%';
        if (jsFill) jsFill.style.width = '80%';
        if (reactFill) reactFill.style.width = '75%';
    }
});