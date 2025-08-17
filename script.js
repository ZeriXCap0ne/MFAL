async function loadNews() {
  try {
    let response = await fetch("news.json");
    let news = await response.json();

    let list = document.getElementById("news-list");
    list.innerHTML = "";

    news.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur de chargement des news :", error);
  }
}

loadNews();
