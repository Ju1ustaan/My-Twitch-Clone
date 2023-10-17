import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('token')
    navigate('./login')
  }
  
  return (
    <div className='header'>
      <div className='header__wrap'>
        <NavLink to={'/'}><h1 className='header__logo'>MY TWITCH CLONE</h1></NavLink>
        <NavLink to={'/popular'} className='header__link'>Популярное</NavLink>
        <input className='header__inp' type='text' placeholder='Поиск' />
      </div>

      <button onClick={logOut} className='header__logout'><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
  )
}

export default Header