import React, { useState } from 'react'
import moment from 'moment/moment' // Библиотека Momentjs для работы с датами "npm install momentjs --save"
import './Card.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
moment.locale('ru')

const Card = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [openAccardion, setOpenAccardion] = useState(null)
    // Переменные которые я отображаю, а именно дата и картинка
    let date = moment(item?.started_at).format('LLL');
    let cardImage = item?.thumbnail_url.replace('{width}x{height}', '400x300')
    // Функции 
    const handleClick = () => {
        navigate('/stream')
        dispatch({ type: 'CHANNEL_ID', payload: item.user_id })
        dispatch({ type: 'USER_LOGIN', payload: item.user_login })
    }
    const toggleAccardion = (id) => {
        id === openAccardion ? setOpenAccardion(null) : setOpenAccardion(id)
    }
    return (
        <div className='card'>
            <div className='card__img' >
                <img src={cardImage} alt={item.title} />
            </div>
            <div className='card__wrapper'>
                <div className='card__started'>
                    <p className='card__game'>{item?.game_name}</p>

                    {
                        item?.type === 'live' ?
                            <p className='card__live'>Эфир</p> :
                            <p className='card__started-at'>Архив</p>
                    }
                </div>
                <div className='card__started'>
                    <p
                        onClick={handleClick}
                        className='card__user'
                    >{item.user_name}</p>
                    <i class="fa-solid fa-angle-up"
                        onClick={() => toggleAccardion(item.id)}
                    ></i>
                </div>
                <div className={`card__accardion ${item.id === openAccardion ? 'open' : ''}`}>
                    <div
                        className='card__started'>
                        <h3 className='card__title'>{item.title}</h3>
                        <i className="fa-solid fa-angle-down"
                            onClick={() => toggleAccardion(item.id)}
                        ></i>
                    </div>
                    <div>
                        <ul className='card__tag-list'>
                            {
                                item?.tags ?
                                    item?.tags.map((tag) => <li className='card__tag'>{`#${tag}`}</li>) :
                                    null
                            }
                        </ul>

                        <div className='card__info'>
                            <p className='card__started-at'>{date}</p>
                            <p className='card__viewer'>{`Смотрит: ${item?.viewer_count}`} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card