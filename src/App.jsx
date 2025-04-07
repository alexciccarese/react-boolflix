import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { useState } from "react";
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
      <Header setInputValue={setInputValue} handleFormSubmit={handleFormSubmit} />

      <Main 
      filteredMovies={filteredMovies}
      faStar={faStar}
      faStarEmpty={faStarEmpty}
      inputValue={inputValue}
      />

      <Footer />

    </>
  )
}