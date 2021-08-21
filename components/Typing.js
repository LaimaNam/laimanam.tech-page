// Text Typing on load
let i = 0;
let text = "Hi,$I'm Laima,$web developer.";

const typing = () => {
  if (i < text.length) {
    let letter = text.charAt(i);
    if (letter === '$') {
      createBr();
    } else {
      addLetter(letter);
    }
    i++;
    setTimeout(typing, 100);
  }
};

const addLetter = (letter) => {
  // create span
  let newSpan = document.createElement('span');
  // add span to parent element
  document.getElementById('text').appendChild(newSpan);
  // set current letter to span
  newSpan.innerText = letter;
  // set css class to span
  if (letter !== ' ') {
    newSpan.classList.add('singleLetterSpan');
  }
};

// Create break
const createBr = () => {
  let br = document.createElement('br');
  document.getElementById('text').appendChild(br);
};

export default typing;
