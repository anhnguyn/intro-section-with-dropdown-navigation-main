document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  console.log("🚀 ~ dropdowns:", dropdowns);

  dropdowns.forEach((dropdown) => {
    const nav = dropdown.querySelector(".dropdown__menu");
    const toggle = dropdown.querySelector(".btn--tertiary");
    const icon = toggle.querySelector("i");

    toggle.addEventListener("click", () => {
      // Show the menu when active
      nav.classList.toggle("dropdown__menu--active");

      // Toggle between up and down dropdown icon
      icon.classList.toggle("icomoon-icon-arrow-up");
      icon.classList.toggle("btn--link");
    });

    // Close other dropdowns
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown
          .querySelector(".dropdown__menu")
          .classList.remove("dropdown__menu--active");
        otherDropdown
          .querySelector("i")
          .classList.remove("icomoon-icon-arrow-up");
        otherDropdown
          .querySelector("i")
          .classList.add("btn--link");
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove("dropdown__menu--active");
        icon.classList.remove("icomoon-icon-arrow-up");
        icon.classList.add("btn--link");
      }
    });
  });
});
