// import React from 'react'
import '../ContentTrending/ContentTrending.css'
import Img from '../Img/pexels-photo-5052880.jpeg'
import axios from 'axios'
import React, { useState, useEffect } from "react";
function ContentTrending() {
    const [getdata, setGetdata] = useState([]);
    useEffect(async () => {
        axios.get('https://5fad2c4a2ec98b0016047e81.mockapi.io/ContentTrending')
            .then(res => {
                // console.log(res)
                setGetdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='ContentTrending'>
            <div className='ContentTrending-Container'>
                <h4>TRENDING ON MEDIUM</h4>
                <div className='ContentTrending-Container-item'>


                    {getdata.length > 0 ? getdata.map((value, key) =>

                        <div className="ContentTrending-item">
                            <div className='Number-Trending'><p>0{value.id}</p></div>
                            <div className='Column-Top-Poster'>
                                <div className='Top-Poster'>
                                    <img src={value.avatar} />
                                    <p>{value.name}</p>
                                </div>
                                <div className='Top-Post'>
                                    <p>{value.description},The Black Wonder Years is Making </p>
                                    <span>Sep {value.time} · {value.minute} min read</span>
                                </div>
                            </div>
                        </div>
                    ) :
                        <div className="loader-container">
                            <div class='loader'></div>
                        </div>
                    }
                    {/* <div className="ContentTrending-item">
                        <div className='Number-Trending'><p>02</p></div>
                        <div className='Column-Top-Poster'>
                            <div className='Top-Poster'>
                                <img src={Img} />
                                <p>daoduydien</p>
                            </div>
                            <div className='Top-Post'>
                                <p>The Black Wonder Years is Making White Folks Mad</p>
                                <span>Sep 28 · 3 min read</span>
                            </div>
                        </div>
                    </div>


                    <div className="ContentTrending-item">
                        <div className='Number-Trending'><p>03</p></div>
                        <div className='Column-Top-Poster'>
                            <div className='Top-Poster'>
                                <img src={Img} />
                                <p>daoduydien</p>
                            </div>
                            <div className='Top-Post'>
                                <p>The Black Wonder Years is Making White Folks Mad</p>
                                <span>Sep 28 · 3 min read</span>
                            </div>
                        </div>
                    </div>


                    <div className="ContentTrending-item">
                        <div className='Number-Trending'><p>04</p></div>
                        <div className='Column-Top-Poster'>
                            <div className='Top-Poster'>
                                <img src={Img} />
                                <p>daoduydien</p>
                            </div>
                            <div className='Top-Post'>
                                <p>The Black Wonder Years is Making White Folks Mad</p>
                                <span>Sep 28 · 3 min read</span>
                            </div>
                        </div>
                    </div>


                    <div className="ContentTrending-item">
                        <div className='Number-Trending'><p>05</p></div>
                        <div className='Column-Top-Poster'>
                            <div className='Top-Poster'>
                                <img src={Img} />
                                <p>daoduydien</p>
                            </div>
                            <div className='Top-Post'>
                                <p>The Black Wonder Years is Making White Folks Mad</p>
                                <span>Sep 28 · 3 min read</span>
                            </div>
                        </div>
                    </div>


                    <div className="ContentTrending-item">
                        <div className='Number-Trending'><p>06</p></div>
                        <div className='Column-Top-Poster'>
                            <div className='Top-Poster'>
                                <img src={Img} />
                                <p>daoduydien</p>
                            </div>
                            <div className='Top-Post'>
                                <p>The Black Wonder Years is Making White Folks Mad</p>
                                <span>Sep 28 · 3 min read</span>
                            </div>
                        </div>
                    </div> */}



                </div>
            </div>
        </div>
    )
}

export default ContentTrending
