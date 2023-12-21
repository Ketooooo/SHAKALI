document.addEventListener('DOMContentLoaded', function() {
    const imageScroll = document.querySelector('.image-scroll');
    let isScrolling;

    imageScroll.addEventListener('wheel', function(event) {
        event.preventDefault(); // Prevent the default vertical scrolling behavior

        const scrollAmount = 200; // Adjust scroll speed
        const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

        imageScroll.scrollLeft -= delta * scrollAmount;
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            smoothScroll(imageScroll);
        }, 100);
    });

    function smoothScroll(element) {
        element.style.scrollBehavior = 'smooth';
        setTimeout(() => {
            element.style.scrollBehavior = 'unset';
        }, 300);
    }
});

// Assuming imageInfo is an array of objects containing color information
const imageInfo = [
    { color: '#8a338a' }, // Example color values
    { color: '#34568b' },
    { color: '#7d9ccf' },
    { color: '#070b13' },
    { color: '#338a8a' },
    { color: '#5e5e5e' }
    // Add more color objects as needed
];

const images = document.querySelectorAll('.image-scroll img');

images.forEach((image, index) => {
    image.addEventListener('mouseenter', function() {
        // Generate random index for color from imageInfo array
        const randomIndex = Math.floor(Math.random() * imageInfo.length);
        const selectedColor = imageInfo[randomIndex].color;

        // Change body background color with a fade effect
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.backgroundColor = selectedColor;
    });

    image.addEventListener('mouseleave', function() {
        // Reset body background color on mouse leave
        document.body.style.backgroundColor = '';
    });
});

