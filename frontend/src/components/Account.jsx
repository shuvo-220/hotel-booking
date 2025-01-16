import React, { useContext, useState } from 'react'
import { userContext } from '../UserContext'
import { Link, useNavigate } from 'react-router-dom';
import Bookings from './Bookings';
import Places from './Places';

const Account = () => {

    const { state, dispatch } = useContext(userContext);
    const { user } = state;

    const [tab, setTab] = useState('bookings')

    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className='p-5'>
            <div className='w-full flex justify-center mt-8 gap-4 '>
                <div className='flex flex-col gap-1'>
                    <h1 className='inline-flex items-center gap-1 mr-9 text-gray-600 text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        {user.name}</h1>
                    <span className='text-gray-700'>{user.email}</span>
                    <span>
                        <button onClick={handleLogOut} className='bg-gray-50 text-red-400'>Logout</button>
                    </span>
                </div>
                <div>
                    <div className='flex gap-4'>
                        <Link className={tab === 'bookings' ? 'py-2 px-6 bg-primary text-white rounded-full' : ''} onClick={() => setTab('bookings')}>
                            My Bookings</Link>
                        <Link className={tab === 'places' ? 'py-2 px-6 bg-primary text-white rounded-full' : ''} onClick={() => setTab('places')}>My Accoumodations</Link>
                    </div>

                    <div className='p-5'>
                        {
                            tab === 'bookings' ? <Bookings /> : <Places />
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Account