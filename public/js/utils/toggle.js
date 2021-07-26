const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu__container");
navbarToggleBtn.onclick = () => {
  navbarMenu.classList.toggle("open");
};
