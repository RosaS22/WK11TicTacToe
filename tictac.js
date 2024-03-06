let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const boardElement = document.getElementById('board');

function render() {
  boardElement.innerHTML = '';
  board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => cellClick(index));
    boardElement.appendChild(cellElement);
  });
}

function cellClick(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    render();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`Player ${board[a]} wins!`);
      return true;
    }
  }

  if (!board.includes('')) {
    alert("It's a draw!");
    return true;
  }

  return false;
}

function reset() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  render();
}

render();