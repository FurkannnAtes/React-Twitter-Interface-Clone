import React from 'react'
import { ThreeDotIcon } from '../../icons/Icons'

import "./Trends.css"

const Trends = () => {
    return (
        <div className='trends-box'>
            <span>News. Trending</span>
            <span className='tags'>#ElonMuskboughtTwitter</span>
            <span>5,107 Tweets</span>
            <button><ThreeDotIcon /></button>
        </div>
    )
}

export default Trends
