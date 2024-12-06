// src/pages/AddCustomer.js
import React, { useState } from 'react';
import '../styles/AddCustomer.css';

function AddCustomer() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://<your-ec2-ip>:5001/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });

    if (response.ok) {
      alert('Customer added successfully!');
      setCustomer({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
      });
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    alert('Error adding customer:', error);
  }
};


  return (
    <div className="add-customer-page">
      <div className="add-customer-card">
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={customer.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={customer.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={customer.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
