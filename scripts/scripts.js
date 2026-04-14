function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-collapsed');
}

function toggleSubmenu(button) {
    const container = button.closest('.submenu-container') || button.parentElement;
    if (container) {
        container.classList.toggle('submenu-active');
    }
}

/* Script Hero Carousel */
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    let interval;

    function updateCarousel(index) {
        // 1. Manejar Slides (Opacidad)
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.replace('opacity-0', 'opacity-100');
            } else {
                item.classList.replace('opacity-100', 'opacity-0');
            }
        });

        // 2. Manejar Indicadores (Brillo/Color)
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.replace('bg-white/40', 'bg-white');
            } else {
                indicator.classList.replace('bg-white', 'bg-white/40');
            }
        });

        currentIndex = index;
    }

    const nextSlide = () => {
        let index = (currentIndex + 1) % items.length;
        updateCarousel(index);
    };

    const prevSlide = () => {
        let index = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(index);
    };

    // Iniciar auto-play (6 segundos como en tu original)
    const startAutoPlay = () => interval = setInterval(nextSlide, 6000);
    const stopAutoPlay = () => clearInterval(interval);

    // Eventos
    nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
    prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });

    // Click en indicadores
    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => {
            stopAutoPlay();
            updateCarousel(i);
            startAutoPlay();
        });
    });

    startAutoPlay();
});