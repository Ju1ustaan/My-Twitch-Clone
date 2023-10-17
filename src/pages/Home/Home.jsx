import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home__desc'>
                    <h2 className='home__title'>My Twitch Clone</h2>
                    <p className='home__intro'>
                        На следующем занятии мы проделаем авторизацию &#128064;
                    </p>
                    <div>
                    <div className='home__animation rotate'>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                    <div className='home__animation rotate'>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex home__title-reverse'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex home__title-reverse'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                    <div className='home__animation rotate2'>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                    <div className='home__animation '>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex home__title-reverse '>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex home__title-reverse'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home