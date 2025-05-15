import React, { useState } from "react";

function JoinGroupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Optionally reset form:
    // setFormData({ fullName: '', email: '', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Join the Group</h2>

      <div>
        <label>Full Name:</label>
        <br />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email Address:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Why do you want to join?</label>
        <br />
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default JoinGroupForm;
