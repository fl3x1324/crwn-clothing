import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks!");
  };
  render() {
    return (
      <div className="sign-up">
        <h1 className="title">I don't have an account</h1>
        <span>Sign up with an email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="email"
            label="Enter your email"
            value={this.state.email}
          />
          <FormInput
            type="password"
            label="Enter your new password"
            value={this.state.password}
          />
          <FormInput
            type="password"
            label="New password again"
            value={this.state.confirmPassword}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign up</CustomButton>
            <CustomButton onClick={() => alert("Contacting support")}>
              Contact support
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
