import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch26";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./About";

const Products = () => {
 
  return productData ? (
    <div>
      <h1>Product Listing Range</h1>
      <NavLink to="/cart">My Cart</NavLink>
      <br />
      <NavLink to="/wishlist">My WishList</NavLink>
      {productData.map((product) => {
        return (
          <div key={product.id} style={{ borderBottom: "2px solid gray" }}>
            <p>
              <b>{product.name}</b>
            </p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to="/about">Visit Item</Link>
          </div>
        );
      })}
    </div>
  ) : (
    "LOading..."
  );
};

export default Products;
