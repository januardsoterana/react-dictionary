import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

   function handleResponse(response) {
     setResults(response.data[0]);
   }

   function handlePexels(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
   }

  function search() {
     // api documentation - https://dictionaryapi.dev/e 
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

     // api documentation - https://www.pexels.com/api/documentation/
    let pexelsApiKey = "563492ad6f91700001000001f93ec99bf8604ce2afb29fee0094c5c6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexels);}
  

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
 
  function changedKeyword(event) {
     setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
             <div className="col-8">
              <input type="search" onChange={changedKeyword} placeholder="Type a word" className="form-control shadow sm" autoFocus="on" autoComplete="off" />
            </div>
              <div className="col-3">
                <input type="submit" value="search" className="btn btn-info"/>
              </div>
            </div>
          </form>
      
         <div className="Hint"><strong>Suggested words:</strong> <em>adoration, sunset, persnickety, nomad, love, native, gathering, discombobulated, good</em></div>
        </section>
          <Results results={results} />
          <Photos photos={photos}/>
    </div>
  );
} else{
  load();
  return "Loading";
  }
}
  

  