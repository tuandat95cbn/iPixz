import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
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

const styles = {
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
  menuButton: {
    marginRight: 20,
    marginLeft: -12
  }
};

class App extends Component {
  state = {
    contentId: null
  };
  handleChangeContent = contentId => {
    this.setState({ contentId: contentId });
  };
  render() {
    const { classes } = this.props;
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
              <Typography gutterBottom variant="h5" component="h2">
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
      );
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              iPixz
            </TypoGraphy>
            <span className={classes.toolbarButtons}>
            <DropzoneDialogUploadFile
              handleChangeContent={this.handleChangeContent}
            />
            </span>
          </Toolbar>
        </AppBar>
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(App);
