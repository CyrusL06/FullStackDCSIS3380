console.log("HI");

import { movies } from "./movies.js";

//1. Basic Data Handling...

const printMovieStats= (movies) => {
    const count = movies.length;

    const years = movies.map((movie) => movie.year)
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    console.log(`The dataset contains ${count} movies spanning from ${minYear} to ${maxYear}`)
};


printMovieStats(movies);