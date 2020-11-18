import "bootswatch/dist/cyborg/bootstrap.min.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/partials/Navigation';
import Footer from './components/partials/Footer';

import Quotes from './pages/Quotes';
import Home from './pages/Home';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <div className="container my-4">
                    <Switch>
                        <Route path="/market" component={Quotes}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        )
    }
}
