import React, { useState } from "react";

const UserForm = ({ addBook }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone) {
      alert("Please fill your name, email, and phone number.");
      return;
    }
    // Pass the form data to the parent component function for adding a new book
    addBook({ userName, userEmail, userPhone });
    // Clear the form fields after submission
    setUserName("");
    setUserEmail("");
    setUserPhone("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="userPhone">Phone:</label>
        <input
          type="text"
          id="userPhone"
          name="userPhone"
          required
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
