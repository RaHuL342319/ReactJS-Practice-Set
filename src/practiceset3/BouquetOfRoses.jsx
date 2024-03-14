import React from "react";

const BouquetOfRoses = ({ bouquet }) => {
  return (
    <div>
      {bouquet.map(({ id, flowers, price }) => {
        return flowers.includes("rose") ? (
          <h3 key={id}>Price of bouquet with roses : {price}</h3>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default BouquetOfRoses;
