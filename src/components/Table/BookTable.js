import React, { useState, useEffect } from "react";
import BookRow from "./Table/BookRow";
import { getAllBooks } from "../../services/api";

const BookTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await getAllBooks(); // Function to fetch books from the API
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const renderBooks = () => {
    return books.map((book, index) => (
      <BookRow key={book._id} book={book} index={index} onUpdate={fetchBooks} />
    ));
  };

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year of Publication</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderBooks()}</tbody>
      </table>
    </div>
  );
};

export default BookTable;
