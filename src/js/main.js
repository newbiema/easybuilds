// Show/Hide Scroll Up Button based on Scroll Position
window.addEventListener('scroll', function () {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollUpBtn.classList.add('show');
        scrollUpBtn.style.opacity = '1'; // Make button visible
    } else {
        scrollUpBtn.classList.remove('show');
        scrollUpBtn.style.opacity = '0'; // Hide button
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}


// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetID = this.getAttribute('href'); // Get target ID
        const targetElement = document.querySelector(targetID); // Find the target element
        
        if (targetElement) { // Ensure target exists
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
