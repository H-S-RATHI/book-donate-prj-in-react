import axios from "axios";

const apiUrl = "http://localhost:3000/books"; // Replace with your API URL

const API = {
  // Fetch all books
  async getAllBooks() {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  // Add a new book
  async addBook(bookData) {
    try {
      const response = await axios.post(apiUrl, bookData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  // Update a book by ID
  async updateBook(bookId, bookData) {
    try {
      const response = await axios.put(`${apiUrl}/${bookId}`, bookData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },

  // Delete a book by ID
  async deleteBook(bookId) {
    try {
      const response = await axios.delete(`${apiUrl}/${bookId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
};

export default API;
