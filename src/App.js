import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import { appContainerStyle } from "./styles";

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(15);

  const apiEndpoint = "https://dummyjson.com/products";

  // function to fetch all products details from API
  const fetchProducts = () => {
    axios
      .get(apiEndpoint, { params: { skip: skip, limit: limit } })
      .then((response) => {
        // add fetched products to thepreviously fetched products list
        setProducts([...products, ...response.data.products]);
      })
      .catch((error) => console.log(error));
  };

  // call fetchProducts method with the help of useEffect
  useEffect(() => {
    fetchProducts();
  }, [skip]); // call fetchProducts method when skip is updated

  const scrollToEnd = () => {
    console.log("scrollToEnd");
    setSkip(previousSkip => previousSkip + limit);
    setLimit(5);
  };

  window.onscroll = function () {
    // check if the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const displayProducts = products.map((product, index) => {
    return <ProductCard product={product} key={index} />;
  });

  return (
    <div className="App">
      <center>
        <h1>Hello World!</h1>
      </center>

      <div style={appContainerStyle}>{displayProducts}</div>
    </div>
  );
}

export default App;
