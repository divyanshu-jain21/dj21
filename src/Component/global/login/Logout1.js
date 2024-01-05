// Logout.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from './authService';

function Logout1() {
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout1