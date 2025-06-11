# Maple MD - A Life Journey Game

A Maplestory-inspired web application that takes you through a journey of life stages, built with React and Tailwind CSS.

## Features

- Side-scrolling platformer-style levels
- Interactive hotspots with dialogue
- Collectible items and XP system
- Chibi-style avatar with walking animations
- Beautiful HUD with level information

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Controls

- Use Left/Right arrow keys to move the avatar
- Click on glowing hotspots to trigger dialogue
- Press any key to dismiss dialogue boxes

## Project Structure

- `src/components/` - React components
  - `Avatar.tsx` - Player character with movement controls
  - `DialogBox.tsx` - NPC-style dialogue system
  - `HUD.tsx` - Game interface with XP and collectibles
  - `LevelScene.tsx` - Main game level container
- `src/context/` - React context for game state
  - `LevelContext.tsx` - Manages level progression and stats

## Development

This project uses:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations

## License

MIT License - Feel free to use this code for your own projects! 