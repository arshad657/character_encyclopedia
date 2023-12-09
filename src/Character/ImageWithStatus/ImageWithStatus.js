import React from 'react';
import './ImageWithStatus.css';

function ImageWithStatus({ imageUrl, statusText }) {
  
  return (
    <div className="image-container" >
      <img className="image" src={imageUrl} alt="Character" />
      <div className="status" style={{ backgroundColor: statusText ==='Alive' ? '#4CAF50' : statusText === 'Dead' ? '#D72F15' : 'orange' }}>
        {statusText}
      </div>
    </div>
  );
}

export default ImageWithStatus;