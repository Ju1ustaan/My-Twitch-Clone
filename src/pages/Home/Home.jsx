import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home__desc'>
                    <h2 className='home__title'>My Twitch Clone</h2>
                    <p className='home__intro'>
                        Думаю вы достаточно ознакомились с Twitch API и Redux. Завтра будем искать ошибки в коде &#x1f608;
                    </p>
                    <div className='home__animation'>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex home__title-reverse'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex home__title-reverse'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                    <div className='home__animation'>
                        <div className='home__flex'>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                            <h2 className='home__title home__title-flex'>#My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone #My Twitch Clone </h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home