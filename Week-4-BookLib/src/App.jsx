
import {useState} from 'react'
import { books as bks} from '../src/assets/bookService'

import Header from '../src/components/header'
import Footer from '../src/components/footer'
import Book from '../src/components/book'
import Books from '../src/components/books'

import './App.css'
import AddBookForm from './components/addBookForm'

function App() {
  const [books,setBooks] = useState(bks);
  
  const [editBookId, setEditBookId] = useState(null);
const [editDraft, setEditDraft] = useState(null);
  
const toDateInputValue = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const tzOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - tzOffset).toISOString().slice(0, 10);
};

    const heartRate =(id) => {
      // const updateHeart = bks.map(book => book._id === id ? {...book,liked:true} : book)
      const update = books.map(book => book._id === id ? {...book, liked: !book.liked}: book)
      setBooks(update)
    }

    const onDelete =(id) => {
      console.log("Deleted")
      const update = books.filter(book => book._id !== id)
      setBooks(update)

    }

    const onAddBook = (newBook) => {
   setBooks((prev) => [newBook, ...prev]);
};
  
const onEditStart = (book) => {
	setEditBookId(book._id);
		setEditDraft({
			title: book.title ?? "", //if book is null
			categoryName: book.category?.name ?? "",
			author: book.author ?? "",
			numberInStock: String(book.numberInStock ?? ""),
			price: String(book.price ?? ""),
			publishYear: toDateInputValue(book.publishYear),
			liked: Boolean(book.liked),
		});
}

const onEditSave = (id) => {
	if(!editDraft) return;
	
	const updatedBook = {
		_id: id,
		title: editDraft.title.trim(),
		category: {
			_id: editDraft.categoryName.trim().toLowerCase().replace(/\s+/g,""),

			name: editDraft.categoryName.trim(),
		},
		author: editDraft.author.trim(),
		numberInStock: Number(editDraft.numberInStock) || 0,
		price: Number(editDraft.price) || 0,
		publishYear: editDraft.publishYear 
			? new Date(editDraft.publishYear).toISOString()
			: new Date().toISOString(),
		liked: Boolean(editDraft.liked) ,
		};

	setBooks((prevBooks) =>
    prevBooks.map((book) => (book._id === id ? updatedBook : book))
  );
  onEditCancel();

}

  const onEditChange = (name, value) => {
	setEditDraft((prevDraft) => ({...prevDraft, [name]: value}))
}

  const onEditCancel = () => {
	setEditBookId(null);
	setEditDraft(null);
}


  console.log(books)



  return (
    <div className='app'>
      <Header title="My BookStore" />
      <AddBookForm onAddBook={onAddBook}/>
     <Books
  books={books}
  onHeartPressed={heartRate}
  onDelete={onDelete}
  editingBookId={editBookId}
  editDraft={editDraft}
  onEditStart={onEditStart}
  onEditChange={onEditChange}
  onEditSave={onEditSave}
  onEditCancel={onEditCancel}
/>

      <Footer />
  
    </div>
  )
}

export default App
