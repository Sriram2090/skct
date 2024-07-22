// FeedbackForm.js

import React, { useState } from 'react';
import './Feedback.css'; // Import the CSS file

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const alertMessage = `Feedback submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    alert(alertMessage);

    // Using mailto to open the user's default email client
    const mailtoLink = `mailto:${formData.email}?subject=Feedback&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label className="form-label">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          required
        />
      </label>
      <button type="submit" className="form-button">Submit Feedback</button>
      <button type="button" className="form-button" onClick={handleSubmit}>
        Send Email
      </button>
    </form>
  );
};

export default Feedback;
