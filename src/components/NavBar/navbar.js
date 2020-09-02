import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const homeURL = "https://link-storage.vercel.app/"

console.log(window.location.href === homeURL)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

/* color for theme */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            centered
          >
            <Tab label="Home" to="/" component={NavLink} />
            <Tab label="About" to="/about" component={NavLink} />
          </Tabs>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(NavBar)