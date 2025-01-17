import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddPlace = () => {

    const[title, setTitle] = useState('');
    const[address, setAddress] = useState('');
    const[addedPhotos, setAddedPhotos] = useState([]);
    const[photoLink, setPhotoLink] = useState('');
    const[description, setDescription] = useState('');
    const[extraInfo, setExtraInfo] = useState('');
    const[checkIn, setCheckIn] = useState('');
    const[checkOut, setCheckOut] = useState('');
    const[maxGuest, SetMaxGuest] = useState(1);

    const navigate = useNavigate();

    const addPhotoByLinks=async(e)=>{
        e.preventDefault();
        const{data:filename}=await axios.post('http://localhost:5000/api/v1/upload', {link:photoLink})
        setAddedPhotos(prev=>{
            return [...prev, filename]
        })
        setPhotoLink('')
    }

    const addNewPlace=async(e)=>{
        e.preventDefault();
        const{data} = await axios.post('http://localhost:5000/api/v1/places', {
            title,address,addedPhotos,description,extraInfo,checkOut,checkIn,maxGuest
        });
        if(data.status === 200){
            navigate('/account')
        }
    }


    return (
        <div className='p-5 max-w-[500px] mx-auto'>
            <h1 className='text-gray-600 text-center py-5 text-3xl font-bold'>Add Place</h1>
            <form onSubmit={addNewPlace}>

                <input 
                type='text' 
                placeholder='Title' 
                className='outline-none border-primary border-2' 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <input 
                type='text' 
                placeholder='Address'
                className='outline-none border-primary border-2' 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />

                <h2 className='text-gray-500 font-semibold'>Photos</h2>
                <div className='flex items-center'>

                    <input 
                    className='max-w-[300px] outline-none border-primary border-2' 
                    type='text' 
                    placeholder='add photo using link...' 
                    value={photoLink}
                    onChange={(e)=>setPhotoLink(e.target.value)}
                    />

                    <button onClick={addPhotoByLinks} className='bg-primary text-white text-sm py-0 px-2 h-[43px]'>Add Photo</button>
                </div>

                <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-3'>
                    {
                        addedPhotos.length > 0 && addedPhotos.map(link=>(
                            <div>
                                 <img className='rounded-2xl' src={`http://localhost:5000/upload/`+link} />
                            </div>
                        ))
                    }
                    <label className=' border bg-transparent rounded-2xl p-1 text-sm text-gray-600'>
                        <input type='file' className='hidden' />
                        Upload
                    </label>
                </div>

                <textarea className='outline-none border-primary border-[1px] p-2 mt-3'
                    cols='50' rows='5'
                    placeholder='Description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />

                <textarea className='outline-none border-primary border-[1px] p-2 mt-3'
                    cols='50' rows='3' placeholder='Extra Info'
                    value={extraInfo}
                    onChange={(e)=>setExtraInfo(e.target.value)}
                />

                <h2>Check in & Check out</h2>
                <div className='grid sm:grid-cols-3'>
                    <div>
                        <h3 className=''>Check in time</h3>
                        <input type='text' 
                        placeholder='4:30 PM' 
                        value={checkIn}
                        onChange={(e)=>setCheckIn(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Check out time</h3>
                        <input 
                        type='text' 
                        placeholder='4:30 PM' 
                        value={checkOut}
                        onChange={(e)=>setCheckOut(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Max number of guest</h3>
                        <input 
                        type='text' 
                        placeholder='2' 
                        value={maxGuest}
                        onChange={(e)=>SetMaxGuest(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-2'>
                    <button className='bg-primary py-1 w-full text-white'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlace