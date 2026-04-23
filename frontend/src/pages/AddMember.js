import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddMember() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    contact: "",
    additionalDetails: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("email", form.email);
      formData.append("contact", form.contact);
      formData.append("additionalDetails", form.additionalDetails);
      if (image) {
        formData.append("image", image);
      }

      await axios.post("http://localhost:5000/members", formData);

      setIsError(false);
      setMessage("Member added successfully.");
      setForm({
        name: "",
        role: "",
        email: "",
        contact: "",
        additionalDetails: "",
      });
      setImage(null);
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || "Failed to add member.");
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h2>Add Member</h2>
        <p>Fill in member details and upload a profile image.</p>
      </div>

      {message && <div className={`message ${isError ? "error" : "success"}`}>{message}</div>}

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input id="role" name="role" value={form.role} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input id="contact" name="contact" value={form.contact} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="additionalDetails">Additional Details</label>
          <textarea
            id="additionalDetails"
            name="additionalDetails"
            value={form.additionalDetails}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0] || null)} />
        </div>

        <div className="actions">
          <button type="submit" className="button">
            Save Member
          </button>
          <Link to="/" className="button secondary">
            Back Home
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
