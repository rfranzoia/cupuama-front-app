import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: false,
    };
  }

  handleFields = (event) => {
    this.setState((prevState) => {
      return { [event.target.name]: event.target.value };
    });
  };

  buttonClicked = () => {
    console.log()
    if (this.state.username === "" || this.state.password === "") {
      this.setState((prevState) => {
        return { error: true };
      });
    } else {
      this.setState((prevState) => {
        return { error: false };
      });
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div>
        <h1>Welcome to Cupuama App</h1>
        <h3>Please login to continue</h3>
        <hr />
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Username" name="username" onChange={this.handleFields} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleFields} />
            </Form.Group>
            <Button variant="primary" onClick={this.buttonClicked}>Login</Button>
          </Form>

          {this.state.error && <div>Invalid Login/Password</div>}

        </Container>
      </div>
    );
  }
}

export default Login;
