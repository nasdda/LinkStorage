import React from "react";

import "./tag.css";

const tag = (props) => {
  return (
    <div className="tag" style={{backgroundColor:props.bgColor}}>
      {props.tagName}
    </div>
  )
};

export default tag;
