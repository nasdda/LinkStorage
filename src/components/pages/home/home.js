import React from "react";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TagSelector from './tags/tag_selector/tag_selector'
import "./home.css";

import { connect } from 'react-redux'


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

  return (
    <div className="contents">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault()
          props.searchSubmitHandler()
        }}
      >
        <TextField
          id="standard-basic"
          label="Search"
          className={classes.textField}
          value={props.searchValue}
          onChange={props.onSearchChange}
          margin="normal"
          fullWidth
        />
        <Button type="submit" component="button">Search</Button>
      </form>
      <TagSelector />
      <LinkCards />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch({ type: "SEARCH_CHANGE", event: event }),
    searchSubmitHandler: () => dispatch({ type: "SEARCH_SUBMIT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
