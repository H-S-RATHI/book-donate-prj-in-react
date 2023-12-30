import React, { useState } from "react";

const BookRow = ({ book, index, editBook, deleteBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedBook({ ...book });
  };

  const handleSave = () => {
    // Perform save action here
    editBook(editedBook);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Perform delete action here
    deleteBook(book._id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td
        contentEditable={isEditing}
        suppressContentEditableWarning={!isEditing}
        name="title"
        onInput={handleInputChange}
      >
        {editedBook.title}
      </td>
      <td
        contentEditable={isEditing}
        suppressContentEditableWarning={!isEditing}
        name="author"
        onInput={handleInputChange}
      >
        {editedBook.author}
      </td>
      <td
        contentEditable={isEditing}
        suppressContentEditableWarning={!isEditing}
        name="genre"
        onInput={handleInputChange}
      >
        {editedBook.genre}
      </td>
      <td
        contentEditable={isEditing}
        suppressContentEditableWarning={!isEditing}
        name="year"
        onInput={handleInputChange}
      >
        {editedBook.year}
      </td>
      <td
        contentEditable={isEditing}
        suppressContentEditableWarning={!isEditing}
        name="isbn"
        onInput={handleInputChange}
      >
        {editedBook.isbn}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default BookRow;
