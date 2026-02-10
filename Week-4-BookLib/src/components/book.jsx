import React from 'react'
import { useState } from 'react'
import {FaHeart, FaTrash} from "react-icons/fa"


const Book = ({book}) => {

  const [heart, setHeart] = useState(false)

  return (
      <tr>
            <th>{book._id}</th>
            <th>{book.title}</th>
            <th>{book.category.name}</th>
            <th>{book.author}</th>
            <th>{book.numberInStock}</th>
            <th>{book.price}</th>
            <th>{book.publishYear}</th>
            <th><FaHeart color={book.liked?"red":"grey"}/></th>
            <th><FaTrash/></th>
        </tr>
  )
}

export default Book