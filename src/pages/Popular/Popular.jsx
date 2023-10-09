import React, { useEffect, useState } from 'react'
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom' 
import './Popular.css'

const Popular = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const videos = useSelector(state => state?.videoList)

  const handleClick = () => {
    navigate('/stream')
    dispatch({type: 'CHANNEL_ID', payload: item.user_id})
}
  
  useEffect(() => {
    dispatch(getVideos())
  }, [])
  return (
    <div className='popular'>
      <div className='container'>
        <div className="popular__wrapper">
          {
            videos && videos.map((item) => (
              <Card key={item.title} item={item} handleClick={handleClick}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Popular