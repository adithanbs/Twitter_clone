import React,{useState} from "react";
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core';
import db from "./firebase";
import firebase from "firebase"

import "./Tweetbox.css"
const Tweetbox = () => {

const [tweetMessage,setTweetMessage] = useState("");
const [tweetImage,setTweetImage] = useState("");

const sendTweet = (e) => {
    e.preventDefault();

    db.collection("post").add({
        displayName:"codeWithadi",
        timestamp: firebase.firestore.FieldValue.
        serverTimestamp(),
        userName : "adithan",
        verified: true,
        text:tweetMessage,
        image: tweetImage,
        avatar:"https://pbs.twimg.com/media/E0DjaNEVEAUFq2o?format=jpg&name=small"
    })
    setTweetMessage("")
    setTweetImage("")
}

    return (
        <div className="tweetBox">
        <from>
            <div className="tweetBox_input">
            <Avatar alt="Remy Sharp" src="https://twitter.com/Adithan59722508/photo" />
           <input 
           onChange = {(e) => setTweetMessage(e.target.value)}
           value={tweetMessage}
           type="text" placeholder="what's happening"/>
            </div>
            <input
            onChange = {(e) =>setTweetImage(e.target.value)}
            value = {tweetImage}
            className="tweetBox_imageInput"
            placeholder="optional: Enter image URL"/>
            <Button onClick={sendTweet} className="tweetBox_tweetButton" >Tweet</Button>
        </from>
            
        </div>
    )
}

export default Tweetbox
