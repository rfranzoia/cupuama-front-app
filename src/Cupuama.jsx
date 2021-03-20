import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Fruits from './components/fruits/Fruits'
import Header from './Header'
import Footer from './Footer'

class Cupuama extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/fruits" exact component={Fruits} />
                        <Route component={Login} />
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }

}

export default Cupuama