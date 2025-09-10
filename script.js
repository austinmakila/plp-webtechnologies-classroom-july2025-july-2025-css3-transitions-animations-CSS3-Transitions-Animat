// Global variable (scope demo)
let animationActive = false;

// Function with parameters and return value
function toggleClass(element, className) {
    element.classList.toggle(className);
    return element.classList.contains(className);
}

// Function controlling animation with scope awareness
function animateBox() {
    const box = document.getElementById("box");
    animationActive = toggleClass(box, "slide");
    console.log("Animation Active?", animationActive);
}

// Function for pulse effect
function pulseBox() {
    const box = document.getElementById("box");
    const pulsing = toggleClass(box, "pulse");
    console.log("Pulse effect running:", pulsing);
}

// Attach events
document.getElementById("animateBtn").addEventListener("click", animateBox);
document.getElementById("pulseBtn").addEventListener("click", pulseBox);
