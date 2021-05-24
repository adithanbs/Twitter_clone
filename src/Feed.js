import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "./firebase";
function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshort) => {
        setposts(snapshort.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="feed">
      {" "}
      {/*home */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {/* Tweetbox */}
      {/* post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
