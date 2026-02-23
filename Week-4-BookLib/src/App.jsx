
import {useState} from 'react'
import { books as bks} from '../src/assets/bookService'

import Header from '../src/components/header'
import Footer from '../src/components/footer'
import Book from '../src/components/book'
import Books from '../src/components/books'

import './App.css'

function App() {
  const [books,setBooks] = useState(bks);
  
  
    const heartRate =(id) => {
      // const updateHeart = bks.map(book => book._id === id ? {...book,liked:true} : book)
      const update = books.map(book => book._id === id ? {...book, liked: !book.liked}: book)
      setBooks(update)
    }



  console.log(books)



  return (
    <div className='app'>
      <Header title="My BookStore" />
      <Books books={books} onHeartPressed={heartRate}  name="hello"/>
      <Footer />
  
    </div>
  )
}

export default App
