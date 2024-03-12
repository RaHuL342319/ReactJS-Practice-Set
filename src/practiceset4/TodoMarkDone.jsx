import React, { useState } from "react";

const TodoMarkDone = ({ todoItems }) => {
  const [todoList, setTodoList] = useState(todoItems);
  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyle: "none" }}>
        {todoList.map(({ id, task, isDone }) => {
          return (
            <li
              key={id}
              style={
                isDone ? { textDecoration: "line-through", color: "red" } : {}
              }
            >
              {task}
              <button
                onClick={() => {
                  const updatedTodoList = todoList.map((todo) =>
                    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
                  );
                  setTodoList(updatedTodoList);
                }}
              >
                Mark as done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoMarkDone;
