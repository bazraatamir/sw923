const grid = document.getElementById("grid");
const Status = document.getElementById("status");

player = "X";
gameBoard = ["", "", "", "", "", "", "", "", ""];
function handleClick(index, cell) {
  if (gameBoard[index] === "" && !checkWinner()) {
    cell.innerText = player;
    gameBoard[index] = player;
    if (checkWinner()) {
      Status.innerText = `${player} тоглогч яллаа`;
    } else if (!gameBoard.includes("")) {
      Status.innerText = "Тэнцлээ";
    } else {
      player = player === "X" ? "O" : "X";
    }
  }
}
function checkWinner() {
  const winnigCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combo of winnigCombo) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] == gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}
grid.addEventListener("click", (event) => {
  const cell = event.target;
  const index = parseInt(cell.id);
  handleClick(index, cell);
});
