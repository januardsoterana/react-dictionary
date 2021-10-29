import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
  return (
    <div>
      <h6>Synonyms:</h6>
        <ul className="Synonyms">
            {props.synonyms.map(function (synonym, index) {
        return <li key={index}>{synonym}</li>;
       })} 
        </ul>
    </div>
        );
} else {
  return null;
}
}