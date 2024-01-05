import React, { useState, useEffect } from 'react';
import './Bottoms.css'; // You can create a CSS file for styling
import { FaArrowAltCircleUp } from "react-icons/fa";

const Bottoms = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Event listener for scrolling
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300); // You can adjust the scroll threshold as needed
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} className='rounded-pill border-0 fs-2 m-0 p-0 arrows'>
        <FaArrowAltCircleUp className='text-info m-0 p-0'/>
</button>
    </div>
  );
};

export default Bottoms;
