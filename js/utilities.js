window.onload = function() {
ScrollReveal().reveal('.site',{ delay: 500,});
};



/*how do i keep the toggle saved throughout page navigation*/
const themeStorageKey = 'theme';
const savedTheme = localStorage.getItem(themeStorageKey);
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
    const updateToggleButton = function() {
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌑';
    };

    updateToggleButton();
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem(
            themeStorageKey,
            document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
        updateToggleButton();
    });
}

/*end ai output*/