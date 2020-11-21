import React from 'react';
//import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
//import axios from 'axios';

import About from '../pages/About';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import Signup from '../pages/Signup';

import '../assets/default.css';

// to hide all warning in console log
// console.log = console.warn = console.error = () => {};

// const authAxios = axios.create ( {
//     baseUrl: apiUrl,
//     headers: {
//         Authorization: 'Bearer ${accessToken}'
//     }
// })



function routes() {
//     const [cookies] = useCookies();
//     const [user, setUser] = useState(); 
    
//     console.log(cookies.token);

    // useEffect(() => {
        // const config = {
        //     headers: {
        //         Authorization: 'Bearer ' + cookies.token
        //     }
        // };

    //     const endpoint = '/user';

    //     axios.post(
    //         endpoint,{}, {
    //             headers: {
    //                 Authorization: "Bearer " + cookies.token
    //             }
    //         }
    //     )
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }, [])
    
    return(
        // <CookiesProvider>
        <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductDetail} />

                    {/* <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} /> */}
                </div>
            </Router>
        // </CookiesProvider>
    );
}
export default routes;