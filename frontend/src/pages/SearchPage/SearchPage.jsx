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
    console.log("Search results ", response.data.items);
    setSearchResults(response.data.items);
  }

  async function getRelatedVideos(videoId){
    let response = await axios.get (`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchResults.id.videoId}&type=video&key=${asApi}&maxResults=4&part=snippet`)
    console.log("video id ", response.data.items);
    setVideoId(response.data.items);
  }

  // useEffect(() => {
  //   getSearchResults();
  // }, []);


  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <VideoPlayer videoId={videoId} />
      <table>
        <tbody>
          {searchResults.map((searchResults, index)=> {
            return (
              <tr className="row" key={index}>
                <td>{searchResults.id.videoId}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    
    </div>
  );
};

export default SearchPage;
