import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import FormField from "../ui/FormFields";

import { validate } from "../ui/misc";

class SignIn extends Component {
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
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
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

  render() {
    return (
      <div className="container">
        <Fade>
          <div
            className="signin_wrapper"
            style={{
              margin: "100px",
            }}
          >
            <form
              onSubmit={(e) => {
                this.submitForm(e);
              }}
            >
              <h2>Please Sign In</h2>
              <FormField
                formData={this.state.formData.email}
                id={"email"}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                formData={this.state.formData.password}
                id={"password"}
                change={(element) => this.updateForm(element)}
              />
              <button onClick={(e) => this.submitForm(e)}>Login</button>
            </form>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SignIn;
