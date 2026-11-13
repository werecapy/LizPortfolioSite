window.onload = function() {
ScrollReveal().reveal('.site',{ delay: 500,});
};

const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌑';
    }
});