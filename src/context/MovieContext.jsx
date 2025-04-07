import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const [movie, setMovie] = useState([])


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