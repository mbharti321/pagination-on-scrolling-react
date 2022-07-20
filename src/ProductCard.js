import React from "react";
// import {productCard} from "styles";
import { productCardStyle, imageStyle, textStyle } from "./styles";

function ProductCard(props) {
  const product = props.product;
  return (
    <div>
      <div style={productCardStyle}>
        <img style={imageStyle} src={product.thumbnail} alt={product.title} />

        <div style={textStyle}>
          <span> {product.id}. </span>
          <span> {product.title}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
