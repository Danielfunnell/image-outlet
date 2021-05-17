import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logoint.png'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExitTwoTone } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    borderRadius: '0 0 10px 0',
    height: "50px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "cemter",
  },
  list: {
    display: "flex",
    justifyContent: "",
  },
  link: {
    fontWeight: "bolder",
    "&:hover": {
      color: "#f50057",
    },
    "&:last-child": {
      paddingRight: "50px",
    },
  },
}));

const Navbar = () => {
  const classes= useStyles() 
  
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar className={classes.root}>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo}></img>
          </Link>
          <ul className={classes.list}>
            <li>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
