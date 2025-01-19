import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePlace = () => {

  const{id} = useParams();

  const[single, setSingle] = useState(null);

    const singlePlace=async()=>{
      const res = await axios.get(`http://localhost:5000/api/v1/place/${id}`);
      setSingle(res.data)
      console.log(res.data)
    }

    useEffect(()=>{
      singlePlace()
    },[id])

  return (
    <div className='p-5'>
      {
        single && 
        <div>
          <h2>{single.title}</h2>
        </div>
      }
    </div>
  )
}

export default SinglePlace