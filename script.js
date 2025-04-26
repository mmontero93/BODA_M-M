// === Script para el Contador Regresivo ===

// EDITAR: Pon aquí la fecha y hora EXACTA de tu boda
// Formato: Mes Día, Año HH:MM:SS (ej. "Oct 3, 2025 20:00:00") ¡Usa mes en inglés!
const fechaBoda = new Date("Oct 3, 2025 18:30:00").getTime();

const countdownElement = document.getElementById("countdown");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

// Actualizar el contador cada segundo
const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) {
        clearInterval(intervalo);
        if (countdownElement) {
            countdownElement.innerHTML = "¡El gran día llegó!";
            countdownElement.style.fontSize = "1.2rem"; // Ajustar tamaño del mensaje final
        }
        return; // Salir si la fecha ya pasó
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el resultado (añade '0' si es menor de 10)
    if (diasEl) diasEl.innerText = dias < 10 ? '0' + dias : dias;
    if (horasEl) horasEl.innerText = horas < 10 ? '0' + horas : horas;
    if (minutosEl) minutosEl.innerText = minutos < 10 ? '0' + minutos : minutos;
    if (segundosEl) segundosEl.innerText = segundos < 10 ? '0' + segundos : segundos;

}, 1000);


// === Script para Copiar IBAN ===
const copyButton = document.getElementById("copy-iban-button");
const ibanTextElement = document.getElementById("iban");
const copyFeedbackElement = document.getElementById("copy-feedback");

if (copyButton && ibanTextElement && copyFeedbackElement) {
    copyButton.addEventListener("click", () => {
        const ibanToCopy = ibanTextElement.innerText;

        navigator.clipboard.writeText(ibanToCopy)
            .then(() => {
                // Éxito al copiar
                copyFeedbackElement.innerText = "¡IBAN copiado!";
                // Opcional: Cambiar el texto del botón temporalmente
                // const originalButtonText = copyButton.innerHTML;
                // copyButton.innerHTML = '<span class="icon">✅</span> (Copiado)';

                // Limpiar mensaje después de unos segundos
                setTimeout(() => {
                    copyFeedbackElement.innerText = "";
                    // copyButton.innerHTML = originalButtonText; // Restaurar botón
                }, 2500); // 2.5 segundos
            })
            .catch(err => {
                // Error al copiar
                console.error("Error al copiar el IBAN: ", err);
                copyFeedbackElement.innerText = "Error al copiar";
                 setTimeout(() => {
                    copyFeedbackElement.innerText = "";
                }, 2500);
            });
    });
}