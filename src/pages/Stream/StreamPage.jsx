import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { getStream, getUser } from '../../redux/actions'
import './StreamPage.css'
import HighlightCard from '../../components/HighlightCard/HighlightCard'
import { LANG } from '../../helper/language';
import UserCard from '../../components/UserCard/UserCard'


const StreamPage = () => {
  const dispatch = useDispatch()
  // Переменные которые достаю с моего store с помощью хука useSelector()
  const channelId = useSelector(state => state.chanelId)
  const highlight = useSelector(state => state.highlight)
  const userLogin = useSelector(state => state.userLogin)
  const loader = useSelector(state => state.loader)
  const user = useSelector(state => state.user)
  // Хук useState я использую что бы достать URL видео с корточки 
  const [videoUrl, setVideoUrl] = useState('')

  // Здесь делаю запрос на все видео определенного юзера
  useEffect(() => {
    dispatch(getStream(channelId))
    dispatch(getUser(userLogin))
  }, [channelId])
  return (
    <div className='stream'>
      {
        loader ? <span className='stream__empty-text loader'>Загрузка...</span> :
          <div className='container'>
            <div className='stream__wrapper'>
              <div className='stream__player'>
                <ReactPlayer
                  controls={true}
                  playing={true}
                  playIcon
                  width={'100%'}
                  height={'400px'}
                  url={videoUrl} />
              </div>
              <UserCard/>
            </div>
            <hr/>
            {
              highlight.length > 0 ?
                <div className='stream__highlight'>
                  {
                    highlight.map(item => (
                      <HighlightCard item={item} setVideoUrl={setVideoUrl} />
                    ))
                  }
                </div>
                :
                <div className="stream__empty">
                  <p className='stream__empty-text'>Нет видео</p>
                  <div className="stream__empty-img">
                    <img src="https://visualpharm.com/assets/78/No%20Video-595b40b75ba036ed117da08b.svg" alt="no video" />
                  </div>
                </div>
            }
          </div>
      }
    </div>
  )
}

export default StreamPage