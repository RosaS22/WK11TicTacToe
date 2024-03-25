// Initialize the current player and the game board
let currentPlayer = 'X'; // Current player, starts with X
let board = ['', '', '', '', '', '', '', '', '']; // Represents the game board with 9 cells

// Get the board element from the DOM
const boardElement = document.getElementById('board');
const turnElement = document.getElementById('turn'); // Get the turn element from the DOM

// Function to render the game board
function render() {
  boardElement.innerHTML = ''; // Clear the board element before rendering
  // Loop through each cell in the board array
  board.forEach((cell, index) => {
    // Create a div element for each cell
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell'); // Add 'cell' class to the div
    cellElement.textContent = cell; // Set the text content of the cell
    // Add event listener for cell click, invoking cellClick function with cell index
    cellElement.addEventListener('click', () => cellClick(index));
    // Append the cell element to the board element
    boardElement.appendChild(cellElement);
  });
  // Update the heading to indicate whose turn it is
  turnElement.textContent = `${currentPlayer}'s Turn`;
}

// Function to handle cell click event
function cellClick(index) {
  // Check if the clicked cell is empty and there's no winner yet
  if (board[index] === '' && !checkWinner()) {
    // Assign the current player to the clicked cell
    board[index] = currentPlayer;
    // Switch to the other player for the next turn
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    // Render the updated board
    render();
  }
}

// Function to check if there's a winner or if it's a draw
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6]
  ];

  // Iterate through each winning combination
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    // Check if the cells in the combination are all the same player's symbol
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // If so, alert the winner and return true
      alert(`Player ${board[a]} wins!`);
      return true;
    }
  }

  // If there are no empty cells left, it's a draw
  if (!board.includes('')) {
    alert("It's a draw!");
    return true;
  }

  // Return false if there's no winner or draw yet
  return false;
}

// Function to reset the game
function reset() {
  // Reset current player and the board array
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  // Render the initial board
  render();
}

// Initial render of the board
render();
