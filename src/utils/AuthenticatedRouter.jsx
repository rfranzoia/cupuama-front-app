import React, { Component } from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService'

class AuthenticatedRouter extends Component {
    render() {
        if (AuthenticationService.isUserLogged()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthenticatedRouter