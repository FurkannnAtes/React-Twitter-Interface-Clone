import React from 'react'
import { BellIcon, FlagIcon, HashIcon, HomeIcon, LetterIcon, ListIcon, ThreeDotIcon, TwitterIcon, UserIcon } from '../../icons/Icons'


import "./SideBar.css"

const SideBar = () => {
    return (
        <div className='side-bar-wrapper'>
            <div className="side-bar-container">
                <nav className='navbar'>
                    <div className="brand"> <TwitterIcon /></div>
                    <div className="nav-item">  <HomeIcon /> <span>Home</span></div>
                    <div className="nav-item" >  <HashIcon /><span>Explore</span></div>
                    <div className="nav-item">  <BellIcon /> <span>Notifications</span></div>
                    <div className="nav-item">  <LetterIcon /> <span>Messages</span></div>
                    <div className="nav-item">  <FlagIcon /> <span>Bookmarks</span></div>
                    <div className="nav-item">  <ListIcon /> <span>Lists</span></div>
                    <div className="nav-item">  <UserIcon /> <span>Profile</span></div>
                    <div className="nav-item">  <ThreeDotIcon /> <span>More</span></div>
                    <div className="nav-item"> <button><span>Tweet</span><img src="/images/feather.jpg" alt="" /></button></div>

                </nav>

                <div className="user-info">
                    <img className='avatar' src="images/img_avatar.png" alt="avatar" style={{ width: "50px", height: "50px" }} />
                    <div className="user-text">
                        <span className='user-name'>Example Name</span>
                        <span className='user-hotmail'>@Exampl_Name</span>
                    </div>
                    <i className="bi bi-three-dots  user-info-dots"></i>
                </div>

            </div>
        </div>
    )
}

export default SideBar
