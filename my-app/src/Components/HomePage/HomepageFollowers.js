import { useState, useEffect } from 'react'
import Img from '../Img/pexels-photo-5052880.jpeg'
import axios from 'axios'
function HomepageFollowers(props) {
    let renderFollower = props.parenHomePage;

    return (
        <div className='Homepage-Followers-none '>
            <div className='Homepage-Followers '>
                {
                    renderFollower.map(item =>
                        <div key={item.id} className='Homepage-Followers-Render'>
                            <div className='Homepage-Followers-avt'>
                                <img src={item.Img} />

                            </div>
                            <div className='Homepage-Followers-name'>
                                <p>{item.name}    </p>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default HomepageFollowers
