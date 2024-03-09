import React from "react";

const CartoonCharacter = ({ cartoons }) => {
  return (
    <div>
      <h1>Catoons Charater details:</h1>
      <h2> Whose Magnitude is greater than 5:</h2>
      {cartoons.map(({ id, name, superpower, magnitude }) => {
        return magnitude > 5 ? (
          <div key={id} style={{ border: "1px solid red" }}>
            <h2>Name: {name}</h2>
            <h3>Super Power: {superpower}</h3>
            <h3>magnitude: {magnitude}</h3>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default CartoonCharacter;
