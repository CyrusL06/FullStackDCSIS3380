import React from 'react'
import {FaHeart, FaTrash} from "react-icons/fa"


const Book = ({book, onHeartPressed, onDelete}) => {

  

  return (
      <tr>
            <th>{book._id}</th>
            <th>{book.title}</th>
            <th>{book.category.name}</th>
            <th>{book.author}</th>
            <th>{book.numberInStock}</th>
            <th>{book.price}</th>
            <th>{book.publishYear}</th>
            <th><FaHeart onClick={() => onHeartPressed(book._id)} color={book.liked ? "red" : "gray"}/></th>
            <th><FaTrash onClick={() => onDelete(book._id)}/></th>
        </tr>
  )
}

export default Book