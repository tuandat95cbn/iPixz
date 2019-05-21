import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { API_URL } from "../config/config";
import CircularProgress from "@material-ui/core/CircularProgress";



export default class DropzoneDialogUploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      waiting: false
    };
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    this.setState({ waiting: true });
    let data = new FormData();
    data.append("file", files[0]);
    data.append("contentType", "FILE_CONTENT");
    fetch(`${API_URL}/create-content`, {
      method: "POST",
      body: data
    })
      .then(
        res => {
          if (!res.ok) {
            throw res;
          }
          return res.json().then(res => {
            if (res.status === "SUCCESS") {
              this.setState({ waiting: false });
              this.props.handleChangeContent( res.contentId);
            } else {
              console.log(res);
              this.setState({
                waiting: false,
                inconsistent: true,
                dataException: res.data
              });
            }
          });
        },
        error => {
          this.setState({
            waiting: false,
            open: true,
            error
          });
        }
      )
      .catch(err => {
        err.json().then(e => {
          this.setState({ uploading: false, waiting: false });
        });
      });

    this.setState({
      files: files,
      open: false
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  render() {
    let button;
    if (this.state.waiting) {
      button = <CircularProgress color="secondary" />;
    } else {
      button = (
        <Button onClick={this.handleOpen.bind(this)} color="inherit">
          Upload here
        </Button>
      );
    }
    return (
      <div>
        {button}
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={["image/jpeg,image/png,image/gif,image/tif,image/raw,file/rar,file/zip"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
