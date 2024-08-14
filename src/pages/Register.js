import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';
import backgroundGif from '../assets/loginback.gif'; 

const Register = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fadeInDelay = 400; // Delay before showing elements

    const fadeInTimer = setTimeout(() => {
      document.querySelectorAll('.reg-input, .reg-inputGroup, .reg-registerButton, .reg-footer').forEach(el => {
        el.classList.add('fade-in');
      });
    }, fadeInDelay);

    return () => {
      clearTimeout(fadeInTimer);
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/register', { // Updated port
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, password }),
      });

      if (response.ok) {
        alert('Registration successful');
        setEmployeeId('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login');
      } else {
        const data = await response.json();
        console.error('Server Error:', data);
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="reg-container" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <div className="reg-form-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="reg-input">
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="text" // Changed type to text
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
          <div className="reg-inputGroup">
            <label htmlFor="password">Enter New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="reg-inputGroup fade-in">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reg-registerButton fade-in">Register</button>
        </form>
      </div>
      
      <footer className="reg-footer">
        <div className="reg-footer-text">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Register;
