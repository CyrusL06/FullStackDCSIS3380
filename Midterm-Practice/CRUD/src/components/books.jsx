import Book from "./book";

const Books = ({
  books,
  onHeartPressed,
  onDelete,
  editingBookId,
  editDraft,
  onEditStart,
  onEditChange,
  onEditSave,
  onEditCancel,
}) => {
  if (books.length === 0) {
    return <h2>Currently {books.length}</h2>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Author</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Year</th>
          <th>Liked</th>
          <th>Action(s)</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            key={book._id}
            book={book}
            onDelete={onDelete}
            onHeartPressed={onHeartPressed}
            isEditing={editingBookId === book._id}
            editDraft={editDraft}
            onEditStart={onEditStart}
            onEditChange={onEditChange}
            onEditSave={onEditSave}
            onEditCancel={onEditCancel}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Books;
