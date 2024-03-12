import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch7";

const ProductsCard = () => {
  const [products, setProducts] = useState();
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
 
  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");

      const { status, data } = res;
      if (status === 200) {
        setProducts(data.products);
        //console.log(data,products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (index) =>{
    setSelectedProductIndex(index);
  }

  return products ? (
    <div>
      {products.map((product, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleClick(index+1);
            }}
          >
            show {product.name}
          </button>
        );
      })}

<div>
        {selectedProductIndex && (
          <div>
            <h2>Selected Product Details</h2>
            {products.find((product ,index) => index+1 === selectedProductIndex) && (
              <div>
              <img src={products.find((product ,index) => index+1 === selectedProductIndex).src}></img>
                <h1>Name: {products.find((product ,index) => index+1 === selectedProductIndex).name}</h1>
                <h2>Price: {products.find((product, index) => index+1 === selectedProductIndex).price}</h2>
                <h3>Description: {products.find((product ,index) =>  index+1 === selectedProductIndex).desc}</h3>
              </div>
            )}
          </div>
        )}
      </div>
   
    </div>
  ) : (
    ""
  );
};

export default ProductsCard;
