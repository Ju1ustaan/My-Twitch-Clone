import React from 'react'
import './UserCard.css'
import { useSelector } from 'react-redux'
import moment from 'moment'

const UserCard = () => {
const user = useSelector(state => state.user)
const date = moment(user['created_at']).format('LLL')
  return (
    <div className='user-card'>
        <div className='user-card__img'>
            <img src={user.profile_image_url} alt={user.display_name} />
        </div>
        <div className="user-card__info">
            <h3 className="user-card__name">{user.display_name}</h3>
            <p className="user-card__desc">{user.description}</p>
            <p className="user-card__date">{date}</p>
        </div>
    </div>
  )
}

export default UserCard