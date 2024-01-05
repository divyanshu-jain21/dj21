import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './DownArrow.css';

const DownArrow = () => {
  return (
    <div className="arrow-container">
      <div className="circle">
        <div className="blinking-border"></div>
        <FaArrowDown className="arrow-icon" />
      </div>
    </div>
  );
};

export default DownArrow;
