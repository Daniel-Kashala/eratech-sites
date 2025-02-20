document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel-container');
    let index = 0;

    // Toggle menu mobile
    hamburger.addEventListener('click', () => {
        const isActive = menu.classList.contains('active');
        menu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', !isActive);
    });

    // Navigation du carrousel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % 4;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + 4) % 4;
        updateCarousel();
    });

    // Carrousel automatique
    setInterval(() => {
        index = (index + 1) % 4;
        updateCarousel();
    }, 3000);
});
