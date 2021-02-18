function updateMovieModal({ Title, Poster, Plot }) {
  const modalTitle = document.getElementById("movie-card-title");
  modalTitle.textContent = Title;

  const modalImg = document.getElementById("movie-card-img");
  modalImg.src = Poster;

  const modalPlot = document.getElementById("movie-card-plot");
  modalPlot.textContent = Plot;
}
