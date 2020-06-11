import React, { Component } from 'react';
import { firebase } from "../../firebase"
import ImageUploader from "react-firebase-file-uploader"
import CircularProgress from "@material-ui/core/CircularProgress"

class FileUploader extends Component {

    state = {
        name: "",
        isUploading: false,
        fileUrl: "",
    }

    static getDerivedStateFromProps(props, state) {
        if (props.defaultImg) {
            return state = {
                name: props.defaultImgName,
                fileUrl: props.defaultImg
            }
        }
        return null
    }

    handleUploadStart = () => {
        this.setState({
            isUploading: true,
        })
    }

    handleUploadError = () => {
        this.setState({
            isUploading: false,
        })
    }

    handleUploadSuccess = (filename) => {
        this.setState({
            name: filename,
            isUploading: false
        })

        firebase.storage().ref(this.props.dir)
        .child(filename).getDownloadURL()
        .then(url => {
            this.setState({
                fileUrl: url
            })
        })

        this.props.filename(filename)
    }

    uploadAgain = () => {
        this.setState({
            name: "",
            isUploading: false,
            fileUrl: "",
        })
    }

    render() {
        return (
            <div>
                {!this.state.fileUrl ?  
                    <div>
                        <div className="label_inputs">
                            {this.props.tag}
                        </div>
                        <ImageUploader
                            accept="image/*"
                            name="image"
                            randomizeFilename
                            storageRef={firebase.storage().ref(this.props.dir)}
                            onUploadStart={ this.handleUploadStart }
                            onUploadError={ this.handleUploadError }
                            onUploadSuccess={ this.handleUploadSuccess }
                        />
                    </div>
                : null}
                { this.state.isUploading ? 
                    <div className="progress" style={{
                        textAlign:"center",
                        margin: "30px 0"
                    }}>
                        <CircularProgress
                            style={{
                                color:"#98c6e9",
                            }}
                            thickness={5}
                        />
                    </div>
                    :null}
                    {
                        this.state.fileUrl ? 
                            <div className="image_upload_container">
                                <img 
                                    src={this.state.fileUrl} 
                                    style={{
                                        width: "100%"
                                    }}
                                    alt={this.state.name}
                                />
                                <div className="remove" onClick={this.uploadAgain}>
                                    Remove
                                </div>
                            </div>
                        :null
                    }
            </div>
        );
    }
}

export default FileUploader;
