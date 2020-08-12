import React, { useState, useEffect } from "react";

import Loader from '../../Loader/loader'

import "./about.css";

function About(props) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  return loading ? <Loader /> : (
    <div className="contents">
      <h1>About is this site...</h1>
      <div className="inner-content">
        <h2 className="text-content">
          This site is a collection of links to articles, videos, websites, etc.
          that I personally found helpful and/or important.
          <br />
          Feel free to look around and see if there are any links that interests
          you.
          <br />
          <br />
          *Note*
          <br />
          You can filter links either by searching for keywords or by selecting to include specific tags.
        </h2>
      </div>
    </div>
  );
};

export default About;
