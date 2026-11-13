
/* It is still not acting like a carousel*/
const slider = document.querySelector('.personal_projects');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const counter = document.getElementById('slide-counter');
const slides = [...slider.querySelectorAll('.personal_projects_entry')];
let currentSlide = 0;

function updateCounter() {
  currentSlide = Math.round(slider.scrollLeft / slider.clientWidth);
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slider.scrollTo({
    left: currentSlide * slider.clientWidth,
    behavior: 'smooth',
  });
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
slider.addEventListener('scroll', updateCounter, { passive: true });

counter.textContent = `1 / ${slides.length}`;


