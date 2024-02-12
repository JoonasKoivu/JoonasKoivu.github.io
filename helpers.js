function toggleNav() {
  var navOverlay = document.getElementById("navOverlay");
  navOverlay.classList.toggle("open");

  var menuIcon = document.getElementById("menuIcon");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
}