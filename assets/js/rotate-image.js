let button = document.getElementById("question-button")
let image = document.getElementById("question-image")
let menu = document.getElementById("question")

function formatImage() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
        image.id = "question-image-spin"
    } else {
        menu.style.display = "none"
        image.id = "question-image"
    }
}
button.addEventListener("click", formatImage)