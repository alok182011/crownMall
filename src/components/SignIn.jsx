import React from "react";
import { Col } from "react-bootstrap";

import "./SignInStyle.css";
import CustomButton from "./CustomButton";

import { auth, signInWithGoogle } from "../firebase/firebaseUtil";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email,password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }catch (error){
      alert(error);
    }

    
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Col xs={12} lg={6} className="sign-in-col">
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign In with your email and password</span>

          <form onSubmit={this.handleSubmit} className="sign-in-form">
            <br />
            <label>Email</label>
            <br />
            <input
              name="email"
              className="sign-in-input-box"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              className="sign-in-input-box"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <br /> <br />
            <div className="sign-in-buttons">
              <CustomButton type="submit"> Sign In </CustomButton>
              <CustomButton id="sign-in-with-google" onClick={signInWithGoogle}>
                Sign In With Google
              </CustomButton>
            </div>
          </form>
        </div>
      </Col>
    );
  }
}

export default SignIn;
