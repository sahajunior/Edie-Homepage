const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const close = "close-menu"

menuBtn.addEventListener("click", function(){
    if (menu.classList.contains(close)) {
        menu.classList.remove(close);
    } else {
        menu.classList.toggle(close);
    }
});

function closeMenu() {
    menu.classList.toggle(close);
}
