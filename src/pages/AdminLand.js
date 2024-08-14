import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLand.css';

const AdminLand = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-land">
      <div className="semi-transparent-box">
        <h1 className='nem'>Admin Dashboard</h1>
        <div className="admin-button-container">
          <button className="admin-button" onClick={() => handleNavigate('/reports')}>Reports</button>
          <button className="admin-button" onClick={() => handleNavigate('/products')}>Products</button>
          <button className="admin-button" onClick={() => handleNavigate('/stock')}>Stock</button>
          <button className="admin-button" onClick={() => handleNavigate('/customer')}>Customer</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLand;
