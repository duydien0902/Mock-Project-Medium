import { useState, useEffect } from 'react'
import '../HomePage/HomePage.css'
import { useHistory } from 'react-router-dom'
import Img from '../Img/pexels-photo-5052880.jpeg'
import axios from 'axios'
import HomePageRight from './HomePageRight'
import FollowRecommen from './FollowRecommen'
import HomepageFollowers from './HomepageFollowers'


function HomePage() {
    const [senBtFollow, setSenBtFollow] = useState([])
    const [getdataRecommended, setGetdataRecommended] = useState([]);
    const [getdataFollow, setGetdataFollow] = useState([]);
    const token = localStorage.getItem('token')
    const history = useHistory();
    async function GetUsername() {
        let resulf = await fetch("http://localhost:1000/user/login", {
            method: "GET",
        })
        resulf = await resulf.json()

        console.log(resulf)
        if (token) {

        } else {
            history.push('/SignIn')
        }
    }
    useEffect(() => {
        GetUsername();
    }, []);
    useEffect(() => {
        document.title = 'Medium';
    });
    useEffect(async () => {
        axios.get('https://5fad2c4a2ec98b0016047e81.mockapi.io/RecommendedContent')
            .then(res => {
                setGetdataRecommended(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(async () => {
        axios.get('https://5fad2c4a2ec98b0016047e81.mockapi.io/FollowData')
            .then(res => {
                setGetdataFollow(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    var size = 3;
    var items = getdataFollow.slice(0, size).map(x => x)
    const checkid = () => {
        const id = senBtFollow.findIndex(x => x.id);
        if (id < 0) {
            document.getElementsByClassName("Homepage-Followers-none")[0].style.display = 'none'
        }
        else {
            document.getElementsByClassName("Homepage-Followers-none")[0].style.display = 'block'
        }
    }
    useEffect(async () => {
        checkid();
        document.getElementsByClassName("click-Recommended")[0].style.display = 'block'
        document.getElementsByClassName("click-Follow")[0].style.display = 'none'
    }, [])

    const SbmitFollowFunction = (SubmitFollow) => {
        const NewsenBtFollow = [...senBtFollow]
        NewsenBtFollow.push(SubmitFollow)
        setSenBtFollow(NewsenBtFollow)
    }

    const SbmitUnFollowFunction = (SubmitUnFollow) => {
        const index = senBtFollow.findIndex(x => x.id === SubmitUnFollow.id);
        if (index < 0) return;
        const NewsenBtFollow = [...senBtFollow]
        NewsenBtFollow.splice(index, 1)
        setSenBtFollow(NewsenBtFollow)
    }






    return (
        <div className='Homepage-RecommendedContent'>
            <div className='Homepage-RecommendedContent-Container'>
                <div className='Homepage-RecommendedContent-Container-Wrapper-Column'>
                    < HomepageFollowers parenHomePage={senBtFollow} />
                    <FollowRecommen dataRecommen={getdataRecommended} dataFollower={senBtFollow} />
                </div>
                <div className='Homepage-FindWord-Relative'>
                    <HomePageRight SbmitFollowFunction={SbmitFollowFunction}
                        SbmitUnFollowFunction={SbmitUnFollowFunction}
                        // dataFollow={getdataFollow}
                        dataFollow={items}

                    />
                </div>
            </div>
        </div >
    )
}
export default HomePage
