import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

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

    <GlobalContext.Provider value={{
      api_key,
      inputValue,
      setInputValue,
      filteredMovies,
      setFilteredMovies,
      handleFormSubmit,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}


export { useGlobalContext, GlobalProvider }