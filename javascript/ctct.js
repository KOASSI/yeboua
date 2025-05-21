// Gestion du menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Animation du formulaire
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
        label.style.top = '0';
        label.style.fontSize = '12px';
        label.style.color = '#3498db';
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.style.top = '50%';
            label.style.fontSize = '16px';
            label.style.color = '#777';
        }
    });
});