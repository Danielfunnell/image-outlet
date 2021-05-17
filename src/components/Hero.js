import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { RootRef } from '@material-ui/core';
import HeroImage from "../images/lens.jpg";
import SearchForm from '../components/SearchForm';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "95vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${HeroImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: 'relative'
  },
  hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      
  },
  heading: {
      color: '#fff',
      width: '100%',
      height: '100%',
  },
  search: {
    width: "60%",
    paddingTop: "25px",
  },
}));

export default function Hero() {
    const classes= useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            className={classes.heading}
          >
            Find your perfect image here!
          </Typography>
          <div className={classes.search}>
            <SearchForm />
          </div>
        </div>
      </div>
    );
}

