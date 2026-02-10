import React, { useState } from 'react'

const AddForm = ({addColor}) => {

    const{title, setTitle} = useState("")
    const [color, setColor] = useState("#000000")

  return (
    <>
    <h2>You can add a new color</h2>
        <form>
            <input type="text" value={title} required placeholder='Add Title' />
            <input type="color" value={color} required placeholder='color' />
        </form>
    </>
  )
}

export default AddForm