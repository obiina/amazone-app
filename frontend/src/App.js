
import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import cartScreen from './screens/cartScreen';
import { useSelector } from 'react-redux';
function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
    <div class="grid-container">
    <header class="row top" id="stay">
      <div>
        <Link class="brand" to="/">amazona</Link>
      </div>
      <div>
        <Link to="/cart">Cart{cartItems.length > 0 && (
          <span className = "badge">{cartItems.length}</span>
        )}</Link>  
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <main>
      <Route path='/products/:id'  component={ProductScreen}></Route>
      <Route path='/' component={HomeScreen} exact></Route>
      <Route path='/cart/:id?' component={cartScreen}></Route>
             
    </main>
    <footer class="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
