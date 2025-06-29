document.addEventListener("DOMContentLoaded", function () {
    // Improved card toggle functionality
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        const header = card.querySelector(".card-header");
        header.addEventListener("click", () => {
            // Check if the clicked card is already active
            const isActive = card.classList.contains("active");
            
            // Close all cards first
            cards.forEach(otherCard => {
                otherCard.classList.remove("active");
            });
            
            // If the clicked card wasn't active, open it
            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
    
    // Animation for the about section
    const aboutSection = document.querySelector(".animate-on-load");
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";

    // --- Scroll-Reveal Animation ---

    // 1. Select all the elements you want to animate
    const sectionsToReveal = document.querySelectorAll('section, footer');

    // 2. Set up the Intersection Observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the .is-visible class to trigger the animation
                entry.target.classList.add('is-visible');

                // Stop observing the element so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    // 3. Attach the observer to each section
    sectionsToReveal.forEach(section => {
        section.classList.add('reveal-on-scroll'); // Add the initial hidden state class
        revealObserver.observe(section);
    });

//scroll to top after reload

window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};

});