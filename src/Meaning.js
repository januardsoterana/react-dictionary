import React from "react";

import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {

return (
  <div className="Meaning">
    <h4>{props.meaning.partOfSpeech}</h4>
     
    {props.meaning.definitions.map(function (definition, index) {
    return (
      
      <div key={index}>
      <span>
        <div className="Def">{definition.definition} </div>
        <br />
        <Examples examples={definition.example} />
        <br />
        <Synonyms synonyms={definition.synonyms} />
        <br />
        <Antonyms antonyms={definition.antonyms} />
      </span>
      </div>
    );
})}

 </div>   
  );
}