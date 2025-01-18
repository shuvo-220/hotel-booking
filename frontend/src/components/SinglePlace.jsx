import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePlace = () => {

    const{id} = useParams();

  return (
    <div>SinglePlace {id}</div>
  )
}

export default SinglePlace