import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import {Avatar,IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from "./StateProvider";

function Header() {

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='header'>
  
    <div className="header__left">
        <img src='https://th.bing.com/th/id/OIP.y5-cuVT4d8W0SdTMAX15ZwAAAA?pid=ImgDet&w=416&h=416&rs=1'
        alt='Facebook logo'/>
        <div className='header_input'>
          <SearchIcon/>
          <input placeholder ="Search Facebook" type="text"/>
        </div>
    </div>
    

    <div className='header_middle'>
      <div className='header_option 
      header_option--active'>
        <HomeIcon fontsize ="large"/>
      </div>
      <div className='header_option'>
        <FlagSharpIcon fontsize ="large"/>
      </div>
      <div className='header_option'>
        <SubscriptionsOutlinedIcon fontsize ="large"/>
      </div>
      <div className='header_option'>
        <StorefrontOutlinedIcon fontsize ="large"/>
      </div>
      <div className='header_option'>
        <SupervisedUserCircleRoundedIcon fontsize ="large"/>
      </div>
    </div>

    <div className='header_right'>
      <div  className='header_info'>
      <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>

      <IconButton>
        <AddIcon/>
      </IconButton>
      <IconButton>
        <ForumIcon/>
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon/>
      </IconButton>
      <IconButton>
        <ExpandMoreIcon/>
      </IconButton>
    </div>
  </div>
  )
}

export default Header;