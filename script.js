//imports
import { checkCurrentTheme, switchTheme } from "./components/PageMode.js";
import {
  renderNavigation,
  renderThemeSwitcher,
} from "./components/Navigation.js";
import typing from "./components/Typing.js";
renderNavigation();

// -- variables
// - DOM Elements

// -- events
document.addEventListener("DOMContentLoaded", () => {
  if (location.href.includes("index.html")) {
    typing();
  }

  renderThemeSwitcher();
});

// events for deploying: ---------------
// -- events
// document.addEventListener('DOMContentLoaded', () => {

//   if (window.location.href === "https://laimanam.tech/" || window.location.href === "https://laimanam.tech/index.html") {
//     typing();
//   }

//   checkCurrentTheme(toggleSwitch);
//   toggleSwitch.addEventListener('change', switchTheme);
// });
