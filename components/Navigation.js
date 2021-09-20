const header = document.querySelector("header");

export const renderNavigation = () => {
  header.innerHTML = `
    <nav class="navbar" id="nav-bar">
    <a href="./index.html" class="logo"><i class="fas fa-cat"></i></a>
    <ul class="navbar-nav">
      

      <li class="nav-item">
        <a href="./about.html" class="nav-link">
          
          <span class="link-text">About</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="./portfolio.html" class="nav-link">
         
          <span class="link-text">Portfolio</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="./contact.html" class="nav-link">
          
          <span class="link-text">Contact</span>
        </a>
      </li>
     
    </ul>
   
  </nav>
    `;
};

import { checkCurrentTheme, switchTheme } from "./PageMode.js";

export const renderThemeSwitcher = () => {
  const themeSwitcherWrapper = document.querySelector(".theme-switch-wrapper");

  themeSwitcherWrapper.innerHTML = `
    <span id="toggle-icon">
    <i id="moon" class="fas fa-moon moon"></i>
    <i id="sun" class="fas fa-sun moon"></i>
  </span>
  <label class="theme-switch">
    <input type="checkbox" />
    <div class="slider round"></div>
  </label>
    `;
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  checkCurrentTheme(toggleSwitch);

  toggleSwitch.addEventListener("change", switchTheme);
};
