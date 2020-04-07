import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import FormField from "../../ui/FormFields";

import { validate } from "../../ui/misc";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
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
      console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  updateForm = (element) => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form
            onSubmit={(e) => {
              this.submitForm(e);
            }}
          >
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                formData={this.state.formData.email}
                id={"email"}
                change={(element) => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  Something is wrong, please try again!
                </div>
              ) : null}
              <button onClick={(e) => this.submitForm(e)}>Subscribe</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
