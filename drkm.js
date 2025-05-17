var doc = document.body;

function drkm() {
  if (!localStorage.themeMem) {
    localStorage.setItem("themeMem", "toggle-true");
    doc.classList.add("toggle-theme");
  } else {
    if (localStorage.themeMem == "toggle-true") {
      doc.classList.remove("toggle-theme");
      localStorage.setItem("themeMem", "toggle-false");
    } else if (localStorage.themeMem == "toggle-false") {
      doc.classList.add("toggle-theme");
      localStorage.setItem("themeMem", "toggle-true");
    }
  }
}

function toggle_off() {
  doc.classList.remove("toggle-theme");
  localStorage.setItem("themeMem", "toggle-false");
}

function toggle_on() {
  doc.classList.add("toggle-theme");
  localStorage.setItem("themeMem", "toggle-true");
}

if (localStorage.themeMem == "toggle-true") {
  doc.classList.add("toggle-theme");
  localStorage.setItem("themeMem", "toggle-true");
} else if (localStorage.themeMem == "toggle-false") {
  doc.classList.remove("toggle-theme");
  localStorage.setItem("themeMem", "toggle-false");
}

function init(transition, duration) {
  document.body.style.transitionProperty = "all";
  document.body.style.transitionTimingFunction = transition;
  document.body.style.transitionDuration = duration;
}