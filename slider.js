document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth; // Assuming all slides have equal width
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const offset = (currentIndex * slideWidth) * -1;
        slider.style.transform = `translateX(${offset}px)`;

        const currentSlide = slides[currentIndex];
        const textElement = currentSlide.querySelector('.slide-text');
        textElement.style.opacity = 1;
        textElement.style.transform = 'translateY(0px)';

        // Fade out text of previous slide after delay
        if (currentIndex > 0) {
            const previousSlide = slides[currentIndex - 1];
            const previousText = previousSlide.querySelector('.slide-text');
            setTimeout(() => {
                previousText.style.opacity = 0;
            }, 200); // Adjust delay for text animation timing
        }
    }

    // Change slide every 5 seconds 
    setInterval(nextSlide, 5000);

    // Restart slider on load or re-initialization
    currentIndex = 0;
    updateSlider();
});
