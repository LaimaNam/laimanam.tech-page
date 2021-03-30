const makeRandColor = () => {
  const r = getValue("redCol");
  const g = getValue("greenCol");
  const b = getValue("blueCol");
  //   sum = r + b + g;
  return `rgb(${r}, ${g}, ${b})`;
};

const butt = document.getElementById("button");
const labelColor = document.querySelectorAll("label");

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  //   labelColormaker();
  document.getElementById("mainDiv").style.backgroundColor = newColor;
});

function getValue(elementID) {
  const result = document.getElementById(elementID).value;
  if (isNaN(result)) {
    return alert("input " + elementID + " is not a number!");
  }
  const number = parseInt(result);
  if (number > 255 || number < 1) {
    return alert("Number must not be less than 1 or more than 255");
  }
  return number;
}

// const labelColormaker = () => {
//   if (sum < 250) {
//     labelColor.style.color = "white";
//   } else {
//     labelColor.style.color = "black";
//   }
// };
