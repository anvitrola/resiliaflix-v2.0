class MoviesModel {
    constructor(title, plot, year, runTime, genre, director, writer, actors, language, type) {
        this._title = title,
            this._plot = plot,
            this._year = year,
            this._runTime = runTime,
            this._genre = genre,
            this._director = director,
            this._writer = writer,
            this._actors = actors,
            this._language = language,
            this._type = type;

    }
    set atualizaFilmes(info) {
        this._title = info.Title,
            this._plot = info.Plot,
            this._year = info.Year,
            this._runTime = info.Runtime,
            this._genre = info.Genre,
            this._director = info.Director,
            this._writer = info.Writer,
            this._actors = info.Actors,
            this._language = info.Language,
            this._type = info.Type;
    }
    get informacoes() {
        return this._title = title,
            this._plot = plot,
            this._year = year,
            this._runTime = runTime,
            this._genre = genre,
            this._director = director,
            this._writer = writer,
            this._actors = actors,
            this._language = language,
            this._type = type;
    }
}

class MoviesController {
  constructor() {
    this._api = new XMLHttpRequest();
  }
  request(movieName, cb) {
    this._api.open(
      "GET",
      `https://www.omdbapi.com/?t=${this.formatName(
        movieName
      )}&apikey=c8d0a6c&plot=full`
    );
    this._api.addEventListener("load", () => {
      if (this._api.status == 200) {
        let response = JSON.parse(this._api.responseText);
        cb(response);
      }
    });
    this._api.send();
  }

  formatName(movieName) {
    return movieName.replace(" ", "+");
  }
}
