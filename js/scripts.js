// Debugging initialization
console.log("Script loaded successfully");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize particles if available
    if (typeof particlesJS === 'function') {
        console.log("Initializing particlesJS");
        particlesJS('particles', {
            // Your particles config here
        });
    } else {
        console.warn("particlesJS not available");
    }
});