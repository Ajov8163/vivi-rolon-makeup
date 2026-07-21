/* ==========================================
   JAVASCRIPT - FUNCIONALIDADES PRINCIPAL
   ========================================== */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenuHamburguesa();
    // inicializarCarruselTestimonios();
    actualizarHeaderHeight();
});

/**
 * Menú hamburguesa (móvil)
 */
function inicializarMenuHamburguesa() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (!hamburger || !navbar) {
        return;
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navbar.classList.toggle('open');
        hamburger.classList.toggle('is-active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('open');
            hamburger.classList.remove('is-active');
        });
    });

    document.addEventListener('click', function(event) {
        const clicDentroDelMenu = navbar.contains(event.target);
        const clicEnHamburger = hamburger.contains(event.target);

        if (!clicDentroDelMenu && !clicEnHamburger && navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            hamburger.classList.remove('is-active');
        }
    });
}

/**
 * Carrusel de testimonios con paginación
 */
function inicializarCarruselTestimonios() {
    const testimoniosGrid = document.getElementById('testimoniosGrid');
    const paginationDots = document.querySelectorAll('.pagination-dot');

    if (!testimoniosGrid || paginationDots.length === 0) {
        return;
    }

    const cards = testimoniosGrid.querySelectorAll('.testimonio-card');
    let currentIndex = 0;

    function esMobil() {
        return window.innerWidth <= 768;
    }

    function irAlSlide(index) {
        if (!esMobil()) return;

        currentIndex = index;
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(testimoniosGrid).gap);
        const offset = index * cardWidth;

        testimoniosGrid.scrollTo({
            left: offset,
            behavior: 'smooth'
        });

        paginationDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            irAlSlide(index);
        });
    });

    if (esMobil()) {
        testimoniosGrid.addEventListener('scroll', () => {
            const scrollPosition = testimoniosGrid.scrollLeft;
            const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(testimoniosGrid).gap);
            const newIndex = Math.round(scrollPosition / cardWidth);

            if (newIndex !== currentIndex && newIndex < cards.length) {
                currentIndex = newIndex;
                paginationDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === newIndex);
                });
            }
        });
    }
}

/**
 * Actualiza la variable CSS `--header-height` con la altura actual del header.
 * Llamar en load y resize para mantener el `scroll-padding-top` correcto.
 */
function actualizarHeaderHeight() {
    var header = document.querySelector('.header');
    if (!header) return;
    var h = header.offsetHeight + 'px';
    document.documentElement.style.setProperty('--header-height', h);
}

// Actualizar al redimensionar y al cambiar orientación
window.addEventListener('resize', function() {
    actualizarHeaderHeight();
});
window.addEventListener('orientationchange', function() {
    actualizarHeaderHeight();
});

