
import { useState } from "react"
import colorData from "../src/assets/color-data.json"
import Footer from "./components/footer";
import Header from "./components/header";
import ColorList from "./components/colorList";
import './App.css'
import AddForm from "./components/addForm";
// Unique identifier
import {v4} from "uuid"

function App() {
//Extends functionality of react useState to get state
  const[colors, setColors ] = useState(colorData);

  const deleteColor = (id) => {
      console.log("Deleted")
      const updateColors = colors.filter(color => color.id !== id);
      setColors(updateColors)
      
  }

  const rateColor = (newRating, id) => {
      const updatedColors = colors.map(color=>color.id === id ? {...color,rating:newRating} : color )
      setColors(updatedColors)

      
  }

  const addColor = (title, color) => {
     const newColors = [...colors, {
                                  id:v4(), 
                                  title: title,
                                   color: color, 
                                   rating:0, 
                                   img:"test.jpg"}]

      setColors(newColors)
  }

  return (
    <div>
        <Header title ="This is my Color List"/>
        <AddForm addColor = {addColor}/>
        <ColorList colors = {colors} onDelete = {deleteColor} rateColor = {rateColor}/>
        <Footer />
     </div>
  )
}

export default App
