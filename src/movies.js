// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  directorsArr = [];
  movies.map(function(obj) {
    if(!directorsArr.includes(obj.director)) {
      directorsArr.push(obj.director);
    }
  });
  return directorsArr;
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies,directorName,movieGenre) {
  const resultArr = movies.filter(function (obj) {
    return((obj.director===directorName) && (obj.genre.includes(movieGenre)))
  })
  return resultArr;
}

console.log(howManyMovies(movies,"Steven Spielberg", "Drama"));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  allScores = [];
  for(const obj of movies) {
    allScores.push(obj.score);
  }
  const totalScore = allScores.reduce(function (acc,val) {
    return acc + val;
  });
  return ((totalScore/250).toFixed(2));
}

console.log(scoresAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
