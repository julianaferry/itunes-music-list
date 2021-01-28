import React, { useState, useEffect } from 'react';
import '../Styles/index.css';
import Music from './Music';

//json
const API_URL = ('https://itunes.apple.com/us/rss/topalbums/limit=100/json');

function App() {

  const [music, setMusic] = useState([]);
  const [searchResults, setSearchResults] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // get json and set it to setMusic state
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //  get music from json and set the entry name to setMusic
        setMusic(data.feed.entry);
        setLoading(false);
       
      }).catch(error => {
        console.log(error)
        setErrorMessage("Error");
      });
  }, []);


  // filter search music
  const results = music.filter(item => {
    return item.title.label.toLowerCase().includes(searchResults.toLowerCase());
  });

  
  //handle searchbar
  function handleSearch(e) {
      setSearchResults(e.target.value);
  }

  return (
    <div>
      <div className="App d-flex col-10">
        <h1>Ampersand Music</h1>
            <form className="App__form-inline">
              <div className="App__input-group my-2 search-table-form">
                <input className="App__form-control form-control" 
                  type="search" 
                  placeholder="Search Music" 
                  value={searchResults}
                  aria-label="Search"  
                  onChange={handleSearch}/>
              </div>
            </form>
            <div className="card-music" id="card-music">
              {loading && !errorMessage ? (
                <span>Loading...</span>
                ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : (
                <Music searchResults={results} />
              )}
            </div>
      </div>
    </div>
  );
};

export default App;