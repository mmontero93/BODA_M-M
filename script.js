// ======================================================
// === INICIO: Script para Splash Screen y Música ===
// ======================================================
const splashScreen = document.getElementById('splash-screen'); // ID del div del splash
const contentWrapper = document.querySelector('.content-wrapper');
const backgroundMusic = document.getElementById('background-music');
// const bodyElement = document.body; // Ya no se necesita manipular el body

// Ocultar contenido principal inicialmente
if (contentWrapper) {
    contentWrapper.classList.add('hidden');
    contentWrapper.classList.remove('visible');
} else {
    console.error("Error Crítico: No se encontró el .content-wrapper");
}

if (splashScreen && contentWrapper && backgroundMusic) {
    // Evento al hacer clic en el splash screen
    splashScreen.addEventListener('click', () => {
        // Prevenir múltiples clics
        if (splashScreen.classList.contains('hidden')) {
            return;
        }

        // 1. Ocultar el splash screen (con fade-out definido en CSS)
        splashScreen.classList.add('hidden');

        // 2. Intentar reproducir la música
        backgroundMusic.play().catch(error => {
            console.error("Error al intentar reproducir la música:", error);
        });

        // 3. Mostrar el contenido principal (con fade-in definido en CSS)
        //    No se necesita timeout largo, las transiciones CSS se encargan
        contentWrapper.classList.remove('hidden');
        contentWrapper.classList.add('visible');
        window.scrollTo(0, 0); // Scroll al inicio

    }, { once: true }); // Ejecutar solo una vez
} else {
     console.error("Error Crítico: Faltan elementos esenciales para el splash screen interactivo.");
     // Fallback: mostrar contenido si falla el splash
     if(contentWrapper){
        contentWrapper.classList.remove('hidden');
        contentWrapper.classList.add('visible');
     }
}
// ====================================================
// === FIN: Script para Splash Screen y Música ===
// ====================================================


// === Tu Script existente para el Contador Regresivo ===
// ... (Código del contador sin cambios) ...
const fechaBoda = new Date("Oct 3, 2025 18:30:00").getTime(); const countdownElement = document.getElementById("countdown"); const diasEl = document.getElementById("dias"); const horasEl = document.getElementById("horas"); const minutosEl = document.getElementById("minutos"); const segundosEl = document.getElementById("segundos"); const intervalo = setInterval(function() {const ahora = new Date().getTime(); const diferencia = fechaBoda - ahora; if (diferencia < 0) {clearInterval(intervalo); if (countdownElement) {countdownElement.innerHTML = "¡El gran día llegó!"; countdownElement.style.fontSize = "1.2rem";} return;} const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)); const segundos = Math.floor((diferencia % (1000 * 60)) / 1000); if (diasEl) diasEl.innerText = dias < 10 ? '0' + dias : dias; if (horasEl) horasEl.innerText = horas < 10 ? '0' + horas : horas; if (minutosEl) minutosEl.innerText = minutos < 10 ? '0' + minutos : minutos; if (segundosEl) segundosEl.innerText = segundos < 10 ? '0' + segundos : segundos;}, 1000);


const copyButtons = document.querySelectorAll(".copy-button");
const copyFeedbackElement = document.getElementById("copy-feedback"); // Reutilizamos el mismo feedback

// Verificar si se encontraron los elementos básicos
if (copyButtons.length > 0 && copyFeedbackElement) {
    copyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            console.log("Botón Copiar Clicado:", button); // --> Log para depuración

            // Obtener el ID del elemento a copiar desde el atributo data-clipboard-target
            // Asegúrate que tus botones en HTML tienen: data-clipboard-target="#id-del-parrafo"
            const targetSelector = button.getAttribute("data-clipboard-target");
            console.log("Selector Objetivo:", targetSelector); // --> Log para depuración

            if (!targetSelector) {
                console.error("Error: Botón de copiar no tiene el atributo 'data-clipboard-target'.");
                copyFeedbackElement.innerText = "Error: Falta target"; // Feedback de error
                setTimeout(() => { copyFeedbackElement.innerText = ""; }, 3000);
                return;
            }

            // Seleccionar el elemento <p> que contiene el dato usando el selector
            const dataElement = document.querySelector(targetSelector);
            console.log("Elemento de Datos Encontrado:", dataElement); // --> Log para depuración

            if (!dataElement) {
                console.error(`Error: No se encontró el elemento con el selector '${targetSelector}'.`);
                copyFeedbackElement.innerText = "Error: No se encontró dato"; // Feedback de error
                setTimeout(() => { copyFeedbackElement.innerText = ""; }, 3000);
                return;
            }

            const textToCopy = dataElement.innerText; // Obtener el texto (IBAN o Email)
            console.log("Texto a Copiar:", textToCopy); // --> Log para depuración

            // Usar la API del Portapapeles (Requiere contexto seguro: HTTPS o localhost)
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        // Éxito al copiar
                        console.log("Texto copiado con éxito!");
                        copyFeedbackElement.innerText = "¡Copiado!"; // Mensaje genérico
                        // Limpiar mensaje después de unos segundos
                        setTimeout(() => {
                            copyFeedbackElement.innerText = "";
                        }, 2500); // 2.5 segundos
                    })
                    .catch(err => {
                        // Error al copiar con la API
                        console.error("Error al usar navigator.clipboard.writeText:", err);
                        copyFeedbackElement.innerText = "Error al copiar";
                        setTimeout(() => { copyFeedbackElement.innerText = ""; }, 3000);
                    });
            } else {
                // Fallback (método antiguo, puede no funcionar en todos los navegadores/contextos)
                console.warn("navigator.clipboard no disponible, intentando método antiguo.");
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = textToCopy;
                    textArea.style.position = "fixed"; // Evitar scroll
                    textArea.style.opacity = "0";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    copyFeedbackElement.innerText = "¡Copiado!";
                    setTimeout(() => { copyFeedbackElement.innerText = ""; }, 2500);
                } catch (err) {
                    console.error("Error con el método antiguo 'execCommand':", err);
                    copyFeedbackElement.innerText = "Error al copiar";
                    setTimeout(() => { copyFeedbackElement.innerText = ""; }, 3000);
                }
            }

        });
    });
} else {
    // Advertencias si faltan elementos iniciales
    if (copyButtons.length === 0) {
        console.warn("Advertencia: No se encontraron botones con la clase 'copy-button'.");
    }
    if (!copyFeedbackElement) {
        console.warn("Advertencia: No se encontró el elemento con ID 'copy-feedback'.");
    }
}
// =============================================
// === FIN: Script REVISADO para Copiar Datos ===
// =============================================