import React from 'react'
import { ArrowIcon, ChatIcon, DowloandIcon, HeartIcon } from '../../icons/Icons'

import "./Tweet.css"

const Tweet = ({ imgURL, text }) => {
    return (
        <div className='tweet-container'>

            <div className="tweet-header">
                <img className='avatar' src="images/img_avatar.png" alt="avatar" style={{ width: "50px", height: "50px" }} />
                <div className="tweet-header-name">
                    <span>ExampleName</span>
                    <span>@Example_Name</span>
                    <span>.4h</span>
                </div>

            </div>
            <div className="tweet-body">

                <div className="tweet-text"> {text}</div>

                <img src={imgURL} alt="..." />
            </div>
            <div className="tweet-footer">
                <div className="tweet-buttons">
                    <div className="tweet-button-item"> <button><ChatIcon /></button>5</div>
                    <div className="tweet-button-item"><button><ArrowIcon /></button>1</div>
                    <div className="tweet-button-item"> <button> <HeartIcon /></button>3</div>
                    <div className="tweet-button-item"> <button><DowloandIcon /></button></div>




                </div>
            </div>

        </div>
    )
}

export default Tweet
