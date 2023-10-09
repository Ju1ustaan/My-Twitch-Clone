import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__wrap'>
            <NavLink to={'/'}><h1 className='header__logo'>MY TWITCH CLONE</h1></NavLink>
            <NavLink to={'/popular'} className='header__link'>Популярное</NavLink>
        </div>

        <input className='header__inp' type='text' placeholder='Поиск'/>
    </div>
  )
}

export default Header