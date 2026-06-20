# 💄 Luz Peña - Maquillaje Profesional

Sitio web profesional para servicios de maquillaje artístico especializado en novias y eventos.

---

## 📋 Estructura del Proyecto

```
vivi rolon makeup/
├── index.html          # Estructura HTML semántica
├── style.css           # Estilos responsivos
├── script.js           # Funcionalidades JavaScript (preparado para expandir)
└── README.md           # Este archivo
```

---

## 🎨 Características del Diseño

### Colores Utilizados
- **Rosa/Coral Principal**: `#c47068` - Usado en botones, encabezados y acentos
- **Rosa Clara**: `#d9897e` - Hover states y variaciones
- **Beige/Crema**: `#f5f0eb` - Fondos suaves
- **Marrón Oscuro**: `#2d2d2d` - Texto principal
- **Oro**: `#d4af37` - Detalles premium (disponible)

### Tipografía
- **Elegante**: Garamond, Georgia (para títulos y descripciones)
- **Principal**: Segoe UI, Tahoma (para contenido general)

### Diseño Responsive
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (480px - 767px)
- ✅ Mobile pequeño (< 480px)

---

## 📱 Secciones Principales

### 1. **Header/Navegación** (`<header>`)
- Logo: "Luz Peña - MAKEUP ARTIST"
- Navegación con 6 opciones principales
- Botón "RESERVAR CITA" destacado
- Menú hamburguesa preparado para móvil

### 2. **Hero Section** (`#inicio`)
- Título principal: "Maquillaje Profesional"
- Descripción elegante en cursiva
- Dos botones de acción
- Sección de beneficios (Atención personalizada, Productos Premium)
- Área reservada para imagen de portada

### 3. **Características** (`#servicios`)
- 4 características principales con iconos:
  - Experiencia Profesional
  - Productos de Alta Calidad
  - Puntualidad y Compromiso
  - Servicio a Domicilio

### 4. **Secciones Placeholder**
- Galería (`#galeria`)
- Cursos (`#cursos`)
- Sobre mi (`#sobre-mi`)
- Contacto (`#contacto`)
- Footer

---

## 🔧 Guía de Personalización

### Cambiar Colores
Editar las variables CSS en `style.css`:
```css
:root {
    --color-primary: #c47068;      /* Cambiar color rosa */
    --color-primary-light: #d9897e;
    /* ... más colores ... */
}
```

### Agregar Imágenes
1. **Hero Image**: En `style.css`, encontrar `.hero-image` y agregar:
   ```css
   background-image: url('ruta/a/imagen.jpg');
   background-size: cover;
   background-position: center;
   ```

2. **Logo**: Reemplazar el `<h1>` en el logo por una imagen

### Expandir Secciones
Las secciones placeholder (Galería, Cursos, etc.) están listos para contenido. Solo agrega HTML dentro de cada sección.

---

## 🚀 Próximas Funcionalidades (JavaScript)

El archivo `script.js` está preparado para:

1. ✅ **Navegación suave** - Desplazamiento smooth a secciones
2. ✅ **Formularios** - Validación y envío de reservas
3. ✅ **Animaciones** - Efectos on-scroll
4. ✅ **Menú hamburguesa** - Funcionalidad mobile
5. ✅ **Galería** - Lightbox o carousel
6. ✅ **Efectos interactivos** - Hover effects y más

---

## 📐 Sistema de Espaciado

Variables CSS predefinidas para consistencia:
```css
--spacing-sm: 8px;      /* Pequeño */
--spacing-md: 16px;     /* Medio */
--spacing-lg: 32px;     /* Grande */
--spacing-xl: 48px;     /* Extra grande */
```

---

## 🎯 Mejores Prácticas Aplicadas

✅ **HTML Semántico**
- Uso de etiquetas semánticas: `<header>`, `<nav>`, `<section>`, `<footer>`
- Comentarios descriptivos en secciones
- Estructura lógica y jerárquica

✅ **CSS Modular**
- Variables CSS para fácil mantenimiento
- Media queries organizadas
- Comentarios en bloques
- Flexbox y Grid para responsive

✅ **Código Limpio**
- Nomenclatura clara (BEM-like)
- Sin frameworks externos
- Listo para JavaScript
- Optimizado para renderizado

✅ **Accesibilidad**
- Estructura semántica
- Contraste de colores apropiado
- Links descriptivos
- Preparado para ARIA labels

---

## 📖 Cómo Usar

### 1. Abrir en el navegador
```bash
# Simplemente abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
# Luego abre: http://localhost:8000
```

### 2. Editar contenido
- **Textos**: Edita directamente en `index.html`
- **Estilos**: Modifica `style.css`
- **Interactividad**: Expande `script.js`

### 3. Agregar funcionalidades
Descomentar y expandir las funciones en `script.js`:
```javascript
// Descomenta la inicialización que necesites:
// inicializarNavegacion();
// inicializarFormularios();
// inicializarAnimaciones();
```

---

## 🔐 Notas Importantes

- ✅ Sin dependencias externas (HTML/CSS/JS puro)
- ✅ Completamente responsive
- ✅ Optimizado para SEO básico
- ✅ Preparado para integración de APIs (contacto, reservas, etc.)
- ✅ Fácil de mantener y expandir

---

## 📞 Contacto y Mantenimiento

Para modificaciones futuras:
1. Revisa los comentarios en el código
2. Usa las variables CSS para cambios globales
3. Agrega clases de utilidad en lugar de estilos inline
4. Mantén la estructura semántica

---

**Versión**: 1.0  
**Última actualización**: 2026  
**Estado**: Listo para producción  

💡 *Sitio listo para recibir contenido, imágenes y funcionalidades JavaScript adicionales.*
