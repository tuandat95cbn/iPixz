import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { API_URL } from "../config/config";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { List, ListItem } from "@material-ui/core";
import { FixedSizeList } from 'react-window';
import { classDeclaration } from "@babel/types";


const drawerWidth = 240;
const styles =theme => ({
  root: {
    flexGrow: 1,
  },
  list:{
      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 400,
  },
  content: {
    marginLeft: 10,
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth+10,
    }, 
  },
  card: {
    maxWidth: 345,
    
  },
  media: {
    minHeight: 200,
    maxHeight: 400
  },
  grid: {
    spacing: 2,
  }
    
  });


class UploadContent extends Component{
  constructor (props){
      super(props);
      this.state = {
        contentLoaded: false,
        contents: [],

      }
  };
  
  componentDidMount(){
    fetch(`${API_URL}/content/all`)
    .then(results =>{
      return results.json();
    })
    .then(data =>{
      let contents=data.map((content) => {
        return(
        <ListItem>
          <p>{content.contentId}</p>
        </ListItem>
        )
    })
      this.setState({
        contentLoaded: true,
        contents: contents
      })
    })  
  };

  render(){
      const { classes, theme } = this.props;
      let imgDisplay = (
        <Card className={classes.card}>
              <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  image={API_URL+"/content/" + this.props.contentid}
                  title="Uploaded Picture"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" >
                          Linh và đồng bọn
                      </Typography>
                      <Typography component="p">
                          Đây là bức ảnh đầu tiên được upload lên website.
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                  Share
                  </Button>
                  <Button size="small" color="primary">
                  Learn More
                  </Button>
              </CardActions>
        </Card>
      )
      return(
        <div className={classes.root}>
          <Grid container spacing={8} >
            <Grid item xs>
              <Paper>
                <List className={classes.list}>
                  {this.state.contents}
                </List>
              </Paper>
            </Grid>
            <Grid item xs>
              {imgDisplay}
            </Grid>
          </Grid>  
        </div>
      )
  }
    
}

  export default withStyles(styles, { withTheme: true })(UploadContent);