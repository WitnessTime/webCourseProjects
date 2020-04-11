let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("h1 span");
let messageDisplay = document.querySelector("div span");
let h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial listeners to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab color
    let clickedColor = this.style.backgroundColor;
    // compare color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
       this.style.backgroundColor = "#232323";
       messageDisplay.textContent = "Try Again";
    };
  });
};


function changeColors(color) {
  // loop through all squares adn change colors
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  };
};

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  // make an arry
  let arr = [];
  // add num random colors to arr
  for (let i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  };
  // return that array
  return arr;
};

function randomColor() {
  // pick a "red" from 0 - 255
  let R = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  let G = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`;
};