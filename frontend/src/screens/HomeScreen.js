import React from 'react'
import data from '../data';
import Products from '../components/products';
export default function HomeScreen() {
    return (
        <div>  <div class="row center">
        {
          data.products.map(products => (
           <Products key={products._id} products={products}></Products>
          ))
        }
       </div>    
        </div>
    )
}
