import React from 'react'
import { Link } from 'react-router-dom'

const Places = () => {
  return (
    <div>
      <div className=''>
        <Link className='inline-flex gap-1 bg-primary text-white py-1 px-2 rounded' to='/place/new'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          Add New Place</Link>
      </div>
    </div>
  )
}

export default Places