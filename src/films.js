// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const filmDirectors =  movies.map(film => film.director);
  /* console.log("EXERCICE 1 ->", result); */
  return filmDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const directorFilms = movies.filter(film => film.director === director);
  /* console.log("EXERCICE 2 ->", directorFilms); */
  return directorFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorFilms = getMoviesFromDirector(movies, director);
  const scoresSum =  directorFilms.reduce((sum, film) => sum += film.score, 0);
  const scoresAvg = scoresSum / directorFilms.length;
  /* console.log("EXERCICE 3 ->", scoresAvg); */
  return scoresAvg;
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesByTitle = movies.map(film => film.title);
  moviesByTitle.sort();
  /* console.log("EXERCISE 4 ->", titles); */
  return moviesByTitle.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesByYear = [...movies].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  /* console.log("EXERCISE 5 ->", moviesByYear); */
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filteredFilms =  movies.filter(film => film.genre.includes(category) && film.score);
  const scoresSum = filteredFilms.reduce((sum, film) => (sum + Number(film.score)), 0);
  const scoresAvg = scoresSum / (filteredFilms.length || 1);
  /* console.log("EXERCICE 6 ->", Number(scoresAvg.toFixed(2))); */
  return Number(scoresAvg.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const moviesInMinutes = movies.map(film => {
    const durationString = film.duration;
    const hoursMatch = durationString.match(/\d+h/);
    const minutesMatch = durationString.match(/\d+min/);
    const hours = hoursMatch ? Number(hoursMatch[0].replace('h', '')) : 0;
    const minutes = minutesMatch ? Number(minutesMatch[0].replace('min', '')) : 0;
    const totalMinutes = hours * 60 + minutes;
    return { ...film, duration: totalMinutes };
  });
  /* console.log("EXERCISE 7 ->", moviesInMinutes); */
  return moviesInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(film => film.year === year);
  moviesOfYear.sort((a, b) => b.score - a.score);
  /* console.log("EXERCISE 8 ->", [moviesOfYear[0]]); */
  return [moviesOfYear[0]];
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
