const baloon = document.querySelectorAll(".baloon");
const colorbox = document.querySelectorAll(".color-box");

colorbox.forEach(element => {
    element.addEventListener("click", () => {
        resetColor();
        const color = element.getAttribute("data-id");
        document.querySelector("." + color).style.backgroundColor = color;
    })
});

function resetColor() {
    baloon.forEach(element => {
        element.style.backgroundColor = "";
    });
}
