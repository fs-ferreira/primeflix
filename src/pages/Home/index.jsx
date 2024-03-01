import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'ec03db76262c9408b4020a4a6b7965c2',
          language: 'pt-br'
        }
      })
      setMovies(response.data.results.slice(0, 10))
      setLoading(false)
    }

    loadMovies()
  }, [])

  if(loading){
    return(
      <div className="w-full flex flex-1 items-center justify-center h-[calc(100vh-64px)]">
        <h2 className="font-medium animate-pulse uppercase text-2xl">Buscando filmes... Aguarde um momento.</h2>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {movies.map(movie => {
          return (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="flex flex-col items-center text-center shadow-zinc-950 shadow-lg hover:scale-105 transition-all"
            >
              {/* <strong className="text-2xl mb-3">{movie.title.toUpperCase()}</strong> */}
              <img 
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
              alt={movie.title}
              className="w-full h-full rounded-t-md"
              />
              <button
                className="ring-zinc-200 ring-offset-1 w-full
                bg-zinc-800 p-4 font-semibold text-lg transition-all
                hover:ring-2 hover:rounded-md hover:scale-105 hover:bg-zinc-700"
              >
                Saiba mais
              </button>
            </Link>
          )
        })}
      </div>

    </div>
  )
}

export default Home;