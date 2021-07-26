"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const handleScroll = () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
};
//
const handleScrollIntoView = (target) => {
  if (!target) return;

  const targetEl = document.querySelector(target);
  targetEl.scrollIntoView({
    behavior: "smooth",
  });
};
//
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const handleFade = () => {
  const opacity = 1 - window.scrollY / homeHeight;
  if (opacity < 1 && opacity > 0) {
    home.style.opacity = opacity;
  }
};

//
const arrow = document.querySelector(".arrow-up");
const handleShow = () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
};

window.addEventListener("scroll", () => {
  handleScroll();
  handleFade();
  handleShow();
});

document //
  .querySelector(".navbar__menu")
  .addEventListener("click", (event) => {
    document.querySelector(".navbar__menu__container").classList.toggle("open");
    handleScrollIntoView(event.target.dataset.link);
  });

document //
  .querySelector(".home__contact").onclick = () => {
  handleScrollIntoView("#contact");
};

document.querySelector(".arrow-up").onclick = () => {
  handleScrollIntoView("#home");
};
