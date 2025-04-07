import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])


  function handleFormSubmit(e) {
    e.preventDefault(e)



    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${inputValue}`)
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
            {filteredMovies.map(movie => {
              const imgFlag = movie.original_language ? `https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/64.png` : '/red-flag.png'
              const fallbackFlag = '/red-flag.png'

              const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : "/fallback-poster.png"

              return (

                < div key={movie.id} className="card" >
                  <img src={posterUrl} alt="" />
                  <h4>
                    {movie.media_type === "movie" ? "Film: " : "Serie TV: "}
                    {movie.media_type === "movie" ? movie.title || "Titolo non disponibile" : movie.name || "Nome non disponibile"}
                  </h4>
                  Titolo originale: {movie.media_type === "movie" ? movie.original_title || "Non disponibile" : movie.original_name || "Non disponibile"}
                  <p>Lingua: <img src={imgFlag} alt={movie.original_language || 'Lingua non disponibile'} onError={(e) => e.target.src = fallbackFlag} /></p>
                  <p>Voto: {movie.vote_average ? movie.vote_average.toFixed(1)/2 : 'Nessun voto'}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div >

    </>
  )
}