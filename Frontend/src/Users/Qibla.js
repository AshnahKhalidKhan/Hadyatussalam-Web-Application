import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import './Community.css';
import HelpLogo from './Help.png';
import CommunityLogo from './community.png';
import MentorLogo from './Mentor.png';

function Qibla() {
  const [qiblacoordinates, setQiblaCoordinates] = useState('');

  useEffect(() => {
    fetchQiblaCoordinates();
  }, []);


  async function fetchQiblaCoordinates() {
    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      console.log(latitude);
      console.log(longitude);
      const configuration = {
        method: 'get',
        url: 'http://localhost:8000/Path/Qibla',
        params: {
          latitude: latitude,
          longitude: longitude,
        },
      };
      const response = await axios(configuration);
      if (response.status === 200) {
        console.log(response.data.qiblaDirection);
        const qibla = createAsciiArrow(response.data.qiblaDirection);
        console.log(qibla);
        setQiblaCoordinates(qibla);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function createAsciiArrow(angle) {
    const arrowLength = 10; // Length of the arrow
  
    // Convert the angle to radians
    const radians = angle * (Math.PI / 180);
  
    // Calculate the x and y components of the arrow's tip
    const tipX = Math.cos(radians) * arrowLength;
    const tipY = Math.sin(radians) * arrowLength;
  
    // Create the ASCII arrow
    let arrow = '';
    for (let y = -arrowLength; y <= arrowLength; y++) {
      for (let x = -arrowLength; x <= arrowLength; x++) {
        if (Math.round(x) === Math.round(tipX) && Math.round(y) === Math.round(tipY)) {
          arrow += '*'; // Place a '*' at the arrow's tip
        } else {
          arrow += ' ';
        }
      }
      arrow += '\n'; // Move to the next line
    }
  
    return arrow;
  }  

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="community-container">
        <h1>Qibla coordinates</h1>
        <div className="button-container">
        </div>
        <h1 className='profile-details'>{qiblacoordinates}</h1>
      </div>
      <Footer />
    </>
  );
}

export default Qibla;
