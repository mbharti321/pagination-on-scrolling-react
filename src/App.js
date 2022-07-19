import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  // function to fetch all products details from API
  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  // call fetchProducts method with the help of useEffect
  useEffect(() => {
    fetchProducts();
  }, []);

  const displayProducts = products.map((product, index) => {
    return <ProductCard product={product} key={index} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Hello World!</h1>
        </center>

        {displayProducts}
      </header>
    </div>
  );
}

export default App;
