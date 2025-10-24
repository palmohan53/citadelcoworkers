// src/components/OfferPopup.js
import React from 'react';


const OfferPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div className="offer-popup-overlay">
      <div className="offer-popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="offer-con">{children}</div>
      </div>
    </div>
  );
};

export default OfferPopup;
