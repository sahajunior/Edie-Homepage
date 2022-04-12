const menuBtn = document.getElementById("menu-button");
const menuEL = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menuEL.classList.toggle("show");
  if (menuEL.classList.contains("show")) {
    menuEL.classList.remove("hide");
  } else {
    menuEL.classList.add("hide");
  }
  menuBtn.classList.toggle("fixed");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-times");
});
