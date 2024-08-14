import React, { useState } from 'react';
import './Customer.css'; // Ensure you have styles defined here

const sampleCustomers = [
  {
    customerId: 'CUST001',
    name: 'John Doe',
    mobileNumber: '123-456-7890',
    order: ['Margherita Pizza', 'Caesar Salad', 'Tiramisu'],
    totalBill: 3800, // Amount in ₹
    reviews: ['Great food!', 'Excellent service!', 'Will come back again!']
  },
  {
    customerId: 'CUST002',
    name: 'Jane Smith',
    mobileNumber: '987-654-3210',
    order: ['Spaghetti Carbonara', 'Garlic Bread'],
    totalBill: 2500, // Amount in ₹
    reviews: ['Delicious pasta!', 'Friendly staff.']
  },
  {
    customerId: 'CUST003',
    name: 'Alice Johnson',
    mobileNumber: '555-123-4567',
    order: ['Lasagna', 'Bruschetta', 'Gelato'],
    totalBill: 3200, // Amount in ₹
    reviews: ['The lasagna was amazing!', 'Loved the dessert.']
  },
  {
    customerId: 'CUST004',
    name: 'Robert Brown',
    mobileNumber: '444-678-9101',
    order: ['Pizza Pepperoni', 'Mozzarella Sticks'],
    totalBill: 2350, // Amount in ₹
    reviews: ['Best pizza in town!', 'Mozzarella sticks were crunchy.']
  },
  {
    customerId: 'CUST005',
    name: 'Emily Davis',
    mobileNumber: '333-222-1111',
    order: ['Fettuccine Alfredo', 'Caprese Salad'],
    totalBill: 2900, // Amount in ₹
    reviews: ['Creamy Alfredo, just how I like it!', 'Caprese salad was fresh.']
  },
  {
    customerId: 'CUST006',
    name: 'Michael Wilson',
    mobileNumber: '222-444-6666',
    order: ['Ravioli', 'Minestrone Soup'],
    totalBill: 2300, // Amount in ₹
    reviews: ['Ravioli was stuffed perfectly.', 'Minestrone was hearty.']
  },
  {
    customerId: 'CUST007',
    name: 'Sarah Lee',
    mobileNumber: '111-222-3333',
    order: ['Penne Arrabbiata', 'Garlic Knots', 'Panna Cotta'],
    totalBill: 3450, // Amount in ₹
    reviews: ['Spicy and flavorful penne!', 'Dessert was perfect.']
  },
  {
    customerId: 'CUST008',
    name: 'Chris Evans',
    mobileNumber: '999-888-7777',
    order: ['Risotto', 'Tomato Soup'],
    totalBill: 2800, // Amount in ₹
    reviews: ['Risotto was cooked to perfection.', 'Soup was flavorful.']
  },
  {
    customerId: 'CUST009',
    name: 'Natalie Portman',
    mobileNumber: '888-777-6666',
    order: ['Pizza Margherita', 'Tiramisu'],
    totalBill: 2700, // Amount in ₹
    reviews: ['Pizza was crispy and delicious!', 'Tiramisu was divine.']
  },
  {
    customerId: 'CUST010',
    name: 'Henry Cavill',
    mobileNumber: '777-666-5555',
    order: ['Pasta Primavera', 'Garlic Bread'],
    totalBill: 2600, // Amount in ₹
    reviews: ['Fresh and tasty pasta!', 'Garlic bread was buttery.']
  }
];

const Customer = ({ customer }) => {
  if (!customer) {
    return <p>No customer data available.</p>;
  }

  const { customerId, name, mobileNumber, order, totalBill, reviews } = customer;

  return (
    <div className="customer-container">
      <h1 className="customer-name">Customer: {name}</h1>
      <p className="customer-id">ID: {customerId}</p>
      <p className="customer-mobile">Mobile: {mobileNumber}</p>
      <div className="customer-order">
        <h2>Order Details:</h2>
        {order && order.length > 0 ? (
          <ul>
            {order.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No items in the order.</p>
        )}
      </div>
      <p className="customer-bill">Total Bill: ₹{totalBill.toFixed(2)}</p>
      <div className="customer-reviews">
        <h2>Customer Reviews:</h2>
        {reviews && reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>"{review}"</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = sampleCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.customerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {filteredCustomers.length > 0 ? (
        filteredCustomers.map((customer, index) => (
          <Customer key={index} customer={customer} />
        ))
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );
};

export default App;
