import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import loginApi from './api/loginApi'
import AuthenticationService from './utils/AuthenticationService'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            authorization: '',
            error: false
        }
    }

    handleFields = (event) => {
        this.setState((prevState) => {
            return { [event.target.name]: event.target.value }
        })
    }

    buttonClicked = (event) => {
        if (this.state.username === '' || this.state.password === '') {
            this.setState((prevState) => {
                return { error: true }
            })
        } else {
            this.setState((prevState) => {
                return { error: false }
            });

            loginApi.login(this.state.username, this.state.password)
                .then(response => {
                    if (response.status !== 200) {
                        this.setState((prevState) => {
                            return { error: true }
                        })
                    }
                    return response.json()
                })
                .then(data => {
                    if (!this.state.error) {
                        this.setState((prevState) => {
                            return { error: false, authorization: data.value }
                        })

                        AuthenticationService.login(this.state.username, data.value);
                        this.props.history.push("/home");
                    }
                    //console.log("result=>", data))
                })
                .catch(error => {
                    console.log("Error =>", error)
                })
        }
    }

    render() {
        return (
            <Container>
                <h3>Please Login to continue</h3>
                <hr />
                <Form>
                    {this.state.error && <div className="alert alert-warning">Invalid Login/Password</div>}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Username" name="username" onChange={this.handleFields} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleFields} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.buttonClicked}>Login</Button>
                </Form>
            </Container>
        )
    }
}


export default Login