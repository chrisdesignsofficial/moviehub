import React from "react";
import { useState } from "react";

const Movie = () => {
  //   States for querries and movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // Search movies
  const searchMovies = async (e) => {
    e.preventDefault();

    let origin = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&query=${query}&include_adult=true&include_video=true`;
    try {
      const res = await fetch(origin);
      const data = await res.json();
      console.log(data);
      let error = document.getElementById("error");
      if (data.results.length === 0) {
        // alert("movie not found")
        error.textContent = "This movie is not found";
      } else {
        setMovies(data.results);
        error.textContent = "";
      }
    } catch {}
  };
  return (
    <div>
      <h1 className="text-success fw-bolder text-center text-king mt-3"> MOVIEHUB</h1>
      <p id="error" className="text-center text-danger text-stylish mb-4 fw-bolder"></p>
      <div className="d-flex justify-content-center">
        <form onSubmit={searchMovies}>
          <label for="query" className="text-dark text-stylish mx-2">
            Search your favourite Hollywood Movies
          </label>

          <div className="d-flex m-2">
            <input type="text" name="query" placeholder="i.e. Spiderman" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control d-grid w-100" />
            <button className="btn btn-success mx-2" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Card */}

      {movies
        .filter((item) => item.poster_path)
        .map((item) => (
          <div className="container mb-4 d-flex justify-content-center">
            {/* Movie Row */}
            <div className="row">
              {/* Images */}
              <div className="col-md-10">
                <div className="row d-flex mt-3">
                  <div className="col-md-2"></div>
                  <div className="col-md-3 d-flex justify-content-center justify-content-md-end">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="img-fluid w-100 h-100 rounded border border-success border-3" alt={item.title} />
                  </div>

                  <div className="col-md-7 mt-3 mx-auto">
                    <h4 className="card-title fw-bolder text-success">{item.title}</h4>
                    <p className="card-text">{item.overview}</p>
                    <p className="text-danger fw-bold mb-0">Release Date: {item.release_date}</p>
                    <p className="text-primary fw-bold mb-0">Vote Average: {item.vote_average}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Movie;
