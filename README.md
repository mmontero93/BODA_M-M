# Invitación de Boda Digital

Pagina web de las invitaciones de la Boda de Mafe y Mauro

## ✨ Características Principales

*   **Diseño Elegante y Personalizado:** Creada para reflejar el estilo de nuestra boda.
*   **Pantalla de Inicio Interactiva:** Un diseño de "sobre abierto" da la bienvenida a los invitados.
*   **Música de Fondo:** Una canción especial se reproduce al abrir la invitación.
*   **Secciones Detalladas:**
    *   Nombres de los novios y foto principal.
    *   Fecha y logo/monograma.
    *   Mensaje de invitación.
    *   Información de la Ceremonia (con enlace a mapa).
    *   Información de la Celebración (con enlace a mapa).
    *   Croquis visual indicando la cercanía entre ceremonia y celebración.
    *   Confirmación de Asistencia (RSVP) mediante enlace a Google Forms.
    *   Contador regresivo hasta el gran día.
    *   Información sobre regalos (con opciones para Euros y Dólares/Zelle, y botones para copiar datos).
    *   Itinerario detallado del día de la boda.
    *   Sección para compartir fotos (enlace a plataforma externa).
*   **Meta Tags Open Graph:** Para una vista previa atractiva al compartir el enlace en redes sociales y aplicaciones de mensajería.
*   **Diseño Adaptable (Responsive):** Optimizado para visualizarse correctamente en ordenadores, tablets y dispositivos móviles.
*   **Construido con:** HTML5, CSS3 y JavaScript puro.

## 🚀 Cómo Visualizar

1.  Clona este repositorio: `git clone https://github.com/mmontero93/BODA_M-M.git`
2.  Navega a la carpeta del proyecto: `cd BODA_M-M`
3.  Abre el archivo `index.html` en tu navegador web.
    *   Para una mejor experiencia de desarrollo (con recarga automática al guardar cambios), puedes usar una extensión como "Live Server" en Visual Studio Code.

La invitación está desplegada y accesible públicamente en:
**[https://mmontero93.github.io/BODA_M-M/](https://mmontero93.github.io/BODA_M-M/)**

## 🛠️ Estructura del Proyecto

*   `index.html`: Contiene la estructura principal de la invitación.
*   `style.css`: Contiene todos los estilos visuales y el diseño adaptable.
*   `script.js`: Maneja la interactividad (splash screen, música, contador, copia de datos).
*   `images/`: Carpeta que contiene todas las imágenes utilizadas (logo, fotos, hojas decorativas, croquis, imagen de vista previa).
*   `music/`: Carpeta que contiene el archivo de audio de fondo.

## 📝 Puntos a Personalizar (Para Futuras Referencias o Adaptaciones)

Si necesitas modificar esta invitación, los principales puntos a editar son:

*   **`index.html`**:
    *   Textos generales (nombres, mensajes, lugares, direcciones, horas).
    *   Enlaces a Google Maps para ceremonia y celebración.
    *   Enlace al formulario de Google Forms para el RSVP.
    *   Información de cuentas para regalos (IBAN, email de Zelle).
    *   Enlace para la sección de compartir fotos.
    *   Rutas a las imágenes si cambian de nombre o ubicación.
    *   Ruta al archivo de música.
    *   Meta tags `og:title`, `og:description`, `og:image` y `og:url` para la vista previa al compartir.
*   **`script.js`**:
    *   `fechaBoda`: La fecha y hora exactas para el contador regresivo.
*   **`style.css`**:
    *   Variables de color (`--color-...`) y fuentes (`--font-...`) en la sección `:root` para cambios globales de estilo.
    *   Estilos específicos de cada sección si se requiere un cambio de diseño mayor.
*   **Carpeta `images/`**: Reemplazar imágenes (logo, foto principal, hojas, croquis, imagen `splash-sobre-abierto.png`, imagen de vista previa `og:image`).
*   **Carpeta `music/`**: Reemplazar el archivo de audio.

## 🙏 Agradecimientos