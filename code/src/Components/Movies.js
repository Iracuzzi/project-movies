import React from 'react';
import { Link } from 'react-router-dom' // importing for usage
//import { useParams } from 'react-router-dom';

const Movies = ({ movies, downPage, upPage }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <div className="movie-info">
          <Link
            className="movie-container"
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}>
            <img
              className="list-element"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title} />
            <div className="list-element-overlay">
              <p>{movie.title}</p>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
      <div className="buttons">
        <button className="up" type="button" onClick={upPage}>Page up!</button>
        <button type="button" onClick={downPage}>Page down!</button>
      </div>
    </section>
  )
}
export default Movies;