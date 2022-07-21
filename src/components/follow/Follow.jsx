import React from 'react'

import "./Follow.css"

const Follow = () => {
    return (
        <div className='follow-box'>
            <img className='avatar' src="images/img_avatar.png" alt="avatar" style={{ width: "50px", height: "50px" }} />
            <div className="follower-name-box">
                <span>ElonMusk</span>
                <span>@ElonMusk <span className='following'>Folllow you</span> </span>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default Follow
