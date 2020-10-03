import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../container/About';
import Articles from '../container/Articles';
import Contact from '../container/Contact';
import FAQ from '../container/FAQ';
import Home from '../container/Home';
import Login from '../container/Login';
import Products from '../container/Products';
import Signup from '../container/Signup';

function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/articles" component={Articles} />
                <Route path="/faq" component={FAQ} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/products" component={Products} />

                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        </Router>
    );
}
export default routes;