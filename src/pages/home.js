import React, { useState, useEffect } from "react";
import UserForm from "../components/Form/UserForm.js";
import BookTable from "../components/Table/BookTable";
import { fetchData, saveBook } from "../services/api";

const Home = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    displayBooks();
  }, []);

  const displayBooks = async () => {
    try {
      const data = await fetchData(); // Function to fetch book data from API
      setBooksData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addNewBook = async (newBook) => {
    try {
      await saveBook(newBook); // Function to save a new book to the API
      displayBooks(); // Refresh book list after adding a new book
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Book Donate</h1>
      <UserForm addNewBook={addNewBook} />
      <BookTable books={booksData} displayBooks={displayBooks} />
    </div>
  );
};

export default Home;
