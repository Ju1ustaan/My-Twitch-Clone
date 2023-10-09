import React from 'react'
import moment from 'moment/moment' // Библиотека Momentjs для работы с датами "npm install momentjs --save"
import './Card.css'
moment.locale('ru')

const Card = ({ item, handleClick }) => {
    // Переменные которые я отображаю а именно дата и картинка
    let date = moment(item?.started_at).format('LLL');
    let cardImage = item?.thumbnail_url.replace('{width}x{height}', '400x300')

    return (
        <div className='card'>
            <div className='card__img' onClick={handleClick}>
                <img src={cardImage} alt={item.title} />
            </div>
            <div className='card__wrapper'>
                <div className='card__started'>
                    <p className='card__started-at'>{date}</p>
                    {
                        item?.type === 'live' ?
                            <p className='card__live'>Эфир</p> :
                            <p className='card__started-at'>Архив</p>
                    }
                </div>
                <p className='card__game'>{item?.game_name}</p>
                <ul className='card__tag-list'>
                    {
                        item?.tags ? item?.tags.map((tag) => <li className='card__tag'>{`#${tag}`}</li>) : null
                    }
                </ul>
                <h3 className='card__title'>{item.title}</h3>
                <div className='card__info'>
                    <p className='card__user'>{item.user_name}</p>
                    <p className='card__viewer'>{`Смотрит: ${item?.viewer_count}`} </p>
                </div>
            </div>
        </div>
    )
}

export default Card