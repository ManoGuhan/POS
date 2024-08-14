import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import Register from './pages/Register';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Stock from './pages/Stock';
import Contact from './pages/Contact';
import AdminLand from './pages/AdminLand';
import Pay from './pages/Pay';
import Customer from './pages/Customer'; // Import the Customer component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/admin-login" element={<AdminLogin />} />  {/* Admin login page route */}
        <Route path="/user-login" element={<UserLogin />} />  {/* User login page route */}
        <Route path="/register" element={<Register />} />  {/* Registration page route */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/products" element={<Products />} />  {/* Products page route */}
        <Route path="/stock" element={<Stock />} />  {/* Stock management page route */}
        <Route path="/contact" element={<Contact />} />  {/* Contact page route */}
        <Route path="/admin-land" element={<AdminLand />} />  {/* Admin dashboard page route */}
        <Route path="/pay" element={<Pay />} />  {/* Payment page route */}
        <Route path="/customer" element={<Customer />} />  {/* Customer details page route */}
      </Routes>
    </Router>
  );
};

export default App;
