import React from "react";

import "./tag.css";

const tag = (props) => {
  return (
    <div className="tag" style={{backgroundColor:props.bgColor}}>
      <p>{props.tagName}</p>
    </div>
  )
};

export default tag;
