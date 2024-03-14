import React from "react";

const ListCarByCategory = ({ cars }) => {
  const data = cars.reduce((acc, { category }) => {
    if (!acc[category]) acc[category] = 1;
    acc[category] += 1;
    return acc;
  }, {});

  return (
    <div>
      <h1>ListCarByCategory</h1>

      {Object.keys(data).map((key) => (
        <h2 key={key}>
          <h3>
            {key}: {data[key]}
          </h3>
        </h2>
      ))}
    </div>
  );
};

export default ListCarByCategory;
