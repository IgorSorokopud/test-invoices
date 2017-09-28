import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Invoice App</a>
                        </div>

                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={`/products`}>Products</Link></li>
                                <li><Link to={`/customers`}>Customers</Link></li>
                                <li><Link to={`/invoices`}>Invoices</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}