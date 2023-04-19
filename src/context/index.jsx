import React from 'react'
// auth
import { AuthPovider } from './Auth';

const MainContextProvider = ({ children }) => {
  return (
    <>
      <AuthPovider>
       {children}
      </AuthPovider>
    </>
  );
};

export default MainContextProvider;
