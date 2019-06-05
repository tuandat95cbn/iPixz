import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import DropzoneDialogUploadFile from "./DropzoneDialogUploadFile";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const styles =theme => ({
    
    toolbar: theme.mixins.toolbar,
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: -12
      },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
   
    menuButton: {
      marginRight: 0,
      marginLeft: 0,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    }
    
  });


class Header extends Component {
    constructor(props) {
      super(props);
    }
    
    render(){
        const { classes, theme } = this.props;
        return(
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.methodFromParent}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <TypoGraphy variant="title" color="inherit" noWrap >
                        iPixz
                    </TypoGraphy>

                   <span className={classes.toolbarButtons}>
                    <DropzoneDialogUploadFile
                        handleChangeContent={this.props.handleChangeContent}/>
                    </span>
                
                </Toolbar>
            </AppBar>
        );
    }   
}

export default withStyles(styles, { withTheme: true })(Header);