import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography  } from "@material-ui/core"


 const useStyles = makeStyles((theme)=> ({
   card:{
   marginBottom:theme.spacing(5)
   },
  container:{
    paddingTop:theme.spacing(10)
  },
  media:{
    height:250,
    [theme.breakpoints.down("sm")]:{
      height:1550,
    }

  }
 }));
function Post() {
  const classes=useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia  className={classes.media} image="https://www.gettyimages.ca/gi-resources/images/500px/983794168.jpg" title="my post"/>
     <CardContent>
       <Typography gutterBottom variant="h5">
       
       </Typography>
       <Typography variant="body2">
       Since 500px started as a photographic community in 2003, over 15 million photographers from 195 countries have shared over 120 million images for the world to enjoy. Getty Images is pleased to offer several million of the best images from the community for exclusive licensing, with new images being added all the time. Search the 500px collection on Getty Images to find high-quality, authentic work for your next project.
       </Typography>
     </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          share
        </Button>
        <Button size="small" color="primary">
          learn more
        </Button>
      </CardActions>

      
    </Card>
  );
}

export default Post;