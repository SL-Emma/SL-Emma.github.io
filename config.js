
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, 
            density: {
                enable: true,
                value_area: 800 
            }
        },
        color: {
            value: '#ffffff' 
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.7, 
            random: true
        },
        size: {
            value: 5, 
            random: true 
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'bottom', 
            random: true, 
            straight: false, 
            bounce: false 
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: false 
            },
            onclick: {
                enable: false 
            }
        }
    },
    retina_detect: true
});

