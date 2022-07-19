import React from "react";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <div>
      <span>{product.title} - </span>
      <span>{product.price} - </span>
      <span>{product.brand} </span>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}

