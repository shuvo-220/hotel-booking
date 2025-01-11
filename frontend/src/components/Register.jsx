import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const registerUser=(e)=>{
    e.preventDefault()
     axios.post('http://localhost:5000/register',{
      name, email, password
     })
  }

  return (
    <div className='p-4 min-h-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl text-center mb-4'>Registration</h1>
        <form onSubmit={registerUser} className='mt-4 max-w-md mx-auto'>

            <input 
              className='outline-none' 
              type='text' 
              placeholder='Name' 
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <input 
              className='outline-none' 
              type='email' 
              placeholder='Enter Your Email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input 
              className='outline-none' 
              type='password' 
              placeholder='Enter Your Password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button className='primary'>Registration</button>
        </form>
        <p className='pt-2 text-gray-500'>Don't have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
    </div>
  )
}

export default Register