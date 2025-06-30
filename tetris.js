class TetrisGame {
  constructor() {
    // Canvas and context
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    // UI elements
    this.scoreElement = document.getElementById("score");
    this.linesElement = document.getElementById("lines");
    this.levelElement = document.getElementById("level");
    this.gameOverElement = document.getElementById("gameOver");
    this.finalScoreElement = document.getElementById("finalScore");
    this.finalLinesElement = document.getElementById("finalLines");
    this.finalLevelElement = document.getElementById("finalLevel");
    this.nextCanvas = document.getElementById("nextCanvas");
    this.nextCtx = this.nextCanvas?.getContext("2d");
    this.holdCanvas = document.getElementById("holdCanvas");
    this.holdCtx = this.holdCanvas?.getContext("2d");

    // Game constants
    this.BOARD_WIDTH = 10;
    this.BOARD_HEIGHT = 20;
    this.CELL_SIZE = 32;

    // Game state
    this.board = [];
    this.currentPiece = null;
    this.nextPiece = null;
    this.holdPiece = null;
    this.holdUsed = false;
    this.score = 0;
    this.lines = 0;
    this.level = 0;
    this.gameOver = false;
    this.paused = false;
    this.dropTime = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;

    // Piece bag for fair randomization
    this.pieceBag = [];

    // Initialize
    this.initBoard();
    this.nextPiece = this.randomPiece();
    this.spawnPiece();
    this.updateScore(); // Initialize score display
    this.setupEventListeners();
    this.gameLoop();
    window.addEventListener("resize", () => this.resizeCanvas());
    this.resizeCanvas();
  }

  initBoard() {
    this.board = Array.from({ length: this.BOARD_HEIGHT }, () =>
      Array(this.BOARD_WIDTH).fill(0)
    );
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

  randomPiece() {
    if (this.pieceBag.length === 0) {
      this.pieceBag = Object.keys(this.getPieces());
      // Shuffle
      for (let i = this.pieceBag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.pieceBag[i], this.pieceBag[j]] = [
          this.pieceBag[j],
          this.pieceBag[i],
        ];
      }
    }
    const key = this.pieceBag.pop();
    const piece = this.getPieces()[key];
    return {
      shape: piece.shape.map((row) => row.slice()),
      color: piece.color,
      key,
      x: Math.floor((this.BOARD_WIDTH - piece.shape[0].length) / 2),
      y: 0,
    };
  }

  spawnPiece() {
    this.currentPiece = this.nextPiece;
    this.currentPiece.x = Math.floor(
      (this.BOARD_WIDTH - this.currentPiece.shape[0].length) / 2
    );
    this.currentPiece.y = 0;
    this.nextPiece = this.randomPiece();
    this.holdUsed = false;
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

  holdCurrentPiece() {
    if (this.holdUsed || this.gameOver || this.paused) return;
    if (!this.holdPiece) {
      this.holdPiece = {
        shape: this.currentPiece.shape.map((row) => row.slice()),
        color: this.currentPiece.color,
        key: this.currentPiece.key,
      };
      this.spawnPiece();
    } else {
      // Swap
      const temp = this.holdPiece;
      this.holdPiece = {
        shape: this.currentPiece.shape.map((row) => row.slice()),
        color: this.currentPiece.color,
        key: this.currentPiece.key,
      };
      this.currentPiece = {
        shape: temp.shape.map((row) => row.slice()),
        color: temp.color,
        key: temp.key,
        x: Math.floor((this.BOARD_WIDTH - temp.shape[0].length) / 2),
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
    this.holdUsed = true;
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
        row++; // Check this row again since we inserted a new row
      }
    }
    if (linesCleared > 0) {
      // Tetris scoring: 1=100, 2=300, 3=500, 4=800
      const baseScore = [0, 100, 300, 500, 800][linesCleared];
      this.score += baseScore * (this.level + 1); // Bonus for higher levels
      this.lines += linesCleared;
      this.level = Math.floor(this.lines / 10);
      this.dropInterval = Math.max(100, 1000 - this.level * 100);
      this.updateScore(); // Make sure to update UI after scoring
    }
  }

  updateScore() {
    if (this.scoreElement) {
      this.scoreElement.textContent = this.score.toLocaleString();
    }
    if (this.linesElement) {
      this.linesElement.textContent = this.lines;
    }
    if (this.levelElement) {
      this.levelElement.textContent = this.level + 1;
    }
  }

  showGameOver() {
    // Update all final stats
    if (this.finalScoreElement) {
      this.finalScoreElement.textContent = this.score.toLocaleString();
    }
    if (this.finalLinesElement) {
      this.finalLinesElement.textContent = this.lines;
    }
    if (this.finalLevelElement) {
      this.finalLevelElement.textContent = this.level + 1;
    }
    if (this.gameOverElement) {
      this.gameOverElement.style.display = "flex";
    }
  }

  restart() {
    this.score = 0;
    this.lines = 0;
    this.level = 0;
    this.gameOver = false;
    this.paused = false;
    this.dropInterval = 1000;
    this.updateScore();
    this.initBoard();
    this.pieceBag = [];
    this.nextPiece = this.randomPiece();
    this.holdPiece = null;
    this.holdUsed = false;
    this.spawnPiece();
    if (this.gameOverElement) {
      this.gameOverElement.style.display = "none";
    }
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
        case "KeyX":
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
        case "KeyC":
          this.holdCurrentPiece();
          break;
      }
    });
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
    if (this.currentPiece && !this.gameOver) {
      this.drawGhostPiece();
      this.drawPiece(this.currentPiece);
    }
    this.drawGrid();
    this.drawNextPiece();
    this.drawHoldPiece();

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

  drawPiece(piece, alpha = 1) {
    const { shape, color, x, y } = piece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          this.drawCell(x + col, y + row, color, alpha);
        }
      }
    }
  }

  drawGhostPiece() {
    // Find where the piece would land
    let { shape, x, y } = this.currentPiece;
    let ghostY = y;
    while (!this.checkCollision(x, ghostY + 1, shape)) {
      ghostY++;
    }
    this.drawPiece({ shape, color: "#fff6", x, y: ghostY }, 0.3);
  }

  drawCell(x, y, color, alpha = 1) {
    const px = x * this.CELL_SIZE;
    const py = y * this.CELL_SIZE;
    this.ctx.save();
    this.ctx.globalAlpha = alpha;
    this.ctx.shadowColor = "#000a";
    this.ctx.shadowBlur = 8;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(px + 1, py + 1, this.CELL_SIZE - 2, this.CELL_SIZE - 2);
    this.ctx.globalAlpha = 0.25 * alpha;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(
      px + 2,
      py + 2,
      this.CELL_SIZE - 4,
      this.CELL_SIZE / 2 - 2
    );
    this.ctx.globalAlpha = alpha;
    this.ctx.restore();
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

  drawNextPiece() {
    if (!this.nextCtx || !this.nextPiece) return;
    this.nextCtx.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
    this.drawMiniPiece(this.nextCtx, this.nextPiece);
  }

  drawHoldPiece() {
    if (!this.holdCtx) return;
    this.holdCtx.clearRect(0, 0, this.holdCanvas.width, this.holdCanvas.height);
    if (this.holdPiece) {
      this.drawMiniPiece(this.holdCtx, this.holdPiece);
    }
  }

  drawMiniPiece(ctx, piece) {
    const { shape, color } = piece;
    const size = this.CELL_SIZE * 0.7;
    const offsetX = (ctx.canvas.width - shape[0].length * size) / 2;
    const offsetY = (ctx.canvas.height - shape.length * size) / 2;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          ctx.save();
          ctx.shadowColor = "#000a";
          ctx.shadowBlur = 6;
          ctx.fillStyle = color;
          ctx.fillRect(
            offsetX + col * size + 1,
            offsetY + row * size + 1,
            size - 2,
            size - 2
          );
          ctx.globalAlpha = 0.25;
          ctx.fillStyle = "#fff";
          ctx.fillRect(
            offsetX + col * size + 2,
            offsetY + row * size + 2,
            size - 4,
            size / 2 - 2
          );
          ctx.globalAlpha = 1;
          ctx.restore();
          ctx.strokeStyle = "#fff3";
          ctx.lineWidth = 2;
          ctx.strokeRect(
            offsetX + col * size + 1,
            offsetY + row * size + 1,
            size - 2,
            size - 2
          );
        }
      }
    }
  }

  resizeCanvas() {
    // Responsive: keep board centered and scaled
    const minCell = Math.max(
      16,
      Math.floor(window.innerHeight / (this.BOARD_HEIGHT + 2))
    );
    this.CELL_SIZE = minCell;
    this.canvas.width = this.BOARD_WIDTH * this.CELL_SIZE;
    this.canvas.height = this.BOARD_HEIGHT * this.CELL_SIZE;
  }
}

window.addEventListener("load", () => {
  new TetrisGame();
});
