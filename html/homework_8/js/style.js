//=================================================================================

const body = document.querySelector("body");
const nav = document.querySelector(".header__mobile");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  body.classList.toggle("show");
  burger.classList.toggle("show");
  nav.classList.toggle("show");
});

//================================================================================


