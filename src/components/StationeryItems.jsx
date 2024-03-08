import React from "react";

const StationeryItems = ({ items }) => {
  return (
    <div>
      <h1>Stationery Items:</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StationeryItems;
