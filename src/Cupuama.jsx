import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/page/Login'
import Logout from './components/page/Logout'
import Home from './components/page/Home'
import Fruits from './components/fruits/Fruits'
import Products from './components/products/Products'
import Header from './components/page/Header'
import Footer from './components/page/Footer'
import EditFruit from './components/fruits/EditFruit'
import EditProduct from './components/products/EditProduct'

class Cupuama extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/fruits/:id" exact component={EditFruit} />
                        <Route path="/fruits" exact component={Fruits} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/products/:id" exact component={EditProduct} />
                        <Route path="/logout" exact component={Logout} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }

}

export default Cupuama;
