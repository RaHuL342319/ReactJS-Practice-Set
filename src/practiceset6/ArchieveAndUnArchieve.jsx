import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch12";

const ArchieveAndUnArchieve = () => {
  const [habitData, setHabitData] = useState();
  const [heading, setHeading] = useState("UnArchieved");
  const [data,setData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/habits");
      const { status, data } = res;
      if (status === 200) {
        setHabitData(data.habits);
        setData(data.habits?.filter((habit) => !habit.archived));
      }
    } catch (e) {
      console.error("Error fetching habits:", e);
      // Handle errors here (display message, retry, etc.)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return habitData ? (
    <div>
      <h1>{heading}</h1>
      <ul>
        {data.map(({ title, desc, daysFollowed, daysSkipped }, index) => (
          <li key={index} style={{ borderBottom: "2px solid gray" }}>
            <p>
              <b style={{ fontSize: "20px" }}>{title}:</b> <br /> {desc}
            </p>
            <p>
              <b>Days Followed:</b> {daysFollowed} <br />
              <b>Days Skipped:</b> {daysSkipped}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={()=>{
        setHeading("Archived");
        setData(habitData.filter((habit) => habit.archived))
      }}>Show archived</button>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default ArchieveAndUnArchieve;
