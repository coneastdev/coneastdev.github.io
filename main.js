let fliped = 0
let fliping = true

setTimeout(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}, 100);

setInterval(() => {
    if (fliping == true) {
        if (fliped == 0) {
            document.getElementById("mugshot").style.transform = "rotateY(180deg)"
            fliped = 1
        } else if (fliped == 1) {
            document.getElementById("mugshot").style.transform = "scaleY(-1)"
            fliped = 2
        } else if (fliped == 2) {
            document.getElementById("mugshot").style.transform = "rotateY(-180deg) scaleY(-1)"
            fliped = 3
        } else if (fliped == 3) {
            document.getElementById("mugshot").style.transform = ""
            fliped = 0
        }
    }
}, 1000);

function toggle_fliping() {
    if (fliping == true) { 
        document.getElementById("mug-btn").innerHTML = '<i class="bi bi-play-circle"></i>'
        fliping = false
    } else {
        document.getElementById("mug-btn").innerHTML = '<i class="bi bi-pause-circle"></i>'
        fliping =true
    }
}
