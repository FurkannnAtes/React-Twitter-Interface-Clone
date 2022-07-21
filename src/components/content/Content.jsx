import React from 'react'
import { StarIcon } from '../../icons/Icons'
import SendTweet from '../sendTweet/SendTweet'
import Tweet from '../tweet/Tweet'


import "./Content.css"

const Content = () => {
    return (
        <div className='content-wrapper'>
            <div className="content-header">

                <h2>Home</h2>

                <h2>   <StarIcon /></h2>

            </div>

            <div className="content-tweets-wrapper">
                <SendTweet />
                <Tweet
                    imgURL="images/gta-6.jpg"
                    text="Gta 6 coming out tomorrow"
                />
                <Tweet
                    imgURL="images/sherlock-giff.gif"
                    text="Sherlock Holmes"
                />
                <Tweet
                    imgURL="images/anya-smile.gif"
                    text="Anya Forger"
                />
            </div>
        </div>
    )
}

export default Content
