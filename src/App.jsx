import { BrowserRouter, Routes, Route } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

import Header from './components/Header';

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
      <header className='p-4 bg-black text-danger'>
        <div className="container d-flex justify-content-between">
          <h1>BOOLFLIX</h1>

          <div className="searchBar d-flex gap-2 mt-1 mb-1">
            <input
              type="text"
              name="search-movie"
              id="search-movie"
              className="form-control"
              aria-describedby="movie-helper"
              placeholder='Cerca titolo qui'
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button type="submit" className="btn btn-outline-light" onClick={handleFormSubmit}>
              Cerca
            </button>
          </div>
        </div>
      </header>


      <main className='bg-dark pt-5 pb-5'>
        <div className="container mb-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2">
            {filteredMovies.map(movie => {
              const imgFlag = movie.original_language ? `https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/24.png` : '/red-flag.png'
              const fallbackFlag = '/red-flag.png'

              const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : "https://placeholder.pics/svg/226x360/B9B9B9-959595/040404-D2D2D2/Img%20not%20found"

              const fullStars = Math.round(movie.vote_average / 2)
              const totalStars = 5
              const stars = Array.from({ length: totalStars })

              return (

                < div key={movie.id} className="col" >
                  <div className="card border-0 bg-dark text-light">
                  <img className='img-card img-fluid' src={posterUrl} alt={movie.media_type === "movie" ? movie.title || "Non disponibile" : movie.name || "Non disponibile"} />
                  <div className='mt-2 titles'>
                  <h5>
                    {movie.media_type === "movie" ? "Film: " : "Serie TV: "}
                    {movie.media_type === "movie" ? movie.title || "Titolo non disponibile" : movie.name || "Nome non disponibile"}
                  </h5>

                  <p>
                  Titolo originale: {movie.media_type === "movie" ? movie.original_title || "Non disponibile" : movie.original_name || "Non disponibile"}
                  </p>
                  
                  <p>Lingua: <img src={imgFlag} alt={movie.original_language || 'Lingua non disponibile'} onError={(e) => e.target.src = fallbackFlag} />
                  </p>
                  
                  <p>
                    {stars.map((element, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index < fullStars ? faStar : faStarEmpty}
                        style={{ color: '#f5c518', marginRight: '2px' }}
                      />
                    ))}
                  </p>
                  </div>

                  </div>
                </div>
                
              )
            })}
          </div>
        </div>
      </main >

    </>
  )
}