# Bluff Me Again!

A dependency-free portrait web game about spotting AI-hallucinated Jira summaries before they reach the sprint.

## Run it

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## How to play

- Start from the splash screen.
- Choose **Bluff Me?!** for impossible or suspicious tickets.
- Choose **Good** for legitimate tickets.
- Correct answers score a point; wrong answers cost one of three lives.
- Each run contains 10 tickets. Use **Play Again** to restart immediately or **Back to splash** to return to the title screen.
- Keyboard shortcuts: `B` for Bluff and `G` for Good.

The game includes 100 unique tickets: 80 bluffs and 20 legitimate summaries. Each run draws eight bluffs and two good tickets without repeating until a category deck is exhausted.

## Validate

Run the dependency-free validation check:

```bash
node validate.js
```

It checks the ticket counts, unique summaries, required fields, word limits, deck behavior, scoring, feedback lock, life depletion, game-over, and replay reset.

## Project files

- `index.html` — game shell, splash screen, controls, and result screen.
- `style.css` — responsive UI, safe-area handling, touch targets, and reduced-motion support.
- `game.js` — ticket data, shuffled decks, game state, keyboard controls, and reactions.
- `validate.js` — small Node validation check.
- `assets/` — generated neutral, caught, and smug developer scenes plus the 64px favicon.
