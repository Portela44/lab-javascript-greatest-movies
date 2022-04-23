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
function movieCount(movies, movieGenre){
  counter = 0;
  for(const obj of movies) {
    if(obj.genre.includes(movieGenre)) {
      counter++
    }
  }
  return counter;
}

function dramaMoviesScore(movies, movieGenre) {
  allScores = [];
  for(const obj of movies) {
    if(obj.genre.includes(movieGenre)) {
      allScores.push(obj.score);
    }
  }
  const totalScore = allScores.reduce(function (acc,val) {
    return acc + val;
  });
  return ((totalScore/movieCount(movies, movieGenre)).toFixed(2));
}

console.log(dramaMoviesScore(movies, "Drama"));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  moviesCopy = structuredClone(movies);
  orderedMovies = moviesCopy.sort(function (mov1, mov2) {
    if (mov1.year > mov2.year) {
      return -1;
    } if (mov1.year < mov2.year) {
      return 1;
    } else {
      if (mov1.title > mov2.title) {
        return 1;
      } if (mov1.title < mov2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return orderedMovies;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderByTitle (movies) {
  moviesCopy = structuredClone(movies);
  orderedMovies = moviesCopy.sort(function (mov1, mov2) {
    if (mov1.title > mov2.title) {
      return 1;
    } if (mov1.title < mov2.title) {
      return -1;
    } else {
      return 0;
    }
  });
  return orderedMovies;
}

function orderAlphabetically(movies, topX) {
  top20MoviesAlphabetically = [];
  orderedMovies = orderByTitle(movies);
  for(let i = 0; i<movies.length; i++) {
    if(i === topX) {
      break;
    } else {
      top20MoviesAlphabetically.push(orderedMovies[i].title);
    }
  }
  return top20MoviesAlphabetically;
}

console.log(orderAlphabetically(movies, 20));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesReloaded = JSON.parse(JSON.stringify(movies));
  for(let movie of moviesReloaded) {
    movie.duration = Number(movie.duration.slice(0,1))*60 + Number(movie.duration.slice(3,5));
  }
  return moviesReloaded
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function moviesPerYear(movies) {
  yearCountMovies = [];
  for(let movie of movies) {
    if (yearCountMovies.includes(movie.year)) {
      yearCountMovies[movie.year].push(movie.score);
    } else if (!(yearCountMovies.includes(movie.year))) {
      yearCountMovies[movie.year] = [];
      yearCountMovies[movie.year].push(movie.score);
    }
  }
  console.log(typeof yearCountMovies);
  return yearCountMovies;
}

console.log(moviesPerYear(movies));


function bestYearAvg(movies) {
  scorePerYear = [];
  for(let movie of movies) {
    
  }
  return scorePerYear;
}

//console.log(bestYearAvg(movies));





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
