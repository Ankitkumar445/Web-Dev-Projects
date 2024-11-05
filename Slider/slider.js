let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Show the first slide
slides[currentSlide].classList.add('active');

document.getElementById('nextBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    slides[currentSlide].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    slides[currentSlide].classList.add('active');
});
