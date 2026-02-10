import React from 'react'
import Star from './star'

const StarRating = ({totalStars=5, selectedStars, rateColor}) => {

    

  return (
    <>
    {
            [...Array(totalStars)].map((el,i)=><Star 
            key={i}
            selected={i<selectedStars}
            rateColor = {() => rateColor(i+1)}
            />)
    }
    </>
  )
}

export default StarRating