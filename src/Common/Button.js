import React from 'react';
import './Button.css'; // Import your CSS file for styling

function Button({ label, onClick, type, style }) {

  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}


export default Button;
