import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a href="https://gitlab.com/rodol28" className="btn-floating btn-li mx-1">
                                <i className="fab fa-gitlab text-white"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://twitter.com/rodol28js" className="btn-floating btn-li mx-1">
                                <i className="fab fa-twitter text-white"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/rodolfo-caceres-b36046115" className="btn-floating btn-li mx-1">
                                <i className="fab fa-linkedin-in text-white"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-1 text-white">© 2020 Copyright: sherlockholmes.com</div>
            </footer>
        );
    }
}