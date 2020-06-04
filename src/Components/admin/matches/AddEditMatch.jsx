import React, { Component } from 'react';
import AdminLayout from "../../../Hoc/AdminLayout"
import FormField from "../../ui/FormFields"
import { validate } from "../../ui/misc"

class AddEditMatch extends Component {

    state = {
        matchId: "",
        formType: "",
        formError: false,
        formSuccess: "",
        teams: [],
        formData: {
            date: {
                element: "input",
                value: "",
                config: {
                  label: "Event date",
                  name: "date_input",
                  type: "date"
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: true
              },

              local: {
                element: "select",
                value: "",
                config: {
                  label: "Select a local team",
                  name: "select_local",
                  type: "select",
                  options: []
                },
                validation: {
                  required: true,
                },
                valid: false,
                validationMessage: "",
                showlabel: false
              },
             
        }
    }

    submitForm = (e) => {
        e.preventDefault();
    };


    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>{this.state.formType}</h2>
                    <form onSubmit={(e) => this.submitForm(e)}>
                    <FormField
                        formData={this.state.formData.date}
                        id={"date"}
                        change={(element) => this.updateForm(element)}
                    />

                    <FormField
                        formData={this.state.formData.local}
                        id={"local"}
                        change={(element) => this.updateForm(element)}
                    />
                    </form>
                </div>
            </AdminLayout>
        );
    }
}

export default AddEditMatch;
