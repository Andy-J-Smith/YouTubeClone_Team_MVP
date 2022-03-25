import React, { useState } from "react";
import axios from "axios";
import VideoPage from "../../pages/VideoPage/VideoPage";
import ReplyForm from "../ReplyForm/ReplyForm";
import './CommentForm.css';




const CommentForm = (props) => {
  const [user, setUser] = useState("");             //  getting data from form holding it for handleComment function below
  const [comment, setComment] = useState([]);       //^Hook//
  const [video_id, setVideo_id] = useState("");
  const [comments, setComments] = useState("");
  const likes = 0;
  const dislikes = 0;

  console.log(comment.id)


  function handleComment(event) {
                                                         //data staged before function calls//  
    event.preventDefault();                             //^prevents page from refreshing/reloading//
    let newComment = {
      text: comment,
      video_id: props.currentVideo,
      likes: likes,
      dislikes: dislikes,

    };
    console.log(newComment);
    addComment(newComment);
  }

  // function handleComment(event, comment) {
  //   // newPost is the form data coming from CreatePost
  //   event.preventDefault();
  //   // let tempComment = [...comments, comment]; // ...comment is grabbing all of the existing data and newComment is just adding that to it
  //   //setComment(tempComment); // this is where we are actually saving all of our comment data to comment on line 8
  //   console.log(comment)
  // }
  // async function addComment(newComment){  // this will send data to our backend to be saved in the Database
  //   try{
  //   let response = await axios.post ('http://127.0.0.1:8000/api/comments/', newComment);  // this is same URL tested in postman 
  // console.log(response)
  // if (response.status === 201) {
  //   await getAllComments();
  // }
  // }

  async function addComment(newComment){
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/comments/', newComment,{
      headers: {
        Authorization: "Bearer " + props.token,
      },
    });
    setComment(response.data);
   } catch (error){
      console.log(error.message);
    }
  };





  const getAllComments= async()=>{   // this request will retrieve all of the comments from our database
    let response = await axios.get('http://127.0.0.1:8000/comments/');  //the URL we are using the same endpoint here that we tested in postman
    setComments(response.data);
    console.log(response.data) // here we are saving the result in our hook above on 

  }

  return (
    <form className= 'formbox' onSubmit={handleComment}>
     
        <input type="text" value={comment} onChange={(event)=> setComment(event.target.value)} />
     
        <input type="submit" value='Add Comment' />
       
  
    </form>

  
  )
};

export default CommentForm;
