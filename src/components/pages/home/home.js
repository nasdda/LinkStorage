import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TagSelector from './tags/tag_selector/tag_selector'

import "./home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Home(props) {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  const searchChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="contents">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(event) => searchSubmitHandler(event)}
      >
        <TextField
          id="standard-basic"
          label="Search"
          value={searchValue}
          onChange={searchChangeHandler}
          style={{ width: "700px" }}
        />
      </form>
      <TagSelector />
    </div>
  );
}

export default Home;
