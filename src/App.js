import React, { useState } from "react";
import "./App.css";
//Components

import Productcard from "./components/Productcard";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const [products] = useState([
    {
      title: "AA Battery",
      price: "2.99",
      image:
        "https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg",
    },
    {
      title: "Blanket",
      price: "19.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81yzJRlVylL.__AC_SY300_QL70_ML2_.jpg",
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    console.log("we are removing item");
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const renderProducts = () => {
    return (
      <div>
        <h1>Products</h1>
        <div className="products">
          {products.map((product, index) => {
            return (
              <Productcard
                product={product}
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
                button="Add to Cart"
                onClick={() => addToCart(product)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderCart = () => {
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="products">
          {cart.map((product, index) => {
            return (
              <Productcard
                product={product}
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
                button="Remove from Cart"
                onClick={() => removeFromCart(product)}
              />
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <header>
        <button onClick={() => setPage("cart")}>
          Go to Cart ({cart.length})
        </button>
        <button onClick={() => setPage("products")}>View Products</button>
      </header>
      {page === "products" && renderProducts()}
      {page === "cart" && renderCart()}
    </div>
  );
}

export default App;
