import React, { useState } from "react";

const TodoStrikeThroughWithCross = ({ todoItems }) => {
  const [todoList, setTodoList] = useState(todoItems);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(({ id, task, isDone }) => {
          return (
            <li
              key={id}
              style={{ textDecoration: isDone ? "line-through" : "" }}
            >
              {task}
              <button onClick={() => setTodoList(todoList.filter((todo)=> todo.id !== id))}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoStrikeThroughWithCross;
