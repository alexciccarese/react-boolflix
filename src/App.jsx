import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { useGlobalContext } from './context/MovieContext';

export default function App() {
  const { inputValue, setInputValue, filteredMovies, handleFormSubmit } = useGlobalContext()


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