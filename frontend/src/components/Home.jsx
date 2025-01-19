import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {

  const [place, setPlace] = useState(null);

  const allPlace = async () => {
    await axios.get('http://localhost:5000/api/v1/getPlace').then((response) => {
      setPlace(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    allPlace();
  }, [])

  return (
    <div className='p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {
        place && place.map(item => (
          <Link to={`/place/${item._id}`}>
            <div className='p-3 border border-0.5 border-gray-300 shadow-md rounded-md'>
              <img className='w-full h-[250px] rounded-md' src={`http://localhost:5000/upload/${item.photos}`} />
              <h2 className='text-gray-600 font-semibold truncate py-1'>{item.title}</h2>
              <h3 className='text-gray-600 font-semibold truncate pb-1 text-[13px]' >{item.address}</h3>
              <div className='text-[12px] font-bold text-gray-500 flex gap-2'>
                <span>CheckIn:{item.checkIn}</span>
                <span>CheckOut:{item.checkOut}</span>
                <span>MaxGuest:{item.maxGuest}</span>
              </div>
              <div className='py-1'>
                <button className='bg-primary py-1 w-full text-white rounded'>Book Your Place</button>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home