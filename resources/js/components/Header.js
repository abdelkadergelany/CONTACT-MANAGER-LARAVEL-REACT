import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category" className="nav-link" >Category</Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/category/Add" component={Category} />
            <Route exact path="/category/edit/:id" component={Category} />


        </div>

    );
}

export default Header;

