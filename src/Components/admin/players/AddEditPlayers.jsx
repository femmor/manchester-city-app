import React, { Component } from 'react';
import AdminLayout from "../../../Hoc/AdminLayout"
import FormField from "../../ui/FormFields"
import { firebase, firebasePlayers, firebaseDB } from "../../../firebase"
import { firebaseLooper } from "../../ui/misc"
import { validate } from "../../ui/misc"
import FileUploader from "../../ui/FileUploader"

class AddEditPlayers extends Component {

    state = {
        playerId: "",
        formType: "",
        formError: false,
        formSuccess: "",
        defaultImg: "",
        formData: {
            name: {
                element: "input",
                value: "",
                config: {
                  label: "Player Name",
                  name: "name_input",
                  type: "text"
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: true
              },
              lastname: {
                element: "input",
                value: "",
                config: {
                  label: "Last Name",
                  name: "lastname_input",
                  type: "text"
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: true
              },
              number: {
                element: "input",
                value: "",
                config: {
                  label: "Shirt Number",
                  name: "number_input",
                  type: "text"
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: true
              },
              position: {
                element: "select",
                value: "",
                config: {
                  label: "Select a position",
                  name: "select_position",
                  type: "select",
                  options: [
                      {
                          key: "Keeper",
                          value: "Keeper"
                      },
                      {
                        key: "Defence",
                        value: "Defence"
                    },
                    {
                        key: "Midfield",
                        value: "Midfield"
                    },
                    {
                        key: "Striker",
                        value: "Striker"
                    }
                  ]
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: true
              },
              image: {
                  element: "image",
                  value: "",
                  validation: {
                      required: true
                  },
                  valid: false
              }
        }
    }

    componentDidMount() {
        const playerId = this.props.match.params.id
        if (!playerId) {
            // Add Player
            this.setState({
                formType: "Add Player"
            }) 
        } else {
            // Edit Player
        }
    }
    

    updateForm = (element, content = '') => {
        const newFormData = { ...this.state.formData };
        const newElement = { ...newFormData[element.id] };

        if(content === '') {
          newElement.value = element.event.target.value;
        } else {
          newElement.value = content
        }
        

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;

        this.setState({
        formError: false,
        formData: newFormData,
        });
    };

    submitForm = (e) => {
        e.preventDefault();
    
        let dataToSubmit = {};
        let formIsValid = true;
    
        for (let key in this.state.formData) {
          dataToSubmit[key] = this.state.formData[key].value;
          formIsValid = this.state.formData[key].valid && formIsValid;
        }

        

        if (formIsValid) {

            // Submit form
        } else {
          this.setState({
            formError: true,
          });
        }
      };


      resetImage = () => {

      }

      storeFilename = (filename) => {
        this.updateForm({
          id: "image"
        }, filename)
      }

      

    render() {
      console.log(this.state.formData)
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>{this.state.formType}</h2>
                    <div>
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <FileUploader 
                            dir="players"
                            tag={"Player image"}
                            defaultImg={this.state.defaultImg}
                            defaultImgName={this.state.formData.image.value}
                            resetImage={() => this.resetImage()}
                            filename={(filename) => this.storeFilename(filename)}
                        />
                        <FormField
                            formData={this.state.formData.name}
                            id={"name"}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            formData={this.state.formData.lastname}
                            id={"lastname"}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            formData={this.state.formData.number}
                            id={"number"}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            formData={this.state.formData.position}
                            id={"position"}
                            change={(element) => this.updateForm(element)}
                        />

                        <div className="success_label">{this.state.formSuccess}</div>
                        {this.state.formError ? 
                            <div className="error_label">
                                Something was wrong
                            </div>
                            : null
                        }

                        <div className="admin_submit">
                            <button onClick={(event => this.submitForm(event))}>
                                {this.state.formType}
                            </button>
                        </div>
                    </form>
                </div>
                </div>
                
            </AdminLayout>
        );
    }
};

export default AddEditPlayers;