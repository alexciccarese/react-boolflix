import { useEffect, useState } from "react";

const api_key = import.meta.env.MOVIE_DB_API_KEY;

export default function App() {
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`;

  const [inputValue, setInputValue] = useState('')
  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(base_movies_api_url)

  useEffect(() => {

    setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase())))
  },[])

  function handleFormSubmit(e) {
    e.preventDefault(e)
    setSearch(inputValue)
    console.log(inputValue);


    fetch(base_movies_api_url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
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
            {filteredMovies.map(movie => {

              <div key={movie.id} className="card">
                <h4>{movie.title}</h4>
                <h5>{movie.original_title}</h5>
                <p>{movie.original_language}</p>
                <p>{movie.vote_count}</p>
              </div>
            })}
          </div>
        </div>
      </div>

    </>
  )
}