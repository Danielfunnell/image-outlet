import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Image from './Image'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ImageList = () => {
  const { images, loading } = useGlobalContext();
  

if(loading){
  return <Loading/>
}
if(images.length < 1){
 return  <h2 className="section-title">
    No images matched your search criteria!
  </h2>
}

  return (
    <Container style={{ marginTop: "50px", position:'relative'}}>
      <div id="imageList" style={{position: 'absolute', top:'-100px', left:'0'}}></div>
      <Grid container>
        {images.map((hit) => {
          return (
            <Grid key={hit.id} item xs={12} md={6} lg={4}>
              <Image key={hit.id} {...hit} />;
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ImageList

