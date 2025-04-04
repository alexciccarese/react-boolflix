import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])


  function handleFormSubmit(e) {
    e.preventDefault(e)



    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputValue}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFilteredMovies(data.results)

      })
  }


  return (

    <>
      <div className="container">
        <h1>Boolflix</h1>


        <label className="form-label">Cerca per titolo</label>
        <input
          type="text"
          name="search-movie"
          id="search-movie"
          className="form-control"
          aria-describedby="movie-helper"
          placeholder='Cerca titolo qui'
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-2" onClick={handleFormSubmit}>
          Cerca
        </button>
      </div>


      <div>
        <div className="container mb-5">
          <div className="row gap-2">
            {filteredMovies.map(movie => (

              <div key={movie.id} className="card">
                <h4>Titolo: {movie.title}</h4>
                <h5>Titolo originale: {movie.original_title}</h5>
                <p>Lingua: {movie.original_language}</p>
                <p>Voto: {movie.vote_average.toFixed(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}