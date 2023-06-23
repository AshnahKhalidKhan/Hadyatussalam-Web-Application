
import React from 'react';
import './MNavbar.css';
import { Link } from 'react-router-dom';

function MNavbar() {
  return (
    <div className="Mnavbar">
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/MentorUsers">
        <button>USERS</button>
      </Link>
      <Link to="/community">
        <button>COMMUNITY</button>
      </Link>
      <Link to="/community">
        <button>CALENDER</button>
      </Link>
      <Link to="/community">
        <button>PRAYER TIMES</button>
      </Link>
      <Link to="/community">
        <button>E-QURAN</button>
      </Link>
    </div>
  );
}

export default MNavbar;
