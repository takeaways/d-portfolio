"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
export const handleScroll = () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
};
//
export const handleScrollIntoView = (target) => {
  if (!target) return;

  const targetEl = document.querySelector(target);
  targetEl.scrollIntoView({
    behavior: "smooth",
  });
};
//
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

export const handleFade = () => {
  const opacity = 1 - window.scrollY / homeHeight;
  if (opacity < 1 && opacity > 0) {
    home.style.opacity = opacity;
  }
};

//
const arrow = document.querySelector(".arrow-up");
export const handleShow = () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
};
