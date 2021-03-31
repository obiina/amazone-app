import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Products(props) {
    const {products} = props;
    return (
        <div key = {products._id} class="card">
<Link to= {`/products/${products._id}`}>
  <img className = "medium" src={products.image} alt="" srcset=""/>
</Link>
<div className="card-body">
<Link to= {`/products/${products._id}`}></Link>
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
