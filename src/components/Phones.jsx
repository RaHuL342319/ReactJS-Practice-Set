import React from "react";

const Phones = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map(({ id, name, description, price }) =>
          name === "mobile" ? (
            <li key={id}>
              <h3>Name: {name}</h3>
              <h4>price: {price}</h4>
              <p>description: {description}</p>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Phones;
