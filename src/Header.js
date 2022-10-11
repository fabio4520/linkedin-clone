import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='linkeidn logo' />
        <div className='header__search'>
          <SearchIcon/>
          <input type="text" />
        </div>

      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={GroupsIcon} title='Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Messages' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar = 'https://i.im.ge/2022/10/09/1G7f8a.fabio-fiestas-hero.jpg' title='me'/>
      </div>
    </div>
  )
}

export default Header