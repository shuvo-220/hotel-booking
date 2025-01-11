import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='p-4 min-h-screen flex flex-col justify-center items-center'>
         <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='mt-4 max-w-md mx-auto'>
            <input className='outline-none' type='email' placeholder='Enter Your Email' />
            <input className='outline-none' type='password' placeholder='Enter Your Password' />
            <button className='primary'>Login</button>
        </form>
        <p className='pt-2 text-gray-500'>Don't have any account? <Link to='/register' className='text-blue-500'>Register</Link></p>
    </div>
  )
}

export default Login