import React from "react";

import "./tag.css";

const tag = (props) => {
  console.log(props.type)
  return (
    <div className="tag" style={{backgroundColor:props.bgColor}}>
      {props.tagName}
    </div>
  )
};

export default tag;
