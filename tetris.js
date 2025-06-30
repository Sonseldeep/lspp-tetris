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
    this.CELL_SIZE = 32;

    // Game state variables
    this.board = [];
    this.currentPiece = null;
    this.score = 0;
    this.lines = 0;
    this.gameOver = false;
    this.paused = false;
    this.dropTime = 0;
    this.dropInterval = 1000;

    // For smooth drop
    this.lastTime = 0;

    // Initialize the game
    this.initBoard();
    this.spawnPiece();
    this.setupEventListeners();
    this.gameLoop();
  }

  initBoard() {
    this.board = [];
    for (let row = 0; row < this.BOARD_HEIGHT; row++) {
      this.board.push(new Array(this.BOARD_WIDTH).fill(0));
    }
  }

  getPieces() {
    return {
      I: {
        shape: [
          [0, 0, 0, 0],
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        color: "#00f0f0",
      },
      O: {
        shape: [
          [1, 1],
          [1, 1],
        ],
        color: "#f0f000",
      },
      T: {
        shape: [
          [0, 1, 0],
          [1, 1, 1],
          [0, 0, 0],
        ],
        color: "#a000f0",
      },
      S: {
        shape: [
          [0, 1, 1],
          [1, 1, 0],
          [0, 0, 0],
        ],
        color: "#00f000",
      },
      Z: {
        shape: [
          [1, 1, 0],
          [0, 1, 1],
          [0, 0, 0],
        ],
        color: "#f00000",
      },
      J: {
        shape: [
          [1, 0, 0],
          [1, 1, 1],
          [0, 0, 0],
        ],
        color: "#0000f0",
      },
      L: {
        shape: [
          [0, 0, 1],
          [1, 1, 1],
          [0, 0, 0],
        ],
        color: "#f0a000",
      },
    };
  }

  spawnPiece() {
    const pieces = this.getPieces();
    const keys = Object.keys(pieces);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    const piece = pieces[randKey];
    this.currentPiece = {
      shape: piece.shape.map((row) => row.slice()),
      color: piece.color,
      x: Math.floor((this.BOARD_WIDTH - piece.shape[0].length) / 2),
      y: 0,
    };
    if (
      this.checkCollision(
        this.currentPiece.x,
        this.currentPiece.y,
        this.currentPiece.shape
      )
    ) {
      this.gameOver = true;
      this.showGameOver();
    }
  }

  checkCollision(x, y, shape = this.currentPiece.shape) {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (!shape[row][col]) continue;
        let newX = x + col;
        let newY = y + row;
        if (
          newX < 0 ||
          newX >= this.BOARD_WIDTH ||
          newY >= this.BOARD_HEIGHT ||
          (newY >= 0 && this.board[newY][newX])
        ) {
          return true;
        }
      }
    }
    return false;
  }

  movePiece(dx, dy) {
    if (this.gameOver || this.paused) return false;
    const { x, y, shape } = this.currentPiece;
    if (!this.checkCollision(x + dx, y + dy, shape)) {
      this.currentPiece.x += dx;
      this.currentPiece.y += dy;
      return true;
    }
    return false;
  }

  rotatePiece() {
    if (this.gameOver || this.paused) return;
    const { shape, x, y } = this.currentPiece;
    const rotated = this.rotateMatrix(shape);
    // Wall kick: try shifting left/right if collision
    for (let offset of [0, -1, 1, -2, 2]) {
      if (!this.checkCollision(x + offset, y, rotated)) {
        this.currentPiece.shape = rotated;
        this.currentPiece.x += offset;
        return;
      }
    }
  }

  rotateMatrix(matrix) {
    const N = matrix.length;
    const result = Array.from({ length: N }, () => Array(N).fill(0));
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        result[col][N - 1 - row] = matrix[row][col];
      }
    }
    return result;
  }

  lockPiece() {
    const { shape, x, y, color } = this.currentPiece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          let boardY = y + row;
          let boardX = x + col;
          if (
            boardY >= 0 &&
            boardY < this.BOARD_HEIGHT &&
            boardX >= 0 &&
            boardX < this.BOARD_WIDTH
          ) {
            this.board[boardY][boardX] = color;
          }
        }
      }
    }
    this.clearLines();
    this.spawnPiece();
  }

  clearLines() {
    let linesCleared = 0;
    for (let row = this.BOARD_HEIGHT - 1; row >= 0; row--) {
      if (this.board[row].every((cell) => cell)) {
        this.board.splice(row, 1);
        this.board.unshift(new Array(this.BOARD_WIDTH).fill(0));
        linesCleared++;
        row++; // Check same row again after unshift
      }
    }
    if (linesCleared > 0) {
      this.score += [0, 100, 300, 500, 800][linesCleared];
      this.lines += linesCleared;
      // Speed up
      this.dropInterval = Math.max(100, 1000 - this.lines * 20);
      this.updateScore();
    }
  }

  updateScore() {
    this.scoreElement.textContent = this.score;
    this.linesElement.textContent = this.lines;
  }

  showGameOver() {
    this.finalScoreElement.textContent = this.score;
    this.gameOverElement.style.display = "flex";
  }

  restart() {
    this.score = 0;
    this.lines = 0;
    this.gameOver = false;
    this.paused = false;
    this.dropInterval = 1000;
    this.updateScore();
    this.initBoard();
    this.spawnPiece();
    this.gameOverElement.style.display = "none";
  }

  setupEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (this.gameOver) {
        if (e.code === "KeyR") this.restart();
        return;
      }
      if (this.paused && e.code !== "KeyP") return;
      switch (e.code) {
        case "ArrowLeft":
          this.movePiece(-1, 0);
          break;
        case "ArrowRight":
          this.movePiece(1, 0);
          break;
        case "ArrowDown":
          this.movePiece(0, 1);
          break;
        case "ArrowUp":
          this.rotatePiece();
          break;
        case "Space":
          // Hard drop
          while (this.movePiece(0, 1)) {}
          this.lockPiece();
          break;
        case "KeyP":
          this.paused = !this.paused;
          break;
        case "KeyR":
          this.restart();
          break;
      }
    });
    // Restart button (if you have one)
    const restartBtn = document.getElementById("restartBtn");
    if (restartBtn) {
      restartBtn.onclick = () => this.restart();
    }
  }

  gameLoop(now = 0) {
    if (!this.lastTime) this.lastTime = now;
    const delta = now - this.lastTime;
    if (!this.gameOver && !this.paused) {
      this.dropTime += delta;
      if (this.dropTime > this.dropInterval) {
        if (!this.movePiece(0, 1)) {
          this.lockPiece();
        }
        this.dropTime = 0;
      }
    }
    this.draw();
    this.lastTime = now;
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  draw() {
    // Gradient background
    const grad = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    grad.addColorStop(0, "#232946");
    grad.addColorStop(1, "#121629");
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawBoard();
    if (this.currentPiece && !this.gameOver) this.drawPiece(this.currentPiece);

    this.drawGrid();

    // Pause overlay
    if (this.paused && !this.gameOver) {
      this.ctx.save();
      this.ctx.globalAlpha = 0.7;
      this.ctx.fillStyle = "#232946";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.globalAlpha = 1;
      this.ctx.fillStyle = "#fff";
      this.ctx.font = "bold 40px 'Segoe UI', Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        "PAUSED",
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      this.ctx.font = "20px 'Segoe UI', Arial";
      this.ctx.fillText(
        "Press P to resume",
        this.canvas.width / 2,
        this.canvas.height / 2 + 40
      );
      this.ctx.restore();
    }
  }

  drawBoard() {
    for (let row = 0; row < this.BOARD_HEIGHT; row++) {
      for (let col = 0; col < this.BOARD_WIDTH; col++) {
        const cell = this.board[row][col];
        if (cell) {
          this.drawCell(col, row, cell);
        }
      }
    }
  }

  drawPiece(piece) {
    const { shape, color, x, y } = piece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          this.drawCell(x + col, y + row, color);
        }
      }
    }
  }

  drawCell(x, y, color) {
    const px = x * this.CELL_SIZE;
    const py = y * this.CELL_SIZE;
    // Shadow
    this.ctx.save();
    this.ctx.shadowColor = "#000a";
    this.ctx.shadowBlur = 8;
    // Block
    this.ctx.fillStyle = color;
    this.ctx.fillRect(px + 1, py + 1, this.CELL_SIZE - 2, this.CELL_SIZE - 2);
    // Glossy effect
    this.ctx.globalAlpha = 0.25;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(
      px + 2,
      py + 2,
      this.CELL_SIZE - 4,
      this.CELL_SIZE / 2 - 2
    );
    this.ctx.globalAlpha = 1;
    this.ctx.restore();
    // Border
    this.ctx.strokeStyle = "#fff3";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(px + 1, py + 1, this.CELL_SIZE - 2, this.CELL_SIZE - 2);
  }

  drawGrid() {
    this.ctx.save();
    this.ctx.strokeStyle = "#fff1";
    this.ctx.lineWidth = 1;
    for (let col = 0; col <= this.BOARD_WIDTH; col++) {
      this.ctx.beginPath();
      this.ctx.moveTo(col * this.CELL_SIZE, 0);
      this.ctx.lineTo(col * this.CELL_SIZE, this.canvas.height);
      this.ctx.stroke();
    }
    for (let row = 0; row <= this.BOARD_HEIGHT; row++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, row * this.CELL_SIZE);
      this.ctx.lineTo(this.canvas.width, row * this.CELL_SIZE);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
}

window.addEventListener("load", () => {
  new TetrisGame();
});
