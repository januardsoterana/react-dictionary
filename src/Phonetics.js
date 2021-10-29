import React from "react";

import "./Phonetics.css";   

export default function Phonetics(props) {
 
  return (
    <div className="d-flex justify-content-center Phonetics">
      <span><a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        <div className="text">{props.phonetic.text}</div></span>
    </div>
  );
}