import { useState } from "react";
import MovieContext from "./context/MovieContext";
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [search, setSearch] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault(e)
    setSearch(inputValue)
    console.log(inputValue);
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

    </>
  )
}