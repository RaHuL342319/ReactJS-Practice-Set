import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch8";

const TodosGroup = () => {
  const [todosData, setTodosData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/todos");

      const { status, data } = res;
      if (status === 200) {
        setTodosData(data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return todosData ? (
    <div>
      {todosData.map(({ title, desc, todos }, index) => {
        return (
          <div key={index} style={{borderBottom: "2px solid gray"}}>
            <h1>
              {title} : {desc}
            </h1>
            <ol>
              {todos.map((todo) => (
                <li>{todo}</li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  ) : (
    " Loading..."
  );
};

export default TodosGroup;
