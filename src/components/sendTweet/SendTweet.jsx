import React from 'react'
import { ChartIcon, DateIcon, GıfIcon, ImgIcon, LocationIcon, SmileIcon } from '../../icons/Icons'

import "./SendTweet.css"

const SendTweet = () => {
    return (
        <div className='send-tweet'>
            <div className="send-tweet-header">
                <img className='avatar' src="images/img_avatar.png" alt="avatar" style={{ width: "50px", height: "50px" }} />
                <input type="text" placeholder="What's happening ?" />
            </div>
            <div className="send-tweet-footer">
                <div className="send-tweet-footer-icons">
                    <button>  <ImgIcon /></button>
                    <button>  <GıfIcon /></button>
                    <button>    <ChartIcon /> </button>
                    <button>   <SmileIcon /> </button>
                    <button>   <DateIcon /> </button>
                    <button>   <LocationIcon /> </button>
                </div>
                <div><button className='send-tweet'>Tweet</button></div>
            </div>
        </div>
    )
}

export default SendTweet
