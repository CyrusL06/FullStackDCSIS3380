"use strict"

import {movies} from "./movies.js"
import * as util from "./util2.js"

 const printMovieStats = (movieData) => {
    
    const length = movieData.length
    const year = movieData.map((movie) => (movie.year))
    console.log(year)
    const leastYear = Math.min(...year)
    const FinalYear = Math.max(...year)

    console.log(`${length} ${leastYear} - ${FinalYear}`)
    
}

printMovieStats(movies);
util.findFirstHighRatedMovie(movies)
util.sortMoviesByrating(movies)