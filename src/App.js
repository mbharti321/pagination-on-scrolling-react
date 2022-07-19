import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>

        {products.map((product, index) => {
          return <ProductCard product={product} key={index}></ProductCard>;
        })}
      </header>
    </div>
  );
}

export default App;
