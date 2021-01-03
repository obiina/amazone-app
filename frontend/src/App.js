
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <BrowserRouter>
    <div class="grid-container">
    <header class="row top">
      <div>
        <a class="brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>  
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <Route path='/products/:id'  component={ProductScreen}></Route>
      <Route path='/' component={HomeScreen} exact></Route>
             
    </main>
    <footer class="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
