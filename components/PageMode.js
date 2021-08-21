// C h a n g i n g    D a  r k    m o d e    to     L i g h t

// Change moon icon to sun
const changeIconToSun = () => {
  document.getElementById('moon').style.display = 'none';
  document.getElementById('sun').style.display = 'inline';
};

// Switch Theme Dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    changeIconToSun();
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('moon').style.display = 'inline';
    document.getElementById('sun').style.display = 'none';
  }
};

// Check local storage for theme
const checkCurrentTheme = (toggleSwitch) => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
      toggleSwitch.checked = true;
      changeIconToSun();
    }
  }
};

export { checkCurrentTheme, switchTheme };
