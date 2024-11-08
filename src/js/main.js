
    // Show/Hide Scroll Up Button based on Scroll Position
    window.addEventListener('scroll', function () {
        const scrollUpBtn = document.getElementById('scrollUpBtn');
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    // Scroll to Top Function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

