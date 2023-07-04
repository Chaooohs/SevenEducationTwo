//=============================================

const seeAllProjectsButton = document.getElementById('el3')

const btn = window.matchMedia("(max-width: 450px)");

function projectsButton(btn) {
  if (btn.matches) {
    seeAllProjectsButton.classList.remove("works__disabled");
  } else {
    seeAllProjectsButton.classList.add("works__disabled");
  }
}

width.addListener(projectsButton);
projectsButton(btn);