import React from "react";

const BouquetPriceOver2000 = ({ bouquet }) => {
  return (
    <div>
      {bouquet.map(({ id, flowers, price }) => {
        return price > 2000 ? (
          <ol>
            <h2>List of Flowers Whose bouquet Price is Over 2000:</h2>
            {flowers.map((flower, index) => (
              <li key={index}>{flower}</li>
            ))}
          </ol>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default BouquetPriceOver2000;
