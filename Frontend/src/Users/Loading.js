// Loading.js
import React from 'react';
import spinnerImage from './spinner-image.png'; // replace this with the path to your image
import './Loading.css';

function Loading() {
  return (
    <div className="spinner-container">
        <img className="spinner-image" src={spinnerImage} alt="Loading spinner" />
        <h1>Loading...</h1>
      </div>
  );
}

export default Loading;
