import React from 'react'
import Navbar from './Navbar/Navbar'
import ContentTrending from '../Components/ContentTrending/ContentTrending'
import RecommendedContent from '../Components/RecommendedContent/RecommendedContent'
function AppChild() {
    return (
        <div>
            <Navbar />
            <ContentTrending />
            <RecommendedContent />

        </div>
    )





}

export default AppChild
