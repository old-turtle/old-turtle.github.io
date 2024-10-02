const fishElements = document.querySelectorAll('.fish');

function randomPosition(element) {
    const x = Math.random() * (window.innerWidth - 100); // Random x position
    const y = Math.random() * (window.innerHeight - 100); // Random y position
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

function randomAnimationDuration(element) {
    const duration = Math.random() * 4 + 2; // Duration between 2 and 6 seconds
    element.style.animationDuration = `${duration}s`;
}

fishElements.forEach(fish => {
    randomPosition(fish);
    randomAnimationDuration(fish);
    fish.style.animationName = 'swim';
    // Start moving the fish randomly
    setInterval(() => {
        randomPosition(fish);
        randomAnimationDuration(fish);
    }, 12000); // Change position every 12 seconds
});
