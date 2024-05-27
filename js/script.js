document.addEventListener('DOMContentLoaded', function() {
    // Toggle Navigation Menu for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Modal for Match Details
    const matchCards = document.querySelectorAll('.match-card');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalContent = document.querySelector('.modal-content');

    matchCards.forEach(card => {
        card.addEventListener('click', function() {
            const matchInfo = this.querySelector('.match-info').innerHTML;
            modalContent.innerHTML = matchInfo;
            modal.classList.add('show');
        });
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Form Validation for Contact Us
    const contactForm = document.querySelector('#contact-form');
    const formMessage = document.querySelector('.form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.add('error');
        } else {
            formMessage.textContent = 'Thank you for your message. We will get back to you shortly.';
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            contactForm.reset();
        }
    });
});

