const boardElement = document.getElementById('chessboard');
const board = [];
let selectedPiece = null;

// Piece Unicode symbols
const pieces = {
    white: {
        king: '♔',
        queen: '♕',
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
    },
    black: {
        king: '♚',
        queen: '♛',
        rook: '♜',
        bishop: '♝',
        knight: '♞',
        pawn: '♟︎'
    }
};

// Initial board setup
const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

// Create the board
for (let row = 0; row < 8; row++) {
    board[row] = [];
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        cell.dataset.row = row;
        cell.dataset.col = col;
        if (initialBoard[row][col]) {
            cell.innerHTML = `<span class="piece">${initialBoard[row][col]}</span>`;
        }
        cell.addEventListener('click', handleCellClick);
        boardElement.appendChild(cell);
        board[row][col] = cell;
    }
}

function handleCellClick(event) {
    const cell = event.currentTarget;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (selectedPiece) {
        movePiece(row, col);
    } else if (cell.innerHTML) {
        selectPiece(row, col);
    }
}

function selectPiece(row, col) {
    const cell = board[row][col];
    selectedPiece = { row, col, piece: cell.innerHTML };
    cell.classList.add('selected');
}

function movePiece(row, col) {
    const targetCell = board[row][col];
    if (targetCell !== board[selectedPiece.row][selectedPiece.col]) {
        targetCell.innerHTML = selectedPiece.piece;
        board[selectedPiece.row][selectedPiece.col].innerHTML = '';
        board[selectedPiece.row][selectedPiece.col].classList.remove('selected');
    }
    selectedPiece = null;
}
