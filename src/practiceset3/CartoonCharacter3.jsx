import React from "react";

const CartoonCharacter3 = ({ cartoons, superpowerProps }) => {
  return (
    <div>
      <h1>Catoons Charater details:</h1>
      <h2> Whose Magnitude is greater than 5:</h2>
      {cartoons.map(({ id, name, superpower, magnitude }) => {
        return superpower === superpowerProps ? (
          <div key={id} style={{ border: "1px solid red" }}>
            <h2>
              {name} - {superpower} -{magnitude}
            </h2>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default CartoonCharacter3;
