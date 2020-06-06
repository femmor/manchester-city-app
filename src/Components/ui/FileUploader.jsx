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
        console.log(filename)

        this.setState({
            name: filename,
            isUploading: false
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
                            onUploadStart={ this.onUploadStart }
                            onUploadError={ this.onUploadError }
                            onUploadSuccess={ this.onUploadSuccess }
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
            </div>
        );
    }
}

export default FileUploader;
