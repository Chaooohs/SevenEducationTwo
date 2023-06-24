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

const cardFive = document.querySelector("#el1");
const cardSix = document.querySelector("#el2");
const seeAllProjectsButton = document.querySelector('#el3')

const width = window.matchMedia("(max-width: 450px)");

function mobileScreen(width) {
  if (width.matches) {
    cardFive.classList.add("works__disabled");
    cardSix.classList.add("works__disabled");
    seeAllProjectsButton.classList.remove("works__disabled");
  } else {
    cardFive.classList.remove("works__disabled");
    cardSix.classList.remove("works__disabled");
    seeAllProjectsButton.classList.add("works__disabled");
  }
}

width.addListener(mobileScreen);
mobileScreen(width);
