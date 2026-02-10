"use strict"

export const findFirstHighRatedMovie = (movieData) => {
    
   console.log("Connected")
   //Outputs object 
   let index = movieData.filter((movie) => (movie.rating >= 8.8))
   
   //Grab the first one
   let name = index[0].title;
    let year = index[0].year;
    let rating = index[0].rating;
    
    console.log(`${name} (${year}) has an IMDb rating of ${rating}`);

}

export const sortMoviesByRating = (movieData) => {

    // let topMovies = movieData.filter(movie => (movie.rating >= 8.8))
    // console.log(topMovies)

    // for(var i = 0; i > movieData.length; i++){
    //     for(var j = 0; j > movieData.length; j++){
    //         if(movieData[j].rating > movieData[i].rating )
    //         {
    //             var keep = movieData[j]
    //             movieData[j] = movieData[i]
    //             movieData[i] = keep
    //         }
    //         console.log(movieData[i])
    //     }
    // }


    const sortMovies = movieData.sort((a,b) => b.rating - a.rating)
    const [top1, top2, ...rest] = sortMovies

    console.log("Other Top Movies:", rest);
    const restMovies = rest.map(movie => movie.title);

    console.log(`${top1.title} , ${top2.title}, ${restMovies} `)
     


}

export const displayMoviesSummary = (movieData) => {
    
    const obj = movieData.map((movie) => movie)
    return obj;
}


export const createMovieObject = (title, year, genre, rating, duration) => {

    return{
        title,
        year,
        genre,
        rating,
        duration,
    }
    

    
    
}