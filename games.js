/*
  ADDING A GAME:
  1. Put the game's HTML file in the "games" folder.
  2. Add an object below.
  3. Change title, description, category, icon, and file.
  4. Set featured: true if you want it in Featured Games.

  Example:
  {
    title: "My Game",
    description: "A fun browser game.",
    category: "Arcade",
    icon: "🎮",
    file: "games/my-game.html",
    featured: true
  }
*/

const games = [
  {
    title: "Snake",
    description: "Classic snake gameplay.",
    category: "Arcade",
    icon: "🐍",
    file: "games/snake.html",
    featured: true
  },
  {
    title: "Click Challenge",
    description: "Test how fast you can click.",
    category: "Casual",
    icon: "🖱️",
    file: "games/clicker.html",
    featured: true
  },
  {
    title: "Tic-Tac-Toe",
    description: "Play the classic game.",
    category: "Puzzle",
    icon: "❌",
    file: "games/tictactoe.html",
    featured: true
  },
  {
    title: "Memory",
    description: "Match the hidden pairs.",
    category: "Puzzle",
    icon: "🧠",
    file: "games/memory.html",
    featured: false
  },
  {
    title: "arkanoid or something",
    description: "idk what ts is about.",
    category: "Game",
    icon: "🧠",
    file: "games/memory.html",
    featured: false
  }
