import React from 'react'
import Follow from '../follow/Follow'
import Trends from '../trends/Trends'

import "./TimeLine.css"

const TimeLine = () => {
    return (
        <div className='timeline-wrapper'>
            <div className="timeline-header">
                <i className="bi bi-search"></i>  <input className='search-bar' type="text" placeholder='Search' />
            </div>
            <div className="timeline-trends">
                <div className="trends-header">Trends For you</div>
                <Trends />
                <Trends />
                <Trends />

            </div>

            <div className="timeline-follows">
                <div className="follows-header">Who to follow</div>
                <Follow />
                <Follow />
                <Follow />
                <Follow />
                <Follow />
            </div>
        </div>
    )
}

export default TimeLine
