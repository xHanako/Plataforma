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
