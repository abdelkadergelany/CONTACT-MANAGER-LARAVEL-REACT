import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function Index() {
    return (
        <div className="container">
            <Header />

            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
        <Index />
        </Router>, document.getElementById('app'));
}
