import data from './data';

function App() {
  return (
    <div class="grid-container">
    <header class="row">
      <div>
        <a class="brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <div class="row center">
        {
          data.products.map(products => (
            <div key = {products._id} class="card">
            <a href= {`/products/${products._id}`}>
              <img class = "medium" src={products.image} alt="" srcset=""/>
            </a>
            <div class="card-body">
            <a href= {`/products/${products._id}`}></a>
          <h2>{products.name}</h2>
              <div class="rating">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <div class="price">
                ${products.price}
              </div>
            </div>
            </div>
          ))
        }
       </div>            
    </main>
    <footer class="row center">All right reserved</footer>
  </div>
  );
}

export default App;
