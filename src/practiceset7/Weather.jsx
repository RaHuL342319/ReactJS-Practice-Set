import React, { useEffect, useState } from "react";

import { fakeFetch } from "../api/fakeFetch17";

const Weather = () => {
  const [data, setData] = useState();
  const [toggleoCtooF, setToggleoCtooF] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/weather");
      // console.log(res.data);
      const { status, data } = res;
      if (status === 200) {
        setData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div>
      <h1>Weather</h1>
      <p>
        <b>Temperature: </b>
        {toggleoCtooF ? (
          <>
            {data.temperature} <sup>o</sup>C
          </>
        ) : (
          <>
            {Math.round((data.temperature * 9) / 5 + 32)} <sup>o</sup>F
          </>
        )}
      </p>
      <p>
        <b>Humidity: </b>
        {data.humidity} %
      </p>
      <p>
        <b>Wind Speed: </b>
        {data.windSpeed} km/hr
      </p>
      <button onClick={() => setToggleoCtooF(!toggleoCtooF)}>
        Switch to {toggleoCtooF ? "Fahrenheit" : "Celcius"}
      </button>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default Weather;
