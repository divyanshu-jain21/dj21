// authService.js

const user = {
    username: 'pharma',
    password: 'ggpr@123',
  };
  
  export const login = (username, password) => {
    if (username === user.username && password === user.password) {
      localStorage.setItem('pharma', JSON.stringify(user));
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('pharma');
  };
  