// Mostrar la invitación, ocultar la imagen de fondo y reproducir la música
document.getElementById("open-invite-btn").addEventListener("click", function() {
    document.getElementById("full-screen-img").style.display = "none";
    document.querySelectorAll(".fade-in").forEach(section => {
        section.classList.add("show");
    });
    const audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    }
});

// Música
const audio = document.getElementById("audio");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    }
});

// Contador regresivo
const countdown = () => {
    const countDate = new Date("October 26, 2024 18:30:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(countdown, 1000);

// Envio de invitación 
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario tradicional

    const name = encodeURIComponent(document.getElementById("name").value);
    const guests = encodeURIComponent(document.getElementById("guests").value);
    const attendance = encodeURIComponent(document.getElementById("attendance").value);
    let message = `¡Hola Tania!`;

    if (attendance === 'yes') {
        message += ` Confirmo mi asistencia a los XV, soy ${name}, y llevaré ${guests} invitados.`;
    } else {
        message += ` soy ${name}, y lamentablemente no podré asistir a los XV.`;
    }

    const whatsappURL = `https://api.whatsapp.com/send?phone=6691107956&text=${message}`;
    
    window.open(whatsappURL, '_blank');
});


// Configuración general de ScrollReveal
ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 2000,
    delay: 200
});

// Inicialización de ScrollReveal para diferentes clases
ScrollReveal().reveal('.slider-up', { origin: 'top' });
ScrollReveal().reveal('.slider-down', { origin: 'bottom' });
ScrollReveal().reveal('.slider-izq', { origin: 'left', distance: '10px' });
ScrollReveal().reveal('.slider-der', { origin: 'right', distance: '1px' });

// Agrega la configuración para los elementos de evento
ScrollReveal().reveal('.evento', { origin: 'bottom', distance: '50px', interval: 200 });

// Configuración específica para elementos con opacidad
ScrollReveal().reveal('.fade-in', { 
    opacity: 0, // Comienza con opacidad 0
    duration: 1500, // Duración del efecto
    easing: 'ease-in-out' // Efecto de transición suave
});


document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    var maxGuests = 4; // Cambia este número según el límite deseado
    var guestsInput = document.getElementById('guests');
    var numGuests = parseInt(guestsInput.value, 10);

    if (numGuests > maxGuests) {
        event.preventDefault(); // Evita el envío del formulario
        alert('El número de invitados no puede exceder ' + maxGuests + '.');
    }
});

// Al cargar la página, desactiva el scroll
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('no-scroll');
});

// Al hacer clic en el botón para abrir la invitación, quita la clase que desactiva el scroll
document.getElementById('open-invite-btn').addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    // Añadir aquí la lógica para mostrar la invitación si es necesario
});
