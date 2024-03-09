import React from "react";

const CartoonCharacter2 = ({ cartoons }) => {
  return (
    <div>
      <h1>Catoons Charater name:</h1>
      <h2> Whose Magnitude is even number:</h2>
      {cartoons.map(({ id, name, magnitude }) => {
        return magnitude % 2 === 0 ? (
          <div key={id} style={{ border: "1px solid red" }}>
            <h1>Name: {name}</h1>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default CartoonCharacter2;
