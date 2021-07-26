"use strict";

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];

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
  targetEl.classList.add("active");
  selectNavItem(navItems[sectionIds.indexOf(target)]);
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

// -- scroll --

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavItem = navItems[0];

function selectNavItem(selected) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = selected;
  selectedNavItem.classList.add("active");
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let selectedNavIndex = 0;
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);

      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index + -1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
