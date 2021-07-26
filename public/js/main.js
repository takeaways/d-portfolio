import {
  handleScroll,
  handleScrollIntoView,
  handleFade,
  handleShow,
} from "./utils/scroll.js";

window.addEventListener("scroll", () => {
  handleScroll();
  handleFade();
  handleShow();
});

document //
  .querySelector(".navbar__menu")
  .addEventListener("click", (event) => {
    handleScrollIntoView(event.target.dataset.link);
  });

document //
  .querySelector(".home__contact").onclick = () => {
  handleScrollIntoView("#contact");
};

document.querySelector(".arrow-up").onclick = () => {
  handleScrollIntoView("#home");
};
