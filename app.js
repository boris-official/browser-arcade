const grid = document.querySelector("#game-grid");
const searchInput = document.querySelector("#search");
const filtersEl = document.querySelector("#filters");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
let games = [];
let activeCategory = "All";

const icons = {
  "Zombies":"☣", "FPS":"✦", "Sports":"◈", "Open World":"⌖",
  "Adventure":"◆", "Classic PC":"▣", "Strategy":"♟", "More Games":"＋"
};

function getDomain(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function makeFilters() {
  const categories = ["All", ...new Set(games.map(game => game.category))];
  filtersEl.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "filter" + (category === activeCategory ? " active" : "");
    button.textContent = category;
    button.type = "button";
    button.addEventListener("click", () => {
      activeCategory = category;
      makeFilters();
      renderGames();
    });
    filtersEl.appendChild(button);
  });
}

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = games.filter(game => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const searchable = `${game.title} ${game.category} ${game.tag} ${getDomain(game.url)}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  grid.innerHTML = "";
  visible.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card";

    const top = document.createElement("div");
    top.className = "card-top";
    const icon = document.createElement("div");
    icon.className = "game-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = icons[game.category] || "▶";
    const category = document.createElement("span");
    category.className = "category";
    category.textContent = game.category;

    const status = game.status || "untested";

    const statusBadge = document.createElement("span");
    statusBadge.className = `status-badge status-${status}`;

    const statusLabels = {
    working: "Working",
    broken: "Not Working",
    offline: "Temporarily Offline",
    untested: "Untested"
    };
  
    statusBadge.textContent = statusLabels[status] || "Untested";

    
    top.append(icon, category);

    const title = document.createElement("h3");
    title.textContent = game.title;
    const tag = document.createElement("p");
    tag.className = "game-tag";
    tag.textContent = game.tag || "Browser game";

    const bottom = document.createElement("div");
    bottom.className = "card-bottom";
    const domain = document.createElement("span");
    domain.className = "domain";
    domain.textContent = getDomain(game.url);
    domain.title = game.url;
    const link = document.createElement("a");
    link.className = "play-link";
    link.href = game.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(document.createTextNode("Play "));
    const arrow = document.createElement("span");
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");
    link.appendChild(arrow);

    bottom.append(domain, link);
    card.append(top, title, tag, bottom);
    card.append(statusBadge);
    grid.appendChild(card);
  });

  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "game" : "games"}`;
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
}

searchInput.addEventListener("input", renderGames);
document.querySelector("#reset").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  makeFilters();
  renderGames();
});

fetch("./games.json")
  .then(response => {
    if (!response.ok) throw new Error("Could not load games.json");
    return response.json();
  })
  .then(data => {
    games = data;
    document.querySelector("#game-count").textContent = games.length;
    makeFilters();
    renderGames();
  })
  .catch(() => {
    grid.innerHTML = '<p class="load-error">Could not load the game list. Please refresh the page or check that games.json is present.</p>';
  });
