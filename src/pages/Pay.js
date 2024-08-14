import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Pay.css'; // Ensure you have a CSS file for styling

const Pay = () => {
  const location = useLocation();
  const { cart } = location.state || {}; // Retrieve cart from location state

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePay = () => {
    // Show a pop-up message
    alert('Order has been placed successfully!');
    // You can also handle further actions here, like updating the state or redirecting
  };

  const formatCardNumber = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.match(/.{1,4}/g)?.join(' ') || '';
  };

  const formatExpiryDate = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length <= 2) {
      return cleanValue;
    }
    if (cleanValue.length <= 4) {
      return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
    }
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
  };

  const totalCost = cart ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;

  return (
    <div className="pay-page">
      <div className="bill-section">
        <h2>Bill</h2>
        <div className="bill-header">
          <span className="bill-name">Name</span>
          <span className="bill-price">Price</span>
          <span className="bill-quantity">Quantity</span>
        </div>
        <ul className="bill-list">
          {cart && cart.map((item, index) => (
            <li key={index} className="bill-item">
              <span className="bill-name">{item.name}</span>
              <span className="bill-price">₹{item.price}</span>
              <span className="bill-quantity">{item.quantity}</span>
            </li>
          ))}
        </ul>
        {customerName && customerNumber && (
          <div className="customer-info">
            <p><strong>Name:</strong> {customerName}</p>
            <p><strong>Phone Number:</strong> {customerNumber}</p>
          </div>
        )}
        <p className="total-cost"><strong>Total:</strong> ₹{totalCost}</p>
        <div className="print-button-container">
          <button className="print-button" onClick={handlePrint}>Print Bill</button>
        </div>
      </div>
      <div className="payment-options no-print">
        <h2>Payment Options</h2>
        <div className="payment-buttons">
          <button onClick={() => handlePaymentMethodChange('upi')}>UPI</button>
          <button onClick={() => handlePaymentMethodChange('cash')}>Cash</button>
          <button onClick={() => handlePaymentMethodChange('card')}>Card</button>
        </div>
        {paymentMethod === 'upi' && (
          <div className="upi-section">
            <img src={require('../assets/qr-code.png')} alt="UPI QR Code" />
          </div>
        )}
        {paymentMethod === 'cash' && (
          <div className="cash-section">
            <label>
              Enter Amount:
              <input 
                type="number" 
                value={cashAmount} 
                onChange={(e) => setCashAmount(e.target.value)} 
              />
            </label>
          </div>
        )}
        {paymentMethod === 'card' && (
          <div className="card-section">
            <label>
              Card Number:
              <input 
                type="text" 
                value={formatCardNumber(cardNumber)} 
                onChange={(e) => setCardNumber(e.target.value)} 
                maxLength="19" // Allow space for formatting
              />
            </label>
            <label>
              Expiry Date:
              <input 
                type="text" 
                value={formatExpiryDate(expiryDate)} 
                onChange={(e) => setExpiryDate(e.target.value)} 
                placeholder="MM/YY"
                maxLength="5" // Allow for MM/YY format
              />
            </label>
            <label>
              CVV:
              <input 
                type="password" // Display as password format
                value={cvv} 
                onChange={(e) => setCvv(e.target.value)} 
                maxLength="3" 
              />
            </label>
            <button>Pay with Card</button>
          </div>
        )}
        <div className="input-section">
          <label>
            Name:
            <input 
              type="text" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
            />
          </label>
          <label>
            Phone Number:
            <input 
              type="text" 
              value={customerNumber} 
              onChange={(e) => setCustomerNumber(e.target.value)} 
            />
          </label>
        </div>
        <div className="pay-button-container">
          <button className="pay-button" onClick={handlePay}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
