import React, { useState } from 'react';
import './Pricing.css'; // Import the CSS file for styling

const Pricing = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const [productType, setProductType] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      email,
      phoneNumber,
      productType,
      reason,
      platform, // Include the platform field in the form data
    };

    // Perform the POST request to the backend API
    fetch('http://localhost:8000/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend API
        console.log('Form submission successful!', data);
        // Reset the form fields
        setEmail('');
        setPhoneNumber('');
        setReason('');
        setProductType('');
        setPlatform('');
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <div className="pricing-container">
      <h1>Pricing Page</h1>
      <p>Fill in the required details:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Type:</label>
          <input
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Platform:</label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pricing;
