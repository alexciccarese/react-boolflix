import { createContext, useContext, useState } from "react";

const MovieContext = createContext()

const MovieProvider = ({ children }) => {

  const [movie, setMovie] = useState([])

  const api_key = import.meta.env.MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`;

  return (

    <MovieContext.Provider value={{ movie }}>
      {children}
    </MovieContext.Provider>
  )
}

export default { MovieContext, MovieProvider }