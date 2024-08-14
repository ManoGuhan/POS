import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure the CSS file is correctly imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1000); // Delays the fade-in of the buttons until after the text animation
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="animated-text">NextGenPOS</div>
        <div className="subtitle">||| POS Made Easy |||</div>
        <div className={`button-container ${fadeIn ? 'fade-in' : ''}`}>
          <Link to="/admin-login" className="home-button">ADMIN LOGIN</Link>
          <Link to="/user-login" className="home-button">USER LOGIN</Link>
          <Link to="/register" className="home-button">REGISTER</Link>
        </div>
      </div>
      <div className="socials">
        <FontAwesomeIcon icon={faFacebook} className="socialss facebook" />
        <FontAwesomeIcon icon={faTwitter} className="socialss twitter" />
        <FontAwesomeIcon icon={faInstagram} className="socialss insta" />
        <FontAwesomeIcon icon={faLinkedin} className="socialss link" />
      </div>
      <footer className="footerss">
        <div className="footer-textss">
          © {new Date().getFullYear()} NextGenPOS. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
