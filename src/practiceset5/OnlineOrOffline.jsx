import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch1";
const OnlineOrOffline = () => {
  const [usersData, SetUsersData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/users/status");
      const { status, users } = res.data;
      SetUsersData(users);

      if (status === 200) {
        SetUsersData(users);
        // console.log(users)
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Online Users</h1>
      <ul>
        {usersData.map(({ name, status }, index) => {
          return (
            <li
              key={index}
              style={{
                color: status === "Online" ? "green" : "red",
                fontSize: "22px",
              }}
            >
              {name} - {status}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OnlineOrOffline;
