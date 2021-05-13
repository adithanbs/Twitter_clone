import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarOptions from './SidebarOptions';
import "./Sidebar.css";
import { Button } from '@material-ui/core';





const Sidebar = () => {
    return (
        <div className="sidebar">
        
        <TwitterIcon 
            div className="sidebar_twitterIcon"
        />
        <SidebarOptions active
            Icon={HomeIcon}
            text = "Home"
        />
        <SidebarOptions
            Icon={SearchIcon}
            text="Explore"
        />
        <SidebarOptions 
            Icon={NotificationsNoneIcon}
            text="Notifications"
        />
        <SidebarOptions
            Icon={MailOutlineIcon}
            text="Messages"
        />
        <SidebarOptions
            Icon={BookmarkBorderIcon}
            text="Bookmarks"
        />
        <SidebarOptions
            Icon={ListAltIcon }
            text="Lists"

        />
        <SidebarOptions
            Icon ={ PersonOutlineIcon }
            text="Profile"
        />
        <SidebarOptions
        Icon ={MoreVertIcon }
        text="More"
       />
       <Button className="sidebar_tweet" variant="outlined">Tweet</Button>

    

        </div>
    )
}

export default Sidebar
