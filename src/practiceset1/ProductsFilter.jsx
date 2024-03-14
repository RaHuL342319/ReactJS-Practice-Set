import React from "react";

const ProductsFilter = ({ products }) => {
  return (
    <div>
      <h1>Filtered Products:</h1>
      <ul>
        {products.map(({ name, quantity, sales }) => {
          if (sales > quantity)
            return (
              <li>
                Name:{name}, Quantity: {quantity}, Sales: {sales}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default ProductsFilter;
