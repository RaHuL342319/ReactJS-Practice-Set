import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch5";

const UserChats = () => {
  const [chats, setChats] = useState();

  const fetchData = async () => {
    const res = await fakeFetch("https://example.com/api/userchat");
    // console.log(res.data)
    setChats(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(chats);
  return chats ? (
    <div>
      {chats.map((chat) => {
        return (
          <ul>
            <li style={{fontSize: "22px", fontWeight:"bold"}}>{chat.name}'s Chat:</li>
            <ul>
              {chat.messages.map((mes) => {
                return (
                  <li>
                   <b> {mes.from} </b> : {mes.message}
                  </li>
                );
              })}
            </ul>
          </ul>
        );
      })}
    </div>
  ) : (
    <div style={{fontSize: "15px", fontWeight:"bold"}}> Chat Loading...</div>
  );
};

export default UserChats;
