import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from "@material-ui/core/styles";
  


const drawerWidth = 240;
const accountButtonStyle = {
  background: '#3f51b5',
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
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
 
  
  
});

class NavBar extends Component{
  constructor(props){
    super(props);
  };
  state = {
    mobileOpen: false,
    handle: null
  };
  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

       
  render(){
    const { classes, theme } = this.props;
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
    return(
      <nav className={classes.drawer}>
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
    )
  }
}

export default withStyles(styles, { withTheme: true })(NavBar);