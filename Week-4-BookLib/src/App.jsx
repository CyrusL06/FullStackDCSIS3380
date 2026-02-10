
import {useState} from 'react'
import { books as bk} from '../src/assets/bookService'

import Header from '../src/components/header'
import Footer from '../src/components/footer'
import Book from '../src/components/book'
import Books from '../src/components/books'

import './App.css'

function App() {
  const [books,setBooks] = useState(bk);
  console.log(books)

 


  return (
    <div className='app'>
      <Header title="My BookStore" />
      <Books books={books}  name="hello"/>
      <Footer />
  
    </div>
  )
}

export default App
