import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import './StreamPage.css'

const StreamPage = () => {
  const dispatch = useDispatch()
  const channelId = useSelector(state => state.chanelId)
  const url = useSelector(state => state.stream)
  useEffect(() => {
    dispatch(getStream(channelId))
  }, [channelId])

  return (
    <div className='stream'>
      <div className='container'>
        <div className='stream__wrapper'>
          <ReactPlayer 
          controls={true} 
          width={'100%'} 
          height={'100%'} 
          url={url}/>
        </div>
      </div>
    </div>
  )
}

export default StreamPage