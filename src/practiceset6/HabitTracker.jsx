import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch9";

const HabitTracker = () => {
  const [habitData, setHabitData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/habits");

      const { status, data } = res;
      if (status === 200) {
        setHabitData(data.habits);
        console.log(data.habits);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return habitData ? (
    <div>
      <h1>Habit Tracker</h1>
      <ul>
        {habitData.map(({ title, desc, daysFollowed, daysSkipped }, index) => {
          return (
            <li key={index} style={{borderBottom: "2px solid gray"}}>
              <p>
                <b style={{ fontSize: "20px" }}>{title}:</b> <br /> {desc}
              </p>
              <p>
                <b>Days Followed:</b> {daysFollowed} <br />
                <b>Days Skipped:</b> {daysSkipped}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    "Loading"
  );
};

export default HabitTracker;
