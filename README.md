# Tetris Game - Coding Session

Welcome to the Tetris game development session! Today we'll build a fully functional Tetris game using vanilla JavaScript and HTML5 Canvas.

## What We'll Build

By the end of this session, you'll have created:

- A working Tetris game with all 7 classic pieces (I, O, T, S, Z, J, L)
- Piece movement, rotation, and collision detection
- Line clearing and scoring system
- Game loop with automatic piece dropping
- Keyboard controls and game over handling

## Getting Started

1. Open `index.html` in your web browser to see the game template
2. Open `tetris.js` in your code editor - this is where we'll write our game logic
3. Follow along as we build each component step by step

## Session Agenda

### Phase 1: Setup & Basic Drawing (20 min)

- [ ] Set up the game canvas and basic structure
- [ ] Create the game board representation
- [ ] Implement basic drawing functions

### Phase 2: Tetris Pieces (25 min)

- [ ] Define the 7 Tetris pieces as matrices
- [ ] Implement piece spawning
- [ ] Add basic piece movement (left/right/down)

### Phase 3: Core Game Logic (25 min)

- [ ] Build collision detection system
- [ ] Implement piece rotation
- [ ] Add piece locking mechanism
- [ ] Create line clearing algorithm

### Phase 4: Game Features (20 min)

- [ ] Add scoring system
- [ ] Implement game over detection
- [ ] Add keyboard controls
- [ ] Create the main game loop

## Project Structure

```
tetris-js/
├── index.html     # Game HTML template (provided)
├── tetris.js      # Your game logic goes here
└── README.md      # This file
```

## Key Concepts We'll Learn

### 1. HTML5 Canvas

- Drawing shapes and rectangles
- Canvas coordinate system
- 2D rendering context

### 2. Game Development Patterns

- Game loop architecture
- State management
- Event handling

### 3. Tetris-Specific Logic

- Grid-based game representation
- Collision detection algorithms
- Matrix transformations (rotation)

## Helpful Resources

### Canvas API Basics

```javascript
// Get canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.fillStyle = "#ff0000"; // Red color
ctx.fillRect(x, y, width, height);
```

### 2D Array (Game Board)

```javascript
// Create a 10x20 grid
const board = [];
for (let row = 0; row < 20; row++) {
  board[row] = [];
  for (let col = 0; col < 10; col++) {
    board[row][col] = 0; // 0 = empty, color = filled
  }
}
```

### Basic Game Loop

```javascript
function gameLoop() {
  // 1. Update game state
  updateGame();

  // 2. Draw everything
  draw();

  // 3. Schedule next frame
  requestAnimationFrame(gameLoop);
}
```

## Tips for Success

1. **Start Small**: Get basic drawing working first
2. **Test Frequently**: Test each feature as you build it
3. **Use Console.log**: Debug by logging values to the console
4. **Ask Questions**: Don't hesitate to ask for help!

## Final Game Controls

Once complete, your game will have these controls:

- **←/→**: Move piece left/right
- **↓**: Soft drop (faster descent)
- **↑**: Rotate piece clockwise
- **Space**: Hard drop (instant drop)
- **P**: Pause/unpause game
- **R**: Restart game (when game over)

## What's Next?

After completing the basic game, you can explore:

- Adding sound effects
- Creating visual effects for line clears
- Implementing a next piece preview
- Adding different difficulty levels
- Creating a high score system

Happy coding! 🎮
