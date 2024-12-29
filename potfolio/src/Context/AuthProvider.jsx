/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={'Faheem'}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
