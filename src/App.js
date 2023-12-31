import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file here
import {
  getUserBooks,
  saveNewBook,
  updateBook,
  deleteBook,
} from "./services/api"; // Import your API functions here
import UserForm from "../components/Form/UserForm";
import BookTable from "../components/Table/BookTable";

function App() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    getUserBooks()
      .then((data) => setBooksData(data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleSaveBook = (book) => {
    saveNewBook(book)
      .then(() => fetchBooks())
      .catch((error) => console.error("Error saving book:", error));
  };

  const handleUpdateBook = (bookId, updatedBook) => {
    updateBook(bookId, updatedBook)
      .then(() => fetchBooks())
      .catch((error) => console.error("Error updating book:", error));
  };

  const handleDeleteBook = (bookId) => {
    deleteBook(bookId)
      .then(() => fetchBooks())
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div className="App">
      <h1>Book Donate</h1>
      <UserForm onSave={handleSaveBook} />
      <BookTable
        books={booksData}
        onUpdate={handleUpdateBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export default App;
