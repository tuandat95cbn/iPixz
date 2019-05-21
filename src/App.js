import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import DropzoneDialogUploadFile from "./component/DropzoneDialogUploadFile";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { API_URL } from "./config/config";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const accountButtonStyle = {
  background: 'linear-gradient(45deg, rgb(240, 234, 235) 10%, #303f9f 108%)',
  borderRadius: 3,
  border: 0,
  margin: 10,
  color: 'white',
  height: 48,
  padding: '0 60px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};
const toolbarStyle = {
  minHeight: 25,
}
const styles =theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },  
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
 
  menuButton: {
    marginRight: 0,
    marginLeft: 30,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
  
});

class App extends Component {
  state = {
    mobileOpen: false,
    contentId: null
  };
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  handleChangeContent = contentId => {
    this.setState({ contentId: contentId });
  };
  render() {
    const { classes, theme } = this.props;
    let content = "";
    if (this.state.contentId != null)
      content = (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={API_URL+"/content/" + this.state.contentId}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" >
                Linh và đồng bọn
              </Typography>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" alt="Shaqi jrvej.jpg" />
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
      );
      const drawer = (
        <div>
          <div className={classes.toolbar} style={toolbarStyle} />
          <Button  style={accountButtonStyle} color="inherit" >My Account</Button>
          <div className={classes.toolbar} style={toolbarStyle} />
          <Divider />
          <List>
            {['Order', 'Uploaded', 'Account Info', 'Log out'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      );
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <TypoGraphy variant="title" color="inherit" noWrap >
              iPixz
            </TypoGraphy>
            <span className={classes.toolbarButtons}>
            <DropzoneDialogUploadFile
              handleChangeContent={this.handleChangeContent}
            />
            </span>
           
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>    
        {content}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
