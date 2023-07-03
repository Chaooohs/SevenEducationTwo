//=============================================

const seeAllProjectsButton = document.getElementById('el3')

const width = window.matchMedia("(max-width: 450px)");

function mobileScreen(width) {
  if (width.matches) {
    seeAllProjectsButton.classList.remove("works__disabled");
  } else {
    seeAllProjectsButton.classList.add("works__disabled");
  }
}

width.addListener(mobileScreen);
mobileScreen(width);