// --- Hamburger Menu Toggle ---
// Select the menu icon and the navigation bar
let menuIcon = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

// Add a click event listener to the menu icon
menuIcon.onclick = () => {
    // Toggle the 'fa-xmark' class to change the icon from bars to an 'X'
    menuIcon.classList.toggle('fa-xmark');
    // Toggle the 'active' class on the navbar to show/hide it
    navBar.classList.toggle('active');
};

// --- Active Link Highlighting and Sticky Header on Scroll ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // --- Active link scrollspy ---
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // --- Sticky Header ---
    let header = document.querySelector('header');
    // Add 'sticky' class to header when scroll is more than 100px, otherwise remove it
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Close menu when scrolling ---
    // Remove the 'active' and 'fa-xmark' classes to close the mobile menu when the user scrolls
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};

// --- ScrollReveal.js Initialization ---
// Initialize ScrollReveal with default settings
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true // Animations repeat on scroll up
});

// Define animations for different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// --- Typed.js Initialization ---
// Initialize Typed.js for the "multiple-text" span
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// IMPORTANT: The custom JavaScript for handling form submission (using fetch)
// has been REMOVED from this file. The form now submits directly via HTML
// to Formspree using the 'action' and 'method' attributes on the form tag.