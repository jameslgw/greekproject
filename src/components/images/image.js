import React from 'react';
import image from './p-drawing.jpg';
// import image from 'p-drawing.jpg'; // Tell webpack this JS file uses this image

const Image = () => {
  // Import result is the URL of your image
  return (
    <div className="image">
      <a href="https://pixabay.com/illustrations/the-parthenon-greece-antiquity-2419027/">
      <img src={image} alt="The Parthenon in Athens" />
      </a>
    </div>
  )
}

export default Image;