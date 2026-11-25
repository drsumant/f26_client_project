// Collapsible menu
const nav = document.querySelector("nav");
const menuButton = document.querySelector("#menu-toggle");

nav.classList.add("menu-ready");

function closeMenu() {
  nav.classList.remove("open");
  menuButton.textContent = "Menu";
}

menuButton.addEventListener("click", function () {
  if (nav.classList.contains("open")) {
    closeMenu();
  } else {
    nav.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.textContent = "Close";
  }
});

// pressing Escape closes the menu and puts focus back on the button
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});

// clicking anywhere outside the menu closes it
document.addEventListener("click", function (event) {
  if (nav.classList.contains("open") && !nav.contains(event.target)) {
    closeMenu();
  }
});

// Footer: show the current year
document.querySelector("#year").textContent = new Date().getFullYear();
