import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ");
  const asApi = 'AIzaSyB--WnZi-41d2SSGsccN9FHWgPsp_Erh4I';
  const afApi = 'AIzaSyBKkwwk2xjNqsE_mrtJ3q6zByuYJTbTJms';
  const jpApi = 'AIzaSyBgDuwLRCEuSKbuXL_x1QED9vXNdipYR_M';

  async function getSearchResults(search) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${jpApi}&part=snippet&maxResults=4&type=video`
    );
    console.log("Search results ", response.data.items);
    setSearchResults(response.data.items);
  }

  // async function getRelatedVideos(videoId){
  //   let response = await axios.get (`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchResults.id.videoId}&type=video&key=${asApi}&maxResults=4&part=snippet`)
  //   console.log("video id ", response.data.items);
  //   setVideoId(response.data.items);
  // }

const handleClick = (event, id, title, description) => {
  event.preventDefault();
  props.setCurrentVideo(id,title,description) //we are basically saving the most important data to setCurrentVideo
  console.log('handleclick event was triggered');
}


  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
       <table>
        <tbody>
          {searchResults.map((searchResults, index)=> {
            return (
              <tr className="row" key={index}>
                <td>
                <input type="image" src={searchResults.snippet.thumbnails.default.url} alt="/" onClick={(event) => handleClick(event, searchResults.id.videoId, searchResults.snippet.title, searchResults.snippet.description)}/> {/* coded the onClick function into the image. Will create handleclick function above */}
                {/* changed image to input to make it a clickable route. type = 'image' takes the src and alt from our img params */}
                </td>
                <td>{searchResults.snippet.title}</td>
                <td>{searchResults.snippet.description}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
