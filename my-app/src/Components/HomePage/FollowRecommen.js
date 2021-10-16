import axios from 'axios'
import { useState, useEffect } from 'react'
function FollowRecommen(props) {
    let getdataRecommended = props.dataRecommen
    let getdataFollow = props.dataFollower;



    const ShowFollowing = () => {
        document.getElementsByClassName("click-Recommended")[0].style.display = 'none';
        document.getElementsByClassName("click-Follow")[0].style.display = 'block';
        document.getElementsByClassName("border-bottom-ShowFollowing")[0].style.borderBottom = '1px solid black';
        document.getElementsByClassName("border-bottom-ShowFollowing")[0].style.color = 'black';
        document.getElementsByClassName("border-bottom-ShowRecommended")[0].style.border = 'none';
        document.getElementsByClassName("border-bottom-ShowRecommended")[0].style.color = ' rgb(173, 169, 169)';
    }


    const ShowRecommended = () => {
        document.getElementsByClassName("click-Recommended")[0].style.display = 'block';
        document.getElementsByClassName("click-Follow")[0].style.display = 'none';
        document.getElementsByClassName("border-bottom-ShowRecommended")[0].style.borderBottom = '1px solid black';
        document.getElementsByClassName("border-bottom-ShowRecommended")[0].style.color = 'black';
        document.getElementsByClassName("border-bottom-ShowFollowing")[0].style.border = 'none';
        document.getElementsByClassName("border-bottom-ShowFollowing")[0].style.color = ' rgb(173, 169, 169)';
    }







    return (
        <div className='Homepage-RecommendedContent-Container-Wrapper-Column-blank'>
            <div className='Homepage-RecommendedContent-Container-Wrapper-Column-title'>
                <p className="border-bottom-ShowFollowing" onClick={ShowFollowing}>FLLOWING</p>
                <p className="border-bottom-ShowRecommended" style={{ color: 'black', borderBottom: '1px solid black' }}
                    onClick={ShowRecommended}>RECOMMENDED FOR YOU</p>
            </div>
            < hr />

            <div className='click-Recommended'>
                {
                    getdataRecommended.length > 0 ? getdataRecommended.map((value, key) =>
                        <div className='Homepage-RecommendedContent-Container-Wrapper'>
                            <div className='Homepage-Recommended-Content'>
                                <div className="Homepage-Recommended-Content-item">
                                    <div className='Homepage-Column-Recommended-Content-item'>
                                        <div className='Homepage-Recommended-Content-item-img-name'>
                                            <img src={value.Img} />
                                            <p>{value.name}</p>
                                        </div>
                                        <div className='Homepage-Recommended-Post'>
                                            <h4>{value.description},You Don’t Need Bitcoin to Become Rich tôi là điền</h4>
                                            <p>{value.ContentName},We are very grateful for the great interest </p>
                                            <span>{value.month} · {value.minute} min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Homepage-RecommendedContent-Img">
                                <img src={value.Img} />
                            </div>
                        </div>
                    ) :
                        <div className="Homepage-RecommendedContent-loader-container">
                            <div class='Homepage-RecommendedContent-loader'></div>
                        </div>
                }
            </div>

            <div className='click-Follow' >
                {
                    getdataFollow.length > 0 ? getdataFollow.map((value, key) =>
                        <div className='Homepage-RecommendedContent-Container-Wrapper'>
                            <div className='Homepage-Recommended-Content'>
                                <div className="Homepage-Recommended-Content-item">

                                    <div className='Homepage-Column-Recommended-Content-item'>
                                        <div className='Homepage-Recommended-Content-item-img-name'>
                                            <img src={value.Img} />
                                            <p>{value.name}</p>
                                        </div>
                                        <div className='Homepage-Recommended-Post'>
                                            <h4>{value.descriptionFollow},You Don’t Need Bitcoin to Become Rich tôi là điền 123123123123</h4>
                                            <p>{value.ContentName},We are very grateful for the great interest </p>
                                            <span>{value.month} · {value.minute} min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Homepage-RecommendedContent-Img">
                                <img src={value.Img} />
                            </div>
                        </div>
                    ) :
                        <h1>Chưa Follow ai, không có data</h1>
                }
            </div>

        </div>
    )
}

export default FollowRecommen
