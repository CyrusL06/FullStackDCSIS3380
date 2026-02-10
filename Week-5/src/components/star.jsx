import React from 'react'
import { FaStar } from "react-icons/fa"

const Star = ({selected = false, rateColor}) => {
  return (
   <FaStar color={selected ? "red" : "grey" } onClick={rateColor} />
  )
}

export default Star