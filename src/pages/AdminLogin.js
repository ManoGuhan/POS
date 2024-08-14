import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import backgroundGif from '../assets/loginback.gif'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fadeInDelay = 400; // Reduced delay before showing elements

    const fadeInTimer = setTimeout(() => {
      document.querySelector('.form-container h1').classList.add('fade-in');
      document.querySelectorAll('.input, .inputGroup, .loginButton, .social-icons').forEach(el => {
        el.classList.add('fade-in');
      });
      document.querySelector('.container').classList.add('hide-cursor');
    }, fadeInDelay);

    return () => {
      clearTimeout(fadeInTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual login logic
    navigate('/admin-land'); // Redirect to AdminLand upon successful login
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <div className="form-container">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">employee id</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="loginButton">Login</button>
        </form>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon insta" />
        <FontAwesomeIcon icon={faLinkedin} className="social-icon link" />
      </div>
      <footer className="footer">
        <div className="footer-text">
          © {new Date().getFullYear()} NextGenPOS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;
