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


// === Tu Script existente para Copiar IBAN ===
// ... (Código para copiar IBAN sin cambios) ...
const copyButton = document.getElementById("copy-iban-button"); const ibanTextElement = document.getElementById("iban"); const copyFeedbackElement = document.getElementById("copy-feedback"); if (copyButton && ibanTextElement && copyFeedbackElement) {copyButton.addEventListener("click", () => {const ibanToCopy = ibanTextElement.innerText; navigator.clipboard.writeText(ibanToCopy).then(() => {copyFeedbackElement.innerText = "¡IBAN copiado!"; setTimeout(() => { copyFeedbackElement.innerText = ""; }, 2500);}).catch(err => {console.error("Error al copiar el IBAN: ", err); copyFeedbackElement.innerText = "Error al copiar"; setTimeout(() => { copyFeedbackElement.innerText = ""; }, 2500);});});}