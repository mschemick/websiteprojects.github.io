// Slider functionality //

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-Slide Every 5 seconds //

setInterval(nextSlide, 5000);

// Team member interactivity

const teamMembers = document.querySelectorAll('.meet-the-team .team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.transform = 'scale(1.05)'; 
        member.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    member.addEventListener('mouseleave', () =>{
        member.style.transform = 'scale(1)';
        member.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Animation script //

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});