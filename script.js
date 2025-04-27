// === INICIO: Script REVISADO para Abrir el Sobre y Música ===
const envelopeContainer = document.getElementById('envelope-container');
const contentWrapper = document.querySelector('.content-wrapper');
const backgroundMusic = document.getElementById('background-music');
// const bodyElement = document.body; // Ya no es necesario

// Ocultar contenido principal inicialmente (asegurarse)
if (contentWrapper) {
    contentWrapper.classList.add('hidden');
    contentWrapper.classList.remove('visible');
} else {
    console.error("Error: No se encontró el .content-wrapper");
}

if (envelopeContainer && contentWrapper && backgroundMusic) {
    envelopeContainer.addEventListener('click', () => {
        if (envelopeContainer.classList.contains('open')) return;

        envelopeContainer.classList.add('open'); // Animar apertura

        backgroundMusic.play().catch(error => { // Reproducir música
            console.error("Error al intentar reproducir la música:", error);
        });

        setTimeout(() => {
            envelopeContainer.classList.add('hidden'); // Ocultar sobre
            // bodyElement.classList.add('content-visible'); // QUITAR esta línea
            contentWrapper.classList.remove('hidden'); // Mostrar contenido
            contentWrapper.classList.add('visible');
            window.scrollTo(0, 0); // Scroll al inicio
        }, 800); // Ajustar tiempo (ms)

    }, { once: true });
} else {
     console.error("Error: No se encontraron los elementos para el sobre interactivo.");
     // Fallback: mostrar contenido si falla el sobre
     if(contentWrapper){
        // bodyElement.classList.add('content-visible'); // QUITAR esta línea
        contentWrapper.classList.remove('hidden');
        contentWrapper.classList.add('visible');
     }
}
// === FIN: Script REVISADO para Abrir el Sobre y Música ===


// === Tu Script existente para el Contador Regresivo ===
// ... (Código del contador sin cambios) ...
const fechaBoda = new Date("Oct 3, 2025 18:30:00").getTime(); const countdownElement = document.getElementById("countdown"); const diasEl = document.getElementById("dias"); const horasEl = document.getElementById("horas"); const minutosEl = document.getElementById("minutos"); const segundosEl = document.getElementById("segundos"); const intervalo = setInterval(function() {const ahora = new Date().getTime(); const diferencia = fechaBoda - ahora; if (diferencia < 0) {clearInterval(intervalo); if (countdownElement) {countdownElement.innerHTML = "¡El gran día llegó!"; countdownElement.style.fontSize = "1.2rem";} return;} const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)); const segundos = Math.floor((diferencia % (1000 * 60)) / 1000); if (diasEl) diasEl.innerText = dias < 10 ? '0' + dias : dias; if (horasEl) horasEl.innerText = horas < 10 ? '0' + horas : horas; if (minutosEl) minutosEl.innerText = minutos < 10 ? '0' + minutos : minutos; if (segundosEl) segundosEl.innerText = segundos < 10 ? '0' + segundos : segundos;}, 1000);


// === Tu Script existente para Copiar IBAN ===
// ... (Código para copiar IBAN sin cambios) ...
const copyButton = document.getElementById("copy-iban-button"); const ibanTextElement = document.getElementById("iban"); const copyFeedbackElement = document.getElementById("copy-feedback"); if (copyButton && ibanTextElement && copyFeedbackElement) {copyButton.addEventListener("click", () => {const ibanToCopy = ibanTextElement.innerText; navigator.clipboard.writeText(ibanToCopy).then(() => {copyFeedbackElement.innerText = "¡IBAN copiado!"; setTimeout(() => { copyFeedbackElement.innerText = ""; }, 2500);}).catch(err => {console.error("Error al copiar el IBAN: ", err); copyFeedbackElement.innerText = "Error al copiar"; setTimeout(() => { copyFeedbackElement.innerText = ""; }, 2500);});});}