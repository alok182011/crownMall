import React from "react";
import { Col } from "react-bootstrap";

import "./SignUpStyle.css";
import CustomButton from "./CustomButton";

import { auth, createUserProfileDocument } from "../firebase/firebaseUtil";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Col xs={12} lg={6} className="sign-up-col">
        <div className="sign-up">
          <h2>I do not have an account</h2>
          <span>Sign Up with your email and password</span>

          <form onSubmit={this.handleSubmit} className="sign-up-form">
            <br />
            <label>Display Name</label>
            <br />
            <input
              name="displayName"
              className="sign-up-input-box"
              type="text"
              value={this.state.displayName}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input
              name="email"
              className="sign-up-input-box"
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
              className="sign-up-input-box"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <br /> <br />
            <label>Confirm Password</label>
            <br />
            <input
              className="sign-up-input-box"
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
            <br /> <br />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
        </div>
      </Col>
    );
  }
}

export default SignUp;
