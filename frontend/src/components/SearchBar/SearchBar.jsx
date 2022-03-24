import React, {useState} from "react";
import './SearchBar.css';

const SearchBar = (props) => {

const [searchRequest, setSearchRequest] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRequest);
    props.getSearchResults(searchRequest)
}
    return ( 
    
    <form className='formadjust'>
        <div>
            <input type="text" placeholder="Search YouTube" value={searchRequest} onChange={(event)=> setSearchRequest(event.target.value)} />
        </div>
        <button className = 'buttonbutton' onClick={handleSubmit} type="submit">Search</button>
    </form>
    
    );
}
 
export default SearchBar;