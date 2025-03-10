// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with subtle settings
    AOS.init({
        once: true,
        mirror: false,
        offset: 50,
        duration: 800,
        easing: 'ease-out'
    });

    // Initialize Typed.js for typing effect
    const typedElement = document.querySelector('.typing-text');
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
                'Software Engineer',
                'Full Stack Developer',
                'Frontend Specialist',
                'Rust Enthusiast'
            ],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 2000,
            loop: true,
            showCursor: true,
        });
    }

    // Initialize Particles.js with reduced intensity - dark mode
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 20, density: { enable: true, value_area: 800 } },
                color: { value: '#3384ff' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4a5568',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Subtle parallax effect for hero section
    const parallaxContainer = document.querySelector('.parallax-container');
    if (parallaxContainer) {
        window.addEventListener('mousemove', function(e) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
            parallaxContainer.style.transform = `translateX(${xAxis * 0.02}px) translateY(${yAxis * 0.02}px)`;
        });
    }

    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (windowScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }
});

// Media query for mobile devices - simplify animations
function updateAnimationsForScreenSize() {
    const mobileBreakpoint = 768;
    
    if (window.innerWidth < mobileBreakpoint) {
        // Simplify animations on mobile
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.setAttribute('data-aos', 'fade-up');
            element.setAttribute('data-aos-duration', '600');
        });
        
        // Disable parallax on mobile
        const parallaxContainer = document.querySelector('.parallax-container');
        if (parallaxContainer) {
            parallaxContainer.style.transform = 'none';
        }
    }
}

// Run once on load and then on resize
window.addEventListener('load', updateAnimationsForScreenSize);
window.addEventListener('resize', updateAnimationsForScreenSize);

// Flying arrows animation - subtle
const arrows = document.querySelectorAll('.flying-arrow');
arrows.forEach(arrow => {
  const randomDelay = Math.random() * 2;
  arrow.style.animationDelay = `${randomDelay}s`;
});

// Floating elements
const floatingElements = document.querySelectorAll('.floating');
floatingElements.forEach((element, index) => {
  element.style.animation = `float ${4 + index * 0.5}s ease-in-out infinite`;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Create CSS keyframes for floating animations
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    @keyframes arrowFly {
      0% { transform: translateX(0) translateY(0); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(40px) translateY(-40px); opacity: 0; }
    }
    .flying-arrow {
      animation: arrowFly 3s ease-in-out infinite;
    }
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(to right, #14b8a6, #2563eb);
      transition: width 0.3s;
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);
})(); 