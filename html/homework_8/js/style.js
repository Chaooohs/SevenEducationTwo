//=================================================================================

const body = document.querySelector("body");
const nav = document.querySelector(".header__nav");
const burger = document.querySelector(".burger");
const burgerImg = document.querySelector(".burger__image");

burger.addEventListener("click", function () {

  body.classList.toggle("show");
  const open = nav.classList.toggle("show");

  if (open) {
    burgerImg.setAttribute("src", "./img/logo/burger-close.svg");
  } 
  else {
    burgerImg.setAttribute("src", "./img/logo/burger-open.svg");
  }
});

