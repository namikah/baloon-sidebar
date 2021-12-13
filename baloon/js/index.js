const main = document.querySelector("main");
const container = createElementWithClassName("div", "container");
const colorbaloons = createElementWithClassName("div", "color-baloons", "d-flex");
const baloon1 = createElementWithClassName("div", "baloon", "item-1");
const baloon2 = createElementWithClassName("div", "baloon", "item-2");
const baloon3 = createElementWithClassName("div", "baloon", "item-3");
const baloon4 = createElementWithClassName("div", "baloon", "item-4");
const currentColors = createElementWithClassName("div", "current-colors", "d-flex");
const colorbox1 = createElementWithClassName("div", "color-box", "item-1", "bg-black");
const colorbox2 = createElementWithClassName("div", "color-box", "item-2", "bg-red");
const colorbox3 = createElementWithClassName("div", "color-box", "item-3", "bg-yellow");
const colorbox4 = createElementWithClassName("div", "color-box", "item-4", "bg-green");

main.appendChild(container);
container.appendChild(colorbaloons);
container.appendChild(currentColors);
colorbaloons.appendChild(baloon1);
colorbaloons.appendChild(baloon2);
colorbaloons.appendChild(baloon3);
colorbaloons.appendChild(baloon4);
currentColors.appendChild(colorbox1);
currentColors.appendChild(colorbox2);
currentColors.appendChild(colorbox3);
currentColors.appendChild(colorbox4);

document.querySelectorAll(".color-box").forEach(element => {

    element.addEventListener("click", (e) => {
        if (e.target.classList.contains("item-1")) {
            resetAllColor("item-1");
            baloon1.classList.toggle(e.target.classList[e.target.classList.length - 1]);
            baloon1.classList.toggle("baloon-effect");
        }
        else if (e.target.classList.contains("item-2")) {
            resetAllColor("item-2");
            baloon2.classList.toggle(e.target.classList[e.target.classList.length - 1]);
            baloon2.classList.toggle("baloon-effect");
        }
        else if (e.target.classList.contains("item-3")) {
            resetAllColor("item-3");
            baloon3.classList.toggle(e.target.classList[e.target.classList.length - 1]);
            baloon3.classList.toggle("baloon-effect");
        }
        else if (e.target.classList.contains("item-4")) {
            resetAllColor("item-4");
            baloon4.classList.toggle(e.target.classList[e.target.classList.length - 1]);
            baloon4.classList.toggle("baloon-effect");
        }
    })
});

function createElementWithClassName(tagName, ...className) {
    const createdElement = document.createElement(tagName);
    createdElement.classList.add(...className);
    return createdElement;
}

function resetAllColor(className) {
    document.querySelectorAll(".baloon").forEach(item => {
        if (!item.classList.contains(className)) {
            item.classList.remove("bg-black");
            item.classList.remove("bg-red");
            item.classList.remove("bg-yellow");
            item.classList.remove("bg-green");
            item.classList.remove("baloon-effect");

        }
    });
}
