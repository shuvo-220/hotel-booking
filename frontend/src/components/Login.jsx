import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../UserContext';

const Login = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const{dispatch} = useContext(userContext)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/login',{
        email, password
      })
      dispatch({type:'LOGIN', payload:res.data.user})
      localStorage.setItem('user', JSON.stringify(res.data.user))
      localStorage.setItem('token', JSON.stringify(res.data.token))
      alert('Login Successful')
      navigate('/')
    } catch (error) {
      console.log(error.message)
      alert('invalid login')
    }
  }

  return (
    <div className='p-4 min-h-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form onSubmit={handleSubmit} className='mt-4 max-w-md mx-auto'>
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

            <button className='primary'>Login</button>
        </form>
        <p className='pt-2 text-gray-500'>Don't have any account? <Link to='/register' className='text-blue-500'>Register</Link></p>
    </div>
  )
}

export default Login