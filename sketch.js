// Cache the DOM
const screen = document.getElementById("screen");


function makeRows(rows, cols) {
  screen.style.setProperty('--grid-rows', rows);
  screen.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    screen.appendChild(cell).className = "square";
  };
};

makeRows(16, 16);