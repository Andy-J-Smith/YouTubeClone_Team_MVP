import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ");
  const asApi = 'AIzaSyB--WnZi-41d2SSGsccN9FHWgPsp_Erh4I';
  const afApi = 'AlzaSyBKkwwk2xiNqsE_mrtJ3q6zByuYJTbTJms';
  const jpApi = 'AlzaSyBeDuwLRCEuSKbuXL_x1QED9VXNdipYR_M';

  async function getSearchResults(search) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${asApi}&part=snippet&maxResults=4&type=video`
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
      <p>{searchResults.data ? <h2>{searchResults.data.title}</h2> : null }</p>
    </div>
  );
};

export default SearchPage;
