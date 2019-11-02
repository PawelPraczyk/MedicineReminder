import React, { Component } from "react";
import LoginForm from '../Components/FirstPage/LoginForm/LoginForm';
import RegisterForm from '../Components/FirstPage/RegisterForm/RegisterForm';
class FirstPage extends Component {
  state = {
    showLoginForm: true,
    showRegisterForm: false,
  };

  changeFormToRegister = () => {
    this.setState({
      showLoginForm: false,
      showRegisterForm: true,
    });
  };

  changeFormToLogin = () => {
    this.setState({
      showLoginForm: true,
      showRegisterForm: false,
    });
  };

  loginFormProps = {
    changeFormToRegister: this.changeFormToRegister,
    history: this.props.history
  };

  registerFormProps = {
    changeForm: this.changeFormToLogin,
    history: this.props.history
  };

  forgetPassFormProps = {
    changeForm: this.changeFormToLogin
  };

  render = () => {
    return (
      <section className="firstView">
        {this.state.showLoginForm ? (
          <LoginForm {...this.loginFormProps}></LoginForm>
        ) : null}
        {this.state.showRegisterForm ? (
          <RegisterForm {...this.registerFormProps}></RegisterForm>
        ) : null}
      </section>
    );
  };
}

export default FirstPage;