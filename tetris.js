// Tetris Game Implementation - Student Template
// Complete the methods below to build your Tetris game!

class TetrisGame {
  constructor() {
    // Get canvas and context
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    // Get UI elements
    this.scoreElement = document.getElementById("score");
    this.linesElement = document.getElementById("lines");
    this.gameOverElement = document.getElementById("gameOver");
    this.finalScoreElement = document.getElementById("finalScore");

    // Game constants
    this.BOARD_WIDTH = 10;
    this.BOARD_HEIGHT = 20;
    this.CELL_SIZE = 30;

    // Game state variables
    this.board = [];
    this.currentPiece = null;
    this.score = 0;
    this.lines = 0;
    this.gameOver = false;
    this.paused = false;
    this.dropTime = 0;
    this.dropInterval = 1000; // 1 second initially

    // Initialize the game
    this.initBoard();
    this.spawnPiece();
    this.setupEventListeners();
    this.gameLoop();
  }

  // TODO: Initialize empty board (2D array filled with 0s)
  initBoard() {
    // Create a 2D array BOARD_HEIGHT x BOARD_WIDTH filled with 0s
    // Hint: Use nested loops
  }

  // TODO: Define the 7 Tetris pieces
  getPieces() {
    // Return an object with the 7 Tetris pieces
    // Each piece should have a 'shape' (2D array) and 'color' (hex string)
    // Pieces: I, O, T, S, Z, J, L
    return {
      // Example:
      // I: {
      //     shape: [[1, 1, 1, 1]],
      //     color: '#00f0f0'
      // },
      // Add the other 6 pieces here...
    };
  }

  // TODO: Create a new random piece
  spawnPiece() {
    // 1. Get a random piece from getPieces()
    // 2. Create this.currentPiece with shape, color, x, y properties
    // 3. Position it at the top center of the board
    // 4. Check if game over (collision immediately after spawning)
  }

  // TODO: Check if a piece collides with boundaries or other pieces
  checkCollision(x, y, shape = this.currentPiece.shape) {
    // Loop through the shape matrix
    // For each filled cell (value = 1):
    //   Check if it goes outside boundaries
    //   Check if it collides with existing pieces on the board
    // Return true if collision detected, false otherwise

    return false;
  }

  // TODO: Move piece by dx, dy
  movePiece(dx, dy) {
    // 1. Check if game is over or paused
    // 2. Calculate new position
    // 3. Check for collision at new position
    // 4. If no collision, update piece position and return true
    // 5. If collision, return false

    return false;
  }

  // TODO: Rotate current piece 90 degrees clockwise
  rotatePiece() {
    // 1. Check if game is over or paused
    // 2. Create rotated version of the current piece shape
    // 3. Check if rotation causes collision
    // 4. If no collision, apply the rotation
  }

  // TODO: Rotate a matrix 90 degrees clockwise
  rotateMatrix(matrix) {
    // Mathematical transformation:
    // new[col][rows-1-row] = old[row][col]

    return matrix; // Replace with rotated matrix
  }

  // TODO: Lock the current piece to the board
  lockPiece() {
    // 1. Copy current piece shape to the board at current position
    //    (replace 0s with the piece color)
    // 2. Clear any completed lines
    // 3. Spawn a new piece
  }

  // TODO: Remove completed lines and update score
  clearLines() {
    // 1. Check each row from bottom to top
    // 2. If a row is completely filled (no 0s), remove it
    // 3. Add empty row at the top
    // 4. Update score and lines counter
    // 5. Increase game speed based on lines cleared
  }

  // TODO: Drop piece instantly to the bottom
  hardDrop() {
    // 1. Keep moving piece down until it can't move anymore
    // 2. Count the distance and add to score
    // 3. Lock the piece immediately
  }

  // Update score display
  updateScore() {
    this.scoreElement.textContent = this.score;
    this.linesElement.textContent = this.lines;
  }

  // Show game over screen
  showGameOver() {
    this.finalScoreElement.textContent = this.score;
    this.gameOverElement.style.display = "block";
  }

  // TODO: Restart the game
  restart() {
    // Reset all game state variables
    // Reinitialize board
    // Hide game over screen
  }

  // TODO: Set up keyboard event listeners
  setupEventListeners() {
    // Listen for keydown events
    // Handle: ArrowLeft, ArrowRight, ArrowDown, ArrowUp, Space, KeyP, KeyR
  }

  // TODO: Main game loop
  gameLoop() {
    // 1. Get current time
    // 2. If enough time has passed and game is not over/paused:
    //    - Try to move piece down
    //    - If can't move down, lock the piece
    // 3. Draw the game
    // 4. Schedule next frame with requestAnimationFrame
  }

  // TODO: Draw everything on the canvas
  draw() {
    // 1. Clear the canvas (fill with black)
    // 2. Draw the board (locked pieces)
    // 3. Draw the current falling piece
    // 4. Draw the grid lines
    // 5. Draw pause text if paused
  }

  // TODO: Draw the game board
  drawBoard() {
    // Loop through the board array
    // For each non-zero cell, draw a colored rectangle
  }

  // TODO: Draw a piece
  drawPiece(piece) {
    // Loop through the piece shape
    // For each filled cell, draw a rectangle at the correct position
  }

  // Draw grid lines (helper method - optional)
  drawGrid() {
    this.ctx.strokeStyle = "#333";
    this.ctx.lineWidth = 1;

    // Vertical lines
    for (let col = 0; col <= this.BOARD_WIDTH; col++) {
      this.ctx.beginPath();
      this.ctx.moveTo(col * this.CELL_SIZE, 0);
      this.ctx.lineTo(col * this.CELL_SIZE, this.canvas.height);
      this.ctx.stroke();
    }

    // Horizontal lines
    for (let row = 0; row <= this.BOARD_HEIGHT; row++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, row * this.CELL_SIZE);
      this.ctx.lineTo(this.canvas.width, row * this.CELL_SIZE);
      this.ctx.stroke();
    }
  }
}

// Start the game when page loads
window.addEventListener("load", () => {
  new TetrisGame();
});
