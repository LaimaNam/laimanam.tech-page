//imports
import { checkCurrentTheme, switchTheme } from './components/PageMode.js';
import {
  renderNavigation,
  // renderThemeSwitcher,
} from './components/Navigation.js';
import typing from './components/Typing.js';
// renderThemeSwitcher();
renderNavigation();

// -- variables
// - DOM Elements
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// -- events
document.addEventListener('DOMContentLoaded', () => {
  if (location.href.includes('index.html')) {
    typing();
  }

  checkCurrentTheme(toggleSwitch);
  toggleSwitch.addEventListener('change', switchTheme);
});
