const fs = require("fs");

function addNews() {
  const file = "public/news.json"; // news visibles depuis ton site
  let news = [];

  // Lire les anciennes news
  if (fs.existsSync(file)) {
    news = JSON.parse(fs.readFileSync(file));
  }

  // Ajouter une news automatique
  const newItem = `Nouvelle actu ajoutée le ${new Date().toLocaleString()}`;
  news.unshift(newItem);

  // Garder seulement les 10 dernières
  news = news.slice(0, 10);

  // Sauvegarder
  fs.writeFileSync(file, JSON.stringify(news, null, 2));
  console.log("✅ News ajoutée :", newItem);
}

addNews();
