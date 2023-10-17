import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../redux/actions';
import Card from "../../components/Card/Card";
import './Popular.css'
import Pagination from '../../components/Pagination/Pagination';

const Popular = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videoList)
  const loader = useSelector(state => state.loader)
  
  useEffect(() => {
    dispatch(getVideos())
  }, [])
  return (
    <div className='popular'>
      <div className='container'>
        <div className="popular__wrapper">
          {
            loader ? <span className='stream__empty-text loader'>Загрузка...</span> :
            videos && videos.map((item) => (
              <Card key={item.title} item={item} />
            ))
          }
        </div>
      </div>
        <Pagination/>
    </div>
  )
}

export default Popular