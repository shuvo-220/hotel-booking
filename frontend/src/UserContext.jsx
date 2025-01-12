import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


   export const userContext = createContext();

const UserContext = ({children}) => {

    const[user, setUser] = useState(null);

    useEffect(()=>{
        if(!user){
            axios.get('/profile')
        }
    },[]);

  return (
    <userContext.Provider value={{user, setUser}} >
        {children}
    </userContext.Provider>
  )
}

export default UserContext