import React, {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Places = () => {

  const[place, setPlace] = useState([])

  const getPlaces=async()=>{
    await axios.get('http://localhost:5000/api/v1/GetPlace').then(({data})=>{
      setPlace(data)
    })
  }

  useEffect(()=>{
    getPlaces()
  },[])

  return (
    <div>
      <div className=''>
        <Link className='inline-flex gap-1 bg-primary text-white py-1 px-2 rounded' to='/place/new'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          Add New Place</Link>
      </div>
      {/* place */}
      <div>
        <div className='mt-4'>
          {
            place.map((item)=>(
              <div className='m-3 rounded'>
                <Link to={`/place/${item._id}`}>
                <div className='flex items-center gap-5 bg-gray-200 p-5'>
                <h2>{item.title}</h2>
                <img className='w-12 h-12' src={`http://localhost:5000/upload/${item.photos[0]}`} alt={item.title} />
                <p>{item.description}</p>
                </div>
              </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Places