import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIKit from '../../src/Spotify';
import "./styles/search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
 

  const search = async () => {
    if (!searchQuery) {
      console.log('working for empty search');
      return;
    }

    try {
      const response = await APIKit.get(`search?q=${searchQuery}&type=album,track,artist`);
      console.log('working for  ' + searchQuery);
      console.log(response.data);
      setSearchResults(response.data);
      setSearchQuery('')
    } 
    
    catch (error) {
      alert('Result not Found  (api not perfectly working ) try another query')
      console.error('Error:', error.message);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate('/Player',{state : {id: id}})
    console.log(id)
    console.log('ho raha hai')
}

  return (
    <div className='screen'>
      <div className='search-input-field'>
        <input
          type='text'
          placeholder='Search for tracks, albums, or artists'
          value={searchQuery}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button' onClick={search}>Search</button>
      </div>
      
      <div className='search-results-container'>
        {searchResults && searchResults.tracks.items.map((item) => (
          <div key={item.id} onClick={()=>playPlaylist(item.id)} className='search-result-card' >
            <img className='album-img' src={item.album.images[0].url} alt={item.name} />
            <p className='item-title'>{item.name}</p>
            <p className='other-info'>{item.album.artists[0].name}</p>
          </div>
        ))}
      </div>


   
    </div>
  );
};

export default Search;
