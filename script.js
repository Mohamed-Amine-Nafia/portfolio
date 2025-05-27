const menuIcon = document.getElementById("menu-icon");
const navBar = document.getElementById("nav-bar");

menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("scale-0");
  if (navBar.classList.contains("scale-0")) {
    menuIcon.firstElementChild.src = "images/Animation - 1748300334498.gif";
  } else {
    menuIcon.firstElementChild.src = "images/cross-bar.gif";
  }
});
