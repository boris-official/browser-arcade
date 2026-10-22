# Browser Arcade

A lightweight, responsive directory for browsing browser-playable games. Built with plain HTML, CSS, and JavaScript; no framework, build step, or server required.

## Preview locally

Because the page loads `games.json` with `fetch`, serve the folder with a local static server rather than opening `index.html` directly.

For example, with Python installed:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a public repository on GitHub, for example `browser-arcade`.
2. Upload `index.html`, `style.css`, `app.js`, and `games.json` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for the Pages deployment. Your site will be available at `https://YOUR-USERNAME.github.io/browser-arcade/`.

## Add or edit games

Edit `games.json`. Each entry uses this structure:

```json
{
  "title": "Example Game",
  "url": "https://example.com",
  "category": "FPS",
  "tag": "Optional short label"
}
```

Categories create the filter buttons automatically. Keep valid JSON (commas and double quotes matter).

## Notes

- This project is a link directory. It does not host, mirror, or bundle game files.
- Links point to third-party websites and may stop working or change over time.
- The GTA 5 entry is an archived URL supplied for the directory; archive availability and game functionality may vary.
- Confirm you have the right to use any logos, artwork, screenshots, or game assets before adding them. This starter uses typographic cards rather than copyrighted game art.
- Consider reviewing third-party sites before recommending them publicly, especially if they use downloads, pop-ups, or ask for credentials.
