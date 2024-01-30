const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 125; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    if (Math.random() > 0.5) { star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`; }
    starsContainer.appendChild(star);
}
