import React from 'react'
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({ 
  menu: {
    [theme.breakpoints.up("sm")]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  listItem: {
    flexDirection: "column",
  },
  listAnchor: {
    padding: "10px",
    "&:hover": {
      backgroundColor: "#cccc",
    },
  },
}));

export default function MobileMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.listItem}>
          <Link to="/" className={classes.listAnchor}>
            Home
          </Link>
          <Link to="/about" className={classes.listAnchor}>
            About
          </Link>
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.menu}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon/>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

    

