//===============================================

const cardFive = document.querySelector("#el1");
const cardSix = document.querySelector("#el2");

const width = window.matchMedia("(max-width: 450px)");

function mobileScreen(width) {
  if (width.matches) {
    cardFive.classList.add("works__disabled");
    cardSix.classList.add("works__disabled");
  } else {
    cardFive.classList.remove("works__disabled");
    cardSix.classList.remove("works__disabled");
  }
}

width.addListener(mobileScreen);
mobileScreen(width);