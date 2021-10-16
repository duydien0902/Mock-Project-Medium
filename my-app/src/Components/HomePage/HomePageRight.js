import { useState, useEffect } from 'react'
import Img from '../Img/pexels-photo-5052880.jpeg'
import "./ HomePageRight.css"
import axios from 'axios'
function HomePageRight(props) {
    const checkGetdataFollow = props.dataFollow

    const Follow = (dataClickFollow) => {
        let id = dataClickFollow.id
        document.getElementsByClassName("Homepage-Followers-none")[0].style.display = 'block'
        document.getElementsByClassName("Ufl")[id - 1].style.display = 'block';
        document.getElementsByClassName("Fl")[id - 1].style.display = 'none';
        props.SbmitFollowFunction(dataClickFollow)
    }
    const Unfollow = (dataClickUnfollow) => {
        let id = dataClickUnfollow.id
        document.getElementsByClassName("Fl")[id - 1].style.display = 'block';
        document.getElementsByClassName("Ufl")[id - 1].style.display = 'none';
        props.SbmitUnFollowFunction(dataClickUnfollow)
    }


    return (

        <div className='Homepage-FindWork'>
            <b>Recommended topics</b>
            <div className='Homepage-Button-Findword w80 button-Category'>
                <button>Technology</button>
                <button>Money</button>
                <button>Business</button>
                <button>Productivity</button>
                <button>Pssychology</button>
                <button>Mindfulness</button>
                <button>Art</button>
            </div>



            <div className='Homepage-Button-Findword w80  '>
                <b>Who to follow</b>
                {checkGetdataFollow ? checkGetdataFollow.map(value =>
                    <div className='Hompage-Suggestion-follow'>
                        <div className='Hompage-Suggestion-follow-avater'>
                            <img src={value.Img} />
                        </div>
                        <div className='Hompage-Suggestion-follow-title'>
                            <h4 >{value.name}</h4>
                            <p>Writer, blogger, activist. Blog: https://pluralistic.net...</p>
                        </div>
                        <div className='Hompage-Suggestion-follow-title-button-follow Fl'>
                            <button key={value.id} onClick={() => Follow(value)}>Follow</button>
                        </div>

                        <div className='Hompage-Suggestion-follow-title-button-follow Ufl'>
                            <button key={value.id} onClick={() => Unfollow(value)}>UnFollow</button>
                        </div>

                    </div>
                ) : null
                }

            </div>
            <div className='Homepage-Button-Findword w80 Homepage-Reading-list display-none'>
                <b>Reading list</b>
                <p>Click the  on any story to easily add it to your reading list or a custom list that you can share.</p>
            </div>
            <ul className=' w80 display-none'>
                <li>Help</li>
                <li>Status</li>
                <li>Writers</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>About</li>
            </ul>

        </div >
    )
}

export default HomePageRight
