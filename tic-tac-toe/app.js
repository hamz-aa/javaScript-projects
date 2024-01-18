const buttons = document.querySelectorAll("button");
let current = "X";

const row1 = document.querySelectorAll(".row-1");
const row2 = document.querySelectorAll(".row-2");
const row3 = document.querySelectorAll(".row-3");

const col1 = document.querySelectorAll(".col-1");
const col2 = document.querySelectorAll(".col-2");
const col3 = document.querySelectorAll(".col-3");

const d1 = document.querySelectorAll(".d-1");
const d2 = document.querySelectorAll(".d-2");

const rows = [row1, row2, row3];
const columns = [col1, col2, col3];
const diagonals = [d1, d2];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = current;
    const win = checkWinner(button.textContent);
    console.log(win);
    if (current === "X") current = "O";
    else current = "X";
  });
});

function checkWinner(state) {
  for (let row of rows) {
    let count = 0;
    for (let val of row) {
      if (val.textContent === state) count++;
    }
    console.log(count);
    if (count === 3) return true;
  }

  for (let column of columns) {
    let count = 0;
    for (let val of column) {
      if (val.textContent === state) count++;
    }
    if (count === 3) return true;
  }

  for (let diagonal of diagonals) {
    let count = 0;
    for (let val of diagonal) {
      if (val.textContent === state) count++;
    }
    if (count === 3) return true;
  }

  return false;
}
