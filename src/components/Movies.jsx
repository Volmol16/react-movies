import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h1>Ничего не найдено</h1>
      )}
    </div>
  );
};

export default Movies;
