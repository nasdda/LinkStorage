import React from "react";

import Emoji from "../../Emojis/emoji";
import "./about.css";

const about = (props) => {
  return (
    <div className="contents">
      <h1>About is this site...</h1>
      <div className="inner-content">
        <h2 className="text-content">
          This site is a collection of links to articles, videos, websites, etc.
          that I found helpful and/or important.
          <br />
          Feel free to look around and see if there are any links that interests
          you.
          <br />
          <br />
          *Note*
          <br />
          You can filter links either by searching for keywords or by selecting to include specific tags.
          {/* <Emoji symbol="🙂" label="smile" />. */}
        </h2>
      </div>
    </div>
  );
};

export default about;
