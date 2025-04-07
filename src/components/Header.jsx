export default function Header() {

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
    </>
  )
}