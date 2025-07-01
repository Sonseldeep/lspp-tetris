class MatrixRain {
  constructor() {
    this.canvas = document.getElementById("matrixCanvas");
    this.ctx = this.canvas.getContext("2d");

    // Enhanced Matrix characters with more diverse symbols and formulas
    this.chars =
      // Nepali - expanded with more words and concepts
      "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह२४६८०१२३४५६७८९एफजीएमजे२०२४अधिकारस्वतन्त्रताशिक्षास्वास्थ्यसुरक्षाविकासप्रकृतिसभ्यताविज्ञानप्रविधिगणितभौतिकशास्त्ररसायनजीवविज्ञानकम्प्युटरइन्टरनेटसफ्टवेयरहार्डवेयर" +
      // Korean - expanded with tech and science terms
      "안녕하세요사랑해코딩프로그래밍게임테트리스행복한나은좋아요컴퓨터스크린키보드마우스모니터과학기술수학물리화학생물학지구환경우주문명미래현재과거시간공간차원에너지물질정보데이터네트워크인터넷소프트웨어하드웨어알고리즘데이터베이스인공지능머신러닝딥러닝" +
      // Greek letters and symbols
      "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ" +
      // Extended math symbols and operators
      "∫∑∏√∞≈≠≤≥±×÷∂∆∇∈∉⊂⊃∪∩∧∨¬→↔∀∃∄∅⊆⊇⊊⊋⊕⊗⊙⊥∥∠∡∢∝∞∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋" +
      // Physics formulas and constants - expanded
      "E=mc²F=maΣF=0PV=nRTΔG=ΔH-TΔSΔE=hfλ=h/pΨ(x,t)ℏω=Eₙħ=h/2πkT=½mv²F=qE+q(v×B)F=GMm/r²v=fλE=pc∇·E=ρ/ε₀∇×B=μ₀J+μ₀ε₀∂E/∂tE=hf=hc/λΨ*Ψ=|Ψ|²iℏ∂Ψ/∂t=ĤΨc=3×10⁸m/sg=9.8m/s²" +
      // Chemistry formulas and compounds - expanded
      "C₆H₁₂O₆H₂SO₄NaClCO₂H₂OCaONH₃CH₄C₂H₆ONa₂CO₃CaCl₂MgSO₄HClO₄Al₂O₃SiO₂Fe₂O₃CuSO₄AgNO₃ZnCl₂K₂CrO₄NH₄NO₃Ca(OH)₂Ba(NO₃)₂C₈H₁₈N₂C₁₂H₂₂O₁₁DNA→RNA→ProteinATP→ADP+PiℕaClO₄KMnO₄H₃PO₄C₆H₅OHC₆H₆" +
      // Advanced calculus and mathematical notation
      "sin(x)cos(x)tan(x)log(x)ln(x)e^x∂/∂x∮∬∭∰∱∲∳lim→∞Γ(n)Σ∞ₙ₌₁∫₋∞^∞dx∂²/∂x²∇²φ=0δ(x)θ(x)ζ(s)Γ(z)B(p,q)Li₂(z)ψ(x)∏ᵢ₌₁ⁿ∑ⱼ₌₀^∞∫ᵃᵇf(x)dx" +
      // Binary and hexadecimal - patterns
      "01100001011000100110001101100100011001010110011001100111011010000110100101101010011010110110110001101101011011100110111101110000011100010111001001110011011101000111010101110110011101110111100001111001011110100101100001000010" +
      "0xFF00FF0xDEADBEEF0x1337C0DE0xCAFEBABE0xFEEDFACE0x8BADF00D0xC0FFEEAA0xBAADF00D0xBEEFFACE0xDEADC0DE" +
      // Programming symbols and operators
      "&&||!===!==++--+=−=*=/=%=>><<&|^~?:[]{}()<>==!=<=>>=<<=>>>&=|=^=**//%%&&||!=?:" +
      // Original Matrix characters (Japanese katakana and basic alphanumeric)
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?~`" +
      // Japanese scientific and technological terms - expanded
      "量子力学相対性理論電磁気学熱力学統計力学原子物理学宇宙論素粒子物理学天体物理学地球物理学数学解析学代数学幾何学統計学確率論情報理論計算機科学人工知能機械学習深層学習自然言語処理画像認識音声認識パターン認識データマイニングビッグデータクラウドコンピューティング量子コンピューティング";

    // Enhanced responsive font size with better mobile scaling
    this.fontSize = this.getResponsiveFontSize();
    this.columns = 0;
    this.drops = [];

    // More vibrant and diverse color palette
    this.colors = [
      "#00ff00",
      "#0080ff",
      "#ff0080",
      "#80ff00",
      "#ff8000",
      "#00ffff",
      "#ff00ff",
      "#ffff00",
      "#8000ff",
      "#ff0040",
      "#40ff00",
      "#0040ff",
      "#ff4000",
      "#00ff80",
      "#8040ff",
    ];

    this.resize();
    this.init();
    this.animate();

    window.addEventListener("resize", () => this.resize());
  }

  getResponsiveFontSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Better responsive scaling for readability
    if (width < 480) {
      // Small mobile
      return Math.max(8, Math.floor(width / 48));
    } else if (width < 768) {
      // Mobile
      return Math.max(10, Math.floor(width / 60));
    } else if (width < 1024) {
      // Tablet
      return Math.max(12, Math.floor(width / 75));
    } else if (width < 1440) {
      // Desktop
      return Math.max(14, Math.floor(width / 90));
    } else if (width < 1920) {
      // Large desktop
      return Math.max(16, Math.floor(width / 110));
    } else {
      // Ultra-wide screens
      return Math.max(18, Math.floor(width / 130));
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.fontSize = this.getResponsiveFontSize();
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.init();
  }

  init() {
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = {
        y: Math.random() * this.canvas.height,
        speed: Math.random() * 6 + 2, // Variable speed (2-8)
        chars: [],
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        intensity: Math.random() * 0.5 + 0.5, // Brightness variation
        lastChangeTime: 0,
      };

      // Variable trail length for more organic look
      const trailLength = Math.floor(Math.random() * 20) + 12; // 12-32 characters
      for (let j = 0; j < trailLength; j++) {
        this.drops[i].chars[j] =
          this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }
  }

  animate() {
    const currentTime = Date.now();

    // Much more subtle fade for better text visibility
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.008)"; // Much more subtle fade
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `${this.fontSize}px 'Courier New', 'Monaco', 'Menlo', monospace`;
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";

    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i];

      // Draw the character trail with enhanced readability
      for (let j = 0; j < drop.chars.length; j++) {
        const char = drop.chars[j];
        const x = i * this.fontSize;
        const y = drop.y - j * this.fontSize;

        if (y > -this.fontSize && y < this.canvas.height + this.fontSize) {
          // Calculate alpha based on position in trail with smoother falloff
          const distanceFromHead = j / drop.chars.length;
          const alpha = Math.max(
            0,
            (1 - Math.pow(distanceFromHead, 1.2)) * drop.intensity
          );

          // Enhanced head character with less blur for readability
          if (j === 0) {
            // Bright white head with subtle glow
            this.ctx.fillStyle = "#ffffff";
            this.ctx.shadowColor = drop.color;
            this.ctx.shadowBlur = 2; // Reduced blur for better readability
          } else if (j === 1) {
            // Second character slightly dimmed but still bright
            this.ctx.fillStyle = drop.color + "ee"; // High opacity
            this.ctx.shadowColor = drop.color;
            this.ctx.shadowBlur = 1;
          } else {
            // Trail characters with smooth alpha falloff - higher minimum visibility
            const hexAlpha = Math.floor(Math.max(alpha * 255, 30))
              .toString(16)
              .padStart(2, "0");
            this.ctx.fillStyle = drop.color + hexAlpha;
            this.ctx.shadowBlur = 0;
          }

          this.ctx.fillText(char, x, y);
        }
      }

      // Enhanced movement with controlled speed for better visibility
      const acceleration = 1 + drop.speed * 0.05; // Reduced acceleration
      drop.y += drop.speed * acceleration * 0.6; // Slower overall speed for readability

      // Reset drop when it goes off screen with enhanced randomization
      if (drop.y > this.canvas.height + drop.chars.length * this.fontSize) {
        drop.y =
          -drop.chars.length * this.fontSize -
          Math.random() * this.canvas.height * 0.3;
        drop.speed = Math.random() * 6 + 2; // New random speed
        drop.color =
          this.colors[Math.floor(Math.random() * this.colors.length)];
        drop.intensity = Math.random() * 0.5 + 0.5;
        drop.lastChangeTime = currentTime;

        // Refresh more characters for variety
        const refreshCount = Math.floor(Math.random() * 12) + 5; // 5-16 characters
        for (let j = 0; j < refreshCount; j++) {
          const randomIndex = Math.floor(Math.random() * drop.chars.length);
          drop.chars[randomIndex] =
            this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }

      // Frequent character changes for dynamic effect but not too fast
      if (Math.random() < 0.03) {
        // Balanced frequency
        const randomIndex = Math.floor(Math.random() * drop.chars.length);
        drop.chars[randomIndex] =
          this.chars[Math.floor(Math.random() * this.chars.length)];
      }

      // Occasional color changes for added dynamism
      if (currentTime - drop.lastChangeTime > 8000 && Math.random() < 0.0005) {
        drop.color =
          this.colors[Math.floor(Math.random() * this.colors.length)];
        drop.lastChangeTime = currentTime;
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

class SoundManager {
  constructor() {
    this.sounds = {};
    this.audioContext = null;
    this.initialized = false;
    this.volume = 0.7;
    this.initializeAudio();
  }

  async initializeAudio() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.createSounds();
      this.initialized = true;
    } catch (error) {
      console.warn('Audio not supported:', error);
    }
  }

  createSounds() {
    // Create dramatic sound effects using Web Audio API
    this.sounds = {
      move: () => this.createTone(300, 0.05, 'sine'),
      rotate: () => this.createTone(400, 0.08, 'square'),
      land: () => this.createTone(200, 0.1, 'triangle'),
      lineClear: () => this.createLineClearSound(),
      tetris: () => this.createTetrisSound(),
      levelUp: () => this.createLevelUpSound(),
      gameOver: () => this.createGameOverSound(),
      drop: () => this.createDropSound(),
      hold: () => this.createHoldSound(),
    };
  }

  createTone(frequency, duration, type = 'sine') {
    if (!this.audioContext || this.audioContext.state === 'suspended') return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  createLineClearSound() {
    if (!this.audioContext) return;
    
    // Ascending melodic sequence for line clear
    const frequencies = [440, 554, 659, 880];
    frequencies.forEach((freq, i) => {
      setTimeout(() => {
        this.createTone(freq, 0.15, 'square');
      }, i * 50);
    });
  }

  createTetrisSound() {
    if (!this.audioContext) return;
    
    // Epic Tetris celebration sound
    const melody = [659, 523, 587, 698, 659, 523, 440, 523, 587, 659, 698, 880];
    melody.forEach((freq, i) => {
      setTimeout(() => {
        this.createTone(freq, 0.2, 'sawtooth');
        if (i % 2 === 0) {
          this.createTone(freq * 0.5, 0.2, 'sine'); // Bass
        }
      }, i * 80);
    });
  }

  createLevelUpSound() {
    if (!this.audioContext) return;
    
    // Triumphant level up sound
    const frequencies = [440, 523, 659, 880, 1047];
    frequencies.forEach((freq, i) => {
      setTimeout(() => {
        this.createTone(freq, 0.3, 'sawtooth');
        this.createTone(freq * 1.5, 0.2, 'sine');
      }, i * 60);
    });
  }

  createGameOverSound() {
    if (!this.audioContext) return;
    
    // Dramatic game over sequence
    const frequencies = [440, 415, 392, 370, 349, 330, 311, 294];
    frequencies.forEach((freq, i) => {
      setTimeout(() => {
        this.createTone(freq, 0.4, 'triangle');
      }, i * 100);
    });
  }

  createDropSound() {
    if (!this.audioContext) return;
    
    // Swoosh drop sound
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createTone(800 - i * 150, 0.03, 'sawtooth');
      }, i * 10);
    }
  }

  createHoldSound() {
    if (!this.audioContext) return;
    
    // Gentle hold sound
    this.createTone(523, 0.1, 'sine');
    setTimeout(() => this.createTone(659, 0.1, 'sine'), 50);
  }

  play(soundName) {
    if (!this.initialized || !this.sounds[soundName]) return;
    
    // Resume audio context if suspended (required by browsers)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    
    this.sounds[soundName]();
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }
}

class HighScoreManager {
  constructor() {
    this.scores = this.loadScores();
  }

  loadScores() {
    try {
      const saved = localStorage.getItem('tetris-highscores');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveScores() {
    try {
      localStorage.setItem('tetris-highscores', JSON.stringify(this.scores));
    } catch (error) {
      console.warn('Could not save high scores:', error);
    }
  }

  addScore(score, lines, level) {
    const entry = {
      score,
      lines,
      level,
      date: new Date().toLocaleDateString(),
    };
    
    this.scores.push(entry);
    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10); // Keep top 10
    this.saveScores();
    
    return this.getPosition(score);
  }

  getPosition(score) {
    return this.scores.findIndex(entry => entry.score === score) + 1;
  }

  getHighScore() {
    return this.scores.length > 0 ? this.scores[0].score : 0;
  }

  getScores() {
    return [...this.scores];
  }
}

class VisualEffects {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.particles = [];
    this.shakeOffset = { x: 0, y: 0 };
    this.shakeTime = 0;
  }

  addLineClearEffect(lines) {
    // Create explosion particles for cleared lines
    lines.forEach(lineY => {
      for (let i = 0; i < 20; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: lineY * 32,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1,
          decay: 0.02,
          color: `hsl(${Math.random() * 60 + 60}, 100%, 50%)`,
          size: Math.random() * 4 + 2,
        });
      }
    });

    // Screen shake for dramatic effect
    this.addScreenShake(lines.length * 150);
  }

  addTetrisEffect() {
    // Massive explosion for Tetris
    for (let i = 0; i < 100; i++) {
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20,
        life: 1,
        decay: 0.01,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 8 + 4,
      });
    }

    this.addScreenShake(500);
  }

  addLevelUpEffect() {
    // Sparkling effect for level up
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: 0,
        vy: -2,
        life: 1,
        decay: 0.015,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
        size: Math.random() * 3 + 1,
      });
    }
  }

  addScreenShake(duration) {
    this.shakeTime = Math.max(this.shakeTime, duration);
  }

  update() {
    // Update particles
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;
      particle.vy += 0.1; // Gravity
      return particle.life > 0;
    });

    // Update screen shake
    if (this.shakeTime > 0) {
      this.shakeTime -= 16; // Assuming 60fps
      const intensity = this.shakeTime / 100;
      this.shakeOffset.x = (Math.random() - 0.5) * intensity * 8;
      this.shakeOffset.y = (Math.random() - 0.5) * intensity * 8;
    } else {
      this.shakeOffset.x = 0;
      this.shakeOffset.y = 0;
    }
  }

  draw() {
    this.ctx.save();
    
    // Apply screen shake
    this.ctx.translate(this.shakeOffset.x, this.shakeOffset.y);

    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.save();
      this.ctx.globalAlpha = particle.life;
      this.ctx.fillStyle = particle.color;
      this.ctx.shadowColor = particle.color;
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });

    this.ctx.restore();
  }
}

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
    this.frogElement = document.getElementById("frog");
    this.nextCanvas = document.getElementById("nextCanvas");
    this.nextCtx = this.nextCanvas?.getContext("2d");
    this.holdCanvas = document.getElementById("holdCanvas");
    this.holdCtx = this.holdCanvas?.getContext("2d");
    this.difficultySelect = document.getElementById("difficultySelect");
    this.highScoresList = document.getElementById("highScoresList");

    // Enhanced game systems
    this.soundManager = new SoundManager();
    this.highScoreManager = new HighScoreManager();
    this.visualEffects = new VisualEffects(this.canvas, this.ctx);

    // Difficulty system
    this.difficulty = 'normal'; // easy, normal, hard, extreme
    this.difficultySettings = {
      easy: { dropSpeed: 1200, scoreMultiplier: 0.8 },
      normal: { dropSpeed: 1000, scoreMultiplier: 1.0 },
      hard: { dropSpeed: 800, scoreMultiplier: 1.3 },
      extreme: { dropSpeed: 600, scoreMultiplier: 1.6 }
    };

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
    this.dropInterval = this.difficultySettings[this.difficulty].dropSpeed;
    this.lastTime = 0;
    this.previousLevel = 0; // Track level changes
    this.clearedLines = []; // Track which lines were cleared for effects

    // Piece bag for fair randomization
    this.pieceBag = [];

    // Initialize
    this.initBoard();
    this.nextPiece = this.randomPiece();
    this.spawnPiece();
    this.updateScore(); // Initialize score display and frog
    this.setupEventListeners();
    this.setupDifficultySelector();
    this.updateHighScoresList();
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
    
    this.soundManager.play('hold');
    
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

      // Play movement sounds
      if (dx !== 0) {
        this.soundManager.play('move');
      } else if (dy > 0) {
        // Add small score for soft drop (moving down) - 1 point per cell in real Tetris
        this.score += 1;
        this.updateScore();
      }

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
        this.soundManager.play('rotate');
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

    // Play landing sound
    this.soundManager.play('land');
    
    // No points for just placing pieces in real Tetris - only for clearing lines
    this.clearLines();
    this.spawnPiece();
  }

  clearLines() {
    let linesCleared = 0;
    this.clearedLines = []; // Reset cleared lines array
    
    for (let row = this.BOARD_HEIGHT - 1; row >= 0; row--) {
      if (this.board[row].every((cell) => cell)) {
        this.clearedLines.push(row); // Track cleared line for visual effects
        this.board.splice(row, 1);
        this.board.unshift(new Array(this.BOARD_WIDTH).fill(0));
        linesCleared++;
        row++; // Check this row again since we inserted a new row
      }
    }
    
    if (linesCleared > 0) {
      // Check for level up before clearing lines
      const previousLevel = this.level;
      
      // Official Tetris scoring system with difficulty multiplier
      let baseScore;
      switch (linesCleared) {
        case 1:
          baseScore = 40; // Single
          this.soundManager.play('lineClear');
          break;
        case 2:
          baseScore = 100; // Double
          this.soundManager.play('lineClear');
          break;
        case 3:
          baseScore = 300; // Triple
          this.soundManager.play('lineClear');
          break;
        case 4:
          baseScore = 1200; // Tetris
          this.soundManager.play('tetris');
          this.visualEffects.addTetrisEffect();
          this.celebrateTetris();
          break;
        default:
          baseScore = 0;
      }

      // Apply difficulty multiplier and level bonus
      const difficultyMultiplier = this.difficultySettings[this.difficulty].scoreMultiplier;
      this.score += Math.floor(baseScore * (this.level + 1) * difficultyMultiplier);
      this.lines += linesCleared;
      this.level = Math.floor(this.lines / 10);
      
      // Update drop speed based on level and difficulty
      const baseInterval = this.difficultySettings[this.difficulty].dropSpeed;
      this.dropInterval = Math.max(50, baseInterval - this.level * 50);

      // Visual effects for line clear
      if (linesCleared < 4) {
        this.visualEffects.addLineClearEffect(this.clearedLines);
      }

      // Check for level up
      if (this.level > previousLevel) {
        this.soundManager.play('levelUp');
        this.visualEffects.addLevelUpEffect();
      }

      this.updateScore(); // Make sure to update UI after scoring
    }
  }

  celebrateTetris() {
    // Make frog super excited temporarily for Tetris
    if (this.frogElement) {
      const originalClass = this.frogElement.className;
      const originalText = this.frogElement.textContent;

      this.frogElement.textContent = "🎉";
      this.frogElement.className = "frog excited";

      // Reset after 2 seconds
      setTimeout(() => {
        this.updateFrogMood(); // This will set the correct mood based on score
      }, 2000);
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
    this.updateFrogMood();
  }

  updateFrogMood() {
    if (!this.frogElement) return;

    // Remove all mood classes
    this.frogElement.className = "frog";

    // Determine frog mood based on score and level (adjusted for real Tetris scoring)
    if (this.score >= 10000 || this.level >= 10) {
      // Master level - very high score or level
      this.frogElement.textContent = "🐸"; // Excited frog
      this.frogElement.classList.add("excited");
    } else if (this.score >= 5000 || this.level >= 6) {
      // Expert level - great performance
      this.frogElement.textContent = "�"; // Cool frog
      this.frogElement.classList.add("happy");
    } else if (this.score >= 2000 || this.level >= 4) {
      // Good player - solid performance
      this.frogElement.textContent = "�"; // Happy frog
      this.frogElement.classList.add("happy");
    } else if (this.score >= 500 || this.level >= 2) {
      // Getting better - decent score
      this.frogElement.textContent = "�"; // Content frog
      // Uses default float animation
    } else if (this.score >= 100 || this.lines >= 2) {
      // Learning - made some progress
      this.frogElement.textContent = "�"; // Neutral frog
    } else if (this.score > 0) {
      // Just started playing
      this.frogElement.textContent = "🐸"; // Thinking frog
    } else {
      // Beginning state - completely neutral
      this.frogElement.textContent = "�"; // Calm frog
    }
  }

  showGameOver() {
    this.soundManager.play('gameOver');
    
    // Check if this is a high score
    const position = this.highScoreManager.addScore(this.score, this.lines, this.level);
    
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
    
    // Show high score achievement if applicable
    if (position <= 10) {
      setTimeout(() => {
        alert(`🏆 NEW HIGH SCORE! You ranked #${position}!`);
      }, 1000);
    }
    
    // Update high scores display
    this.updateHighScoresList();
    
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
    this.dropInterval = this.difficultySettings[this.difficulty].dropSpeed;
    this.clearedLines = [];
    this.previousLevel = 0;
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
    // Reset frog to normal state
    this.updateFrogMood();
    
    // Clear visual effects
    this.visualEffects.particles = [];
    this.visualEffects.shakeOffset = { x: 0, y: 0 };
    this.visualEffects.shakeTime = 0;
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
          // Hard drop - give bonus points for each cell dropped (2 points per cell in real Tetris)
          let dropDistance = 0;
          while (this.movePiece(0, 1)) {
            dropDistance++;
          }
          // Hard drop bonus: 2 points per cell
          this.score += dropDistance * 2;
          this.updateScore();
          this.soundManager.play('drop');
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

    // Touch controls for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    this.canvas.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchStartTime = Date.now();
      },
      { passive: false }
    );

    this.canvas.addEventListener(
      "touchend",
      (e) => {
        e.preventDefault();
        if (this.gameOver || this.paused) return;

        const touch = e.changedTouches[0];
        const touchEndX = touch.clientX;
        const touchEndY = touch.clientY;
        const touchEndTime = Date.now();

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = touchEndTime - touchStartTime;

        const minSwipeDistance = 30;
        const maxSwipeTime = 300;

        // Quick tap for rotation
        if (Math.abs(deltaX) < 20 && Math.abs(deltaY) < 20 && deltaTime < 200) {
          this.rotatePiece();
          return;
        }

        // Swipe gestures
        if (deltaTime < maxSwipeTime) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (Math.abs(deltaX) > minSwipeDistance) {
              if (deltaX > 0) {
                this.movePiece(1, 0); // Swipe right
              } else {
                this.movePiece(-1, 0); // Swipe left
              }
            }
          } else {
            // Vertical swipe
            if (Math.abs(deltaY) > minSwipeDistance) {
              if (deltaY > 0) {
                this.movePiece(0, 1); // Swipe down (soft drop)
              } else {
                // Swipe up for hard drop
                let dropDistance = 0;
                while (this.movePiece(0, 1)) {
                  dropDistance++;
                }
                this.score += dropDistance * 2;
                this.updateScore();
                this.soundManager.play('drop');
                this.lockPiece();
              }
            }
          }
        }
      },
      { passive: false }
    );

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
    
    // Update visual effects
    this.visualEffects.update();
    
    this.draw();
    this.lastTime = now;
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  setupDifficultySelector() {
    if (!this.difficultySelect) return;
    
    this.difficultySelect.addEventListener('change', (e) => {
      this.difficulty = e.target.value;
      this.dropInterval = this.difficultySettings[this.difficulty].dropSpeed - this.level * 50;
      this.dropInterval = Math.max(50, this.dropInterval);
    });
  }

  updateHighScoresList() {
    if (!this.highScoresList) return;
    
    const scores = this.highScoreManager.getScores();
    this.highScoresList.innerHTML = '';
    
    if (scores.length === 0) {
      this.highScoresList.innerHTML = '<div style="color: #666; text-align: center; font-style: italic;">No scores yet</div>';
      return;
    }
    
    scores.forEach((score, index) => {
      const item = document.createElement('div');
      item.className = 'highscore-item';
      item.innerHTML = `
        <span class="highscore-rank">#${index + 1}</span>
        <span>${score.score.toLocaleString()}</span>
      `;
      this.highScoresList.appendChild(item);
    });
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
    const size = 20; // Fixed size for mini pieces
    const offsetX = (ctx.canvas.width - shape[0].length * size) / 2;
    const offsetY = (ctx.canvas.height - shape.length * size) / 2;
    
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          ctx.save();
          ctx.shadowColor = "#000a";
          ctx.shadowBlur = 4;
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
            (size / 2) - 2
          );
          ctx.globalAlpha = 1;
          ctx.restore();
          ctx.strokeStyle = "#fff3";
          ctx.lineWidth = 1;
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
    
    // Draw visual effects (particles, screen shake)
    this.visualEffects.draw();

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
    // Enhanced responsive sizing for better mobile experience
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate optimal cell size based on screen dimensions
    const maxWidth = Math.floor(screenWidth * 0.8); // Leave some margin
    const maxHeight = Math.floor(screenHeight * 0.7); // Leave space for UI

    // Calculate cell size based on available space
    const cellByWidth = Math.floor(maxWidth / this.BOARD_WIDTH);
    const cellByHeight = Math.floor(maxHeight / this.BOARD_HEIGHT);

    // Use the smaller dimension to ensure the game fits
    let optimalCellSize = Math.min(cellByWidth, cellByHeight);

    // Set minimum and maximum cell sizes for different screen types
    if (screenWidth < 480) {
      // Small mobile
      optimalCellSize = Math.max(14, Math.min(optimalCellSize, 22));
    } else if (screenWidth < 768) {
      // Mobile
      optimalCellSize = Math.max(16, Math.min(optimalCellSize, 28));
    } else if (screenWidth < 1024) {
      // Tablet
      optimalCellSize = Math.max(20, Math.min(optimalCellSize, 35));
    } else {
      // Desktop and larger
      optimalCellSize = Math.max(24, Math.min(optimalCellSize, 45));
    }

    this.CELL_SIZE = optimalCellSize;
    this.canvas.width = this.BOARD_WIDTH * this.CELL_SIZE;
    this.canvas.height = this.BOARD_HEIGHT * this.CELL_SIZE;
  }
}

window.addEventListener("load", () => {
  // Initialize Matrix Rain immediately
  new MatrixRain();

  // Welcome screen functionality
  const welcomeScreen = document.getElementById("welcomeScreen");
  const playButton = document.getElementById("playButton");
  let gameStarted = false;
  let tetrisGame = null;

  function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    welcomeScreen.style.animation = "welcomeFadeIn 0.5s ease-out reverse";

    setTimeout(() => {
      welcomeScreen.classList.add("hidden");
      // Initialize Tetris game
      tetrisGame = new TetrisGame();
    }, 500);
  }

  // Play button click handler
  playButton.addEventListener("click", startGame);

  // Keyboard handler for welcome screen
  document.addEventListener("keydown", (e) => {
    if (!gameStarted && (e.code === "Space" || e.code === "Enter")) {
      e.preventDefault();
      startGame();
    }
  });

  // Add some interactive effects to the welcome screen
  const welcomeFrog = document.querySelector(".welcome-frog");
  if (welcomeFrog) {
    welcomeFrog.addEventListener("click", () => {
      welcomeFrog.style.animation = "none";
      setTimeout(() => {
        welcomeFrog.style.animation =
          "welcomeFrogJump 1.5s ease-in-out infinite";
      }, 100);
    });
  }
});
