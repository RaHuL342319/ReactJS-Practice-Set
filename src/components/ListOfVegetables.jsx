import React, { useState } from "react";

const ListOfVegetables = ({ vegetables }) => {
  const [highlight, setHighlight] = useState(false);
  return (
    <div>
      <ul>
        {vegetables.map(({ id, name, pickDate }) => {
          return (
            <h3>
              {" "}
              <li
                style={{
                  color: highlight && pickDate === "2023-03-30" ? "green" : "",
                }}
              >
                {name} - {pickDate}
              </li>
            </h3>
          );
        })}
      </ul>
      <button onClick={() => setHighlight(!highlight)}>
        Highlight Fresh Vegetables
      </button>
    </div>
  );
};

export default ListOfVegetables;
