// Get all the slides into a list
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

// Listen for clicks anywhere on the webpage
document.body.addEventListener('click', function(event) {
    // Prevent the click from triggering if she is trying to click the final "Read Again" button
    if (event.target.tagName.toLowerCase() === 'button') {
        return; 
    }

    // Hide the instruction text after her first click
    if (currentSlideIndex === 0) {
        document.getElementById('instruction').style.opacity = '0';
    }

    // Check if we haven't reached the last slide yet
    if (currentSlideIndex < slides.length - 1) {
        
        // Remove the 'active' class from the current slide to fade it out
        slides[currentSlideIndex].classList.remove('active');
        
        // Move to the next slide
        currentSlideIndex++;
        
        // Add the 'active' class to the new slide to fade it in
        slides[currentSlideIndex].classList.add('active');
    }
});