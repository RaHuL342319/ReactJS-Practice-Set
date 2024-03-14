import React from "react";

const Todo = ({ todoItems }) => {
  return (
    <>
      {todoItems.map(({ title, description, isCompleted, id }) => {
        return (
          <div key={id} style={{ color: isCompleted ? "green" : "red" }}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
