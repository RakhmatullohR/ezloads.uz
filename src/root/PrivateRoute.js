import React from 'react';
import { Navigate } from 'react-router-dom/dist';
import { useAuth } from '../context/Auth';

const PrivateRoute = ({ children }) => {
  let [{ token }] = useAuth();
  console.log(token);
  console.log(children);
  return token ? children : <Navigate to='/signin' />;
};

export default PrivateRoute;
