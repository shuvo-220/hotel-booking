import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios';


   export const userContext = createContext();


const UserContext = ({children}) => {

  const initialState={
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
  }

  const reducer=(state, action)=>{
    switch(action.type){
      case 'LOGIN':
        return{
          ...state,
          user:action.payload
        }
      case 'LOGOUT':
        return{
          ...state,
          user:null,
        }
      default:
        return state;
    }
  }

   const[state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{state, dispatch}} >
        {children}
    </userContext.Provider>
  )
}

export default UserContext