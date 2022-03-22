import axios from "axios";
import React, { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
  const [relatedVideo, setRelatedVideo] = useState();

  async function getRelatedVideos(element) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${element}&type=video&key=AIzaSyB--WnZi-41d2SSGsccN9FHWgPsp_Erh4I&maxResults=4&part=snippet`
    );
    console.log("Related Videos ", response.data);
    setRelatedVideo(response.data);
  }
  return (
    <div>
      <VideoPlayer video={relatedVideo} />
    </div>
  );
};

export default VideoPage;
