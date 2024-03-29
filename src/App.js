import React, { useState } from 'react';
import './index.css'; // Importing the CSS file

import img1 from './images/144.png';
import img2 from './images/240.png';
import img3 from './images/360.png';
import img4 from './images/720.png';
import img5 from './images/108000.jpg';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedImage(selectedOption);
  };

  // Define the image sizes based on the selected option
  const getImageSize = (selectedOption) => {
    switch (selectedOption) {
      case 'option1':
        return { width: '100px', height: '100px' };
      case 'option2':
        return { width: '100px', height: '100px' };
      case 'option3':
        return { width: '100px', height: '100px' };
      case 'option4':
        return { width: '100px', height: '100px' };
      case 'option5':
        return { width: '400px', height: '400px' };
      default:
        return { width: '240px', height: '240px' }; // Default size
    }
  };

  return (
    <div className="hello">
      <select onChange={handleImageChange}>
        <option>Select</option>
        <option value="option1">144p</option>
        <option value="option2">240p</option>
        <option value="option3">360p</option>
        <option value="option4">720p</option>
        <option value="option5">1080p</option>
      </select>
      {selectedImage && (
        <img
          src={getImageSrc(selectedImage)}
          alt="Selected"
          style={getImageSize(selectedImage)}
        />
      )}
    </div>
  );
}

// Define the image source based on the selected option
const getImageSrc = (selectedOption) => {
  switch (selectedOption) {
    case 'option1':
      return img1;
    case 'option2':
      return img2;
    case 'option3':
      return img3;
    case 'option4':
      return img4;
    case 'option5':
      return img5;
    default:
      return null;
  }
};

export default App;