import React, { useState } from "react";
import axios from "axios";




const ReplyForm = (props) => {
    const [user,setUser] = useState('');
    const [replies, setReplies] = useState('');


    function handleReplies(event) {
        event.preventDefault();

        let newReply = {

            text: replies,
            comment: props.comment.id,
        };
            console.log(props.comment.id);
          console.log(newReply);
          addReply(newReply);

        
        async function addReply(newReply){
            try {
              let response = await axios.post(`http://127.0.0.1:8000/api/replies/${props.comment.id}/`, newReply,{
              headers: {
                  Authorization: "Bearer " + props.token,
              },

            });
            setReplies(response.data);
           } catch (error){
              console.log(error.message);
            }
        
        };
    }
    return (
        <form onSubmit={handleReplies}>
            <input type='text' value={replies} onChange={(event)=> setReplies(event.target.value)}/>
            <input type="submit" value='Add Reply' />
        </form>
    )

};

export default ReplyForm;