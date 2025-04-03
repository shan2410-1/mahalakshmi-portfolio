// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation menu toggle
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        if (!burger || !nav) return;

        burger.addEventListener('click', () => {
            // Toggle navigation
            nav.classList.toggle('nav-active');
            
            // Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger animation
            burger.classList.toggle('toggle');
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            });
        });
    };

    // Form submission handling
    const handleFormSubmission = () => {
        const form = document.getElementById('contact-form');
        
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name="message"]').value;
            
            // Here you would typically send data to a server
            // For demonstration, we'll just log it
            console.log('Form submitted:', { name, email, message });
            
            // Reset the form
            form.reset();
            
            // Show success message (you could create and style this element in your HTML/CSS)
            alert('Thank you for your message! I will get back to you soon.');
        });
    };

    // Smooth scrolling for anchor links
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
    };

    // Initialize all functions
    navSlide();
    handleFormSubmission();
    smoothScroll();
});