import React from "react";

const TodoStrikeThrough = ({ todoItems }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoItems.map(({ id, task, isDone }) => {
          return (
            <li
              key={id}
              style={{ textDecoration: isDone ? "line-through" : "" }}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoStrikeThrough;
