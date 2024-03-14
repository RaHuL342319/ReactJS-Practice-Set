import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch19";

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState();
  const [selectedYear, setSelectedYear] = useState();

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredMovies = selectedYear && moviesData ? moviesData.filter(({year})=>year==selectedYear) : moviesData;

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      const { status, data } = res;
      if (status === 200) {
        setMoviesData(data);
      }
    } catch (e) {
      console.error(e); // Use console.error for errors
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return moviesData ? (
    <div>
      <h1>Movies</h1>
      <select onChange={handleYearChange}>
        <option value="">All Years</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      <div>
       {
         filteredMovies.length == 0 ? "No Data Found!!!" :
         <ul>
         {filteredMovies.map((movie, index) => (
           <li key={index}>
             <b>{movie.title}</b>
             <br />
             Release: {movie.year}
             <br />
             Rating: {movie.rating}
           </li>
         ))}
       </ul>
       }
      </div>
    </div>
  ) : (
    "Loading Movies List..."
  );
};

export default MoviesList;
