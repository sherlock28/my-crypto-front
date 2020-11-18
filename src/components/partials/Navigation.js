import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                
                <NavLink className="navbar-brand" to="/">
                    <img src="img/logo.png" width="64" height="64"  className="d-inline-block align-top" alt=""/>
                </NavLink>
                <NavLink className="navbar-brand" to="/">My Crypto</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/market" activeClassName="active">Market rates</NavLink>
                        </li>
                    </ul>
                    
                </div>

            </nav>
        </div>
        );
    }
}

export default Navigation;