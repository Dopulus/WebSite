document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const trackWidth = track.scrollWidth;
    const imageWidth = images[0].getBoundingClientRect().width;

    // Clonare le immagini per creare un effetto di scorrimento continuo
    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollAmount = 0;
    function animate() {
        scrollAmount -= 1;
        if (scrollAmount <= -trackWidth) {
            scrollAmount = 0;
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});