const fetchMoviesBtn = document.getElementById("fetch-movies-btn");

fetchMoviesBtn.onclick = function () {
  const input = document.getElementById("user-movies-input");
  const movie = input.value;
  const moviesController = new MoviesController();
  moviesController.request(movie, (response) => {
    if (response.Error) {
      updateMovieModal({  Poster: "./assets/imgs/icons/error.svg", Title: "Não econtramos seu filme " });
    } else {
      const { Title, Poster, Plot } = response;
      updateMovieModal({ Title, Plot, Poster });
    }
  });
};
