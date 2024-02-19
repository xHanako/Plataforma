const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

const savedMode = localStorage.getItem("mode");
if (savedMode) {
    body
        .classList
        .add(savedMode);
    if (savedMode === "dark") {
        modeText.innerText = "Tema oscuro";
    } else {
        modeText.innerText = "Tema claro";
    }
}

toggle.addEventListener("click", () => {
    sidebar
        .classList
        .toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body
        .classList
        .toggle("dark");
    const currentMode = body
        .classList
        .contains("dark")
            ? "dark"
            : "light";

    localStorage.setItem("mode", currentMode);

    if (body.classList.contains("dark")) {
        modeText.innerText = "Tema oscuro";
    } else {
        modeText.innerText = "Tema claro";
    }
});

// AQUI INICIA LAIA

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') {
        return;
    }

    // Simulación de un nombre y avatar de usuario (ajusta según tu lógica de
    // autenticación)
    const userName = 'Tú:';
    const userAvatar = 'user_avatar.png';

    displayMessage('user', userMessage, userName, userAvatar);
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage('bot', botResponse);
    }, 500);
}

function getBotResponse(userMessage) {
    switch (userMessage.toLowerCase()) {
        case 'hola':
            return '¡Hola! Soy LaIA, tu asistente virtual. ¿Cómo puedo ayudarte?';
        case '¿quién eres?':
            return 'Soy LaIA, tu asistente virtual.';
        case 'adiós':
            return '¡Hasta luego!';
        default:
            return 'Lo lamento, no entiendo eso.';
    }
}

function displayMessage(sender, message, userName, userAvatar) {
    const messageElement = document.createElement('div');
    const avatarElement = document.createElement('img');
    avatarElement.src = sender === 'user'
        ? userAvatar
        : 'LaIA_avatar.png';
    avatarElement.alt = `${sender
        .charAt(0)
        .toUpperCase()} Avatar`;

    messageElement.className = sender === 'user'
        ? 'user-message'
        : 'bot-message';

    // Crear elementos para mostrar nombre y foto al lado del mensaje
    const container = document.createElement('div');
    container.className = sender === 'user'
        ? 'user-container'
        : 'bot-container';

    const nameElement = document.createElement('div');
    nameElement.className = sender === 'user'
        ? 'user-name'
        : 'bot-name';
    nameElement.innerText = sender === 'user'
        ? userName
        : 'LaIA:';

    // Añadir la foto y el nombre al contenedor
    container.appendChild(avatarElement);
    container.appendChild(nameElement);

    // Agregar el contenido del mensaje
    messageElement.appendChild(container);
    const contentElement = document.createElement('div');
    contentElement.innerHTML = `${message}`;
    messageElement.appendChild(contentElement);

    // Añadir el mensaje al contenedor del chat
    chatBox.appendChild(messageElement);

    // Hacer que el chat se desplace hacia abajo para mostrar el nuevo mensaje
    chatBox.scrollTop = chatBox.scrollHeight;
}

// MUSICA

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("backgroundMusic");
    var toggleMusicLink = document.getElementById("toggleMusicLink");
  
    // Intenta obtener la posición almacenada
    var storedTime = localStorage.getItem("audioTime");
    if (storedTime) {
      audio.currentTime = parseFloat(storedTime);
    }
  
    // Reproduce la música
    audio.play();
  
    // Almacena la posición de reproducción cada segundo
    setInterval(function() {
      localStorage.setItem("audioTime", audio.currentTime);
    }, 1000);
  
    // Maneja la recarga de la página
    window.addEventListener("beforeunload", function() {
      localStorage.setItem("audioTime", audio.currentTime);
    });
  });
  