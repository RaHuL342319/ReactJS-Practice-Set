import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      <h1>Product Names</h1>
      <ul>
        {products.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
