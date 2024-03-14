import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch22";

const MoviesListFilterByGenreDropdown = () => {
  const [movies, setMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();

  const fetchMovies = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      const { status, data } = res;
      if (status === 200) {
        setMovies(data);
        setFilteredMovies(data);
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const uniqueMoviesByGenre = movies?.reduce(
    (acc, { genre }) => {
      if (!acc.includes(genre)) {
        return [...acc, genre];
      }
      return [...acc];
    },
    ["All"]
  );

  // console.log(uniqueMoviesByGenre)

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "All") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(({ genre }) => genre === e.target.value));
    }
  };
  return movies ? (
    <div>
      <h1>Movies</h1>
      <select onChange={handleChange}>
        {uniqueMoviesByGenre.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>

      <ul>
        {filteredMovies.map(({ title, year, genre }, index) => (
          <li key={index}>
            <p>
              <b>{title}</b>
            </p>
            <p>{year}</p>
            <p>{genre}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    "Loading"
  );
};

export default MoviesListFilterByGenreDropdown;
