import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CommentList = (props) => {

    const [videoComment, setvideoComment] = useState('');

    async function displayVideoComments () {
        let response = await axios.get(
            `http://127.0.0.1:8000/api/comments/${props.currentVideo}`
        );
        console.log(response.data)
        setvideoComment(response.data)

    }
  useEffect(() => {
    displayVideoComments();
    console.log(videoComment)

}, [])
  
    
    return (
        <div className='displayCommentList'>
            <div><p className='comment'>{videoComment}</p></div>

        </div>
    )

}

export default CommentList;