import React, { Component } from "react";
import RegisterFormView from "./RegisterFormView";

class RegisterForm extends Component {

   state = {
    registerFormName: "",
    registerFormEmail: "",
    registerFormPassword: "",
    registerFormConfirmPassword: "",
    showIncorrectPassword: false
  };

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  register = async e => {
    e.preventDefault();

    if (
      this.state.registerFormPassword !== this.state.registerFormConfirmPassword
    ) {
      this.setState({ showIncorrectPassword: true });
      return;
    }

    const user = {
      Name: this.state.registerFormName,
      Email: this.state.registerFormEmail,
      Password: this.state.registerFormPassword
    }

    try {
      const response = await fetch(`http://localhost:50492/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      const data = await response.text();
      return data;
    } catch (ex) {
      console.log('Exception:', ex)
    }
  }
  viewProps = {
    handleInputChange: this.handleInputChange,
    register: this.register
  };

    render = () => {
        return (
          <RegisterFormView {...this.viewProps}></RegisterFormView>
        );
    }
}

export default RegisterForm;