function createCard({ imgPath, name, cb }) {
  const btn = document.createElement("button");
  btn.id = `card-btn-movie-${name}`;
  btn.classList.add("indicacoes__link", "bg-transparent", "border-0");
  btn.onclick = cb;
  btn.setAttribute("data-toggle", "modal");
  btn.setAttribute("data-target", "#movieModal");

  const img = document.createElement("img");
  img.src = imgPath;
  img.classList.add("indicacoes__banner", "rounded-lg");

  btn.appendChild(img);

  const card = document.createElement("div");
  card.classList.add("card", "border-0", "bg-transparent");

  card.appendChild(btn);

  return card;
}

function createCards(moviesData) {
  const cards = [];
  for (let index = 0; index < moviesData.length; index++) {
    const { imgPath, name, cb } = moviesData[index];
    const card = createCard({ imgPath, name, cb });
    cards.push(card);
  }
  return cards;
}

function appendCardsToContainer(cards) {
  const container = document.getElementById("indicacoes-movies");
  container.append(...cards);
}

function fetchDataFromOmdb(name, cb) {
  const moviesController = new MoviesController();
  moviesController.request(name, cb);
}

const moviesData = [
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    name: "Wonder woman",
    cb: () => fetchDataFromOmdb("Wonder Woman", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg",
    name: "Ex Machina",
    cb: () => fetchDataFromOmdb("Ex Machina", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    name: "Blood Diamond",
    cb: () => fetchDataFromOmdb("Blood Diamond", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    name: "Iron Man",
    cb: () => fetchDataFromOmdb("Iron Man", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_SX300.jpg",
    name: "Never Back Down",
    cb: () => fetchDataFromOmdb("Never Back Down", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    name: "Fight Club",
    cb: () => fetchDataFromOmdb("Fight Club", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    name: "Forrest Gump",
    cb: () => fetchDataFromOmdb("Forrest Gump", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    name: "Portrait of a Lady on Fire",
    cb: () => fetchDataFromOmdb("Portrait of a Lady on Fire", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SX300.jpg",
    name: "Inferno",
    cb: () => fetchDataFromOmdb("Inferno", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    name: "Inception",
    cb: () => fetchDataFromOmdb("Inception", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMTM5NTQ3MTYxN15BMl5BanBnXkFtZTcwODE2Nzk3OQ@@._V1_SX300.jpg",
    name: "Jobs",
    cb: () => fetchDataFromOmdb("Jobs", updateMovieModal),
  },
  {
    imgPath:
      "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg",
    name: "Hidden Figures",
    cb: () => fetchDataFromOmdb("Hidden Figures", updateMovieModal),
  },
];

const cards = createCards(moviesData);
appendCardsToContainer(cards);
