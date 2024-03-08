import React from "react";

const ProductPrice = ({ name, price }) => {
  return (
    <div>
      <h2>
        <span style={{ font: "bold", color: "blue" }}>{name}</span> -
        <span style={{ fontStyle: "italic", color: "green" }}>{price}</span>
      </h2>
    </div>
  );
};

export default ProductPrice;
