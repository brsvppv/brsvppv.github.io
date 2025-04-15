document.addEventListener('DOMContentLoaded', function () {
    // Initialize particles if particles.js is loaded
    if (window.particlesJS) {
        particlesJS('particles', {
            // Your existing particles configuration
            "particles": {
                // ... keep your existing particles config ...
            },
            "interactivity": {
                // ... keep your existing interactivity config ...
            },
            "retina_detect": true
        });
    }

    // Smooth scrolling for anchor links
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
});