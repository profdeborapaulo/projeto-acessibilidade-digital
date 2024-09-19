document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuCollapse = document.querySelector(".menu-collapse");

  function toggleMenu() {
    menuCollapse.classList.toggle("menu-open");
  }

  function closeMenu(event) {
    if (
      !menuCollapse.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuCollapse.classList.remove("menu-open");
    }
  }

  menuToggle.addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenu);
});
