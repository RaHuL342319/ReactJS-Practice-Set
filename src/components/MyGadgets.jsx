import React, { useState } from "react";

const MyGadgets = ({ products }) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <div>
      <h1>Product Details:</h1>
      <ul>
        {products.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={{
              backgroundColor: highlight && price > 50000 ? "lightgreen" : "",
            }}
          >
            <h3>Name: {name}</h3>
            <h4>price: {price}</h4>
            <p>description: {description}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setHighlight(!highlight);
        }}
      >
        Highlight Expensive Gadget
      </button>
    </div>
  );
};

export default MyGadgets;
