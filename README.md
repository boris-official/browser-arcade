# 🎮 Browser Arcade

**Your personal collection of browser-playable games — all in one place.**

Browser Arcade is a lightweight, responsive game directory built to make discovering and launching browser games simple. From classic shooters and zombie survival to skateboarding, retro FPS games, and arcade favorites, everything is organized in one convenient place.

🌐 **Live Website:** [boris-official.github.io/browser-arcade](https://boris-official.github.io/browser-arcade/)

---

## ✨ Features

- 🎯 **Curated Game Collection** — A growing collection of browser-based games.
- 🔎 **Instant Search** — Find games by title, category, or tag.
- 🗂️ **Category Filters** — Browse games by genre.
- 🟢 **Game Status Labels** — Identify working, broken, offline, and untested games.
- 📱 **Responsive Design** — Play and browse on desktop, tablet, or mobile.
- ⚡ **Lightweight & Fast** — Built with HTML, CSS, and vanilla JavaScript.
- 🚀 **Easy to Maintain** — Add or update games by editing a single JSON file.
- 🌍 **GitHub Pages Hosting** — Free static website hosting with no backend required.

## 🕹️ Game Categories

The collection may include:

- **Zombies** — Classic Call of Duty Zombies experiences.
- **FPS** — Retro and classic first-person shooters.
- **Sports & Racing** — Skateboarding, football, and other sports games.
- **Action & Adventure** — Classic PC and console-inspired experiences.
- **Arcade & Multiplayer** — Casual games and multiplayer favorites.

The available categories depend on the games currently listed in the directory.

## 🚦 Game Status Guide

Each game can include a status label to help visitors understand its availability.

| Status | Meaning |
|---|---|
| `working` | Tested and currently playable |
| `broken` | Tested, but currently not working |
| `offline` | The game or hosting service appears to be unavailable |
| `untested` | Not yet tested or verified |

**Note:** Game availability can change over time. A status label reflects the latest check and is not a guarantee of future availability.

## ➕ Adding a Game

You don't need to modify the website's layout to add a game. Open `games.json` in the repository and add a new entry to the existing array.

```json
{
  "title": "Example Game",
  "url": "https://example.com",
  "category": "FPS",
  "tag": "Retro Shooter",
  "status": "untested"
}
```

### Field Reference

| Field | Description |
|---|---|
| `title` | Name displayed on the game card |
| `url` | Link to the game |
| `category` | Category used for filtering |
| `tag` | Short description or franchise |
| `status` | Current availability status |

### Important JSON Rules

- Put double quotes around property names and text values.
- Separate properties with commas.
- Separate game objects with commas.
- Do not add a trailing comma after the final game object.
- Keep the entire file inside a valid JSON array: `[` and `]`.

A single syntax error can prevent the entire game list from loading.

### Updating a Game's Status

Find the game in `games.json` and update its `status` value:

```json
"status": "working"
```

Use `working`, `broken`, `offline`, or `untested`, depending on the result of your latest test.

## 🛠️ Built With

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Search, filtering, and dynamic game cards
- **JSON** — Game directory data
- **GitHub Pages** — Static hosting

No database, server-side runtime, or build process is required for the basic site.

## 🚀 Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/boris-official/browser-arcade.git
   ```

2. Open the project folder:

   ```bash
   cd browser-arcade
   ```

3. Start a local static server. For example, if Python is installed:

   ```bash
   python -m http.server 8000
   ```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

Using a local server is recommended because the website loads `games.json` with JavaScript's `fetch()` API.

## 🌐 Deployment

This project is designed for GitHub Pages.

1. Push the website files to the repository.
2. Open the repository's **Settings → Pages**.
3. Select the appropriate deployment source and branch, usually `main` and `/ (root)`.
4. Save your settings and wait for deployment.
5. Visit the live website.

Once GitHub Pages is configured, changes pushed to the published branch will appear on the website after deployment completes.

## 🐛 Troubleshooting

**The game list does not load**
- Confirm `games.json` exists in the published directory alongside `index.html`.
- Open [`games.json` on the live site](https://boris-official.github.io/browser-arcade/games.json) directly.
- Validate the JSON syntax and check for missing commas, unmatched braces, or invalid quotation marks.

**A game link does not work**
- Check whether the original game-hosting website is still online.
- Test the URL in a new browser tab.
- Update the game's status in `games.json`.

**Changes are not appearing**
- Confirm your changes were committed to the published branch.
- Wait for GitHub Pages deployment to finish.
- Refresh the page or try a hard refresh to bypass the browser cache.

## ⚠️ Disclaimer

Browser Arcade is a game directory that links to third-party websites. Games and embedded experiences are hosted or provided by their respective owners and operators.

This project does not claim ownership of third-party games, trademarks, logos, or other intellectual property. Availability, functionality, and content on external websites may change without notice.

Please respect applicable copyright laws and the terms of the websites linked from this directory.

## 🤝 Contributions

Want to improve the collection?

- Add new browser-playable games.
- Verify existing game links.
- Update outdated status labels.
- Suggest improvements to the interface.

Keep game entries accurate, use valid JSON, and prefer legitimate game sources.

---

**Made for the love of games. 🎮**

*Discover. Launch. Play.*
