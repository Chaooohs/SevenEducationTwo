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

const link = document.getElementById('el1',)

const mQuery = window.matchMedia("(max-width: 450px)");

function mobileScreen(e) {
  if (e.matches) {
    console.log("Media Query Matched!");
    link.classList.add('works__disabled')
    
  }
}

mQuery.addListener(mobileScreen);


