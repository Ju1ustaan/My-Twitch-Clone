import React from 'react'
import './HighlightCard.css'
import moment from 'moment'
moment.locale('ru');  

const HighlightCard = ({item, setVideoUrl}) => {

const imgUrl = item.thumbnail_url.replace('%{width}x%{height}', '500x300')
const duration = item.duration.replace('h', ' час ').replace('m', ' минут  ').replace('s', ' секунд')
const date = moment(item.started_at).format('LLL');


  return (
    <div className='highlight'>
        <div className='highlight__img' onClick={() => setVideoUrl(item.url)}>
            <img src={imgUrl} alt={item.title}/>
        </div>
        <div className='highlight__info'>
            <div>
            <p className='highlight__title'>{item.title}</p>
            <p className='highlight__desc'>{item.description}</p>
            <p className='highlight__duration'>{duration}</p>
            <p className='highlight__duration'>{date}</p>
            <p className='highlight__duration'>{`Просмотров ${item.view_count}`}</p>
            </div>
            <button className='highlight__btn'>Смотреть позже</button>
        </div>
    </div>
  )
}

export default HighlightCard