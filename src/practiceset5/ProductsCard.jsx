import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch2";

const ProductsCard = () => {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState();
  
  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      const { products } = res.data;

      setProductData(products);
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() =>
          setProductData(productData.filter(({ quantity }) => quantity > 20))
        }
      >
        Show products with qunatity more than 20
      </button>
      <button  onClick={() =>
          setProductData(productData.filter(({ price }) => price < 100))
        }>Filter by Price</button>
      <ul>
        {productData.map(({ name, price, quantity }, index) => {
          return (
            <li key={index}>
              {name} - Rs. {price} - Quantity: {quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsCard;
