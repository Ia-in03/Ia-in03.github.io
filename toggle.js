function toggleLightDark() {
    console.log("Here");
    var body = document.body;
    var btn = document.getElementById("theme-btn");

    body.classList.toggle("dark-mode");
    if (btn.classList.contains("btn-outline-dark")) {
      btn.classList.replace("btn-outline-dark", "btn-outline-light")
    }
    else if (btn.classList.contains("btn-outline-light")){
      btn.classList.replace("btn-outline-light", "btn-outline-dark")
    }
}