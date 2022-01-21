import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    paddingTop: theme.spacing(10),
    position:"sticky",
    top:0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link:{
    marginRight:theme.spacing(2),
    color:"#555",
    fontSize:16
  }
}));
function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}> online Friends</Typography>
      <AvatarGroup max={5} style={{marginBottom:20}}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.comstatic/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title}> Gallery</Typography>
      <ImageList rowHeight={100} style={{marginBottom:20}} className={classes.imageList} cols={2}>
        
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="nature" />
          </ImageListItem>
   
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="camera" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="burger" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="coffee" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="hat" />
          </ImageListItem>
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/bike.jpg" alt="bike" />
          </ImageListItem>
   
      </ImageList>
      
  <Typography className={classes.title}> categories</Typography>
  <Link href="#" className={classes.link} variant="body2">
    sport
  </Link>
  <Link href="#" className={classes.link} variant="body2">
   Food
  </Link>
  <Link href="#" className={classes.link} variant="body2">
   Music
  </Link>
  <Divider flexItem style={{marginBottom:5}}/>
  <Link href="#" className={classes.link} variant="body2">
    Movies
  </Link>
  <Link href="#" className={classes.link} variant="body2">
    scinece
  </Link>
  <Link href="#" className={classes.link} variant="body2">
    Life
  </Link>
  
    </Container>
  );
}

export default Rightbar;
