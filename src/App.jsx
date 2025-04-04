import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {


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
      />

      <button 
      type="submit" 
      className="btn btn-primary mt-2"
      >
        Cerca
      </button>
    </div>

    </>
  )
}