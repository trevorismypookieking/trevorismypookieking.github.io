# GameHub

A simple static browser-game website designed for GitHub Pages.

## Uploading to GitHub Pages

1. Create a repository named `YOURUSERNAME.github.io`.
2. Upload everything in this folder to the repository's root.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main`, and save.
5. Visit `https://YOURUSERNAME.github.io`.

## Adding games

Put an HTML game inside the `games` folder, then add an object to `games.js`.

Example:

```js
{
  title: "My Game",
  description: "A description.",
  category: "Arcade",
  icon: "🎮",
  file: "games/my-game.html",
  featured: true
}
```

For games hosted elsewhere, you can also make a game page containing an iframe if the other site permits embedding.
