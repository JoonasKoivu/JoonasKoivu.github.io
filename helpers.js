function toggleNav() {
  const navOverlay = document.getElementById("nav");
  navOverlay.classList.toggle("open");

  const menuIcon = document.getElementById("menuIcon");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleNav();
    });
});