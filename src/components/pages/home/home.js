import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TagSelector from './tags/tag_selector/tag_selector'
import "./home.css";

// test
import LinkCards from '../../LinkCards/LinkCards'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: 'flex',
      width: "50vw"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    }
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
          className={classes.textField}
          value={searchValue}
          onChange={searchChangeHandler}
          margin="normal"
          fullWidth
        />
      </form>
      <TagSelector />
      <LinkCards />
    </div>
  );
}

export default Home;
