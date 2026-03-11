const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(navLinks.classList.contains("show")));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target) || menuToggle.contains(event.target);

    if (!clickedInsideMenu) {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
