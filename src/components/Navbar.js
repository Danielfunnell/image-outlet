import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logoint.png'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

import MobileMenu from '../components/MobileMenu'

import { makeStyles } from "@material-ui/core/styles";
// import { FilterCenterFocusTwoTone, FullscreenExitTwoTone } from '@material-ui/icons';
// import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  logo: {
    borderRadius: "0 0 10px 0",
    height: "50px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "cemter",
  },
  list: {
    display: "flex",
    justifyContent: "",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    color:'#000',
    fontWeight: "bolder",
    "&:hover": {
      color: "#f50057",
    },
    "&:last-child": {
      paddingRight: "50px",
    },
  },
  menuIcon: {
    color: "#000",
  },
}));

const Navbar = () => {
  const classes = useStyles();

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
          <MobileMenu />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
