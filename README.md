# Maple MD - A Life Journey Game

A Maplestory-inspired web application that inspired by my husband's journey journey through medicine, from Birth to Residency Graduation.

## Features

- Side-scrolling platformer-style levels
- Interactive hotspots with "memories"
- Collectible items and XP system
- Chibi-style avatar with walking animations
- Beautiful HUD with level information

## Try it locally

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

- `src/art/` - Custom Art components
- `src/components/` - React components
  - `Avatar.tsx` - Player character logic with movement controls
  - `Hotspot.tsx` - Central logic for hotspots/memories
  - `DialogBox.tsx` - NPC-style dialogue system
  - `NarrativeBox.tsx` - Scroll-like narrative box for story-telling text
  - `HUD.tsx` - Game interface with XP bar tracker and level indicator
  - `LevelScene.tsx` - Main game level container
  - `StartScreen.tsx` - The start screen for the game
  - `EndScreen.tsx` - The graduation end screen for the game
  - `Sprite.tsx` - General logic for the NPC Sprites
- `src/context/` - React context for game state
  - `LevelContext.tsx` - Manages level progression and stats
- `src/data/` - Static config files for the game
  - `hotspots.ts` - Configs for hotspots for each level
  - `levels.ts` - Configs for levels

## Development

This project uses:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations

Built with the help of Cursor + AI Agent