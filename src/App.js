import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import { withStyles } from "@material-ui/core/styles";
import UploadContent from "./content/UploadContent";


const drawerWidth = 240;
const styles =theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },  
  },
  content: {
    marginLeft: 10,
    marginTop: 70,
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth+10,
    }, 
  },
     
});

class App extends Component {
  constructor(props){
    super(props);
    this.navRef = React.createRef();
  };
  state = {
    mobileOpen: false,
    contentId: null,
    listDataFromChild: null,
  };

  handleDrawerToggle = () => {
    this.navRef.current.handleDrawerToggle();
  };

  handleChangeContent = contentId => {
    this.setState({ contentId: contentId });
  };
  render() {
    const { classes, theme } = this.props;
    let uploadContent = "";
    //if (this.state.contentId != null)
      uploadContent = (
        <UploadContent contentid={this.state.contentId} />
      );
       
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header methodFromParent={this.handleDrawerToggle} handleChangeContent={this.handleChangeContent} />
        <NavBar innerRef={this.navRef} />
        
        <main className={classes.content}>
          {uploadContent}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
