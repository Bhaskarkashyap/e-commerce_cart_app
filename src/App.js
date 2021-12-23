import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartPage from './Components/Cart/CartPage/CartPage';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/product/:id' component={ProductDetails} />
                <Route exact path='/cart' component={CartPage} />
            </Switch>
        </Router>
    )
}

export default App;