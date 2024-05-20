document.addEventListener('DOMContentLoaded', function () {
    const starField = document.getElementById('stars-container');
    const starCount = 200;
    const lerpFactor = 0.05;
    let stars = [];
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, prevMouseX = 0, prevMouseY = 0;

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

    document.addEventListener('mousemove', function (e) {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function updateStars() {
        stars.forEach(star => {
            let targetVX, targetVY;
            if (mouseX !== prevMouseX || mouseY !== prevMouseY) {
                let angle = Math.atan2(mouseY - prevMouseY, mouseX - prevMouseX) + Math.PI;
                targetVX = Math.cos(angle) * 0.8 + (Math.random() - 0.5) * 0.2;
                targetVY = Math.sin(angle) * 0.8 + (Math.random() - 0.5) * 0.2;
            } else {
                targetVX = (Math.random() - 0.5) * 0.4;
                targetVY = (Math.random() - 0.5) * 0.4;
            }
            star.vx = lerp(star.vx, targetVX, lerpFactor);
            star.vy = lerp(star.vy, targetVY, lerpFactor);
            star.x += star.vx;
            star.y += star.vy;
            if (star.x < 0) star.x = window.innerWidth;
            if (star.x > window.innerWidth) star.x = 0;
            if (star.y < 0) star.y = window.innerHeight;
            if (star.y > window.innerHeight) star.y = 0;
            star.element.style.left = `${star.x}px`;
            star.element.style.top = `${star.y}px`;
        });
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        requestAnimationFrame(updateStars);
    }

    updateStars();
});
