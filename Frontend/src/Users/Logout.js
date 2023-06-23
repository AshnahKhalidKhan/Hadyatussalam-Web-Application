import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoutImage from './logout-image.png'; // replace this with the path to your logout image
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import './Logout.css';
import Loading from './Loading';  // import the loading component

function Logout() {
  const [loading, setLoading] = useState(true);  // set loading state to true initially

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // set loading state to false after 2 seconds
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;  // while loading, render the loading component
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="logout-page">
        <img src={logoutImage} alt="Logout" />
        <p>You have been logged out.</p>
        <Link to="/login">Login again</Link>
      </div>
      <Footer />
    </>
  );
}

export default Logout;
