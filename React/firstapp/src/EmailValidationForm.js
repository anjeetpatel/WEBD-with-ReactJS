import React, { useState } from "react";

const EmailValidationForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to validate email format using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email when the form is submitted
    if (validateEmail(email)) {
      setErrorMessage("");
      alert("Email is valid! Form submitted.");
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailValidationForm;
