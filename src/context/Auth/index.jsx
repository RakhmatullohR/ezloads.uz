import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

