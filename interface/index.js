
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navLinks.classList.remove('active');
	});
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 5000);
});