import React, { useContext, useState } from 'react'
import { userContext } from '../UserContext'
import { Link, NavLink, useParams } from 'react-router-dom';
import Bookings from './Bookings';
import Places from './Places';

const Account = () => {

    const { state } = useContext(userContext);
    const { user } = state;

    const {subpage} = useParams();
    console.log(subpage)

    const[tab, setTab] = useState('bookings')

    // const menu=[
    //     {
    //         path:'/account',
    //         name:'Account'
    //     },
    //     {
    //         path:'/bookings',
    //         name:'My Bookings'
    //     },
    //     {
    //         path:'/places',
    //         name:'Accoumodation'
    //     },
    // ]

    return (
        <div className='p-5'>
            <nav className='w-full flex justify-center mt-8 gap-4 '>
                <NavLink className={({isActive})=> isActive ? 'py-2 px-6 bg-primary text-white rounded-full': ''} to='/account'>My Profile</NavLink>
                <NavLink className={({isActive})=> isActive ? 'py-2 px-6 bg-primary text-white rounded-full': ''} onClick={()=>setTab('bookings')}>My Bookings</NavLink>
                <NavLink className={({isActive})=> isActive ? 'py-2 px-6 bg-primary text-white rounded-full': ''} onClick={()=>setTab('places')}>My Accoumodations</NavLink>
                {/* {
                    menu.map((item)=>(
                        <NavLink  className={({isActive})=> isActive ? 'py-2 px-6 bg-primary text-white rounded-full': ''}  to={item.path}>{item.name}</NavLink>
                    ))
                } */}
            </nav>


                <div>
                    <div>{user.name}</div>
                    <div>
                        {
                            tab === 'bookings' ? <Bookings /> : <Places />
                        }
                    </div>
                </div>

        </div>
    )
}

export default Account