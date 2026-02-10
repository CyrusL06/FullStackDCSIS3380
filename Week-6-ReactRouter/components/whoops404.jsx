import React from 'react'
import { useLocation } from "react-router-dom";

const Whoops404 = () => {
    const location = useLocation();
    console.log(location);

  return (
    <div>
        <h1>Web Not Found in {location.pathname}</h1>
    </div>
  )
}

export default Whoops404