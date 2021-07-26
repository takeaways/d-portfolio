const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const filter = e.target.dataset.filter;
  projectContainer.classList.add("anim-out");

  const selected = document.querySelector(".category__btn.selected");
  selected.classList.remove("selected");
  e.target.classList.add("selected");

  setTimeout(() => {
    projects.forEach((project) => {
      if (project.dataset.type === filter || filter === "*") {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 100);
});
