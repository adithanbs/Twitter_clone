import React from 'react'
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';
import "./Widgets.css"

const Widgets = () => {
    return (
        <div className="widgets" >
        <div className="widgets_input">
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder="search Twitter" type="text" />

        </div>
        <div className="widgets_widgetscontainer">
            <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1321351808086798343"}/>
        <TwitterTimelineEmbed sourceType = "profile"
        screenName="akky_im"
        options={{height:400}}/>

        <TwitterShareButton
            url={"https://facebook.com/akkyprojects"}
            options={{ text: "supscribe my youtube channel"}} />
        
        
        </div>
        </div>

    )
}

export default Widgets
