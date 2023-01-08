const board = document.querySelector("#board");
const colors = [
  "#93A300",
  "#439400",
  "#A68A00",
  "#58026D",
  "#E2FA00",
  "#67E300",
];
const SQUARES_NAMBER = 400;

for (let i = 0; i < SQUARES_NAMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#757575";
  element.style.boxShadow = `0 0 2px #757575`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
