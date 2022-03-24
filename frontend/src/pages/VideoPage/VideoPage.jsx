import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./VideoPage.css";


const VideoPage = (props) => {
  const [relatedVideo, setRelatedVideo] = useState();
  const asApi = 'AIzaSyB--WnZi-41d2SSGsccN9FHWgPsp_Erh4I';
  const afApi = 'AIzaSyBKkwwk2xjNqsE_mrtJ3q6zByuYJTbTJms';
  const jpApi = 'AIzaSyBgDuwLRCEuSKbuXL_x1QED9vXNdipYR_M';

  async function getRelatedVideos() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.currentVideo}&type=video&key=${jpApi}&maxResults=3&part=snippet`
    );
    console.log("Related Videos ", response.data);
    setRelatedVideo(response.data);
  }

  
  useEffect(() => {
   getRelatedVideos(relatedVideo); //This is where we passed down the current video props from app.js
    console.log(relatedVideo)    //^need to find out why it is undefined
  },[props])


  // const handleClick = (event, id, title, description) => {
  //   event.preventDefault();
  //   props.setCurrentVideo(id,title,description) //we are basically saving the most important data to setCurrentVideo
  //   console.log('handleclick event was triggered');
  // }

  return (
    <div className="videoPlayer">
      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${props.currentVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  {/* <table>
    <tbody>
      {relatedVideo.map((relatedVideo, index)=>{
        return(
          <tr className="row" key = {index} >
            <td>
              <input type="image" src={relatedVideo.snippet.thumbnails.default.url} alt='/' onClick={(event) => handleClick(event, relatedVideo.id.videoId, relatedVideo.snippet.title, relatedVideo.snippet.description)} />
            </td>
            </tr>
        )
      })}
    </tbody>
  </table> */}
  {/* <CommentForm currentVideo = {props.currentVideo}/> */}
  <CommentForm currentVideo = {props.currentVideo} token = {props.token} />
  <CommentList currentVideo={props.currentVideo}/>
    </div>
  );
};

export default VideoPage;
