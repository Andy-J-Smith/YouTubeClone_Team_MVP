import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

function SearchPage(props){
const [searchResults, setSearchResults] = useState ([]);

useEffect(() =>{
    getSearchResults()
}, [])

}

async function getSearchResults(searchTerm = 'bob ross'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchRequest}&key=AIzaSyBgDuwLRCEuSKbuXL_x1QED9vXNdipYR_M&part=snippet&maxResults=4&type=video`)
console.log(response.data)
    setSearchResults(response.data)

}
