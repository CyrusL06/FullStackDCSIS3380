"use strict"

export const findFirstHighRatedMovie = (movieData) => {

    const HighRated = movieData.filter((movie)=> (movie.rating >= 8.8))

    console.log(`${HighRated[1].title}`) 
    }

export const sortMoviesByrating = (movieData) => {

  const sortMovies = movieData.sort((a,b) => b.rating-a.rating)
  console.log(sortMovies)
  const [top1Mov, top2Mov, ...rest] = sortMovies
  const restD = rest.map((movie)=>(movie.title))
  console.log(`${top1Mov.title} , ${top2Mov.title} , ${restD}`)

  
}