// Function to handle smooth scrolling when navigation links are clicked
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags that start with '#' (internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump behavior
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    console.log("Aaruvio Website Scripts Loaded.");
});

// You can add more JavaScript here later for:
// - Image Lightbox/Modal for the gallery
// - Simple form validation (if you add a form)