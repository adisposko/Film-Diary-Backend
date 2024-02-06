const filmData = require('../assets/film_data.json');

function searchFilms(title, director, year) {
    films = filmData.filmData;
    const searchResults = films.filter((film) =>
        (!title ? true : film.title.toLowerCase().includes(title)) &&
        (!director ? true : film.director.toLowerCase().includes(director)) &&
        (!year ? true : film.year == year)
    );
    return searchResults;
}

module.exports = searchFilms;