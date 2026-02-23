import { movies } from "./movies.js";
import * as utils from "./util.js"
console.log("HI")

const printMovieStat = (movieData) => {
    const length = movieData.length;
    const years = movieData.map(movie => movie.year);

    const lowYear = Math.min(...years)
    const highYear = Math.max(...years)

     console.log(`The dataset contains ${length} movies spanning from ${lowYear} to ${highYear}`)
}

//i
printMovieStat(movies)
//ii
utils.findFirstHighRatedMovie(movies);
//iii
utils.sortMoviesByRating(movies)
//iV
const arr = utils.displayMoviesSummary(movies)
console.log(arr)
//This array
let dummy = [54,234,23,12,45,12]
// Function Arguement Destructuting
arr.forEach((el,index) => {
    console.log(`${arr[index].title} (${arr[index].year}) - Genre: ${arr[index].genre}`)
});

//V. Object Literal/ Restructuriing
//Create new movie
const newMovie = utils.createMovieObject("Titanic", 2000, "romance", 9.0, 170)
const movieExist = movies.some(movie => movie.title === newMovie.title)
const newMovies = movieExist ? movies: [...movies, newMovie]

// Log results for verification
console.log(movieExist.title)
console.log("New movie created:", newMovie);
console.log("Updated movie count:", newMovies.length);

