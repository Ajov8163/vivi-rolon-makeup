/* ==========================================
   JAVASCRIPT - FUNCIONALIDADES PRINCIPAL
   ========================================== */

/**
 * Archivo principal de JavaScript
 * Preparado para integración de funcionalidades interactivas
 * - Manejo de navegación
 * - Efectos de desplazamiento
 * - Animaciones
 * - Integración con formularios
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    // Inicializar funcionalidades interactivas
    inicializarMenuHamburguesa();
    inicializarCarruselTestimonios();
    // inicializarNavegacion();
    // inicializarFormularios();
    // inicializarAnimaciones();
    // Actualizar la variable CSS --header-height para evitar que anclas queden ocultas
    actualizarHeaderHeight();
});

/**
 * FUNCIONALIDAD 1: Navegación suave
 * Esta función permitirá desplazamiento suave al hacer click en links
 */
function inicializarNavegacion() {
    // Los links ya tienen href con ID de secciones
    // Esta función puede ser utilizada después si es necesario agregar efectos adicionales
    console.log('Navegación inicializada');
}

/**
 * FUNCIONALIDAD 2: Formulario de reserva
 * Esta función manejará la validación y envío del formulario
 */
function inicializarFormularios() {
    // Se agregará lógica para validar y enviar formularios
    console.log('Formularios inicializados');
}

/**
 * FUNCIONALIDAD 3: Animaciones de desplazamiento
 * Esta función agregará animaciones cuando los elementos estén en vista
 */
function inicializarAnimaciones() {
    // Se agregará lógica para animaciones on-scroll
    console.log('Animaciones inicializadas');
}

/**
 * FUNCIONALIDAD 4: Menú hamburguesa (móvil)
 * Esta función manejará el menú responsivo en dispositivos móviles
 */
function inicializarMenuHamburguesa() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (!hamburger || !navbar) {
        console.log('No se encontró el menú hamburguesa o la barra de navegación');
        return;
    }

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('is-active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('open');
            hamburger.classList.remove('is-active');
        });
    });

    console.log('Menú hamburguesa inicializado');
}

/**
 * FUNCIONALIDAD: Carrusel de testimonios con paginación
 * En móvil, el carrusel es horizontal scrollable con paginación
 */
function inicializarCarruselTestimonios() {
    const testimoniosGrid = document.getElementById('testimoniosGrid');
    const paginationDots = document.querySelectorAll('.pagination-dot');

    if (!testimoniosGrid || paginationDots.length === 0) {
        return;
    }

    const cards = testimoniosGrid.querySelectorAll('.testimonio-card');
    let currentIndex = 0;

    // Función para verificar si estamos en móvil
    function esMobil() {
        return window.innerWidth <= 768;
    }

    // Función para ir a un slide específico
    function irAlSlide(index) {
        if (!esMobil()) return;

        currentIndex = index;
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(testimoniosGrid).gap);
        const offset = index * cardWidth;
        testimoniosGrid.scrollTo({
            left: offset,
            behavior: 'smooth'
        });

        // Actualizar puntos
        paginationDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Event listeners para los puntos de paginación
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            irAlSlide(index);
        });
    });

    // Actualizar paginación al hacer scroll
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

    console.log('Carrusel de testimonios inicializado');
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

/**
 * FUNCIONALIDAD 5: Galería de imágenes
 * Esta función agregará funcionalidad a la galería
 */
function inicializarGaleria() {
    // Se agregará lógica para lightbox o carousel de imágenes
    console.log('Galería inicializada');
}

/**
 * FUNCIONALIDAD 6: Efectos de hover y eventos
 * Esta función agregará interactividad adicional
 */
function inicializarEfectos() {
    // Se agregarán efectos interactivos
    console.log('Efectos inicializados');
}

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

/**
 * Utilidad: Log personalizado para debugging
 */
function log(mensaje, tipo = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${tipo.toUpperCase()}: ${mensaje}`);
}

/**
 * Utilidad: Validar email
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Utilidad: Mostrar notificación
 */
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Se puede implementar un sistema de notificaciones después
    log(mensaje, tipo);
}

// ==========================================
// EVENT LISTENERS - AGREGAR DESPUÉS
// ==========================================

// Eventos para botones
// document.querySelectorAll('.btn').forEach(btn => {
//     btn.addEventListener('click', manejarClickBoton);
// });

// Eventos para navegación
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', manejarClickNavegacion);
// });

// Evento de redimensionamiento de ventana
// window.addEventListener('resize', manejarRedimensionamiento);

// Evento de scroll
// window.addEventListener('scroll', manejarScroll);
