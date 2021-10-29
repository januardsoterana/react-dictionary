import React from "react";

import "./Examples.css";

export default function Example(props) {
    if (props.examples) {
     return (
      <div className="Examples">
        <span>Example: <em>{props.examples}</em></span>
       </div>
    );
  } else {
  return null;
  }
}
