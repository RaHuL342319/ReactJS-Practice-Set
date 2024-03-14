import React,{useState, useEffect} from "react";
import { fakeFetch } from "../api/fakeFetch23";

const ProductsBySort = () => {
  const [products, setProducts] = useState();
  const [sortedProducts, setSortedProducts] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");

      const { status, data } = res;
      if (status === 200) {
        setProducts(data.products);
        setSortedProducts(data.products);
        console.log(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    sortedProducts.sort((a, b) => a.price - b.price); 
    setSortedProducts([...sortedProducts]); 
  };
  const handleClick2 = () => {
    sortedProducts.sort((a, b) => b.price - a.price); 
    setSortedProducts([...sortedProducts]); 
  };

  const handleReset = () =>{
    setSortedProducts([...products])
  }

{
    console.log(products)
}
  return products ? (
    <div>
      <button onClick={handleClick}>Sort by price(Low to High)</button>
      <button onClick={handleClick2}>Sort by price(High to Low)</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {sortedProducts.map(({ name, description, price, quantity }, index) => {
          return (
            <li key={index}>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>Rs.{price}</p>
              <p>Quantity: {quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    "Loading..."
  );
};

export default ProductsBySort;
