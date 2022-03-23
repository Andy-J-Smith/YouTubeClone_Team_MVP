import React, { useState } from "react";
import VideoPage from "../../pages/VideoPage/VideoPage";

const CommentForm = (props) => {
  const [user, setUser] = useState("");             //  getting data from form holding it for handleComment function below
  const [comment, setComment] = useState("");       //^Hook//
  const [videoId, setVideoId] = useState("");
  const [comments, setComments] = useState("");

  function handleComment(event) {
                                                         //data staged before function calls//
    event.preventDefault();                             //^prevents page from refreshing/reloading//
    let newComment = {
      user: user,
      comment: comment,
      videoId: props.currentVideo,
    };
    console.log(newComment);
    props.addNewComment(newComment);
  }

  function addNewComment(comment) {
    // newPost is the form data coming from CreatePost
    let tempComment = [...comments, comment]; // ...comment is grabbing all of the existing data and newComment is just adding that to it
    setComment(tempComment); // this is where we are actually saving all of our comment data to comment on line 8
  }


  return (
    <form onSubmit={handleComment}>
        <label>user</label>
        <input type="text" value={user} onChange={(event)=> setUser(event.target.value)} />
        <label>videoId</label>
        <input type="text" value={videoId} onChange={(event)=> setVideoId(event.target.value)} /> 
        <label>comment</label>
        <input type="text" value={comment} onChange={(event)=> setComment(event.target.value)} />
        <label>user</label>
        <input type="submit" value='Add Comment' />
    </form>
  
  )
};

export default CommentForm;
