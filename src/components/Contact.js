import React, { useState } from "react";
import "./Contact.css"; // Assuming you have styles in this file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "",
    paymentAmount: "", // New field for payment amount
  });

  const [message, setMessage] = useState(""); // State for confirmation message
  const [submittedAmount, setSubmittedAmount] = useState(""); // State for submitted payment amount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set confirmation message indicating order completion
    setMessage("Order complete! You will receive it tomorrow."); 
    setSubmittedAmount(formData.paymentAmount); // Set submitted amount

    // Reset form after successful submission
    setFormData({ 
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      paymentMethod: "",
      paymentAmount: "", // Reset payment amount
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Information */}
        <h2>Address</h2>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Payment Method */}
        <h2>Payment Method</h2>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="easypaisa"
              checked={formData.paymentMethod === "easypaisa"}
              onChange={handleChange}
              required
            />
            EasyPaisa
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={formData.paymentMethod === "bank"}
              onChange={handleChange}
              required
            />
            Bank Transfer
          </label>
        </div>

        {/* Payment Amount */}
        <div className="form-group">
          <label htmlFor="paymentAmount">Payment Amount:</label>
          <input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleChange}
            required
            placeholder="Enter amount in PKR"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display Confirmation Message */}
      {message && (
        <div className="confirmation-message">
          {message} {submittedAmount && <p>Amount: {submittedAmount} PKR</p>}
        </div>
      )}
    </div>
  );
};

export default Contact;
