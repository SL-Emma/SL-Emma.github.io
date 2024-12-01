let snowActive = false;

        // init snow effect
        function startSnow() {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 100, // # of snowflakes
                        density: {
                            enable: true,
                            value_area: 800 // density
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'image', // custom image
                        image: {
                            src: 'images/asterik.png', 
                            width: 20,  
                            height: 20  
                        }
                    },
                    opacity: {
                        value: 0.7, // slight transparency
                        random: true
                    },
                    size: {
                        value: 9, 
                        random: true
                    },
                    move: {
                        enable: true,
                        speed: 2, // Speed
                        direction: 'bottom',
                        random: true,
                        straight: false,
                        bounce: false 
                    },
                    line_linked: {
                        enable: false
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
            snowActive = true;
        }

        function stopSnow() {
            const particlesContainer = document.getElementById('particles-js');
            particlesContainer.innerHTML = ''; 
            snowActive = false;
        }

        // event listener for the toggle button
        document.getElementById('toggle-snow').addEventListener('click', function () {
            if (snowActive) {
                stopSnow(); 
                this.textContent = 'Turn Snow On'; 
            } else {
                startSnow(); 
                this.textContent = 'Turn Snow Off';
            }
        });