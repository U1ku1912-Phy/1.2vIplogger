document.addEventListener('DOMContentLoaded', function() {
    let images = [
        'https://i.hizliresim.com/ry895c8.png',  
        'https://i.hizliresim.com/hwhlpa9.jpg',
        'https://i.hizliresim.com/bzug9um.png'
    ];
    let currentIndex = 0;
    setInterval(() => {
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        document.body.style.transition = "background-image 1s ease-in-out";
        currentIndex = (currentIndex + 1) % images.length;
    }, 10000);

    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    function createRainDrop() {
        const rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        document.body.appendChild(rainDrop);
        setTimeout(() => { rainDrop.remove(); }, 2000);
    }
    setInterval(createRainDrop, 100);
});
