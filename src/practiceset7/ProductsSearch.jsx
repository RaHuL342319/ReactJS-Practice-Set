import React, { useState, useEffect } from "react";
import { fakeFetch } from "../api/fakeFetch24";

const ProductsSearch = () => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");

      const { status, data } = res;
      if (status === 200) {
        setProducts(data.products);
        setFilteredProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products ? (
    <div>
      <h1>Products</h1>
      <input type="text" name="search-products" onChange={(e)=>{
        console.log(e.target.value)
        setFilteredProducts(products.filter(({name})=> name.toLowerCase().includes(e.target.value.toLowerCase())))
      }} />
      
      <ul>
      
        {filteredProducts.map(
          ({ name, description, price, quantity, rating }, index) => {
            return (
              <li
                key={index}
                style={{
                  border: "2px solid gray",
                  margin: "10px",
                  listStyle: "none",
                }}
              >
                <p style={{ display: "inline" }}>
                  {name}
                  <b style={{ display: "inline", margin: "200px" }}>
                    Rating:{rating}
                  </b>{" "}
                </p>
                <p>{description}</p>
                <p>Rs.{price}</p>
                <p>Quantity: {quantity}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  ) : (
    "Loading..."
  );
};

export default ProductsSearch;
