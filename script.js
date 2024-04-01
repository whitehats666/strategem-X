let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    const cell = document.getElementsByClassName('cell')[index];
    cell.innerText = currentPlayer;
    cell.classList.add('glitter'); // Add glitter effect
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      showResult(`${gameBoard[a]} wins!`);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    showResult('It\'s a tie!');
  }
}

function showResult(resultText) {
  const overlay = document.getElementById('overlay');
  const result = document.getElementById('result');
  result.innerText = resultText;
  overlay.style.display = 'block';
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
    cell.classList.remove('glitter'); // Remove glitter effect
  }

  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}
