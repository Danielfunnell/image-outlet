import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Avatar from "@material-ui/core/Avatar";



const api = process.env.REACT_APP_API_KEY;
const url = `https://pixabay.com/api/?key=${api}&id=`;

const useStyles = makeStyles({
  root: {
    marginTop: '100px',
    maxWidth: 'auto',
    //padding: '20px',
  },
  media: {
    height: 450,
   
  },
});

const SingleImage = () => {
  const classes = useStyles();

  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getImage() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const results = data.hits
        console.log(data.hits[0])
        if (results) {
          const { id, pageURL, tags, previewURL, largeImageURL, user, userImageURL, views, downloads, likes } = data.hits[0]
         
         setImage(data.hits[0])
        } else {
        setImage(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getImage();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!image) {
    return <h2>No image to display</h2>;
  }
  const {
    
    pageURL,
    tags,
    previewURL,
    largeImageURL,
    user,
    userImageURL,
    views,
    downloads,
    likes,
  } = image;
  
  return (
    
      
      <Container className={classes.root}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={largeImageURL}
              title={tags}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {tags}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Avatar alt="Remy Sharp" src={userImageURL} />
            <Typography> {user}</Typography>
            <FavoriteBorderIcon color="secondary" /> {likes}
            <GetAppIcon color="secondary" /> {downloads}
            <VisibilityOutlinedIcon color="secondary" /> {views}
          </CardActions>
        </Card>
      </Container>
    
  );
};

export default SingleImage;
