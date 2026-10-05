# Memory Game

An interactive memory game developed as part of the RS School Frontend course.

## Game Description

The goal of the game is to find all matching pairs of cards in the fewest moves possible.
The board consists of 16 cards (8 pairs). On each turn, the player flips two cards:

- If the cards match, they remain open.
- If the cards do not match, they flip back after a 1-second delay.
- Once all pairs are discovered, a victory modal appears displaying the total move count, and the score is saved to the leaderboard.

## Key Features

- **Dynamic DOM Generation:** UI elements are created dynamically via JavaScript using the native DOM API (no static HTML in body).
- **Shuffling Logic:** Card positions are randomized using the Fisher-Yates shuffle algorithm.
- **Native Modal Dialogs:** Win state and Leaderboard modals are powered by the native HTML5 `<dialog>` element with custom `::backdrop` styling.
- **Persistent Leaderboard:** The top 10 best scores are stored in `localStorage`.
- **Restart Without Reload:** "New Game" resets the board and counters smoothly without reloading the page, properly canceling any pending timeout intervals.
- **Responsive Layout:** Clean, centered layout optimized across devices.

## Tech Stack

- HTML5 (Semantic elements, `<dialog>`)
- CSS3 (Flexbox, Transitions)
- Vanilla JavaScript (ES6+, DOM API, Web Storage API)

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/VrubDev/memory-game.git
```

2. Navigate to the project directory:

```bash
cd memory-game
```

3. Switch to the project branch:

```bash
git checkout memory-game
```

4. Launch the application:

- **Option A (Recommended):** Open the project in VS Code, right-click `index.html`, and choose **"Open with Live Server"**.
- **Option B:** Double-click `index.html` to open it directly in your browser.
