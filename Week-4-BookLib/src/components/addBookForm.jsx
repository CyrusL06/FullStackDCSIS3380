import { useState } from "react";

const initialForm = {
  title: "",
  categoryName: "",
  author: "",
  numberInStock: "",
  price: "",
  publishYear: "",
};

const AddBookForm = ({ onAddBook = () => {} }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.categoryName.trim() || !form.author.trim()) {
      return;
    }

    const newBook = {
      _id: `m${Date.now()}`,
      title: form.title.trim(),
      category: {
        _id: form.categoryName.trim().toLowerCase().replace(/\s+/g, ""),
        name: form.categoryName.trim(),
      },
      author: form.author.trim(),
      numberInStock: Number(form.numberInStock) || 0,
      price: Number(form.price) || 0,
      publishYear: form.publishYear
        ? new Date(form.publishYear).toISOString()
        : new Date().toISOString(),
      liked: false,
    };

    onAddBook(newBook);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="categoryName"
          value={form.categoryName}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          name="numberInStock"
          type="number"
          value={form.numberInStock}
          onChange={handleChange}
          placeholder="Stock"
        />
        <input
          name="price"
          type="number"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="publishYear"
          type="date"
          value={form.publishYear}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
