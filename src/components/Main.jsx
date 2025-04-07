import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Main({ filteredMovies, faStar, faStarEmpty, inputValue }) {

  return (

    <>
      <main className='bg-dark pt-5 pb-5'>
        <div className="container mb-5">
          <h1 className='text-light'>Hai cercato: {inputValue.toUpperCase()}</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
            {filteredMovies.map(movie => {
              const imgFlag = movie.original_language ? `https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/24.png` : '/flag.png'
              const fallbackFlag = '/flag.png'

              const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : "https://placeholder.pics/svg/226x360/B9B9B9-959595/040404-D2D2D2/Img%20not%20found"

              const fullStars = Math.round(movie.vote_average / 2)
              const totalStars = 5
              const stars = Array.from({ length: totalStars })

              return (
                /* card */
                <div key={movie.id} className="col">
                  <div className="card border-0">
                    <div className="image-container">
                      <img
                        className="img-card"
                        src={posterUrl}
                        alt={movie.media_type === "movie" ? movie.title || "Non disponibile" : movie.name || "Non disponibile"}
                      />

                      <div className="hover-content">
                        <h5>
                          {movie.media_type === "movie" ? "Film: " : "Serie TV: "}
                          {movie.media_type === "movie" ? movie.title || "Titolo non disponibile" : movie.name || "Nome non disponibile"}
                        </h5>
                        <p>
                          Titolo originale: {movie.media_type === "movie" ? movie.original_title || "Non disponibile" : movie.original_name || "Non disponibile"}
                        </p>
                        <p>Lingua: <img src={imgFlag} alt={movie.original_language || 'Lingua non disponibile'} onError={(e) => e.target.src = fallbackFlag} /></p>
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
                </div>

              )
            })}
          </div>
        </div>
      </main >
    </>
  )
}