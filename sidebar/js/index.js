const main = document.querySelector("main");
const button = createElementWithClassName("button", "btn");
const sideBar = createElementWithClassName("div", "side-bar");
const menu1 = createElementWithClassName("div", "menu");
const menu2 = createElementWithClassName("div", "menu");
const menu3 = createElementWithClassName("div", "menu");
const menu4 = createElementWithClassName("div", "menu");
const menu5 = createElementWithClassName("div", "menu");
const menu6 = createElementWithClassName("div", "menu");

main.appendChild(button);
main.appendChild(sideBar);
sideBar.appendChild(menu1);
sideBar.appendChild(menu2);
sideBar.appendChild(menu3);
sideBar.appendChild(menu4);
sideBar.appendChild(menu5);
sideBar.appendChild(menu6);
document.querySelectorAll(".menu").forEach(item => {
    item.innerText = "Main Menu";
});
document.querySelector(".btn").innerText = "Start";


button.addEventListener("click", (e) => {
    sideBar.classList.toggle("w-200");
    button.classList.toggle("btn-clicked")
    if (document.querySelector(".btn").innerText != "Menu List")
        document.querySelector(".btn").innerText = "Menu List";
    else document.querySelector(".btn").innerText = "Start";
})

function createElementWithClassName(tagName, ...className) {
    const createdElement = document.createElement(tagName);
    createdElement.classList.add(...className);
    return createdElement;
}
