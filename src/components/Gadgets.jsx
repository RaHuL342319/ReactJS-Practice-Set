import React from "react";

const Gadgets = ({ products }) => {
  return (
    <ol>
      {products.map(({ id, name, description, price }) => (
        <li key={id} style={{ border: price > 50000 ? "1px solid red" : "" }}>
          <h3>Name: {name}</h3>
          <h4>price: {price}</h4>
          <p>description: {description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Gadgets;
