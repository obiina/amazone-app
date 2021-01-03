import React from 'react'
import Rating from './Rating';


export default function Products(props) {
    const {products} = props;
    return (
        <div key = {products._id} class="card">
<a href= {`/products/${products._id}`}>
  <img className = "medium" src={products.image} alt="" srcset=""/>
</a>
<div className="card-body">
<a href= {`/products/${products._id}`}></a>
<h2>{products.name}</h2>
</div>

<Rating
rating={products.rating}
numReviews={products.numReviews}></Rating>

<div class="price">
        ${products.price}
      </div>
</div>
    )
}
