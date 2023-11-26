import React, { createContext, useContext, useState, useEffect } from 'react';

// Context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your application with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // set the user and save it to local storage
  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  //  log out the user and remove from local storage
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Effect to check local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Value to be provided by the context
  const contextValue = {
    user,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={contextValue}>
    {children}
    </AuthContext.Provider>;
};
