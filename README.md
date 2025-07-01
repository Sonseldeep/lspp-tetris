# 🎮 Enhanced Tetris Game with Matrix Rain Effect

<div align="center">

![Tetris Game Screenshot](https://img.shields.io/badge/Game-Tetris-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)
![Mobile](https://img.shields.io/badge/Mobile-Friendly-green)

**🌟 A modern, feature-rich Tetris game with dramatic sound effects, visual celebrations, and Matrix-style background rain! 🌟**

[🎮 **PLAY NOW**](https://sonseldeep.github.io/lspp-tetris/) | [📂 **Clone Repository**](https://github.com/Sonseldeep/lspp-tetris.git)

</div>

---

## 🚀 **Live Demo**

🎯 **Play the game now**: [https://sonseldeep.github.io/lspp-tetris/](https://sonseldeep.github.io/lspp-tetris/)

---

## ✨ **Features Overview**

### 🎵 **Intensive Sound System**

- **Web Audio API** generated sound effects for every action
- **Dramatic line clear sounds** with ascending melodies
- **Epic Tetris celebration** with bass and harmony
- **Level up fanfares** and **game over sequences**
- **Movement feedback** sounds for rotation, drops, and piece placement

### 🎆 **Visual Effects & Celebrations**

- **Particle explosion system** for line clears and Tetris achievements
- **Screen shake effects** for dramatic impact
- **Sparkling level-up animations** across the entire screen
- **Dynamic color particles** with realistic physics (gravity, fade)
- **Visual synchronization** with sound effects

### 🎯 **Advanced Gameplay Features**

- **Next piece preview** with 3D-style rendering
- **Hold piece functionality** (press C to hold/swap pieces)
- **Ghost piece projection** showing drop location
- **Official Tetris scoring** system with proper multipliers
- **Progressive difficulty** with faster drop speeds per level

### 🏆 **Competitive Elements**

- **High score system** with persistent localStorage
- **Top 10 leaderboard** with automatic ranking
- **Achievement notifications** for new high scores
- **Difficulty multipliers** affecting final scores

### 🎮 **Difficulty System**

- **🟢 Easy Mode**: Slower pace, 0.8x score multiplier
- **🔵 Normal Mode**: Standard gameplay, 1.0x multiplier
- **🟠 Hard Mode**: Faster drops, 1.3x score multiplier
- **🔴 Extreme Mode**: Ultra-fast, 1.6x score multiplier
- **Live difficulty switching** during gameplay

### 🐸 **Animated Frog Companion**

- **Mood-based animations** reacting to your performance
- **Score-triggered celebrations** with special animations
- **Real-time emotional feedback** based on game state
- **Tetris achievement reactions** with explosive celebrations

### 🌧️ **Matrix Rain Background**

- **Multi-cultural character set**: Nepali, Korean, Japanese, Greek
- **Scientific formulas**: Physics, chemistry, mathematics, programming
- **Dynamic color system** with 15+ vibrant colors
- **Responsive performance** optimized for all screen sizes
- **Organic movement patterns** with variable speeds and trails

### 📱 **Mobile & Touch Support**

- **Intuitive touch controls**: Swipe to move/rotate, tap to drop
- **Responsive design** for phones, tablets, and desktops
- **Optimized UI scaling** for different screen sizes
- **Touch-friendly difficulty selection** and game controls

### 🎨 **Modern UI Design**

- **Matrix-themed styling** with green glow effects
- **Glassmorphism design** with backdrop blur effects
- **Smooth animations** and transitions throughout
- **Interactive welcome screen** with feature highlights
- **Professional game over screen** with detailed statistics

---

## 🔧 **Quick Start**

### 🌐 **Option 1: Play Online (Easiest)**

Simply visit: [https://sonseldeep.github.io/lspp-tetris/](https://sonseldeep.github.io/lspp-tetris/)

### 💾 **Option 2: Clone & Run Locally**

```bash
# Clone the repository
git clone https://github.com/Sonseldeep/lspp-tetris.git

# Navigate to project directory
cd lspp-tetris

# Open with any method below:

# Method 1: Direct file opening
# Simply open index.html in your browser

# Method 2: Local server (recommended)
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx serve .

# PHP (if you have it)
php -S localhost:8000
```

Then open your browser and go to `http://localhost:8000`

### 📦 **No Dependencies Required!**

- ✅ Pure vanilla JavaScript (ES6+)
- ✅ Standard HTML5 Canvas
- ✅ CSS3 with modern features
- ✅ Web Audio API for sounds
- ✅ Works in all modern browsers

---

## 🎮 **How to Play**

### 🚀 **Getting Started**

1. **Launch the game** by clicking "🎮 Start Game" or pressing `SPACE`
2. **Choose difficulty** from the left panel (🟢 Easy → 🔴 Extreme)
3. **Use controls** to move and rotate Tetris pieces
4. **Clear lines** by filling complete horizontal rows
5. **Achieve Tetris** by clearing 4 lines simultaneously for massive points!

### ⌨️ **Desktop Controls**

| Key     | Action                     |
| ------- | -------------------------- |
| `←` `→` | Move piece left/right      |
| `↓`     | Soft drop (faster descent) |
| `↑`     | Rotate piece clockwise     |
| `SPACE` | Hard drop (instant drop)   |
| `C`     | Hold/swap current piece    |
| `P`     | Pause/unpause game         |
| `R`     | Restart game               |

### 📱 **Mobile Touch Controls**

| Gesture              | Action                    |
| -------------------- | ------------------------- |
| **Swipe Left/Right** | Move piece horizontally   |
| **Swipe Down**       | Soft drop                 |
| **Swipe Up**         | Hard drop (instant)       |
| **Tap**              | Rotate piece              |
| **UI Buttons**       | Difficulty, hold, restart |

### 🎯 **Scoring System (Official Tetris Rules)**

- **Single Line**: 40 × (level + 1) × difficulty multiplier
- **Double Lines**: 100 × (level + 1) × difficulty multiplier
- **Triple Lines**: 300 × (level + 1) × difficulty multiplier
- **TETRIS (4 lines)**: 1200 × (level + 1) × difficulty multiplier
- **Soft Drop**: +1 point per cell dropped
- **Hard Drop**: +2 points per cell dropped

### 🏆 **Difficulty Bonuses**

- **🟢 Easy**: 0.8× score (great for learning)
- **🔵 Normal**: 1.0× score (standard challenge)
- **🟠 Hard**: 1.3× score (increased difficulty)
- **🔴 Extreme**: 1.6× score (ultimate challenge)

### 🎊 **Special Features**

- **Hold System**: Store a piece for later use (C key)
- **Ghost Piece**: See where your piece will land
- **Level Progression**: Every 10 lines = next level
- **Speed Increase**: Pieces drop faster as you level up
- **Visual Celebrations**: Particle effects for achievements
- **Sound Feedback**: Audio cues for every action

---

## 🛠️ **Technical Details**

### 📋 **System Requirements**

- **Modern web browser** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **JavaScript enabled**
- **HTML5 Canvas support**
- **Web Audio API** (for sound effects)
- **localStorage** (for high scores)

### 🏗️ **Architecture**

```
lspp-tetris/
├── index.html          # Main game interface & styling
├── tetris.js           # Game logic & systems
├── README.md           # This documentation
└── [GitHub Pages]      # Automatic deployment
```

### 🎵 **Audio System**

- **SoundManager Class**: Procedural sound generation
- **Web Audio API**: High-quality, browser-native audio
- **Dynamic Tones**: Frequency-based sound effects
- **No External Files**: All sounds generated in real-time

### 🎨 **Visual Effects Engine**

- **VisualEffects Class**: Particle system management
- **Canvas Rendering**: Hardware-accelerated graphics
- **Physics Simulation**: Gravity, momentum, fade effects
- **Performance Optimized**: 60fps particle animations

### 💾 **Data Persistence**

- **High Scores**: Stored in browser localStorage
- **Settings**: Difficulty preferences saved locally
- **Cross-Session**: Data persists between browser sessions

---

## 🌟 **Advanced Features**

### 🔊 **Sound Effects Breakdown**

- **Movement**: Subtle sine wave tones
- **Rotation**: Square wave confirmation
- **Landing**: Triangle wave impact
- **Line Clear**: Ascending melodic sequence
- **Tetris**: Epic multi-layered celebration
- **Level Up**: Triumphant musical progression
- **Game Over**: Dramatic descending sequence

### 🎆 **Visual Effects Details**

- **Line Clear**: 20 particles per cleared line
- **Tetris Celebration**: 100+ colorful explosion particles
- **Level Up**: 30 sparkling particles across screen
- **Screen Shake**: Intensity varies with achievement level
- **Particle Physics**: Realistic gravity and momentum

### 🐸 **Frog Companion Moods**

- **😴 Neutral**: Starting state (0 points)
- **🤔 Thinking**: First points scored
- **😊 Content**: Moderate progress (500+ points)
- **😄 Happy**: Good performance (2000+ points)
- **😎 Cool**: Expert level (5000+ points)
- **🤩 Excited**: Master level (10000+ points)
- **🎉 Celebration**: Special Tetris achievements

---

## 🎯 **Performance Tips**

### 🏆 **Scoring Strategies**

1. **Focus on Tetris**: 4-line clears give massive point bonuses
2. **Use Hold Wisely**: Save I-pieces for Tetris setups
3. **Higher Difficulty**: More challenging but better score multipliers
4. **Level Progression**: Higher levels = higher point multipliers
5. **Avoid Gaps**: Keep your stack clean and organized

### 📱 **Mobile Optimization**

- **Touch Sensitivity**: Adjust gesture speed to your preference
- **Screen Orientation**: Landscape mode recommended for tablets
- **Performance**: Game optimized for 60fps on modern mobile devices

---

## 🤝 **Contributing**

### 🐛 **Bug Reports**

Found a bug? Please [open an issue](https://github.com/Sonseldeep/lspp-tetris/issues) with:

- Browser and version
- Device type (desktop/mobile)
- Steps to reproduce
- Expected vs actual behavior

### 💡 **Feature Suggestions**

Have ideas for improvements? We'd love to hear them!

- [Create a feature request](https://github.com/Sonseldeep/lspp-tetris/issues)
- Describe your idea clearly
- Explain how it would improve the game

### 🔧 **Development**

Want to contribute code?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📜 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 🎉 **Credits & Acknowledgments**

### 👨‍💻 **Developer**

- **Sonseldeep** - Main developer and designer
- GitHub: [@Sonseldeep](https://github.com/Sonseldeep)

### 🎮 **Game Design**

- Based on the classic **Tetris** game concept
- Enhanced with modern web technologies
- Inspired by **Matrix** visual aesthetics

### 🛠️ **Technologies Used**

- **Vanilla JavaScript** for game logic
- **HTML5 Canvas** for rendering
- **CSS3** for styling and animations
- **Web Audio API** for sound generation
- **GitHub Pages** for hosting

---

## 📞 **Support**

### 🆘 **Need Help?**

- 📖 **Documentation**: Read this README thoroughly
- 🐛 **Issues**: [GitHub Issues Page](https://github.com/Sonseldeep/lspp-tetris/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Sonseldeep/lspp-tetris/discussions)

### 🌐 **Links**

- **🎮 Play Game**: [https://sonseldeep.github.io/lspp-tetris/](https://sonseldeep.github.io/lspp-tetris/)
- **📂 Repository**: [https://github.com/Sonseldeep/lspp-tetris](https://github.com/Sonseldeep/lspp-tetris)
- **👤 Developer**: [https://github.com/Sonseldeep](https://github.com/Sonseldeep)

---

<div align="center">

**🎮 Enjoy the most enhanced Tetris experience on the web! 🎮**

_Built with ❤️ by [Sonseldeep](https://github.com/Sonseldeep)_

⭐ **Star this repo if you enjoy the game!** ⭐

</div>
