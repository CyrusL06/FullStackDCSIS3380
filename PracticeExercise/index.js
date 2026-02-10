import { movies } from './movies';


console.log(movies.title);

const printMovieStats = (movieData) => {
    // 1. Get the count
    const count = movieData.length;

    // 2. Extract all years into a simple array of numbers
    const years = movieData.map(movie => movie.year);
    
    // 3. Find the smallest and largest numbers in that array
    const earliest = Math.min(...years);
    const latest = Math.max(...years);

    // 4. Print using a template literal
    console.log(`The dataset contains ${count} movies spanning from ${earliest} to ${latest}.`);
};

// Call the function immediately
printMovieStats(movies);