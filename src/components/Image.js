import React from 'react'
import { Link } from 'react-router-dom'


import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(() => ({
  img: {
    borderRadius: "5px",
    opacity: '1',
    transition: ".3s ease-in-out",
    "&:hover": {
      opacity: '.5'
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));


const Image = ({
  id,
  pageURL,
  tags,
  preview,
  large,
  views,
  downloads,
  likes

}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={250}>
        <GridListTile
          key={id}
          style={{ width: "100%", padding: '10px' }}
        >
          <img src={large} alt={tags} className={classes.img} />
          <GridListTileBar
            title={tags}
            //subtitle={<span>by: {tile.author}</span>}
            actionIcon={
              <IconButton
                aria-label={`info about ${id}`}
                className={classes.icon}
              >
                <Link to={`/image/${id}`}>
                  <InfoIcon className={classes.icon} />
                </Link>
              </IconButton>
            }
          />
        </GridListTile>
      </GridList>
    </div>
    // <div>
    //   <Card>
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         image={large}
    //         title="Contemplative Reptile"
    //         style={{ height: 230 }}
    //       />
    //       <GridListTileBar
    //         title={id}
    //         subtitle={<span>by: {tags}</span>}
    //         actionIcon={
    //           <IconButton aria-label={`info about ${tags}`}>
    //             <Link to={`/cocktail/${id}`}>
    //               <InfoIcon className={classes.icon} />
    //             </Link>
    //           </IconButton>
    //         }
    //       />
    //     </CardActionArea>

    //   </Card>
    // </div>

    // <article>
    //   <div>
    //     <img src={preview} alt={tags} />
    //   </div>
    //   <div>
    //     <h3>{tags}</h3>
    //     <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
    //       Details
    //     </Link>
    //   </div>
    // </article>
  );
};

export default Image
