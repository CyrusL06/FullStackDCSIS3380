import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";

const Book = ({
  book,
  onHeartPressed = () => {},
  onDelete = () => {},
  isEditing = false,
  editDraft,
  onEditStart = () => {},
  onEditChange = () => {},
  onEditSave = () => {},
  onEditCancel = () => {},
}) => {
  if (isEditing) {
    return (
      <tr>
        <td>{book._id}</td>
        <td>
          <input
            value={editDraft?.title ?? ""}
            onChange={(e) => onEditChange("title", e.target.value)}
          />
        </td>
        <td>
          <input
            value={editDraft?.categoryName ?? ""}
            onChange={(e) => onEditChange("categoryName", e.target.value)}
          />
        </td>
        <td>
          <input
            value={editDraft?.author ?? ""}
            onChange={(e) => onEditChange("author", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={editDraft?.numberInStock ?? ""}
            onChange={(e) => onEditChange("numberInStock", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            step="0.01"
            value={editDraft?.price ?? ""}
            onChange={(e) => onEditChange("price", e.target.value)}
          />
        </td>
        <td>
          <input
            type="date"
            value={editDraft?.publishYear ?? ""}
            onChange={(e) => onEditChange("publishYear", e.target.value)}
          />
        </td>
        <td>
          <input
            type="checkbox"
            checked={Boolean(editDraft?.liked)}
            onChange={(e) => onEditChange("liked", e.target.checked)}
          />
        </td>
        <td>
          <button type="button" onClick={() => onEditSave(book._id)}>
            Save
          </button>
          <button type="button" onClick={onEditCancel}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{book._id}</td>
      <td>{book.title}</td>
      <td>{book.category.name}</td>
      <td>{book.author}</td>
      <td>{book.numberInStock}</td>
      <td>{book.price}</td>
      <td>{new Date(book.publishYear).toLocaleDateString()}</td>
      <td>
        <FaHeart
          onClick={() => onHeartPressed(book._id)}
          color={book.liked ? "red" : "gray"}
        />
      </td>
      <td>
        <FaEdit onClick={() => onEditStart(book)} />
        <FaTrash onClick={() => onDelete(book._id)} />
      </td>
    </tr>
  );
};

export default Book;
