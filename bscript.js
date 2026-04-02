// Wait for the webpage to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Find both buttons and the elements we need to animate
    const buttons = document.querySelectorAll('.bankai-trigger');
    const slash = document.getElementById('slash-line');
    const topHalf = document.getElementById('top-half');
    const bottomHalf = document.getElementById('bottom-half');

    // The main function that runs when the button is clicked
    function triggerBankai() {
        // 1. Play the glowing slash animation
        slash.classList.add('slash-active');
        
        // 2. Shake both halves of the screen
        topHalf.classList.add('shake');
        bottomHalf.classList.add('shake');

        // 3. Wait exactly 300 milliseconds (the time the slash takes), then break the page
        setTimeout(() => {
            // Stop the shaking
            topHalf.classList.remove('shake');
            bottomHalf.classList.remove('shake');
            
            // Add the shatter classes to slide them apart and fade out
            topHalf.classList.add('shatter-top');
            bottomHalf.classList.add('shatter-bottom');
        }, 300);
    }

    // Attach the click event to the buttons
    buttons.forEach(button => {
        button.addEventListener('click', triggerBankai);
    });

});