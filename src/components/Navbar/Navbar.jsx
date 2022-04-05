import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ListIcon from '@mui/icons-material/List';
import ChatIcon from '@mui/icons-material/Chat';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder='search...' />
          <SearchIcon className='icon'/>
        </div>
        <div className="items">
          <div className='item'>
            <LanguageIcon className='icon'/>
            english
          </div>
          <div className='item'>
            <NightlightIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className='item'>
            <CircleNotificationsIcon className='icon'/>
            <div className="counter">1</div>

          </div>
          <div className='item'>
            <ChatIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          <div className='item'>
            <img 
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar