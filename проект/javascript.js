document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.querySelector('#about-btn');

    aboutBtn.addEventListener('click', function() {
        window.location.href = 'about.html';
    });
});