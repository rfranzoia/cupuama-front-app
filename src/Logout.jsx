import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import AuthenticationService from './utils/AuthenticationService'

class Logout extends Component {
    render() {
        AuthenticationService.logout()
        setTimeout(() => {
            this.props.history.push("/login")
        }, 5000)
        return (
            <Container>
                <h1>Goodbye!</h1>
            </Container>
        )
    }
}

export default Logout