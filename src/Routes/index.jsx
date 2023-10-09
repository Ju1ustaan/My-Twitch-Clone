import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import Popular from '../pages/Popular/Popular'
import StreamPage from '../pages/Stream/StreamPage'

const PageRoutes = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/stream' element={<StreamPage/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes