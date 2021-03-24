import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/page/Login'
import Logout from './components/page/Logout'
import Home from './components/page/Home'
import Fruits from './components/fruits/Fruits'
import Header from './components/page/Header'
import Footer from './components/page/Footer'
import AuthenticatedRouter from './utils/AuthenticatedRouter'
import AuthenticationService from './utils/AuthenticationService'
import EditFruit from './components/fruits/EditFruit'

class Cupuama extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <AuthenticatedRouter path="/home" exact component={Home} />
                        <AuthenticatedRouter path="/fruits/:id" exact component={EditFruit} />
                        <AuthenticatedRouter path="/fruits" exact component={Fruits} />
                        <AuthenticatedRouter path="/logout" exact component={Logout} />
                        {AuthenticationService.isUserLogged() && <Route component={Home} />}
                        {!AuthenticationService.isUserLogged() && <Route component={Login} />}
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }

}

export default Cupuama