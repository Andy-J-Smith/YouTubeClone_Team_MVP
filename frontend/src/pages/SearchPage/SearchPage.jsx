import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ");

  async function getSearchResults(search) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyBgDuwLRCEuSKbuXL_x1QED9vXNdipYR_M&part=snippet&maxResults=4&type=video`
    );
    console.log("Search results ", response.data);
    setSearchResults(response.data);
  }

  // function getVideoID(){
  //   return searchResults.map(searchResults =>
  //     <VideoPlayer
  //     key={videoId.id.videoId})

  // }

  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default SearchPage;
