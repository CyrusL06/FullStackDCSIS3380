import React from 'react'
import Book from './book'

const Books = ({books, onHeartPressed}) => {

  if(books.length === 0)
    return <h2>Currently {books.length}</h2>

  return (
    <table className='table'>
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Auhor</th>
            <th>Price</th>
            <th>Year</th>
            <th>Liked</th>
            <th>Action(s)</th>
        </tr>
       {books.map((book) => <Book book ={book} key={book._id} onHeartPressed = {onHeartPressed}/>)}
    </thead>
    </table>
  
  
    
  )
}

export default Books