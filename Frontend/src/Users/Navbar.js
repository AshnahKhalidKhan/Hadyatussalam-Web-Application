// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/diaries">
        <button>DIARIES</button>
      </Link>
      <Link to="/budgets">
        <button>BUDGETS</button>
      </Link>
      <Link to="/habits">
        <button>HABITS</button>
      </Link>
      <Link to="/todolists">
        <button>TO-DO LISTS</button>
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
      <Link to="/mentors">
        <button>MENTOR</button>
      </Link>
    </div>
  );
}

export default Navbar;
