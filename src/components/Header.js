import React from 'react'
import "../styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "../images/linkedin.png"
import profilePic from "../images/profile.png"
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt='LinkedIn Logo'/>
            <div className='header__search'>
                <SearchIcon />
                <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={PeopleIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption Icon={ChatIcon} title="Chat"/>
          <HeaderOption avatar={profilePic} title="Me" />
        </div>
    </div>
  )
}

export default Header