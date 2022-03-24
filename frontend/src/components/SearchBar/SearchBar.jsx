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
            <input type="text" placeholder="Search Rick Rolls! You won't!!" value={searchRequest} onChange={(event)=> setSearchRequest(event.target.value)} />
        </div>
        <button className = 'buttonbutton' onClick={handleSubmit} type="submit">Never gonna give you up?</button>
    </form>
    
    );
}
 
export default SearchBar;