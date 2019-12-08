import React, { Component } from "react";
import RegisterFormView from "./RegisterFormView";
import { throwStatement } from "../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@babel/types/lib";

const initialState = {
    registerFormName: "",
    registerFormEmail: "",
    registerFormPassword: "",
    registerFormConfirmPassword: "",
    showIncorrectPassword: false,
    showInvalidEmail: false
  };
class RegisterForm extends Component {

   state = initialState;

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  validate = () => {
    if (!this.state.registerFormEmail.includes('@'))
    {
      this.setState({ showInvalidEmail: true });
      return false;
    } else 
    {
      this.setState( {showInvalidEmail: false})
      }

    if (
      this.state.registerFormPassword !== this.state.registerFormConfirmPassword
    ) {
      this.setState({
        showIncorrectPassword: true
      });
      return false;
    } else {
      this.setState({
        showIncorrectPassword: false
      });
    }

    return true;
  }

  register = async e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid)
    {
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
        this.props.history.push("/");
        this.setState(initialState);
        return data;
      } catch (ex) {
        console.log('Exception:', ex)
      }
    } 
  }
  viewProps = {
    handleInputChange: this.handleInputChange,
    register: this.register
  };

    render = () => {
        return (
          <RegisterFormView {...this.viewProps} showIncorrectPassword={this.state.showIncorrectPassword} showInvalidEmail={this.state.showInvalidEmail}></RegisterFormView>
        );
    }
}

export default RegisterForm;