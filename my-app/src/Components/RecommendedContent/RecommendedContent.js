// import React from 'react'
import "../RecommendedContent/RecommendedContent.css"
import Img from '../Img/pexels-photo-5052880.jpeg'
import axios from 'axios'
import React, { useState, useEffect } from "react";
import ButtonRecommendedContent from './ButtonRecommendedContent'
function RecommendedContent() {
    const [getdata, setGetdata] = useState([]);
    useEffect(async () => {
        axios.get('https://5fad2c4a2ec98b0016047e81.mockapi.io/RecommendedContent')
            .then(res => {
                // console.log(res)
                setGetdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='RecommendedContent'>
            <div className='RecommendedContent-Container'>
                <div className='RecommendedContent-Container-Wrapper-Column'>
                    {
                        getdata.length > 0 ? getdata.map((value, key) =>

                            <div className='RecommendedContent-Container-Wrapper'>
                                <div className='Recommended-Content'>
                                    <div className="Recommended-Content-item">

                                        <div className='Column-Recommended-Content-item'>
                                            <div className='Recommended-Content-item-img-name'>
                                                <img src={value.avatar} />
                                                <p>{value.name}</p>
                                            </div>
                                            <div className='Recommended-Post'>
                                                <h4>{value.description},You Don’t Need Bitcoin to Become Rich; There Are Other Ways</h4>
                                                <p>{value.ContentName},We are very grateful for the great interest </p>
                                                <span>{value.month} · {value.minute} min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="RecommendedContent-Img">
                                    <img src={value.Img} />
                                </div>
                            </div>
                        ) :
                            <div className="RecommendedContent-loader-container">
                                <div class='RecommendedContent-loader'></div>
                            </div>
                    }

                </div>



                <div className='FindWord-Relative'>
                    <ButtonRecommendedContent />
                </div>

            </div>

        </div >
    )
}

export default RecommendedContent
