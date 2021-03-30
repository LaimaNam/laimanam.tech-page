// Text Typing on load
var i = 0;
var text = "Hi,$I'm Laima,$web developer.";

function typing() {
  if (i < text.length) {
    var letter = text.charAt(i);
    if (letter == "$") {
      createBr();
    } else {
      addLetter(letter);
    }
    i++;
    setTimeout(typing, 100);
  }
}

function addLetter(letter) {
  // create span
  var newSpan = document.createElement("span");
  // add span to parent element
  document.getElementById("text").appendChild(newSpan);
  // set current letter to span
  newSpan.innerText = letter;
  // set css class to span
  if (letter !== " ") {
    newSpan.classList.add("singleLetterSpan");
  }
}

// Create break
function createBr() {
  var br = document.createElement("br");
  document.getElementById("text").appendChild(br);
}

typing();

// C h a n g i n g   D a  r k  m o d e  to  L i g h t:
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Change moon icon to sun
function changeIconToSun() {
  document.getElementById("moon").style.display = "none";
  document.getElementById("sun").style.display = "inline";
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    changeIconToSun();
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("moon").style.display = "inline";
    document.getElementById("sun").style.display = "none";
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
    changeIconToSun();
  }
}
