const menu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    cards.forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});

menu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
