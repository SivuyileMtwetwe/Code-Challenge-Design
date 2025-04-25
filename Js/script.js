document.addEventListener('DOMContentLoaded', function() {
    // Images and messages for slider
    const images = [
        'Assets/2-e1733732415237.png',
        'Assets/office.png',
        'Assets/kidArt.jpg'
    ];

    const messages = [
        'WE CAN AND WE WILL',
        "WE LEAVE NO STONE UNTURNED",
        "LOOKING BEYOND THE ORDINARY FOR 21 YEARS"
    
    ];

    let currentIndex = 0;
    const heroImage = document.getElementById('heroImage');
    const overlayText = document.getElementById('overlayText');
    const dots = document.querySelectorAll('.dot');
    const nextSlide = document.getElementById('nextSlide');
    
    // Function to update slider
    function updateSlider() {
        overlayText.classList.remove('active');

        setTimeout(() => {
            heroImage.src = images[currentIndex];
            overlayText.textContent = messages[currentIndex];
            overlayText.classList.add('active');

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }, 300);
    }

    // Initialize slider
    overlayText.classList.add('active');

    // Event listeners for navigation
    nextSlide.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateSlider();
        });
    });

    // Menu toggle
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    let isOpen = false;

    menuIcon.addEventListener('click', () => {
        isOpen = !isOpen;
        navLinks.classList.toggle('show');
        
        if (isOpen) {
            menuIcon.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            menuIcon.querySelector('span:nth-child(2)').style.opacity = '0';
            menuIcon.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            menuIcon.querySelector('span:nth-child(1)').style.transform = 'none';
            menuIcon.querySelector('span:nth-child(2)').style.opacity = '1';
            menuIcon.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });

    // Header expansion on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 150) {
            header.classList.add('expanded');
        } else {
            header.classList.remove('expanded');
        }
    });
});