document.addEventListener('DOMContentLoaded', function () {
    const starField = document.getElementById('stars-container');
    const starCount = 200;
    let stars = [];

    // Function to create stars and add them to the DOM
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        starField.appendChild(star);
        stars.push({
            element: star,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
        });
    }

    // Function to update star positions
    function updateStars() {
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;

            // Wrap around the screen
            if (star.x < 0) star.x = window.innerWidth;
            if (star.x > window.innerWidth) star.x = 0;
            if (star.y < 0) star.y = window.innerHeight;
            if (star.y > window.innerHeight) star.y = 0;

            star.element.style.left = `${star.x}px`;
            star.element.style.top = `${star.y}px`;
        });
        requestAnimationFrame(updateStars);
    }

    updateStars();
});
