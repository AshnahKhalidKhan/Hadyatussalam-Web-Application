import React from 'react';
import './Footer.css';
import logo from './HadyaUrdu.png';
import icon1 from './email.png';
import icon2 from './facebook.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <div className="footer-icons">
          <a href="mailto:HadyaMentoring@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src={icon1} alt="Icon 1" />
          </a>
          <a href="https://www.facebook.com/groups/576935027825187/" target="_blank" rel="noopener noreferrer">
            <img src={icon2} alt="Icon 2" />
          </a>
        </div>
        <div class="footer-text">
          <p>Copyright ©2023 Hadyatussalam Productive Ummah Application (HPUA).
             All Rights Reserved.</p>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="footer-rectangle"></div>
    </div>
  );
}

export default Footer;
