import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [movie, setMovie] = useState([])

/*   const api_key = import.meta.env.MOVIE_DB_API_KEY;
  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`; */

  return (

    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}


export default { useGlobalContext, GlobalProvider }