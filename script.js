const gameGrid = document.getElementById("gameGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noResults = document.getElementById("noResults");
const themeToggle = document.getElementById("themeToggle");

function card(game) {
  return `
    <article class="game-card">
      <div class="game-thumb" aria-hidden="true">${game.icon}</div>
      <div class="game-info">
        <h3>${game.title}</h3>
        <p>${game.category} · ${game.description}</p>
        <a class="play" href="${game.file}">Play</a>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featured = games.filter(game => game.featured);
  featuredGrid.innerHTML = featured.length
    ? featured.map(card).join("")
    : "<p class='no-results'>No featured games yet.</p>";
}

function renderCategories() {
  const categories = [...new Set(games.map(game => game.category))].sort();
  categoryFilter.innerHTML =
    '<option value="all">All categories</option>' +
    categories.map(c => `<option value="${c}">${c}</option>`).join("");
}

function renderGames() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = games.filter(game => {
    const matchesSearch =
      game.title.toLowerCase().includes(search) ||
      game.description.toLowerCase().includes(search) ||
      game.category.toLowerCase().includes(search);

    const matchesCategory =
      category === "all" || game.category === category;

    return matchesSearch && matchesCategory;
  });

  gameGrid.innerHTML = filtered.map(card).join("");
  noResults.hidden = filtered.length !== 0;
}

searchInput.addEventListener("input", renderGames);
categoryFilter.addEventListener("change", renderGames);

const savedTheme = localStorage.getItem("gamehub-theme");
if (savedTheme === "light") document.body.classList.add("light");

function updateThemeButton() {
  themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "☾";
}
updateThemeButton();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "gamehub-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateThemeButton();
});

renderCategories();
renderFeatured();
renderGames();
