import React from 'react'

import Content from '../../components/content/Content'
import SideBar from '../../components/sideBar/SideBar'
import TimeLine from '../../components/timeLine/TimeLine'
import { ArrowUpIcon, LetterIcon } from '../../icons/Icons'


import "./Home.css"

const Home = () => {
    return (
        <div className='home-wrapper'>
            <SideBar />
            <Content />
            <TimeLine />


            <div className="message-box" >
                <span>Messages</span>      <span> <LetterIcon />  <ArrowUpIcon /></span>
            </div>
        </div>
    )
}

export default Home
